function login(){
    let UserName=document.getElementById("user1").value;
    let Password=document.getElementById("password1").value;

    let flag=false;
    for(let i=0; i<Object.keys(db).length; i++)
    {
        if((db[i][0]==UserName)&&(db[i][1]==Password))
        {
            flag=true;
            break;
        }
    }
    if (flag==true)
    {
        window.location.href="./calculator.html";
    }
    else
    {
        alert("Invalid Username or Incorrect Password");
    }
    
}