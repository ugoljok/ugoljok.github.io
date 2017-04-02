var app={};
app.uid= null //идентификатор пользователя
//тщчка инициализации приложения
app.init = function (user){
	app.uid = user.uid; //пишем идентификатор в глобальный объект
	//получаем данные пользователя и выводим на экран
	document.getElementById('user').innerHTML = '<img src="' +user.photo+ '" width="50"><br>' +user.name;
	
}