const contenedoQR = document.getElementById('contenedorQR');

const QR = new QRCode(contenedoQR);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const ArrayQR = [
        Familia = formulario.family.value,
        Pases = formulario.passes.value
    ];
    // console.log("Informacion", ArrayQR);
    QR.makeCode(ArrayQR);
});