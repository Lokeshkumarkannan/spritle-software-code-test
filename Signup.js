function Signup(){
    let Email=document.getElementById("num1").value;
    let PhoneNumber=document.getElementById("num2").value;
    let UserNmae=document.getElementById("num3").value;
    let Password=document.getElementById("num4").value;
    let ConfirmPassword=document.getElementById("num5").value;

    let flag=false;
    for(let i=0; i<Email.length; i++)
    {
        if(Email[i]=='@')
        {
            flag=true;
            break;
        }
    }
    if(flag!=true)
    {
        alert("Invalid Email Id.Please try again....");
        return;
    }

    if(!((PhoneNumber.length==10)&&(PhoneNumber=='6')||(PhoneNumber[0]=='7')||(PhoneNumber[0]=='8')||(PhoneNumber[0]=='9')))
    {
        alert("Invalid PhoneNumber.Please Try again....")
    }

    if((Password.length>=8)&&(Password.length<=16)){
        let lower=0;
        let upper=0;
        let Number=0;
        let special=0;
        for(let i=0;i<Password.length;i++){
            if(("A"<=Password[i])&&(Password[i]<='Z')){
                upper++;
            }
            else if(('a'<=Password[i])&&(Password[i]<='z')){
                lower++;
            }
            else if(('0'<=Password[i])&&(Password[i]<='9')){
                Number++;
            }
            else{
                special++;
            }

        }
        if(!(upper>=1)&&(lower>=1)&&(Number>=1)&&(special>=1)){
            alert("Password is not a strong.Please try again...");
            return;
        }
    }
    else{
        alert("Password should consist minimum 8 character and maximum 16 character.Please try again...");
        return;

    }

    if(Password!=ConfirmPassword){
        alert("Password and confirm password doesn't match. Please try again...");
        return;
    }
    window.location.href="./Masterlogin.html";
}