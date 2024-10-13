function fecha() {
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, por eso se suma 1
    let yyyy = date.getFullYear();

    //Ternarios que agregan 0 si no lo tiene al inicio
    dd = (dd < 10) ? "0" + dd : dd;
    mm = (mm < 10) ? "0" + mm : mm;

    let fechaFormateada = dd + "/" + mm + "/" + yyyy;
    let fecha = document.querySelector('#fecha');
    fecha.innerHTML = fechaFormateada;
}

fecha();