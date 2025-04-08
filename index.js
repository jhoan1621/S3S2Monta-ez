function cuotaCalcu(){

    let apuesta = parseInt(document.getElementById("apuesta").value);
    let cuota = parseFloat(document.getElementById("cuota").value);
  

    const bono = 0.05; 
  
    let total;

    if (cuota > 3.0) {
      total = apuesta * cuota * (1 + bono);
    } else {
      total = apuesta * cuota;
    }
  
    document.getElementById("apuestaResult").innerHTML = "La ganancia de la apuesta hecha sera de: "+total;
  };
  