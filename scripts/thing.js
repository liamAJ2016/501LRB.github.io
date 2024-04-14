const image = document.querySelector(".woah");
const sub = document.querySelector(".submitter")
const text = document.querySelector(".texte")
const copy = document.querySelector(".copyfromclip")
let api = "https://api.qrserver.com/v1/create-qr-code/?format=svg";
let backupapi = "https://quickchart.io/qr?text="
let apisize = 200;
let usebackup = false; //declares if it should use the backup api or not

try { //checks if the main api is okay and switches to the backup api if it fails to connect
    fetch(api);
} catch (error) {
    console.error(error);
    usebackup = true
}

sub.addEventListener("click", updatebutton);

async function updatebutton() {
    if (text.value === "" | text.value === " ") { //check if the text value is empty so id doesnt send random empty requests
        return false;
    } else {
        if (usebackup === true) { //checks if it should use the backup api or not
            if (text.value.length >= 100) {//if the text length is over 100 it makes the size larger to prevent scanning issues
                apisize = 400;
                image.src = backupapi + encodeURIComponent(text.value) + "&format=svg" + "&margin=0" + "&ecLevel=L" + "&size=" + apisize;
                console.log("text is over 50 characters and im using backup")
            } else {//sticks to normal size if its not over 100 characters
                apisize = 200;
                image.src = backupapi + encodeURIComponent(text.value) + "&format=svg" + "&margin=0" + "&ecLevel=L" + "&size=" + apisize;
                console.log("text is under 50 characters and im using backup")
            }  
        } else { //uses main api if its working 
            if (text.value.length >= 100) {//if the text length is over 100 it makes the size larger to prevent scanning issues
                apisize = 400;
                image.src = api + "&size=" + apisize + "x" + apisize + "&margin=0" + "&ecc=L" + "&data=" + encodeURIComponent(text.value);
                console.log("text is over 50 characters")
            } else {//sticks to normal size if its not over 100 characters
                apisize = 200;
                image.src = api + "&size=" + apisize + "x" + apisize + "&margin=0" + "&ecc=L" + "&data=" + encodeURIComponent(text.value);
                console.log("text is under 50 characters")
            }  
        }
    }    
}
