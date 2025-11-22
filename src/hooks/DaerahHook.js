import axios from "axios";

export async function loadKabupaten(provinsiCode) {
    const resKab = await axios.get(`/api-kabupaten/${provinsiCode}.json`);
    const kabList = resKab.data;
    return kabList ? kabList : null;
};

export async function loadKecamata(kabupatenCode) {
    const resKec = await axios.get(`/api-kecamatan/${kabupatenCode}.json`);
    const kecList = resKec.data;
    return kecList ? kecList : null;
}

export async function loadKelurahan(kecamatanCode) {
    const resKec = await axios.get(`/api-kelurahan/${kecamatanCode}.json`);
    const kecList = resKec.data;
    return kecList ? kecList : null;
}