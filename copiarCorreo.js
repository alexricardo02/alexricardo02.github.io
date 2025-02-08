function copiarCorreo() {
    const correo = "brinckmannalex@gmail.com";
    
    // Copia el correo al portapapeles
    navigator.clipboard.writeText(correo).then(() => {
      // Mostrar mensaje de confirmación
      const mensaje = document.getElementById("mensaje-copiado");
      mensaje.style.display = "block";

      // Ocultar el mensaje después de 3 segundos
      setTimeout(() => {
        mensaje.style.display = "none";
      }, 3000);
    }).catch(err => {
      console.error("Error al copiar el correo: ", err);
    });
}