let post;
const jsInput = document.querySelector("input");
const jsDiv = document.querySelector("div");

jsInput.value = "What is on your mind?";

function dataToView() {
    jsInput.value = post === undefined ? "What is up?" : post;
    jsDiv.textContent = post;
}

function handlerInput() {
    post = jsInput.value;
    dataToView();
}

function handleClick() {
    jsInput.value = "";
    dataToView();
}
jsInput.oninput = handlerInput;
jsInput.onclick = handleClick;

dataToView();