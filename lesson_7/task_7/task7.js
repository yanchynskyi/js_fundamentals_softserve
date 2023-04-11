/*
На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому – назви міст. 
Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - 
в правому випадаючому  списку з'являлися міста цієї країни. 
Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести назву обраної країни і місто.
Код HTML-сторінки:
<select name="country" id="country">
        <option value="ger">Germany</option>
        <option value="usa">USA</option>
        <option value="ukr">Ukraine</option>
</select>
                    
<select name="cities" id="cities"></select>
<p></p>

https://user-images.githubusercontent.com/9075641/228463508-6225f4ee-7ad2-4130-b7fc-d97a2d236693.pn
*/

document
  .getElementById("country")
  .addEventListener("change", populateDropdown2);

function populateDropdown2() {
  // Clear eistng options
  document.getElementById("cities").innerHTML = "";

  // Get selected value of dropdown1
  const selectedValue = document.getElementById("country").value;

  // Add options to dropdown2 based on selected value of dropdown1
  switch (selectedValue) {
    case "ger":
      document.getElementById("cities").innerHTML =
        '<option value="option1-1">Berlin</option><option value="option1-2">Frankfurt</option>';
      break;
    case "usa":
      document.getElementById("cities").innerHTML =
        '<option value="option2-1">New-York</option><option value="option2-2">Chicago</option>';
      break;
    case "ukr":
      document.getElementById("cities").innerHTML =
        '<option value="option3-1">Lviv</option><option value="option3-2">Kyiv</option>';
      break;
    default:
      document.getElementById("cities").innerHTML =
        '<option value="">Please select an option from the first dropdown</option>';
      break;
  }
}

populateDropdown2();
