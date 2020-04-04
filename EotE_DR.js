var Results = [
["b", "b", "aa", "a", "sa", "s"],
["d", "s", "s", "ss", "a", "a", "sa", "aa"],
["c", "s", "s", "ss", "ss", "a", "sa", "sa", "sa", "aa", "aa", "x"],
["b", "b", "f", "f", "t", "t"],
["d", "f", "ff", "t", "t", "t", "tt", "ft"],
["c", "f", "f", "ff", "ff", "t", "t", "ft", "ft", "tt", "tt", "y"],
["z", "z", "z", "z", "z", "z", "zz", "Z", "Z", "ZZ", "ZZ", "ZZ"],
]


function NumDiceChanged(RowTag) {
  var elements = document.getElementById(RowTag).children;
  var inp = elements.item(2).children.item(0);
  console.log (RowTag + " " + inp.value);
  
  elements.item(3).innerHTML = "";
  var i;
  var text = "";
  for (i = 0; i < inp.value; i++) {
    text += elements.item(1).innerHTML + " ";
  }

  elements.item(3).innerHTML = text;
  elements.item(3).style.cssText = elements.item(1).style.cssText;
}

function Roll() {
	var Rows = document.getElementById("table").children.item(0).children;
	console.log (Rows.item(0).id);
	
	for (var row of Rows) {
		RollRow(row);
	}
	
	//totalRows();
}

function RollRow(row) {
	var cells = row.children;

	var text = ""
	var numDice = cells.item(2).children.item(0);
	for (i = 0; i < numDice.value; i++) {
		var ttext = RollSingleDice(row.rowIndex) + " ";
		console.log ("Row:" + row.id + " die:" + i + " roll:" + ttext);
		text += ttext;
	}
	
	cells.item(3).innerHTML = text;
	cells.item(3).style.cssText = cells.item(1).style.cssText;
}

function RollSingleDice(index)
{
	var sides = Results[index].length;
	var result = Math.floor(Math.random() * sides);
	console.log("Result: " + result);
	return Results[index][result];
}
	