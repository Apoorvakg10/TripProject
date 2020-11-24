import React from 'react'
import './Login.css'
import { Link} from 'react-router-dom';
export default function Login() {
    return (
        <div>
            <div id="container">
 
  
  <div classname="form">
  <div classname="container">
<section id="content">
<form action="">
<h1>Login Form</h1>
<div>
<input type="text" placeholder="Username" required="" id="username" />
</div>
<div>
<input type="password" placeholder="Password" required="" id="password" />
</div>
<div>
<input id="as" type="submit" value="Login" />

<Link to="/register"> Please Register</Link>
</div>
</form>

</section>
</div>
  </div>
</div>
        </div>
    )
}
