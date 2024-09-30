function getFormvalue() {
    //Write your code here
	const form=document.getElementById('form1');
	const formData=new FormData(form);
	const firstName=formData.get('fname');
	const lastName=formData.get('lname');
	alert(firstName+" "+lastName);
	

}
