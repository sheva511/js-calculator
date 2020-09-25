const display = document.querySelector('.display');

const digitButtons = document.querySelectorAll('.digits button');
digitButtons.forEach(button => button.addEventListener('click', digitClicked));

function digitClicked(ev) {
   display.value += ev.target.innerText;

}

const operButtons = document.querySelectorAll('.opers button');
operButtons.forEach(button => button.addEventListener('click', operClicked));

function operClicked(ev) {
   display.value += ev.target.innerText;
}

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
   if (eval(display.value) === undefined) {
      equals.value = '0,00';
      display.value = '0,00';
   } if (eval(display.value) === Infinity) {
      equals.value = '0,00';
      display.value = 'Dividing by zero is not allowed';
   }
   display.value = eval(display.value);
});

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
   equals.value = '';
   display.value = '';
})



