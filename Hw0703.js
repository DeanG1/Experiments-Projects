var frm = document.getElementById("form");
frm.onsubmit=function(){
    var num = document.getElementById("natural").value;
    var result = document.getElementById("result");
    var i,sum = 0;
    for(i=1; i <= num; i++){
        sum += i;
    }
    result.innerHTML = "Final sum is:" +  sum;
    return false;
}