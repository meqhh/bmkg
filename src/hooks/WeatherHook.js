import axios from "axios";

export async function loadWeather() {
    const resProv = await axios.get('/provinsi/api/provinces.json');
    const provList = resProv.data.data;

    const randProv = provList[Math.floor(Math.random() * provList.length)];
    if (!randProv) return null;

    const resKab = await axios.get(`/kabupaten/${randProv.code}.json`);
    const kabList = resKab.data.data;

    const randKab = kabList[Math.floor(Math.random() * kabList.length)];
    if (!randKab) return null;

    const resKec = await axios.get(`/kecamatan/${randKab.code}.json`);
    const kecList = resKec.data.data;

    const randKec = kecList[Math.floor(Math.random() * kecList.length)];
    if (!randKec) return null;

    const resKel = await axios.get(`/kelurahan/${randKec.code}.json`);
    const kelList = resKel.data.data;

    const randKelurahan = kelList[Math.floor(Math.random() * kelList.length)];


    const result = [];
    const resBmkg = await axios.get(`/bmkg/prakiraan-cuaca?adm4=${randKelurahan.code}`);
    const fetchBMKG = resBmkg.data;
    console.log(resBmkg);
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