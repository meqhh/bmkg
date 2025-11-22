import axios from "axios";

export async function weatherKelurahan(kelurahanCode) {
    const resBMKG = await axios.get(`/api-bmkg/prakiraan-cuaca?adm4=${kelurahanCode}`);
    const fetchBMKG = resBMKG.data;
    if (resBMKG && resBMKG.status !== 200) {
        throw new Error("Error To Call BMKG API");
    }
    return fetchBMKG ? fetchBMKG : null;
};

export function windDirectionTranslate(wd) {
    const wdMap = {
        N: "Utara",
        NNE: "Utara-Timur Laut",
        NE: "Timur Laut",
        ENE: "Timur-Timur Laut",
        E: "Timur",
        ESE: "Timur-Tenggara",
        SE: "Tenggara",
        SSE: "Selatan-Tenggara",
        S: "Selatan",
        SSW: "Selatan-Barat Daya",
        SW: "Barat Daya",
        WSW: "Barat-Barat Daya",
        W: "Barat",
        WNW: "Barat-Barat Laut",
        NW: "Barat Laut",
        NNW: "Utara-Barat Laut"
    }
    return wd ? wdMap[wd] : '';
}

export function FormatTanggalDetailCuaca() {
        const bulan = [
            "Januari","Februari","Maret","April","Mei","Juni",
            "Juli","Agustus","September","Oktober","November","Desember"
        ];

        const now = new Date();
        const y = now.getFullYear();

        const start = new Date();
        const end = new Date();
        end.setDate(start.getDate() + 2);

        const s = `${start.getDate()} ${bulan[start.getMonth()]}`;
        const e = `${end.getDate()} ${bulan[end.getMonth()]}`;
        return `${s} - ${e} ${y}`;
    }

export async function loadWeather() {
    const resProv = await axios.get('/api-provinsi/api/provinces.json');
    const provList = resProv.data.data;

    const randProv = provList[Math.floor(Math.random() * provList.length)];
    if (!randProv) return null;

    const resKab = await axios.get(`/api-kabupaten/${randProv.code}.json`);
    const kabList = resKab.data.data;

    const randKab = kabList[Math.floor(Math.random() * kabList.length)];
    if (!randKab) return null;

    const resKec = await axios.get(`/api-kecamatan/${randKab.code}.json`);
    const kecList = resKec.data.data;

    const randKec = kecList[Math.floor(Math.random() * kecList.length)];
    if (!randKec) return null;

    const resKel = await axios.get(`/api-kelurahan/${randKec.code}.json`);
    const kelList = resKel.data.data;

    const randKelurahan = kelList[Math.floor(Math.random() * kelList.length)];


    const result = [];
    const resBmkg = await axios.get(`/api-bmkg/prakiraan-cuaca?adm4=${randKelurahan.code}`);
    const fetchBMKG = resBmkg.data;
    if (resBmkg && resBmkg.status !== 200) {
        throw new Error("Error To Call BMKG API");
    }

    const times = fetchBMKG.data[0].cuaca;
    result.push({
        kelurahan: fetchBMKG.lokasi.desa,
        cuaca: times.flat()
    });

    const lokasiFormat = `${fetchBMKG.lokasi.desa}, ${fetchBMKG.lokasi.kecamatan}, ${fetchBMKG.lokasi.kotkab}`;

    return {
        lokasi: lokasiFormat,
        data: result
    };
};