// Initialize Firebase
	var config = {
		apiKey: "AIzaSyBSUnWiQcL7R12d_IdGi0_0z3rAIuzKyvw",
		authDomain: "finance-ed0a6.firebaseapp.com",
		databaseURL: "https://finance-ed0a6.firebaseio.com",
		storageBucket: "finance-ed0a6.appspot.com",
		messagingSenderId: "387748315109"
	};
	firebase.initializeApp(config); //задаем параметры firebase
	// событие изменения статуса авторизации
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
		  // User is signed in.
			app.init(user);
			//console.log(user)
		} else {
		  // No user is signed in.
			var provider = new firebase.auth.GoogleAuthProvider();
				//provider.addScope('https://www.googleapis.com/auth/plus.login');
				firebase.auth().signInWithPopup(provider).then(function(result) {
				  // This gives you a Google Access Token. You can use it to access the Google API.
				  var token = result.credential.accessToken;
				  // The signed-in user info.
				  var user = result.user;

				}).catch(function(error) {
				  // Handle Errors here.
				  var errorCode = error.code;
				  var errorMessage = error.message;
				  // The email of the user's account used.
				  var email = error.email;
				  // The firebase.auth.AuthCredential type that was used.
				  var credential = error.credential;
				  // ...
				});
		}
	});