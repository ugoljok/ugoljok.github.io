app.db = {
	// получение
	get: function(path){
		firebase.database().ref(path).once('value').then(function(snapshot) {
			//если юзер существует в БД
			if(snapshot.val()){
				var user_data = snapshot.val();
				console.log(user_data)
			//иначе добавляем юзера
			}else{
				app.db.set(path, val);
			}
		});
	},
	//запись
	set: function(path, val){
		firebase.database().ref(path).set(val);
		console.log(path, val)
	}
};


