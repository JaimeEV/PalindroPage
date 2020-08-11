var texto = document.getElementById("texto_palindromo")
var boton = document.getElementById("boton_enviar")
boton.addEventListener("click", esPalindromo)

texto.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        esPalindromo();
}
})






function esPalindromo (){
    var frase = texto.value
    var frase = frase.toLowerCase() //limpia el texto
    frase = frase.replace(/[…”'“’!¡¿?.,;:]/g, 'sIgNoDePuNtUaCiOn')
    frase = frase.replace(/sIgNoDePuNtUaCiOn/g,'')
    frase = frase.replace(/á/g,"a")
    frase = frase.replace(/é/g,"e")
    frase = frase.replace(/í/g,"i")
    frase = frase.replace(/ó/g,"o")
    frase = frase.replace(/ú/g,"u")
    
    frase = frase.replace(/ /g,"")
    
    var numeroDeLetrasDeFrase = frase.length-1
    var arraySeverla = []

    if (numeroDeLetrasDeFrase <= 0){
        return  swal({
            title: 'Mmmm!!!🙃 ',
            text: 'Intenta con un poco de letras o números',
            icon: 'info',
            button: "Ok! Lo volveré a intentar ",
          });   

    }
    
    for (i=numeroDeLetrasDeFrase; i >= 0; i--){ //hace push de derecha a izquierda
        var letras = frase.charAt(i)
        arraySeverla.push(letras)
    }
    
    
    frase = frase.split("") //comprueba si es palíndromo
    for (i=0 ; i <= numeroDeLetrasDeFrase; i++) {
        if (!(frase[i] === arraySeverla[i])) {
        return  swal({
                title: 'Uppps!!! 😱',
                text: 'No es un palíndromo',
                icon: 'error',
                button: "Otra vez! ",
              });


            
        }
    }
    return  swal({
        title: 'Yeeii!!! 🤩',
        text: 'Si es un palíndromo',
        icon: 'success',
        button: "Genial! ",
      });   
}









// function pruebaClick() {
//     alert(`ok ${texto.value}`)
// }


// var palabra = 'casa', frase = 'HOLA MUNDO', conjunto = [1234,567]

// var palabraEnMayusculas = palabra.toUpperCase()
// var fraseEnMinusculas = frase.toLowerCase()
// var primeraLetraDePalabra = palabra.charAt(0)
// var primeraLetraDeFrase = frase.charAt(0)
// var ultimaLetraDePalabra = palabra.charAt(palabra.length-1)
// var ultimaLetraDeFrase = frase.charAt(frase.length-1)
// var numeroDeLetrasDePalabra = palabra.length
// var numeroDeLetrasDeFrase = frase.length
// var quitarEspaciosEnBlancoFrase = frase.trim() //solo quita a los lados
// var separarLasLetrasDeFrase = frase.split("")

// // En array
// var severlA = conjunto.reverse()



