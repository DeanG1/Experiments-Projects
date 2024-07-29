let currentImage = 1;
function next(){
    if(currentImage < 3){
        currentImage++;
    }
    else{
        currentImage = 1;
    }
    console.log(currentImage);
    document.querySelector("#img").setAttribute("src", + currentImage + ".jpg");
}