const upperSet='  ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

// Selectors
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById('total-char')
const upperInput = document.getElementById('upper-case')
const lowerInput = document.getElementById('lower-case')
const numberInput = document.getElementById('numbers')
const symbolInput = document.getElementById('symbols')

const getRandomPassword=(dataset)=>{
    return dataset[Math.floor(Math.random() * dataset.length)]
}

const generatePassword=(password='')=>{
    if(upperInput.checked){
        password+=getRandomPassword(upperSet)
    }
    if(lowerInput.checked){
        password+=getRandomPassword(lowerSet)
    }
    if(numberInput.checked){
        password+=getRandomPassword(numberSet)
    }
    if(symbolInput.checked){
        password+=getRandomPassword(symbolSet)
    }
    if (password.length < totalChar.value) {
        return generatePassword(password)
    }
    
    let passwordValue =truncateString(password,totalChar.value)
    passBox.innerHTML=passwordValue.replace(" ", password[0])
}

document.getElementById('btn').addEventListener('click',
function(){
    generatePassword()
})

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}