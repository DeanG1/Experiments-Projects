function check(){
    let value = document.querySelector("#userInput").value;
    let result = document.querySelector("#result");
    value = parseInt(value);
    if(value <= 10 && value >=1)
    {
        //There is other logic for solving the task including math formula and another variable.
        if(value == 2 || value == 3 || value == 5 || value == 7)
        {
            alert("The number is Prime!");
        }
        else
        {
            alert("The number is not Prime!");
        }
    }
}