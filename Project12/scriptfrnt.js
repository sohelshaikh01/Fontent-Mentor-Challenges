// Trying to implement onclick shodow effect at below line.

const adviceId = document.querySelector('#adviceId');
const adviceText = document.querySelector('#adviceText');
const btn = document.querySelector('#btn');


function getAdvice() {
    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json(); 
        // console.log(response.json()); 
    }).then(adviceData => {
        const adviceNum = adviceData.slip.id;
        const advice = adviceData.slip.advice;

        adviceId.textContent = adviceNum;
        adviceText.innerHTML = `<p>${advice}</p>`
    }).catch(error => {
        console.log(error);
    });
}

btn.addEventListener('click',function(){
    getAdvice();
}) // Run the function after clicking the button.

window.onload = () => {
    getAdvice;
} // Run function already to get data while opening that page.


// let para = document.getElementById('btn');

// para.addEventListener('onlclick', function run(){
//     para.style.box-shadow = '5px 5px 5px cyan';
// });






