var app={};
app.uid= null //идентификатор пользователя
//тщчка инициализации приложения
app.init = function (user){
	app.uid = user.uid; //пишем идентификатор в глобальный объект
	//данные пользователя
	var user_data = {
		uid: user.uid, //id
		name: user.displayName,
		photo: user.photoURL,
		email: user.email,
		lastVisit: new Date().getTime()	// время последнего захода	
	}
	
	
	var res = app.db.get('users/'+app.uid+'/data', user_data); //получаем данные пользователя
	console.log(res)
	//document.getElementById('user').innerHTML = '<img src="' +user.photoURL+ '"> '+user.displayName;
	
}