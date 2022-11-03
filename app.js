// grab elements/generate vars
const climateInput = document.getElementById('climate-input');
const architectureInput = document.getElementById('architecture-input');
const timeInput = document.getElementById('time-input');
const climateImg = document.getElementById('climate-img');
const architectureImg = document.getElementById('architecture-img');
const timeImg = document.getElementById('time-img');

// event listeners for image changes
climateInput.addEventListener('change', (e) => {
    const value = e.target.value;
    climateImg.src = `./assets/${value}-climate.png`;
});
architectureInput.addEventListener('change', (e) => {
    const value = e.target.value;
    architectureImg.src = `./assets/${value}-architecture.png`;
});
timeInput.addEventListener('change', (e) => {
    const value = e.target.value;
    timeImg.src = `./assets/${value}-time.png`;
});

// update image function

// event listener for submit button
