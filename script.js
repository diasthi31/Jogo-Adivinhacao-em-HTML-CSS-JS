const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const buttonTry = document.querySelector("#buttonTry");
const buttonReset = document.querySelector("#buttonReset");
const randomNumber = Math.round(Math.random() * 10);
let attempts = 1;

buttonTry.addEventListener('click', handleTryClick);
buttonReset.addEventListener('click', handleResetClcik);

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}
function handleTryClick(event) {
    event.preventDefault();
    const inputNumber = document.querySelector("#inputNumber");
    if(Number(inputNumber.value) === randomNumber) {
        toggleScreen();
        screen2.querySelector("h2").innerText = `Você acertou em ${attempts} tentativas!`;
    }
    inputNumber.value = "";
    attempts++;
}

function handleResetClcik() {
    toggleScreen();
    attempts = 1;
}