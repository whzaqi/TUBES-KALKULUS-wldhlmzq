function hitungPertidaksamaan2() {
    // Ambil nilai dari input
    const a = parseFloat(document.getElementById('a2').value);
    const b = parseFloat(document.getElementById('b2').value);
    const c = parseFloat(document.getElementById('c2').value);
    const d = parseFloat(document.getElementById('d2').value);
    const op1 = document.getElementById('operator12').value;
    const op2 = document.getElementById('operator22').value;
    
    // Validasi input
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        document.getElementById('validasi2').innerHTML = '<div class="col">'+
            '<div class="card">'+
              '<div class="card-body bg-warning">'+
                'Harap isi kolom yang masih kosong'+
              '</div>'+
            '</div>'+
        '</div>';
        return;
    }
    // Jika b = 0, ini bukan pertidaksamaan linear
    if (b === 0) {
        document.getElementById('validasi2').innerHTML = '<p style="color: red;">Koefisien b tidak boleh nol untuk pertidaksamaan linear.</p>';
        return;
    }
    
    // Hitung batas dari kedua pertidaksamaan
    let batasKiri, batasKanan;

    //// simbol kanan
    // perhitungan operasi pertama
    if (op1 === '>') {
        batasKanan = (a - c) / b;
    } else if (op1 === '>=') {
        batasKanan = (a - c) / b;
    } else {
        batasKiri = (a - c) / b;
    }

    // perhitungan operasi kedua
    if (op2 === '>') {
        batasKiri = (d - c) / b;
    } else if (op2 === '>=') {
        batasKiri = (d - c) / b;
    } else {
        batasKanan = (d - c) / b;
    }

    //// simbol kiri
    // perhitungan batas kanan = a - c / b
    // perhitungan batas kiri = a - c / b
    if (op1 === '<') {
        batasKiri = (a - c) / b;
    } else if (op1 === '<=') {
        batasKiri = (a - c) / b;
    } else {
        batasKanan = (a - c) / b;
    }

    // perhitungan batas kanan = d - c / b
    if (op2 === '<') {
        batasKanan = (d - c) / b;
    } else if (op2 === '<=') {
        batasKanan = (d - c) / b;
    } else {
        batasKiri = (d - c) / b;
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
    document.getElementById('hasil2').innerHTML = `<div class="card-header">HP = ${penyelesaian}</div> ${note}`;
    // document.getElementById('note1').innerHTML = `<p class="card-text">${note}</p>`;
}