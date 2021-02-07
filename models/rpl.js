const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rplSchema = new Schema({
    nama: {
        type: String,
        required: true,
        max: 60
    },
    absen: {
        type: Number,
        required: true,
        max: 36
    },
    kelas: {
        type: Number,
        required: true,
        max: 12
    },
    jurusan: {
        type: String,
        required: true,
        max: 4,
        default: "RPL"
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const RPL = mongoose.model('Siswa',rplSchema);

module.exports = RPL;

