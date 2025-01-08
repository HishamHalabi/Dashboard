
///form validate //////////
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
                        window.alerat("invalid length");
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
