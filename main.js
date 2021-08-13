canvas=document.getElementById("Canvas");
pencil=canvas.getContext("2d");

pencil.beginPath();
pencil.strokeStyle="aqua";
pencil.lineWidth=4;
pencil.arc(200,100,40,0,360);
pencil.stroke();

canvas.addEventListener("mousedown", move);
function move(e){
 shape=document.getElementById("shape").value ;
 Color=document.getElementById("color").value ;
 Width=document.getElementById("width").value ;

 mouse_x=e.clientX-canvas.offsetLeft;
 mouse_y=e.clientY-canvas.offsetTop;

if(shape =="circle" || shape =="CIRCLE" || shape =="Circle"){
    pencil.beginPath();
    pencil.strokeStyle=Color;
    pencil.lineWidth=Width;
    pencil.arc(mouse_x,mouse_y,40,0,360);
    pencil.stroke();

}
if(shape == "Rectangle" || shape == "rectangle" || shape == "RECTANGLE"){
pencil.beginPath();
pencil.strokeStyle=Color;
pencil.lineWidth=Width;
pencil.rect(mouse_x,mouse_y,200,50);
pencil.stroke();
}
if(shape == "Square" || shape == "SQUARE" || shape == "square"){
pencil.beginPath();
pencil.strokeStyle=Color;
pencil.lineWidth=Width;
pencil.rect(mouse_x,mouse_y,100,100);
pencil.stroke();
}

}
function clearArea(){
    pencil.clearRect(0,0,pencil.canvas.width,pencil.canvas.height);
}