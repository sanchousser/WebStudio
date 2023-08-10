function copyToClipboard() {
    const copyText = document.getElementById("copyText");
    const textToCopy = copyText.textContent;

    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand("copy");
    
    document.body.removeChild(textArea);

    const copyMessage = document.getElementById("copyMessage");
    copyMessage.classList.remove("hidden");
    setTimeout(() => {
        copyMessage.classList.add("hidden");
    }, 2000); // Hide the message after 2 seconds (adjust as needed)
}
