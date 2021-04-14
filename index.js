const displayField = document.querySelector('.display-field')

function howStrongIsThisWord(string){
    let alphabet = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let numbers = string.split('').map(letter=>{
        return alphabet.indexOf(letter)
    })
    return numbers.reduce((accumulator,currentvalue)=> accumulator + currentvalue)
}
let word = 'bird'

function displayAnswer(answer){
    displayField.textContent = `${answer}`
}
displayAnswer(howStrongIsThisWord(word))