start();

function start() {
	var buttonCalcular = document.getElementById('calcular');
	buttonCalcular.onclick = function() {
		calc();
	};
}

function calc() {
	var sumJoao = sumValuesFromInput('nota1-1', 'nota1-2', 'nota1-3', 'nota1-4');
	var sumMaria = sumValuesFromInput('nota2-1', 'nota2-2', 'nota2-3', 'nota2-4');
	var sumJose = sumValuesFromInput('nota3-1', 'nota3-2', 'nota3-3', 'nota3-4');
	
	document.getElementById('final-1').value = sumJoao;
	document.getElementById('final-2').value = sumMaria;
	document.getElementById('final-3').value = sumJose;
	
	document.getElementById('media-1').value = sumJoao / 4;
	document.getElementById('media-2').value = sumMaria / 4;
	document.getElementById('media-3').value = sumJose / 4;
	
	localStorage.setItem('joao', sumJoao);
	localStorage.setItem('maria', sumMaria);
	localStorage.setItem('jose', sumJose);
}

function sumValuesFromInput(input1ID, input2ID, input3ID, input4ID) {
	var input1 = document.getElementById(input1ID);
	var input2 = document.getElementById(input2ID);
	var input3 = document.getElementById(input3ID);
	var input4 = document.getElementById(input4ID);
	
	input1 = parseInt(input1.value, 10);
	input2 = parseInt(input2.value, 10);
	input3 = parseInt(input3.value, 10);
	input4 = parseInt(input4.value, 10);
	
	return input1 + input2 + input3 + input4;
}