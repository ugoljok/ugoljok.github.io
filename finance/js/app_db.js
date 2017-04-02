app.db = {
	// получение
	get: function(path, val){
		firebase.database().ref(path).once('value').then(function(snapshot) {
			//если юзер существует в БД
			if(snapshot.val()){
				
				app.db.set(path+'/lastVisit', new Date().getTime());
				
				console.log(snapshot.val())
			//иначе добавляем юзера
			}else{
				app.db.set(path, val);
				app.db.get(path,val);
			}
		});
	},
	//запись
	set: function(path, val){
		firebase.database().ref(path).set(val);
	}
};


