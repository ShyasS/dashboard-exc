import React from 'react';
import { useState,useRef} from 'react';
import './loginpage.scss';
import SimpleReactValidator from 'simple-react-validator';
export function LoginPage(){
const [user,setUser] = useState({
  email: ""
});
const simpleValidator = useRef(new SimpleReactValidator());
const[, forceUpdate] = useState(1);

const InputFunc=(event)=>{
  setUser(event.target.name)
}

const onclick=()=>{
  if (simpleValidator.current.allValid()) {
    if(user.email == "Shyas@gmail.com"){
    alert('Loading Page')
    }
  } 
  else {
    simpleValidator.current.showMessages();
   
  }
}


    return(
        <div className = "Maindiv">
<div className = "row">
<div className = "col-md-3">
<img src={'https://press.aboutamazon.in/static-files/3ca754e0-9176-4d89-8174-056267008479'}/>
<div class="card">
    
    <h1 className = "h1">Sign in</h1>
    <div class="mb-3">
  <label  class="form-label">Email or mobile phone number</label>
  <input id="input1" type="email" name = "email" onChange = {InputFunc}value = {user.email} class="form-control"/>
  {simpleValidator.current.message('email', user.email, 'required|email')}
  <button type="button" onClick={onclick} id = "button1" class="btn btn-primary"><span className = "span1">Continue</span></button>
  <p className = "p2">By continuing, you agree to Amazon's <span><a href="#">Conditions of Use</a> </span>and <span><a href="#">Privacy Notice.</a></span></p>
  <p  className = "p3"><a href="#">Need Help?</a></p>
</div>
  <div class="card-body">
  
  </div>
</div>
</div>
</div>

</div>
    )
}