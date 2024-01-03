function validation(){
   var Name=document.forms["form"]["Name"].value;
   var email=document.forms["form"]["email"].value;
   var Age=document.forms["form"]["Age"].value;
   var status=document.forms["form"]["status"].value;
   var input=document.forms["form"]["input"].value;
   var choice=document.forms["form"]["choice"].value;
   var Answers=document.forms["form"]["choice"].value;
   
   if(Name==null||Name=="")
   {
       alert("Name cannnot be blank");
       return false;
   }
   else if(email==null||email=="")
   {
       alert("email cannot be blank");
       return false;
   }
   else if(Age==null||Age=="")
   {
       alert("Age cannot be blank");
       return false;
   }
   else if(status==null||status=="")
   {
       alert("status cannot be blank");
       return false;
   }
   else if(input==null||input=="")
   {
       alert("input cannot be blank");
       return false;
   }
   else if(choice==null||choice=="")
   {
       alert("choice cannot be blank");
       return false;
   }
   else if(Answers==null||Answers=="")
   {
       alert("Answers cannot be blank");
       return false;
   }
}
