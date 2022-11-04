// grab elements/generate vars
const climateInput = document.getElementById('climate-input');
const architectureInput = document.getElementById('architecture-input');
const timeInput = document.getElementById('time-input');
const climateImg = document.getElementById('climate-img');
const architectureImg = document.getElementById('architecture-img');
const timeImg = document.getElementById('time-img');
const submitButton = document.getElementById('submit-button');
const inputBox = document.getElementById('input-box');
const sloganDisplay = document.getElementById('slogan-display');
const changesArchitecture = document.getElementById('changes-architecture');
const changesClimate = document.getElementById('changes-climate');
const changesTime = document.getElementById('changes-time');
// define vars
const sloganArray = [];
let climateChanges = 0;
let architectureChanges = 0;
let timeChanges = 0;

// event listeners for image changes
climateInput.addEventListener('change', (e) => {
    const value = e.target.value;
    climateImg.src = `./assets/${value}-climate.png`;
    // check if the placeholder element exists, and if it does, remove it
    if (document.querySelector('#climate-input option[value=placeholder]')) {
        document.querySelector('#climate-input option[value=placeholder]').remove();
    }
    // increment change variable
    climateChanges++;
    // update display
    displayStats();
});
architectureInput.addEventListener('change', (e) => {
    const value = e.target.value;
    architectureImg.src = `./assets/${value}-architecture.png`;
    if (document.querySelector('#architecture-input option[value=placeholder]')) {
        document.querySelector('#architecture-input option[value=placeholder]').remove();
    }
    architectureChanges++;
    displayStats();
});
timeInput.addEventListener('change', (e) => {
    const value = e.target.value;
    timeImg.src = `./assets/${value}-time.png`;
    if (document.querySelector('#time-input option[value=placeholder]')) {
        document.querySelector('#time-input option[value=placeholder]').remove();
    }
    timeChanges++;
    displayStats();
});

function displayStats() {
    // check if the text should be plural
    if (architectureChanges === 1) {
        changesArchitecture.textContent = `You changed the architecture ${architectureChanges} time.`;
    } else {
        changesArchitecture.textContent = `You changed the architecture ${architectureChanges} times.`;
    }

    if (climateChanges === 0) {
        changesClimate.textContent = `You changed the climate 0 times.`;
    } else if (climateChanges === 1) {
        changesClimate.textContent = `You changed the climate 1 time.`;
    } else {
        // scold them for not recycling
        changesClimate.textContent = `You changed the climate ${climateChanges} times (you monster).`;
    }
    if (timeChanges === 1) {
        changesTime.textContent = `You changed the time period ${timeChanges} time.`;
    } else {
        changesTime.textContent = `You changed the time period ${timeChanges} times.`;
    }
}
// call the function once to populate on page load
displayStats();

function displaySlogans() {
    sloganDisplay.textContent = '';
    for (const item of sloganArray) {
        const newElement = document.createElement('p');
        newElement.textContent = item;
        sloganDisplay.append(newElement);
    }
    inputBox.value = '';
}

// event listener for submit button
submitButton.addEventListener('click', () => {
    const userInput = inputBox.value;
    sloganArray.push(userInput);
    displaySlogans();
});
