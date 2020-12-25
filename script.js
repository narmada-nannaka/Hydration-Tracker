const plusBtn = document.getElementById('plusBtn');
const countText = document.getElementById('count');
const litresText = document.getElementById('litres');
const percentage = document.getElementById('percentage');
const remainedCtr = document.getElementById('remained');
const textCup = document.querySelector('.textCup');
const resetCup = document.querySelector('.resetCups');
const resetBtn = document.getElementById('reset');

let glass = 0;
const maxGlasses = 8;
let remaining = 2000;
const glassSize = 250;
let resetFlag = 0;

litresText.innerHTML = `${remaining/1000}lts`;


plusBtn.addEventListener('click', ()=> {
    //increment the glass count
    countText.value = ++glass;

    displayGlass(glass, resetFlag);
});

function displayGlass(glass) {

    if(resetFlag !== 1) {   
        percentage.innerHTML = `${(glass/maxGlasses)*100}%`;
        percentage.style.height = `${(glass/maxGlasses)*330}px`;

        //disable button after 8
        if (glass === maxGlasses) {
            
            plusBtn.disabled = true;

            remainedCtr.classList.add('inactive');

            textCup.classList.add('inactive');
            resetCup.classList.remove('inactive');

        } else {
            litresText.innerHTML = `${(remaining - (glass*glassSize))/1000}lts`;
        }
    } else {
        countText.value = 0;
        plusBtn.disabled = false;
        remainedCtr.classList.remove('inactive');
        percentage.innerHTML = '';
        percentage.style.height = '0px';
        litresText.innerHTML = `${remaining/1000}lts`;
        resetFlag = 0;
    }

}

reset.addEventListener('click', ()=> {

    glass = 0;
    resetFlag = 1;
    displayGlass(glass, resetFlag);

    textCup.classList.remove('inactive');
    resetCup.classList.add('inactive');

});