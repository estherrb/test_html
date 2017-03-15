function test(){
	//alert("Hola");
    for (i = 0; i < 5; i++) {
     document.getElementById("texto1").innerHTML+="<p class='img-roja'>Soy el nuevo texto "+ i+ "</p>";
    
    }
   
    
}
function test2(){
	//alert("Hola");
     document.getElementById("texto2").innerHTML+="<p class='img-verde'>Soy el texto2</p>";
    }
function fecha(){
	var fechahoy=new Date();
	document.getElementById("demo").innerHTML = fechahoy;
}