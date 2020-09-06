
//Targetting input element id to get value from single input element

const inputElementSingle = document.getElementById('input-element-single')
const displayElementSingle = document.getElementById('display-element-single')


inputElementSingle.addEventListener('keyup', function() {
displayElementSingle.textContent = inputElementSingle.value.toLowerCase()
})


//Using event.target.value to get value from single input element

const inputEventSingle = document.getElementById('input-event-single')
const displayEventSingle = document.getElementById('display-event-single')

inputEventSingle.addEventListener('keyup', function(event){
displayEventSingle.textContent = event.target.value.toLowerCase()
})


//Target element id to get input value, multiple input elements
const inputElementFirst = document.getElementById('input-element-first')
const inputElementSecond = document.getElementById('input-element-second')
const displayElementMultiple = document.getElementById('display-element-multiple')

inputElementFirst.addEventListener('keyup', function(){
displayElementMultiple.textContent = inputElementFirst.value.toLowerCase()
})

inputElementSecond.addEventListener('keyup', function(){
displayElementMultiple.textContent = inputElementSecond.value.toLowerCase()
})

//Use event.target.value to get value from multiple input elements
const eventMultipleContainer = document.getElementById('event-multiple-container')
const displayEventMultiple = document.getElementById('display-event-multiple')

eventMultipleContainer.addEventListener('keyup', function(event) {
 displayEventMultiple.textContent = event.target.value.toLowerCase();
})


//Use a form to submit entries
const submitContainerForm = document.getElementById('submit-container')
const inputSubmitFirst = document.getElementById('input-submit-first')
const inputSubmitSecond = document.getElementById('input-submit-second')
const submitButton = document.getElementById('input-button-submit')
const displaySubmit = document.getElementById('display-submit')

function submitForm(event){
    event.preventDefault()
displaySubmit.textContent = `${inputSubmitFirst.value.toLowerCase()}, ${inputSubmitSecond.value.toLowerCase()}`; 
}

submitContainerForm.addEventListener('submit', submitForm);

//Use a button click to submit entries

const inputClickFirst = document.getElementById('input-click-first')
const inputClickSecond = document.getElementById('input-click-second')
const inputButtonClick = document.getElementById('input-button-click')
const displayClick = document.getElementById('display-click')

function submitWithButton(){
displaySubmit.textContent = `${inputClickFirst.value.toLowerCase()}, ${inputClickSecond.value.toLowerCase()}`
}

inputButtonClick.addEventListener('click', submitWithButton);
