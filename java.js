//search
var search =document.getElementById('search');
search.onfocus=function(){
    search.placeholder=''
}
search.onblur=function(){
    search.placeholder='search'
}
// form 
var fname=document.getElementById('fname'),
lname=document.getElementById('lname'),
email=document.getElementById('email'),
msg=document.getElementById('msg');
fname.onfocus=function(){
    fname.placeholder=''
}
fname.onblur=function(){
    fname.placeholder='first name'
}
lname.onfocus=function(){
    lname.placeholder=''
}
lname.onblur=function(){
    lname.placeholder='last name'
}
email.onfocus=function(){
    email.placeholder=''
}
email.onblur=function(){
    email.placeholder='your e-mail'
}
msg.onfocus=function(){
    msg.placeholder=''
}
msg.onblur=function(){
    msg.placeholder='message'
}
$(document).ready(function(){
    // list of move
        $("#action").on('click',function(){
            $(".anmy ,.comdy ,.hor ").hide();
            $(".action").show();
        })
        $("#anmy").on('click',function(){
            $(".action ,.comdy ,.hor ").hide();
            $(".anmy").show();
        })
        $("#comdy").on('click',function(){
            $(".anmy ,.action ,.hor ").hide();
            $(".comdy").show();
        })
        $("#hor").on('click',function(){
            $(".anmy ,.comdy ,.action ").hide();
            $(".hor").show();
        })

 $("#all").on('click',function(){
            $(".anmy ,.comdy ,.hor ,.action").show();
        })
    
})