app.db = {
	// получение
	get: function(path, val){
		firebase.database().ref(path).once('value').then(function(snapshot) {
			//если юзер существует в БД
			if(snapshot.val()){
				//var user_data = snapshot.val();
				this->set(path+'/lastVisit') = new Date().getTime();
				console.log(1)
			//иначе добавляем юзера
			}else{
				this->set(path, val);
				console.log(2)
				this->get(path,val);
				console.log(111111111)
			}
		});
	},
	//запись
	set: function(path, val){
		firebase.database().ref(path).set(val);
		console.log(3)
	}
};


