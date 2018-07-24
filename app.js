function insertNumber(angka) {
    document.getElementById("tampil").value += angka;
}

function operasi() {
    var olah = document.getElementById("tampil").value;
    document.getElementById("tampil").value = eval(olah);
}

function reset() {
    document.getElementById("tampil").value = "";
}