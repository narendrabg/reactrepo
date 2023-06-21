import React from "react";

export default function LoginPage() {
       const [userName,setUserName] = React.useState('');
       const [password,setPassword] = React.useState('');
       function handleUserNameChange(event) {              
           setUserName(event.target.value);
       }
       function handlePasswordChange(event) {
              
           setPassword(event.target.value);
       }

       function submitForm() {
              if (userName === 'admin' && password === 'admin') {
                     alert("Login Successful");
                     setUserName('');
                     setPassword('');
              } else {
                     alert("Login Failed");
              }
       }
 return (
       <div>
 <form onSubmit={submitForm}>
       <div>
       <input type="text" placeholder="Enter Username" 
       className="Login--input" onChange={handleUserNameChange}/>
       </div>
       <div>
       <input type="password" placeholder="Enter Password" className="Login--input" onChange={handlePasswordChange}/>
       </div>
       <div>
       <button className="Login--Button" >Login</button>
       </div>
</form>
</div>
);
}