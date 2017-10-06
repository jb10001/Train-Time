/* linked! 10:26pm 
alert("This is testing JAVASCRIPT!!"); */

/* BEGIN, JAVASCRIPT, LOGIC */

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDo0c5OYSIaubIfWF4ud-2OIPj743sjKds",
    authDomain: "anytime-is-train.firebaseapp.com",
    databaseURL: "https://anytime-is-train.firebaseio.com",
    projectId: "anytime-is-train",
    storageBucket: "anytime-is-train.appspot.com",
    messagingSenderId: "412299774414"
  };
  firebase.initializeApp(config);

var database = firebase.database;


// A $( document ).ready() block.
$( document ).ready(function() {
    $("#btn").click(function(){
    	alert("The paragraph was clicked.");
    $("#trainName").val();
    $("#destination").val();
    $("#firstTrainTime").val();
    $("#frequency").val();

	});
}); 