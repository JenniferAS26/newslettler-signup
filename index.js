let subscribeButton =  document.querySelector('.form__button');
let dismissButton = document.querySelector('.thanks-section__button')
let principalContainer = document.querySelector('.main-content');
let thanksSectionContainer = document.querySelector('.thanks-section');

thanksSectionContainer.style.display = 'none';

let emailInput = document.querySelector('.form__input');
let emailErrorDiv = document.querySelector('.form__input--error');

emailInput.addEventListener('input', e => {
  if (emailInput.value === '') {
    showError(emailInput, emailErrorDiv, 'Cannot be empty')
  } else {
    showError(emailInput, emailErrorDiv, '', false);
  }
});

subscribeButton.addEventListener('click', e => {
  e.preventDefault();
  verifyFilled(emailInput, emailErrorDiv);
  principalContainer.style.display = 'none';
  thanksSectionContainer.style.display = 'grid';
});

dismissButton.addEventListener('click', () => {
  if (window.innerWidth >= 1440) {
    principalContainer.style.display = 'flex';
  }
  thanksSectionContainer.style.display = 'none';
});

const showError = (divInput, divError, errorMessage, show = true) => {
  if (show) {
    divError.textContent = errorMessage;
    divInput.style.borderColor = 'hsl(4, 100%, 67%)';
  } else {
    divError.textContent = errorMessage;
    divInput.style.borderColor = '#D3D3D3';
  } 
}

const verifyFilled = (divInput, divError) => {
  if (divInput.value.length > 0) {
    showError(divInput, divError, '', false);
  } else {
    showError(divInput, divError, 'This field cannot be empty');
  }
}