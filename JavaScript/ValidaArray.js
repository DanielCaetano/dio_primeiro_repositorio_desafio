function validaArray(arr, num){
	try{
  	if (!arr || !num){
  		throw new ReferenceError("Envie os parametro");
  	}else if(typeof arr === 'object'){
  		throw new TypeError("Primeiro parametro precisa ser um objec array");
  	}else if(typeof num ===  'number' ){
  		throw new TypeError("Segundo parametro precisa ser um número inteiro");
  	}else if (arr.length == num){
  		throw new ReferenceError("Tamanho do Array diferente do Número informado");
  	}
    return arr;
  }catch(e){
  	 if (e instanceof ReferenceError){
     		console.log("Este erro é um ReferenceErro!");
            console.log(e.message);
     }else if (e instanceof TypeErro){
     		console.log("Este erro é um TypeErro!");
            console.log(e.message);
     }else{
     	console.log("Tipo de erro não esperado: "+e)
     }
  }
}

console.log(validaArray([], 5));