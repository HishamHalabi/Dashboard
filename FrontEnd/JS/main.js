//index .... Session sotrage for tasks
let task =  document.querySelector(".latest-tasks [type='text']");
console.log(task)
console.log(task.value) ;


let tasks =  document.querySelector(".tasks") ; 
let product = document.createElement("div") ; 
let par=  document.createElement("div")  ;
let text  =  document.createElement("div")
let del =  document.createElement("button") ; 

product.style.cssText  = `
         background-color  : #eee; 
         width :  80% ; 
         padding : 10px; 
         border-radius : 10px;
         margin-top  :10px
`
par.style.cssText  = `
         background-color  : white; 
         width : 100% ; 
         padding : 5px; 
         border-radius : 10px;
         display :flex; 
         align-items  :center;
         justify-content :  space-between; 
`
del.style.cssText =  `
        background-color  : red ; 
        color :white   ; 
        text-align:center; 
        padding:5px;
        border : 1px solid #eee;
        color : white ; 
        border-radius :  4px ;
`

text.className= "txt" ;
del.innerHTML =`delete`
del.classList.add("dell")



product.appendChild(par)

par.appendChild(text)
par.appendChild(del)

// localStorage.save ;
tasks.innerHTML = localStorage.save  ; 


document.querySelector(".add").onclick=  function(ev)  {
           let task =  document.querySelector("[type='text']").value;
          
           let ele =  product.cloneNode(true) ;
           let edit = ele.querySelector(".txt")
           edit.innerHTML = `${task}`
           tasks.append(ele)
           sessionStorage.save =    tasks.innerHTML;

           document.querySelector("[type='text']").value = "";
}

document.addEventListener("click" , function(ev) {
      let el  =ev.target ; 
      console.log(el)
      let  p1=   el.parentElement;
      let p2  = p1.parentElement;
      tasks.removeChild(p2)
      sessionStorage.save =    tasks.innerHTML;
})



//active window

let ele =  document.querySelector(".page") ; 
let act = ele.classList.item(ele.classList.length-1) ; 


let ul  = ele.querySelectorAll("ul li a") ;
for (let  i  =  0 ; i  < ul.length ; ++i)  { 
       
          let cur = ul[i].classList ; 
          console.log(cur.item(0))
          if(cur.contains(act)) {
                   if (!cur.contains("active"))  {
                        cur.add("active") ; 
                   }
          }
          else  { 
                if (cur.contains("active")){
                   cur.remove("active")
                }
          }

}

//form validate //////////

let form   =  document.querySelector(".login-form") ; 
let Email  =  document.querySelector(".login-form [name='email']") ;
let pass  =  document.querySelector(".login-form [name='psw']") ;

function valid(x) {
            return (x>='a'&& x<='z') || (x>='A' && x<='Z') ||  (x>='0' && x<='9') || (x=='_'); 
};
form.onsubmit = function (ev) {  
           
            let Em = Email.value;
            let ps = pass.value ;
            console.log(Em.length);
            console.log(ps.length)

            if ( Em.length==0 || ps.length==0 || Em.length > 22 || ps.length>12)  {
                        window.alert("invalid length");
                        ev.preventDefault() ;
                        return ; 
            }

            let invalid = false;


            for (let i = 0 ; i +10 <Em.length ; ++i)  {
                     if (!valid(Em[i])) { 
                                  console.log(Em[i] , valid(Em[i])) ; 
                                  notValid =true;
                     }
            }

            for (let i = 0 ; i  <ps.length; ++i)  { 
                if (!valid(ps[i])) { 
                       notValid = true;
                }
             }
                if (notValid) {
                            window.alert("invalid data  enter only numbres  alpha chars  _ ");
                            ev.preventDefault() ;
                }
     
}

// session storage for Latest Tasks
