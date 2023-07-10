
/*
1.	Crea y llama una función que recibe el ancho y el alto de un rectángulo y calcula su superficie.  s = ancho * alto.
2.	Crea y llama las funciones necesarias para recibir la velocidad en Kilómetros y mostrarlas en metros y millas.
3.	por medio de una función calcula la circunferencia de un círculo por medio de la siguiente fórmula c = 2*Math.PI*Radio, también Crea y llama una función que recibe un número y calcula su cubo.

4.	Crea una función donde pases como parámetro un nombre y muéstralo en el navegador; Validar que el dato ingresado no sea un número, de ser así se debe decir en pantalla ingrese un nombre válido. (lo puedes hacer con la función isNaN(), investiga cómo funciona)
5.	Muestra todas las operaciones básicas(suma, resta, multi, división), pidiendo al usuario 2 números por medio de una función. 


Ejercicios con funciones recibiendo el resultado de funciones como parámetro .

6.	Cree un conversor de temperatura, investigando la fórmula para pasar grados de Celsius a Fahrenheit y viceversa, pida al usuario la temperatura a convertir y muestra en pantalla lo siguiente:
●	Si la Temperatura es menos  0°C  o 32°F : Nos congelamos 
●	Si la Temperatura es entre de 5°C a 15°C  o 33°F a 50°F : Esta haciendo frio
●	Si la Temperatura es entre de 16°C a 25°C  o 51°F a 77°F : Está templado el dia
●	Si la Temperatura es más de 26°C  o 78°F : Tiene fiebre o es el apocalipsis.

7.	Calcule el índice de masa muscular de una persona con la siguiente fórmula (IMC=peso/(altura x altura)), pidiendo como datos su altura y peso. imprima en pantalla lo siguiente: 
a.	Si el IMC es por debajo de 18.5 : Bajo peso debe ir al nutricionista
b.	Si el IMC es 18.5—24.9 : Normal
c.	Si el IMC es 25.0—29.9 : Sobrepeso 
d.	Si el IMC es 30.0 o más : Obeso debe ir al nutricionista

8.	 Cree una función que pida el nombre del usuario, y por medio de otra función imprima el nombre y un mensaje que diga Bienvenido + nombre.
9.	 Cree una función que pida el precio de N productos y  por medio de otra función aumente el iva del 19% y diga al usuario el precio total a pagar los productos que compró y el precio de cada uno.
producto 1              = 2.500 
producto 2         	     = 4.500 
producto 3              = 2000 
subtotal                     10.000
Total A pagar   12.200

10.	 Cree una función que pida la fecha actual y por medio de otra función calcule cuántos días y semanas faltan para terminar el año.
11.	Cree un listado de compras, con función que pida el número de productos, nombre y valor del producto por medio de otra función imprima la información digitadas.
1 -  arroz $ 2.500 x 3 = 7.500
2 - aceite $ 4.500 x 1 = 4.500
3 - azúcar $ 2000 x 2 = 4.000
—-----------------------------------
		Total Mercado    16.000

*/
function area(high,width){
    return high*width
}

function kilometers(kilometers){
    let mille=kilometers*1.60934
    let meters=kilometers*1000
    return [mille, meters]
}

function circunferencia(radio) {
    return 2*Math.PI*radio
}

function cubo(largo) {
    return largo*largo*largo
}

function validarnombre(nombre) {
    for (const letra of nombre) {
        if(!isNaN(letra)){
            return false
        }
    }
    return true
}

function operaciones(num1,num2) {
    let message=`Suma: ${num1+num2}\nResta: ${num1-num2}\nMultiplicacion: ${num1*num2}\nDivision: ${num1/num2}`
    return message
}

function imprimir(texto) {
    alert(texto)
}

function temp(tipo) {
    let cal
    let cant
    if (tipo=="c") {    
        cant=prompt("Digite la cantidad de celsius a transformar: ")
        cal=(cant)*(9/5)+32
        return cal
    } else if(tipo=="f"){
        cant=prompt("Digite la cantidad de farenheit a transformar: ")
        cal=(cant-32)*(5/9)
        return cal
    }
    else {
        imprimir("Digito una opcion erronea")
        return false
    }
       
   
}

function caltemp(temp,tipo){
    console.log(temp, tipo)
    if (tipo=="f") {
        if (temp<5) {
            imprimir("Nos congelamos")
        } else if (temp>=5 && temp<15) {
            imprimir("Esta haciendo frio")
        } else if (temp>=15 && temp<25) {
            imprimir("Está templado el dia")
        } else {
            imprimir("Tiene fiebre o es el apocalipsis.")
        } 
    } 
    else if (tipo=="c") {
        if (temp<32) {
            imprimir("Nos congelamos")
        } else if (temp>=33 && temp<50) {
            imprimir("Esta haciendo frio")
        } else if (temp>=51 && temp<77) {
            imprimir("Está templado el dia")
        } else {
            imprimir("Tiene fiebre o es el apocalipsis.")
        } 
    } 
}

