// Contoh: Menambahkan efek saat tombol dihover
document.getElementById('start-button').addEventListener('mouseover', function () {
    this.style.backgroundColor = '#2980b9';
});

document.getElementById('start-button').addEventListener('mouseout', function () {
    this.style.backgroundColor = '#3498db';
});