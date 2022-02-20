const checkBoxElem = document.querySelector('.task-status');
checkBoxElem.addEventListener('change', getCheckbox);
function getCheckbox(event) {
  if (event.target.checked) {
    console.log(true);
  } else {
    console.log(false);
  }
}
