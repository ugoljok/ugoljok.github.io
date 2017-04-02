app.db = {
	// получение
	get: function(path,callback){
		firebase.database().ref(path).once('value').then(function(snapshot) {
			callback(snapshot.val());
		});
	},
	//запись
	set: function(path, val, callback){
		firebase.database().ref(path).set(val).then(function(){
			if(typeof(callback)==='function'){
				callback();
			}
		});
	}
};