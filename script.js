 Array.prototype.random = function (length) {
       return this[Math.floor((Math.random()*length))];
 }

 // var teams = ['patriots', 'colts', 'jets', 'texans', 'ravens', 'broncos']
 // var chosen_team = teams.random(teams.length)
 // alert(chosen_team)

 const tipo = ['Sustantivo', 'Adjetivo'];
 const numero =['Singular', 'Plural'];
 const caso =['Preposicional', 'Acusativo', 'Dativo', 'Instrumental', 'Genitivo'];
 const genero = ['Masculino', 'Femenino', 'Neutro'];
 // let ejercicio =  [tipo.random(tipo.length), numero.random(numero.length), caso.random(caso.length), genero.random(genero.length)];


 // function pruebaSuerte(){
 // 	alert(`${tipo.random(tipo.length)}, ${numero.random(numero.length)}, ${caso.random(caso.length)}, ${genero.random(genero.length)}`);
 // }

 function pruebaSuerte(){
 	Swal.fire({
 		title:` Caso: ${caso.random(caso.length)}|| Tipo: ${tipo.random(tipo.length)}|| Número: ${numero.random(numero.length)}|| Género: ${genero.random(genero.length)}`,

 })
 	
 } 

 var button = document.getElementsByTagName("button")[0];

 button.addEventListener('click', function(){
 	return pruebaSuerte();
 })



 // Boton // 

 