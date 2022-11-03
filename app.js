// grab elements/generate vars
const climateInput = document.getElementById('climate-input');
const architectureInput = document.getElementById('architecture-input');
const timeInput = document.getElementById('time-input');
const climateImg = document.getElementById('climate-img');
const architectureImg = document.getElementById('architecture-img');
const timeImg = document.getElementById('time-img');
const submitButton = document.getElementById('submit-button');
const sloganDisplay = document.getElementById('slogan-display');
const sloganArray = [];
const inputBox = document.getElementById('input-box');

// event listeners for image changes
climateInput.addEventListener('change', (e) => {
    const value = e.target.value;
    climateImg.src = `./assets/${value}-climate.png`;
    // check if the placeholder element exists, and if it does, remove it
    if (document.querySelector('#climate-input option[value=placeholder]')) {
        document.querySelector('#climate-input option[value=placeholder]').remove();
    }
});
architectureInput.addEventListener('change', (e) => {
    const value = e.target.value;
    architectureImg.src = `./assets/${value}-architecture.png`;
    if (document.querySelector('#architecture-input option[value=placeholder]')) {
        document.querySelector('#architecture-input option[value=placeholder]').remove();
    }
});
timeInput.addEventListener('change', (e) => {
    const value = e.target.value;
    timeImg.src = `./assets/${value}-time.png`;
    if (document.querySelector('#time-input option[value=placeholder]')) {
        document.querySelector('#time-input option[value=placeholder]').remove();
    }
});

// event listener for submit button
submitButton.addEventListener('click', () => {
    sloganDisplay.textContent = '';
    const userInput = inputBox.value;
    sloganArray.push(userInput);
    for (let item of sloganArray) {
        const newElement = document.createElement('p');
        newElement.textContent = item;
        sloganDisplay.append(newElement);
    }
    inputBox.value = '';
});
