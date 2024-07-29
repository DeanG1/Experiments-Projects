function createTable(){
    let html = '<table>';
    for(let i=0; i < 5; i++){
        html += '<tr>';
        html += '<td>';
        html += `<input oninput="inputGrade('grade${i}',this)" class="form-control" type="number" min="2" max="6"/>`;
        html += '</td>';
        html += '<td style="width:100px;">';
        html += `<span id="grade${i}"></span>`;
        html += '</td>';
        html += '</tr>';
    }
    html += '<table>';
    document.querySelector('#table-container').innerHTML = html;
}

function inputGrade(id, inputElement){
    let el = document.getElementById(id);
    let grade = inputElement.value;
    if(grade == 2){
        el.innerHTML = "Slab";
    }
    else if(grade == 3){
        el.innerHTML = "Sreden";
    }
    else if(grade == 4){
        el.innerHTML = "Dobur";
    }
    else if(grade == 5){
        el.innerHTML = "Mnogo dobur";
    }
    else if(grade == 6){
        el.innerHTML = "Excellent";
    }
    else{
        el.innerHTML == "Greshka";
    }
    
}
createTable();