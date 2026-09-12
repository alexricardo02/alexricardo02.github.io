let copyTimeout;

function copiarCorreo() {
    const correo = "brinckmannalex@gmail.com";
    const mensaje = document.getElementById("mensaje-copiado");

    navigator.clipboard.writeText(correo).then(() => {
        if (!mensaje) return;

        mensaje.classList.add("visible");

        if (copyTimeout) {
            clearTimeout(copyTimeout);
        }

        copyTimeout = setTimeout(() => {
            mensaje.classList.remove("visible");
        }, 3000);
    }).catch(err => {
        console.error("Error al copiar el correo: ", err);
    });
}