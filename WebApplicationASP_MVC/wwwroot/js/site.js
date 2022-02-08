// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function AddRow(tableID) {
	var tbl = document.getElementById(tableID);
	var rws = tbl.rows;
	var lst = rws[rws.length - 1];
	var cls = lst.cells.length;

	var ro = tbl.insertRow(-1);
	for (var j = 0; j < cls; j++) {
		var ce = ro.insertCell(-1);
		ce.innerHTML = 'Пустая ячейка';
	}

}
function DeleteRow(tableID) {
	let table = document.querySelector(tableID);
	table.deleteRow(-1);
}
async function FilterOn() {
	var table = document.getElementById('tableGames');
	var scoreSelect = document.getElementById('selectScore');
	var genreSelect = document.getElementById('selectGenre');

	var firstParam = true;
	var paramStr = "?$filter=";
	if (scoreSelect.value != "all") {
		paramStr += "score ge " + scoreSelect.value;
		firstParam = false;
	}
	if (genreSelect.value != "all")
		if (firstParam)
			paramStr += "contains(typeGame, '" + genreSelect.value + "')";
		else
			paramStr += " and contains(typeGame, '" + genreSelect.value + "')";

	let obj = new Object();

	obj = await fetch("./api/games" + paramStr).then((res) => {
		//console.log(res);
		if (res.status !== 200) {
			console.log('Status Code: ' +
				res.status);
			return;
		}
		return res.json();
	})
	.catch(function (err) {
		console.log('Fetch Error :-S', err);
	});

	/*console.log(obj);
	
	console.log(obj[0].id);
	console.log(obj[0].name);
	console.log(obj[0].score);
	console.log(obj[0].platforms);
	console.log(obj[0].typeGame);*/

	//table.remove();
	table.innerHTML = "";
	var row = table.insertRow(-1);
	var cell = row.insertCell(-1);
	cell.innerHTML = "id";
	var cell = row.insertCell(-1);
	cell.innerHTML = "Название";
	var cell = row.insertCell(-1);
	cell.innerHTML = "Оценка";
	var cell = row.insertCell(-1);
	cell.innerHTML = "Платформы";
	var cell = row.insertCell(-1);
	cell.innerHTML = "Жанр";

	for (var i = 0; i < obj.length; i++) {
		var row = table.insertRow(-1);
		var cell = row.insertCell(-1);
		cell.innerHTML = obj[i].id;
		var cell = row.insertCell(-1);
		cell.innerHTML = obj[i].name;
		var cell = row.insertCell(-1);
		cell.innerHTML = obj[i].score;
		var cell = row.insertCell(-1);
		cell.innerHTML = obj[i].platforms;
		var cell = row.insertCell(-1);
		cell.innerHTML = obj[i].typeGame;
	}


}

async function FilterOff() {
	var table = document.getElementById('tableGames');
	var scoreSelect = document.getElementById('selectScore');
	var genreSelect = document.getElementById('selectGenre');

	scoreSelect.value = "all";
	genreSelect.value = "all";

	obj = await fetch("./api/games").then((res) => {
		//console.log(res);
		if (res.status !== 200) {
			console.log('Status Code: ' +
				res.status);
			return;
		}
		return res.json();
	})
		.catch(function (err) {
			console.log('Fetch Error :-S', err);
		});

	table.innerHTML = "";
	var row = table.insertRow(-1);
	var cell = row.insertCell(-1);
	cell.innerHTML = "id";
	var cell = row.insertCell(-1);
	cell.innerHTML = "Название";
	var cell = row.insertCell(-1);
	cell.innerHTML = "Оценка";
	var cell = row.insertCell(-1);
	cell.innerHTML = "Платформы";
	var cell = row.insertCell(-1);
	cell.innerHTML = "Жанр";

	for (var i = 0; i < obj.length; i++) {
		var row = table.insertRow(-1);
		var cell = row.insertCell(-1);
		cell.innerHTML = obj[i].id;
		var cell = row.insertCell(-1);
		cell.innerHTML = obj[i].name;
		var cell = row.insertCell(-1);
		cell.innerHTML = obj[i].score;
		var cell = row.insertCell(-1);
		cell.innerHTML = obj[i].platforms;
		var cell = row.insertCell(-1);
		cell.innerHTML = obj[i].typeGame;
	}
}
