const inputName = document.querySelector('#name-input')
const outputName = document.querySelector('#name-output')
inputName.addEventListener('input', (ev) => {
    const name = inputName.value.trim();
    outputName.textContent = name || "Anonymous"
})
