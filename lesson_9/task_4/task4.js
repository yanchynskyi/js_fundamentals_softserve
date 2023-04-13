/*
На HTML-сторінці є 6 чекбоксів. Напишіть скріпт, 
який після того, як користувач позначив будь-які 3 чекбокси, 
всі чекбокси робить неактивними.
*/

$(document).ready(function () {
  let checkboxes = $('input[type="checkbox"]');
  let checkedCount = 0;

  checkboxes.change(function () {
    if (this.checked) {
      checkedCount++;
    } else {
      checkedCount--;
    }

    if (checkedCount >= 3) {
      checkboxes.prop("disabled", true);
    }
  });
});
