/*const image = document.querySelector(".woah");
const sub = document.querySelector(".submitter");
const text = document.querySelector(".texte");
const copy = document.querySelector(".copyfromclip");
usebackup = "false"
let api = "https://api.qrserver.com/v1/create-qr-code/?format=png";
let backupapi = "https://quickchart.io/qr?text=";
let apisize = 200;


async function checkforbackup() {
    try {
    const apirespon = await fetch(api + "&size=" + apisize + "x" + apisize + "&margin=0" + "&ecc=H" + "&data=test");
    apirespon;
    if (apirespon.ok) {
        usebackup = "false";
        console.log("main api functional");
        console.log(apirespon.status);
    } else {
      usebackup = "true";
      console.warn("main api failed resorting to backup");
    }  
    } catch (error) {
        usebackup = "true";
        console.warn("main api failed resorting to backup, if statment didnt catch error");
    }
}

checkforbackup()

sub.addEventListener("click", updatebutton);

async function updatebutton() {
    if (text.value === "" | text.value === " ") { 
        return false;
    } else {
        if (usebackup === "true") { 
            if (text.value.length >= 100) {
                apisize = 400;
                image.src = backupapi + encodeURIComponent(text.value) + "&format=png" + "&margin=0" + "&ecLevel=H" + "&size=" + apisize;
                console.log("text is over 50 characters and im using backup")
            } else {
                apisize = 200;
                image.src = backupapi + encodeURIComponent(text.value) + "&format=png" + "&margin=0" + "&ecLevel=H" + "&size=" + apisize;
                console.log("text is under 50 characters and im using backup")
            }  
        } else { 
            if (text.value.length >= 100) {
                apisize = 400;
                image.src = api + "&size=" + apisize + "x" + apisize + "&margin=0" + "&ecc=H" + "&data=" + encodeURIComponent(text.value);
                console.log("text is over 50 characters")
            } else {
                apisize = 200;
                image.src = api + "&size=" + apisize + "x" + apisize + "&margin=0" + "&ecc=H" + "&data=" + encodeURIComponent(text.value);
                console.log("text is under 50 characters")
            }  
        }
    }    
}
*/
