function hitungintegral1(params) {

    const var1 = parseFloat(document.getElementById('var1').value);
    const varx1 = parseFloat(document.getElementById('varx1').value);
    const var2 = parseFloat(document.getElementById('var2').value);

    // Validasi input
    if (isNaN(var1) || isNaN(varx1) || isNaN(var2)) {
        document.getElementById('validasi-integral').innerHTML = '<div class="col">'+
            '<div class="card">'+
              '<div class="card-body bg-warning">'+
                'Harap isi kolom yang masih kosong'+
              '</div>'+
            '</div>'+
        '</div>';
        return;
    }

    let hasilper2, hasilpangkat1;

    hasilper2 = varx1 + 1;
    hasilpangkat1 = varx1 + 1;
    





    //tampilkan hasil
    document.getElementById('hasil-integral').innerHTML = '<div class="card-body text-success">'+
                '<div class="row row-cols-10 p-4">'+
                  '<div class="col">'+
                    '<div class="row justify-content-center">'+
                      '<div class="col-1">'+
                        '<label for="" class="" style="padding-left: 1px; margin-bottom: -10px;">'+
                          `<span>${var1}</span>`+
                          '<span>x</span>'+
                          `<span><sup> ${varx1} + 1 </sup></span>`+
                        '</label>'+
                        '<div class="col">'+
                          '<hr>'+
                        '</div>'+
                        `<label for="" class="">${varx1} + 1</label>`+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>+</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label for="" class="" style="padding-left: 1px; margin-bottom: -10px;">'+
                          `<span>${var2}</span>`+
                          '<span>x</span>'+
                        '</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>+</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>C</label>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<hr style="margin-top: 10px;">'+
                '</div>'+
                '<div class="row row-cols-10">'+
                '<div class="col">'+
                    '<div class="row justify-content-center">'+
                      '<div class="col-1">'+
                        '<label for="" class="" style="padding-left: 1px; margin-bottom: -10px;">'+
                          `<span>${var1}</span>`+
                          '<span>x</span>'+
                          `<span><sup>${hasilpangkat1}</sup></span>`+
                        '</label>'+
                        '<div class="col">'+
                          '<hr>'+
                        '</div>'+
                        `<label for="" class="">${hasilper2}</label>`+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>+</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label for="" class="" style="padding-left: 1px; margin-bottom: -10px;">'+
                          `<span>${var2}</span>`+
                          '<span>x</span>'+
                        '</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>+</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>C</label>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<hr style="margin-top: 10px;">'+
                '</div>'+
              '</div>';


}

function hitungintegral2(params) {

    const var1 = parseFloat(document.getElementById('var12').value);
    const varx1 = parseFloat(document.getElementById('varx12').value);
    const var2 = parseFloat(document.getElementById('var22').value);
    const varx2 = parseFloat(document.getElementById('varx22').value);
    const var3 = parseFloat(document.getElementById('var3').value);


    // Validasi input
    if (isNaN(var1) || isNaN(varx1) || isNaN(var2) || isNaN(varx2) || isNaN(var3)) {
        document.getElementById('validasi-integral').innerHTML = '<div class="col">'+
            '<div class="card">'+
              '<div class="card-body bg-warning">'+
                'Harap isi kolom yang masih kosong'+
              '</div>'+
            '</div>'+
        '</div>';
        return;
    }

    let hasilper2, hasilpangkat1;

    hasilper2 = varx1 + 1;
    hasilpangkat1 = varx1 + 1;
    hasilper22 = varx2 + 1;
    hasilpangkat12 = varx2 + 1;
    





    //tampilkan hasil
    document.getElementById('hasil-integral2').innerHTML = '<div class="card-body text-success">'+
                '<div class="row row-cols-10 p-4">'+
                  '<div class="col">'+
                    '<div class="row justify-content-center">'+
                      '<div class="col-1">'+
                        '<label for="" class="" style="padding-left: 1px; margin-bottom: -10px;">'+
                          `<span>${var1}</span>`+
                          '<span>x</span>'+
                          `<span><sup> ${varx1} + 1 </sup></span>`+
                        '</label>'+
                        '<div class="col">'+
                          '<hr>'+
                        '</div>'+
                        `<label for="" class="">${varx1} + 1</label>`+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>+</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label for="" class="" style="padding-left: 1px; margin-bottom: -10px;">'+
                          `<span>${var2}</span>`+
                          '<span>x</span>'+
                          `<span><sup> ${varx2} + 1 </sup></span>`+
                        '</label>'+
                        '<div class="col">'+
                          '<hr>'+
                        '</div>'+
                        `<label for="" class="">${varx2} + 1</label>`+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>+</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label for="" class="" style="padding-left: 1px; margin-bottom: -10px;">'+
                          `<span>${var3}</span>`+
                          '<span>x</span>'+
                        '</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>+</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>C</label>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<hr style="margin-top: 10px;">'+
                '</div>'+
                '<div class="row row-cols-10">'+
                '<div class="col">'+
                    '<div class="row justify-content-center">'+
                      '<div class="col-1">'+
                        '<label for="" class="" style="padding-left: 1px; margin-bottom: -10px;">'+
                          `<span>${var1}</span>`+
                          '<span>x</span>'+
                          `<span><sup>${hasilpangkat1}</sup></span>`+
                        '</label>'+
                        '<div class="col">'+
                          '<hr>'+
                        '</div>'+
                        `<label for="" class="">${hasilper2}</label>`+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>+</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label for="" class="" style="padding-left: 1px; margin-bottom: -10px;">'+
                          `<span>${var2}</span>`+
                          '<span>x</span>'+
                          `<span><sup>${hasilpangkat12}</sup></span>`+
                        '</label>'+
                        '<div class="col">'+
                          '<hr>'+
                        '</div>'+
                        `<label for="" class="">${hasilper22}</label>`+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>+</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label for="" class="" style="padding-left: 1px; margin-bottom: -10px;">'+
                          `<span>${var3}</span>`+
                          '<span>x</span>'+
                        '</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>+</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>C</label>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<hr style="margin-top: 10px;">'+
                '</div>'+
              '</div>';


}

