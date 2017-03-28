function log (){
	console.log(...arguments);
}

var add_button = document.getElementById('add_goods');
add_button.onsubmit = function(event){
	event.preventDefault(); //предотвратить действие по умолчанию (отправка формы)
	var goods = document.getElementById('add_goods_name').value;
	var price = document.getElementById('add_goods_price').value;
	log(goods, price)
	return false; // при preventDefault
}