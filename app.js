//Menú lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){ //si está oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//Oculto el menú una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false
    }
}

//Barritas de una barra identificada por id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//Sellecciono todas las barras para luego manipularlas
let html = document.getElementById("html");
crearBarra(html);

let css = document.getElementById("css");
crearBarra(css);

let php = document.getElementById("php");
crearBarra(php);

let javascript = document.getElementById("javascript");
crearBarra(javascript);

//Cantidad de barritas que se van a ir pintando
//Cada posición pertenece a un elemento
//Comienza en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1];
//Variable para saber si se ejecuta la animación
let entro = false

//Función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalCss = setInterval(function(){
            pintarBarra(css, 13, 1, intervalCss);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(php, 9, 2, intervalPhp);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 11, 3, intervalJavascript);
        },100);
    }
}

//LLeno una barra
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//Scroll del mouse para aplicar animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}