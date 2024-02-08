
const getInfo = async()=>{
	
let aprobados = document.querySelector(".num-aprobados")
let desaprobados = document.querySelector(".num-desaprobados")

try {
resultado = await axios ("informacion.txt")


aprobados.innerHTML = resultado.data.aprobados;
desaprobados.innerHTML = resultado.data.desaprobados;

}  catch (e) {
	aprobados.innerHTML = "la api fallo";
	desaprobados.innerHTML = "la api fallo";

}

}


const getAge = async()=>{
	let edad = document.querySelector(".edad")


try{
	resultado = await axios ("informacion.txt")
	edad.innerHTML = resultado.data.edad

}catch (e){
	edad.innerHTML = "la API fallo";
}
}

document.getElementById("getInfo").addEventListener("click",getInfo);
document.getElementById("getAge").addEventListener("click",getAge);

