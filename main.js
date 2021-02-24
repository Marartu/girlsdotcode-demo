function validate (){
	var un = document.getElementById("un").value;
	var pass = document.getElementById("pass").value;
	
	if(un == "" || pass == ""){
		document.getElementById("error").innerHTML = "Username and password must both be filled out";
	}else if(un.length < 6 || pass.length < 6){
		document.getElementById("error").innerHTML = "Username and password must both be over 6 characters";
	}else{
		window.location = "login.html";
	}
}




