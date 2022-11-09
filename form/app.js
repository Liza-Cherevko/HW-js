const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');
const bodyEl = document.body;

signUpBtn.addEventListener('click', function(){
    formBox.classList.add('active');
    bodyEl.classList.add('active')
});
signInBtn.addEventListener('click', function(){
    formBox.classList.remove('active');
    bodyEl.classList.remove('active');
});

