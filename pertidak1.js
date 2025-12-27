function hitungPertidaksamaan1() {
    // Ambil nilai dari input
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const d = parseFloat(document.getElementById('d').value);
    const op1 = document.getElementById('operator1').value;
    const op2 = document.getElementById('operator2').value;
    
    // Validasi input
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        document.getElementById('validasi1').innerHTML = '<p style="color: red;">Harap masukkan semua koefisien dengan benar.</p>';
        return;
    }
    // Jika b = 0, ini bukan pertidaksamaan linear
    if (b === 0) {
        document.getElementById('validasi1').innerHTML = '<p style="color: red;">Koefisien b tidak boleh nol untuk pertidaksamaan linear.</p>';
        return;
    }
    
    // Hitung batas dari kedua pertidaksamaan
    let batasKiri, batasKanan;

    //// simbol kanan
    // perhitungan batas kanan = a - c / b
    if (op1 === '>') {
        batasKiri = (a - b) / c;
    } else if (op1 === '>=') {
        batasKiri = (a - b) / c;
    } else {
        batasKanan = (a - b) / c;
    }
    // perhitungan batas kiri = d - c / b
    if (op2 === '>') {
        batasKanan = (d - b) / c;
    } else if (op2 === '>=') {
        batasKanan = (d - b) / c;
    } else {
        batasKiri = (d - b) / c;
    }

    //// simbol kiri
    // perhitungan batas kanan = a - c / b
    if (op1 === '<') {
        batasKanan = (a - b) / c;
    } else if (op1 === '<=') {
        batasKanan = (a - b) / c;
    } else {
        batasKiri = (a - b) / c;
    }

    // perhitungan batas kiri = d - c / b
    if (op2 === '<') {
        batasKiri = (d - b) / c;
    } else if (op2 === '<=') {
        batasKiri = (d - b) / c;
    } else {
        batasKanan = (d - b) / c;
    }

    // Gabungkan interval
    let penyelesaian = '';
    if (batasKiri > batasKanan) {
        penyelesaian = `Tidak ada penyelesaian`;
    } else if (batasKiri === batasKanan) {
        penyelesaian = `x = ${batasKiri}`;
    } else {
        penyelesaian = `[${batasKiri} , ${batasKanan}]`;
    }

    // note
    let note = '<div class="card-body text-success">'+
                    '<p class="card-text">'+
                        'Jika hasil berupa desimal maka ubahlah ke pecahan <br>'+
                        'contoh (Desimal 1,5) diubah menjadi (Pecahan 15/10) <br>'+
                        'di perkecil menjadi (3/2)'+
                    '</p>'+
                '</div>';

    // Tampilkan hasil
    document.getElementById('hasil1').innerHTML = `<div class="card-header">HP = ${penyelesaian}</div> ${note}`;
    // document.getElementById('note1').innerHTML = `<p class="card-text">${note}</p>`;
}