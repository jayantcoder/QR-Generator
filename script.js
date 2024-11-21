const urlInput = document.getElementById("url-input");
const sizeInput = document.getElementById("qr-size");
const colorInput = document.getElementById("qr-color");
const bgColorInput = document.getElementById("bg-color");
const generateBtn = document.getElementById("generate-btn");
const qrCanvas = document.getElementById("qr-canvas");
const downloadPngBtn = document.getElementById("download-png");

// Generate QR Code
generateBtn.addEventListener("click", () => {
    const url = urlInput.value;
    if (!url) return alert("Please enter a valid URL or text.");

    const qrOptions = {
        text: url,
        width: parseInt(sizeInput.value),
        colorDark: colorInput.value,
        colorLight: bgColorInput.value,
    };

    QRCode.toCanvas(qrCanvas, qrOptions.text, qrOptions, (error) => {
        if (error) console.error(error);
    });
});

// Download QR Code
downloadPngBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "qr-code.png";
    link.href = qrCanvas.toDataURL();
    link.click();
});


