const passFirst = document.querySelector('#password1');
const passSecond = document.querySelector('#password2');

passSecond.addEventListener('input', (e) => {
  if (e.target.type == 'password') {
    if (passFirst.value !== passSecond.value) {
      passFirst.style = "border: 1px solid red";
      passSecond.style = "border: 1px solid red";
    } else {
      passFirst.style = "border: 1px solid green";
      passSecond.style = "border: 1px solid green";
    }
  }
});