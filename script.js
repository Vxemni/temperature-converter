const tempOne = document.querySelector('.tempOne');
const tempTwo = document.querySelector('.tempTwo');
const temperature = document.querySelector('#temperature');
const result = document.querySelector('.result');
const conv = document.querySelector('.convBtn');
const change = document.querySelector('.changeBtn');
const reset = document.querySelector('.resetBtn');

let celsjusz
let fahrenheit

//Celsjusz na Fahrenheit	°F = (°C × 1.8) + 32
//Fahrenheit na Celsjusz	°C = (°F − 32) /1.8


const swap = () => {
    if(tempOne.textContent === '°C') {
        tempOne.textContent = '°F'
        tempTwo.textContent = '°C'
        result.textContent = ''
    } else {
        tempOne.textContent = '°C'
        tempTwo.textContent = '°F'
        result.textContent = ''
    }
}

const celFahr = () => {
    fahrenheit = (temperature.value * 1.8) + 32
    result.textContent = `${temperature.value}°C to ${fahrenheit.toFixed(1)}°F`
    temperature.value = ''
}

const fahrCel = () => {
    celsjusz = (temperature.value - 32) / 1.8
    result.textContent = `${temperature.value}°F to ${celsjusz.toFixed(1)}°C`
    temperature.value = ''
}

const convert = () => {
    if(temperature.value !== '') {
        if(tempOne.textContent === '°C') {
            celFahr()
        } else {
            fahrCel()
        }
    } else {
        result.textContent = 'podaj inną wartość'
    }
    
}

const clean = () => {
    temperature.value = ''
    result.textContent = ''
}


change.addEventListener('click', swap)
conv.addEventListener('click', convert)
reset.addEventListener('click', clean)