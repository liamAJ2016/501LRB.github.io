const image = document.querySelector(".woah");
const sub = document.querySelector(".submitter")
const text = document.querySelector(".texte")
let api = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";

sub.addEventListener("click", updatebutton);

function updatebutton() {
    if (text.value === "") {
        return false;
    } else {
        image.src = api + text.value;
    }
        
}