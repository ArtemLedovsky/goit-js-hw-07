const inputText = document.querySelector('#name-input')
const outputText = document.querySelector('#name-output')


inputText.addEventListener("input", handleInput)

function handleInput(event) {
    if (event.currentTarget.value.trim() === '') {
        outputText.textContent = "Anonymous"
    } else{outputText.textContent = event.currentTarget.value.trim()}
    
}