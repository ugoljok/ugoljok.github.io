var app={};
app.uid= null //идентификатор пользователя
//тщчка инициализации приложения
app.init = function (user){
	document.getElementById('user').innerHTML = '<img src="' +user.photoURL+ '"> '+user.displayName;
	
	
}