function hitungintegral3(params) {

    const var1 = parseFloat(document.getElementById('var13').value);
    const varx1 = parseFloat(document.getElementById('varx13').value);
    const var2 = parseFloat(document.getElementById('var23').value);
    const varx2 = parseFloat(document.getElementById('varx23').value);
    const var3 = parseFloat(document.getElementById('var33').value);
    const varx3 = parseFloat(document.getElementById('varx33').value);
    const var4 = parseFloat(document.getElementById('var4').value);

    // Validasi input
    if (isNaN(var1) || isNaN(varx1) || isNaN(var2) || isNaN(varx2) || isNaN(var3) || isNaN(varx3) || isNaN(var4)) {
        document.getElementById('validasi-integral').innerHTML = '<div class="col">'+
            '<div class="card">'+
              '<div class="card-body bg-warning">'+
                'Harap isi kolom yang masih kosong'+
              '</div>'+
            '</div>'+
        '</div>';
        return;
    }

    let hasilper2, hasilpangkat1;

    hasilper2 = varx1 + 1;
    hasilpangkat1 = varx1 + 1;
    hasilper22 = varx2 + 1;
    hasilpangkat12 = varx2 + 1;
    hasilper23 = varx3 + 1;
    hasilpangkat13 = varx3 + 1;
    





    //tampilkan hasil
    document.getElementById('hasil-integral3').innerHTML = '<div class="card-body text-success">'+
                '<div class="row row-cols-10 p-4">'+
                  '<div class="col">'+
                    '<div class="row justify-content-center">'+
                      '<div class="col-1">'+
                        '<label for="" class="" style="padding-left: 1px; margin-bottom: -10px;">'+
                          `<span>${var1}</span>`+
                          '<span>x</span>'+
                          `<span><sup> ${varx1} + 1 </sup></span>`+
                        '</label>'+
                        '<div class="col">'+
                          '<hr>'+
                        '</div>'+
                        `<label for="" class="">${varx1} + 1</label>`+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>+</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label for="" class="" style="padding-left: 1px; margin-bottom: -10px;">'+
                          `<span>${var2}</span>`+
                          '<span>x</span>'+
                          `<span><sup> ${varx2} + 1 </sup></span>`+
                        '</label>'+
                        '<div class="col">'+
                          '<hr>'+
                        '</div>'+
                        `<label for="" class="">${varx2} + 1</label>`+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>+</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label for="" class="" style="padding-left: 1px; margin-bottom: -10px;">'+
                          `<span>${var3}</span>`+
                          '<span>x</span>'+
                          `<span><sup> ${varx3} + 1 </sup></span>`+
                        '</label>'+
                        '<div class="col">'+
                          '<hr>'+
                        '</div>'+
                        `<label for="" class="">${varx3} + 1</label>`+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>+</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label for="" class="" style="padding-left: 1px; margin-bottom: -10px;">'+
                          `<span>${var4}</span>`+
                          '<span>x</span>'+
                        '</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>+</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>C</label>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<hr style="margin-top: 10px;">'+
                '</div>'+
                '<div class="row row-cols-10">'+
                '<div class="col">'+
                    '<div class="row justify-content-center">'+
                      '<div class="col-1">'+
                        '<label for="" class="" style="padding-left: 1px; margin-bottom: -10px;">'+
                          `<span>${var1}</span>`+
                          '<span>x</span>'+
                          `<span><sup>${hasilpangkat1}</sup></span>`+
                        '</label>'+
                        '<div class="col">'+
                          '<hr>'+
                        '</div>'+
                        `<label for="" class="">${hasilper2}</label>`+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>+</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label for="" class="" style="padding-left: 1px; margin-bottom: -10px;">'+
                          `<span>${var2}</span>`+
                          '<span>x</span>'+
                          `<span><sup>${hasilpangkat12}</sup></span>`+
                        '</label>'+
                        '<div class="col">'+
                          '<hr>'+
                        '</div>'+
                        `<label for="" class="">${hasilper22}</label>`+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>+</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label for="" class="" style="padding-left: 1px; margin-bottom: -10px;">'+
                          `<span>${var3}</span>`+
                          '<span>x</span>'+
                          `<span><sup>${hasilpangkat13}</sup></span>`+
                        '</label>'+
                        '<div class="col">'+
                          '<hr>'+
                        '</div>'+
                        `<label for="" class="">${hasilper23}</label>`+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>+</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label for="" class="" style="padding-left: 1px; margin-bottom: -10px;">'+
                          `<span>${var4}</span>`+
                          '<span>x</span>'+
                        '</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>+</label>'+
                      '</div>'+
                      '<div class="col-1">'+
                        '<label>C</label>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<hr style="margin-top: 10px;">'+
                '</div>'+
              '</div>';


}