const image = document.querySelector(".woah");
const sub = document.querySelector(".submitter")
const text = document.querySelector(".texte")

sub.addEventListener("click", updatebutton);

function updatebutton() {
    let api = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=";
    if (text.value === "") {
        return false;
    } else {
        image.src = api + text.value;
    }
        
}