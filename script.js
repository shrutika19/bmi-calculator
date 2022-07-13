const btn = document.getElementById("calculateBtn");

btn.addEventListener('click', () => {
    const height = document.getElementById("heightInput").value;
    const weight = document.getElementById("weightInput").value;
    const result1 = document.getElementById("result1Tag");
    const result2 = document.getElementById("result2Tag");

    if (height === '' || (height < 0)) {
        result1.innerHTML = "Enter a valid height!";
    } else if (weight === '' || (weight < 0)) {
        result1.innerHTML = "Enter a valid weight!";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result1.innerHTML = `${bmi}`;

        if (bmi < 18.6) {
            result2.innerHTML = "Under Weight!";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            result2.innerHTML = "Normal Weight!";
        } else {
            result2.innerHTML = "Over Weight!";
        }
    }
});