const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const cat = document.querySelector("#cat");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please Give a Valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span> BMI is: ${BMI}</span>`;

    if (BMI < 18.6) {
      cat.innerHTML = "Under-Weigth";
    } else if (BMI > 18.6 && BMI < 24.9) {
      cat.innerHTML = "Normal Range";
    } else {
      cat.innerHTML = "Over-Weight";
    }
  }
});
