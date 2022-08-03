document.querySelector('#signin').addEventListener("click",function()
{
    document.querySelector(".loginDiv").style.visibility="visible";
});
document.querySelector(".loginDiv .close-btn").addEventListener("click", function()
    {
        document.querySelector(".loginDiv").style.visibility="hidden"
    });

const cars = ["slavia.jpg", "virtus.jpg", "venue.jpg", "tigor.jpg", "scorpio.jpg"];
function next(src)
{
    let curr = document.querySelector("#image").src;
    let modified = curr.replace("http://127.0.0.1:5500/", "");
    let index = cars.indexOf(modified);
    let nextIndex;
    if(index==4)
    {
        nextIndex = 0;
    }
    else{
        nextIndex = index+1;
    }
    
    let path = "http://127.0.0.1:5500/"+cars[nextIndex];
    document.querySelector("#image").setAttribute("src",path);
    switch(nextIndex)
    {
        case 0:document.querySelector(".imgcaption").innerHTML = "Skoda Slavia";
        break;
        case 1:document.querySelector(".imgcaption").innerHTML = "Volkswagen Virtus";
        break;
        case 2:document.querySelector(".imgcaption").innerHTML = "Hyundai Venue";
        break;
        case 3:document.querySelector(".imgcaption").innerHTML = "Tata Tigor EV";
        break;
        case 4:document.querySelector(".imgcaption").innerHTML = "Mahindra Scorpio-n";
        break;
    }
    
}

function prev(src)
{
    let curr = document.querySelector("#image").src;
    let modified = curr.replace("http://127.0.0.1:5500/", "");
    let index = cars.indexOf(modified);
    let nextIndex;
    if(index==0)
    {
        nextIndex = 0;
    }
    else{
        nextIndex = index-1;
    }
    
    let path = "http://127.0.0.1:5500/"+cars[nextIndex];
    document.querySelector("#image").setAttribute("src",path);
    switch(nextIndex)
    {
        case 0:document.querySelector(".imgcaption").innerHTML = "Skoda Slavia";
        break;
        case 1:document.querySelector(".imgcaption").innerHTML = "Volkswagen Virtus";
        break;
        case 2:document.querySelector(".imgcaption").innerHTML = "Hyundai Venue";
        break;
        case 3:document.querySelector(".imgcaption").innerHTML = "Tata Tigor EV";
        break;
        case 4:document.querySelector(".imgcaption").innerHTML = "Mahindra Scorpio-n";
        break;
    }
}