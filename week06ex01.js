        function calculate(){
            let firstNumEl = document.querySelector("#firstNum");
            let secondNumEl = document.querySelector("#secondNum");
            let signEl = document.querySelector("#sign");

            let fn = parseFloat(firstNumEl.value);
            let sn = parseFloat(secondNumEl.value);
            let sign = signEl.value;
            let result = '';
            switch(sign){
                case "+":
                    result = fn + sn;
                    break;
                case "-":
                    result = fn - sn;
                    break;
                case "*":
                    result = fn * sn;
                    break;
                case "/":
                    result = fn / sn;
                    break;
            }
            document.querySelector("#result").innerHTML = result;
        }
        function inputNumbers(){
            let a = 5;
            let b = 10; 
            let r = sum(a,b);
            console.log(r);
        }   
        function sum(fNum,sNum){
            let result = fNum + sNum;
            return result();
        }
        inputNumbers();