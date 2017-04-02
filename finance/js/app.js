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
	
	//получаем данные пользователя и выводим на экран
app.db.get('users/'+app.uid+'/data', function(result){
	log(result)
	document.getElementById('user').innerHTML = '<img src="' +result.photoURL+ '"><br>' +result.name;
	app.db.set('users/'+app.uid+'/data/lastVisit', new Date().getTime())
}); 
	

	
}