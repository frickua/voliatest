
window.onload = function init() {
	// Init click eventlistener on add position btn
	document.getElementsByClassName('row fotter')[0].children[0].onclick = btnAddClick;
	// Init click eventListener on remove action on every existing row
	var actions = document.getElementsByTagName('fieldset')[0].getElementsByClassName('column column-actions');
	for (var i = 0; i < actions.length; i++) {
		console.log(actions[i].children[0]);
		actions[i].children[0].onclick = function(event) {removePosition(event);};
	}
};

function Position(name, node, price, count) {
	this.name = name;
	this.node = node;
	this.price = price;
	this.count = count;
}

var positions = new Array(
		  new Position('Aнанас', 'Фрукты', 125, 15),
		  new Position('Яблоко', 'Фрукты', 90, 7),
		  new Position('Картофель', 'Овощи', 90, 7),
		  new Position('Персик', 'Фрукты', 240, 3),
		  new Position('Банан', 'Фрукты', 90, 7),
		  new Position('Капуста', 'Овощи', 90, 7),
		  new Position('Морковь', 'Овощи', 70, 10));
var addCount = 0;

function btnAddClick() {
	if (addCount < positions.length) {
		// TODO: user should be able to choose what he wants to add to the shop cart:)
		// Now, we make it a choice for him.
		var p = positions[addCount++];
		var fSet = document.getElementsByTagName('fieldset')[0];

		newRowHTML =
				  '<div class="row">'
				  + '	<div class=\"column column-name\">' + p.name + '</div>'
				  + '	<div class=\"column column-cat\">'
				  + '		<dl>'
				  + '			<dt><a href="#">Овощи и фрукты</a> &gt; </dt>'
				  + '			<dd><a href="#">' + p.node + '</a></dd>'
				  + '		</dl>'
				  + '	</div>'
				  + '	<div class="column column-price"><span>' + p.price + '</span><span> грн.</span></div>'
				  + '	<div class="column column-count">'
				  + '		<input style="margin-top: -5px; text-align: center" title="Количество" type="number" min="1" value="' + p.count + '" />'
				  + '	</div>'
				  + '	<div class="column column-actions">'
				  + '		<a onclick="removePosition(event)" href="#" title="Удалить товар из корзины">Удалить товар</a>'
				  + '	</div>'
				  + '</div>';
		// Bad practice, hastily patch
		fSet.innerHTML = fSet.innerHTML + newRowHTML;
	} else {
		alert('Позиций больше нет!:(');
	}
}

function removePosition(event) {
	event = event || window.event;
	//TODO: some element check
	event.srcElement.parentElement.parentElement.remove(); //may be parent.removeChild will be preffered
}