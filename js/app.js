const contenedoQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario')
const QrCode = new QRCode(contenedoQR);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const texts = {
        content: formulario.texts.value
    }
    QrCode.makeCode(texts.content);
});