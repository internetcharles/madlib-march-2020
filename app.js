// dom elements go here

// html element by id goes here
const myInputContainer = document.getElementById('input-container');
const madLibContainer = document.getElementById('madlib-container');
const myButton = document.getElementById('button');
const resetButton = document.getElementById('reset-button');

const input1Span = document.getElementById('input1-span');
const input2Span = document.getElementById('input2-span');
const input3Span = document.getElementById('input3-span');
const input4Span = document.getElementById('input4-span');
const input5Span = document.getElementById('input5-span');
const input6Span = document.getElementById('input6-span');
const input7Span = document.getElementById('input7-span');
const input8Span = document.getElementById('input8-span');
const input9Span = document.getElementById('input9-span');
const input10Span = document.getElementById('input10-span');
const input11Span = document.getElementById('input11-span');
const input12Span = document.getElementById('input12-span');
const input13Span = document.getElementById('input13-span');
const input14Span = document.getElementById('input14-span');
const input15Span = document.getElementById('input15-span');
const input16Span = document.getElementById('input16-span');

// inputs placed here
const inputOne = document.getElementById('input1');
const inputTwo = document.getElementById('input2');
const inputThree = document.getElementById('input3');
const inputFour = document.getElementById('input4');
const inputFive = document.getElementById('input5');
const inputSix = document.getElementById('input6');
const inputSeven = document.getElementById('input7');
const inputEight = document.getElementById('input8');
const inputNine = document.getElementById('input9');
const inputTen = document.getElementById('input10');
const inputEleven = document.getElementById('input11');
const inputTwelve = document.getElementById('input12');
const inputThirteen = document.getElementById('input13');
const inputFourteen = document.getElementById('input14');
const inputFifteen = document.getElementById('input15');
const inputSixteen = document.getElementById('input16');


// function fills span w/ input value
function fillMadLib() {
    const inputOneValue = inputOne.value;
    const inputTwoValue = inputTwo.value;
    const inputThreeValue = inputThree.value;
    const inputFourValue = inputFour.value;
    const inputFiveValue = inputFive.value;
    const inputSixValue = inputSix.value;
    const inputSevenValue = inputSeven.value;
    const inputEightValue = inputEight.value;
    const inputNineValue = inputNine.value;
    const inputTenValue = inputTen.value;
    const inputElevenValue = inputEleven.value;
    const inputTwelveValue = inputTwelve.value;
    const inputThirteenValue = inputThirteen.value;
    const inputFourteenValue = inputFourteen.value;
    const inputFifteenValue = inputFifteen.value;
    const inputSixteenValue = inputSixteen.value;
    console.log(inputOneValue);
    input1Span.textContent = inputOneValue;
    input2Span.textContent = inputTwoValue;
    input3Span.textContent = inputThreeValue;
    input4Span.textContent = inputFourValue;
    input5Span.textContent = inputFiveValue;
    input6Span.textContent = inputSixValue;
    input7Span.textContent = inputSevenValue;
    input8Span.textContent = inputEightValue;
    input9Span.textContent = inputNineValue;
    input10Span.textContent = inputTenValue;
    input11Span.textContent = inputElevenValue;
    input12Span.textContent = inputTwelveValue;
    input13Span.textContent = inputThirteenValue;
    input14Span.textContent = inputFourteenValue;
    input15Span.textContent = inputFifteenValue;
    input16Span.textContent = inputSixteenValue;
    myInputContainer.style.display = 'none';
    madLibContainer.style.display = 'block';
}

//function resets page and inputs

function resetMadLib() {

    myInputContainer.style.display = 'block';
    madLibContainer.style.display = 'none';
    
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('input3').value = '';
    document.getElementById('input4').value = '';
    document.getElementById('input5').value = '';
    document.getElementById('input6').value = '';
    document.getElementById('input7').value = '';
    document.getElementById('input8').value = '';
    document.getElementById('input9').value = '';
    document.getElementById('input10').value = '';
    document.getElementById('input11').value = '';
    document.getElementById('input12').value = '';
    document.getElementById('input13').value = '';
    document.getElementById('input14').value = '';
    document.getElementById('input15').value = '';
    document.getElementById('input16').value = '';
}

// add event listener to the button on the click event
myButton.addEventListener('click', fillMadLib);
resetButton.addEventListener('click', resetMadLib);