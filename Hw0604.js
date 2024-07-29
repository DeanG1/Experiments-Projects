
function calcSalary() {
    let salary = document.querySelector("#salary");
    let cash = parseFloat(salary.value);
    let calculate = cash - cash * 0.23;
    document.querySelector("#results").innerHTML = "Your salary is: " + calculate;
}