function imc(peso,altura) {
    let imc=peso/(altura*altura)     
    return imc
}

function calimc(imc){
    if (imc<18.5) {
        imprimir("Bajo peso debe ir al nutricionista")
    } else if (imc>18.5 && imc<24.9) {
        imprimir("Normal")
    } else if (imc>24.9 && imc<29.9) {
        imprimir("Sobrepeso")
    } else {
        imprimir("Obeso debe ir al nutricionista")
    }  
}

function bienvenido() {
    let nombre=prompt("Digite su nombre: ")
    return nombre
}

function iva(precio) {
    return precio+(precio*0.19)
}

function productosiva() {
    let precio
    let iva_1
    let sum=0
    let mensaje=""
    let cont=1
    while (true) {
        precio=Number(prompt("Digite el precio del produccto o 0 para salir: "))
        if(precio=="0"){
            break
        }
        iva_1=iva(precio)
        mensaje=mensaje+`Producto ${cont} = ${iva_1}\n`
        cont++
        sum=sum+iva_1
    }
    return [mensaje, sum]
}

function restantes(){
    let anio =new Date()
    let final=new Date(anio.getFullYear(),11,31)
    return [anio,final]
}

function calrestantes(fechas){
    let cal=(fechas[1]-fechas[0])/(1000*60*60*24)
    return `Faltan ${Math.floor(cal/7)} semanas y ${Math.ceil(cal%7)} dias`
}

function productos() {
    let nombre
    let precio
    let cant
    let sum=0
    let mensaje=""
    let cont=1
    while (true) {
        nombre=prompt("Digite el nombre del produccto: ")
        if(nombre=="0"){
            break
        }
        precio=Number(prompt("Digite el precio del produccto: "))
        cant=Number(prompt("Digite la cantidad de productos: "))
        mensaje=mensaje+`${cont} - ${nombre} $ ${precio} x ${cant} = ${precio*cant}\n`
        cont++
        sum=sum+precio*cant    
    }
    return [mensaje, sum]
}

let op
let option=-1
while (option<=0 || option>11) {
    option=Number(prompt("Digite la opcion: \n\n1.Rectangulo\n2.Kilometros a metros\n3.Circunferencia\n4.Validar nombre\n5.Operaciones basicas\n6.Temperatura\n7.IMC\n8.Bienvenida\n9.Producto-iva\n10.Dias y semanas para termianr el año\n11.Producto-nombre-precio"))
}
switch (option) {
    case 1:
        let high=prompt("Digite la altura del rectangulo: ")
        let width=prompt("Digite el ancho del rectangulo: ")
        op=area(high,width)
        alert(`Area: ${op} unidades`)
        break;
    case 2:
        let kilometer=prompt("Digite los kilometros a convertir: ")
        op=kilometers(kilometer)
        alert(`Kilometros: ${kilometer}\nMetros: ${op[1]}\nMillas: ${op[0]}`)
        break;

    case 3:
        let radiocir=Number(prompt("Digite el radio de una circunfencia: "))
        let largocubo=Number(prompt("Digite el largo de un cubo: "))
        alert(`La cincunferencia mide: ${circunferencia(radiocir)}\nEl cubo tiene un volumen de: ${cubo(largocubo)}`)
        break;

    case 4:
        let name=prompt("Digite un nombre: ")
        if(validarnombre(name)==false){
            alert("Digite un nombre sin numeros")
        }
        else{
            document.write(name)
        }
        break;

    case 5:
        let num1=Number(prompt("Digite un numero: "))
        let num2=Number(prompt("Digite un numero: "))
        let op=operaciones(num1,num2)
        alert(op)
        break;

    case 6:
        let choice=prompt("Digite f para farenheit o c para celsius: ")
        let canttemp=temp(choice)
        console.log(canttemp)
        if(canttemp!=false || canttemp==0){
            caltemp(canttemp,choice)
        }
        break;

    case 7:
        let peso=prompt("Digite su peso: ")
        let altura=prompt("Digite su altura: ")
        let userimc=imc(peso,altura)
        calimc(userimc)
        break;
    case 8:
        let usuario=bienvenido()
        imprimir(`Bienvenido ${usuario}`)
        break;
    case 9:
        let productos_1=productosiva()
        let total_1=productos_1[1]
        let mensaje=productos_1[0]
        mensaje=mensaje+`Total a pagar: ${total_1}`
        imprimir(mensaje)
        break;
    case 10:
        let fechasrestantes=restantes(10,7,2023)
        let calfechas=calrestantes(fechasrestantes)
        imprimir(calfechas)
        break;
    case 11:
        let callfunction=productos()
        let total=callfunction[1]
        let mensaje_1=callfunction[0]
        mensaje_1=mensaje_1+`|	Total Mercado ${total} $`
        imprimir(mensaje_1)
        break;
    default:

        break;
}
