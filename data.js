const nama = "Riza aminudin";
let usia  = 20;
 

 let biodata = document.getElementById('biodata');

 function generateBiodata ()  {
 	let generasi;

    if (usia > 10 && usia < 18) {
        generasi = "generasi remaja"

    }  else if (usia < 18 && < 30) {
        generasi = "generasi dewasa"
    } else if (usia > =30) {
        generasi = "generasi tua";
    } else if (usia > = 2 && < 10 ) {
        generasi = " generasi anak anak";
    }else  {
        generasi = "generasi bayi";
    }
    return biodata.innerHTML = generasi;
 };

 consol.log (nama);
 consol.log(usia)

 generasiBiodata();