let user=new RegExp("admin");
let pwd=new RegExp("12345");
let uname=document.getElementById("username");
let password=document.getElementById("password");
const validate=(e,callback)=>{
    if(user.test(uname.value) && pwd.test(password.value) )
    {
    callback();
    }
    
    else
    {
    alert("username or password is incorrect");
    }
}

const redirect=()=>{
    window.localStorage.setItem('user',JSON.stringify({uname:'admin'}));
    window.location='todo.html';
}

$('#submit1').on('click',(e)=>{
    e.preventDefault();
    validate(e,redirect);

})