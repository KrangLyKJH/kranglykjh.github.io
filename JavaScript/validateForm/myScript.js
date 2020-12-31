// goi du lieu
function validateForm(){
	var name=document.forms["register"].txtName.value,
		age=document.forms["register"].txtAge.value,
		email=document.forms["register"].txtEmail.value,
		pass=document.forms["register"].pass.value,		
		gender=document.forms["register"].txtGender.value;			
		
		if(name==""||name==" "){
			alert("Tên không được để trống!");
		}
		if(age<"18"){
			alert("tuổi trên 18+")
		}
		if(email==""||email==" "){
			 alert("Email không được để trống");
		}
		if(pass<=7){
			 alert("nhập mật khẩu trên 6 số");
		}
		if(isNaN(age)){
			alert("tuổi nhập vào là số");
		}
		if(gender==""||gender==" "){
			alert("giới tính không được để trống!")
		}
}		
		
	// console.log("valideForm()");
		