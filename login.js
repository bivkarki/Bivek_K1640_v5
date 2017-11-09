function login()
{
	var x=document.getElementById("p1").value;
	var y=document.getElementById("p2").value;
if( (x=="Admin") && (y=="Admin123") )
	{ alert("Login Successfull!!");
		document.location.href="rma.html";}
else
	{alert("Either Username or Password is not matching!\nPlease do check Capslock!!");}
}