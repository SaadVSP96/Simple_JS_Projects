const button = document.querySelector("button");
const body = document.querySelector("body");

button.addEventListener("click", bgColorChanger);

function bgColorChanger() {
    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);
    console.log("R=>", R, " G=>", G, " B=>", B);
    body.style.backgroundColor = ` rgb(${R}, ${G}, ${B})`;
}
