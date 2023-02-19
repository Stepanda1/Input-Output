const TEXT_SHOW = 'Показать текст';
const TEXT_CLOSE = 'Скрой текст';
const TEXT = 'Остался 1 день до повышения цен на sd.code'

const buttonNode = document.querySelector('.js-button');
const outputNode = document.querySelector('.js-output');
const inputNode = document.querySelector('.js-input');
let isTextShown = false;

function setButtonText(text) {
    buttonNode.textContent = text;
}

function setOutputText(text) {
    outputNode.textContent = text;
}

setButtonText(TEXT_SHOW);

buttonNode.addEventListener('click', () => {
    const text = inputNode.value;

    if (!isTextShown) {
        setButtonText(TEXT_CLOSE)
        setOutputText(text);
    } else {
        setButtonText(TEXT_SHOW);
        setOutputText('');
    }

    isTextShown = !isTextShown;
});
