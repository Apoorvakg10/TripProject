import React from 'react'
import './Register.css'
import { Link} from 'react-router-dom';
export default function Register() {
    return (
        <div>
            


            <h2 ALIGN="CENTER">Registration form</h2>

<form action="Welcome.html" >
<table align="center">
<tbody id="a1">

<tr>
<td><label htmlfor="id">Name: </label></td>
<td><input id="id" maxlength="32" name="name" type="text"  pattern="[A-Za-z]{3}" tittle="Name should contain atleast three letters" data-required/>

</td>
</tr>

<tr>
<td><label htmlfor="name">Email: </label></td>
<td><input id="id" maxlength="100" name="name" type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  tittle="Please enter a valid email" /></td>
</tr>

<tr>
<td><label htmlfor="course">Ph No.: </label></td>
<td><input id="id" maxlength="100" name="course" type="text" /></td>
</tr>

<tr>
<td><label htmlfor="branch">Password: </label></td>
<td><input id="id" maxlength="100" name="branch" type="text"  pattern="(?=.*/d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="Must contain at least one number and one uppercase and lowercase letter, and atleast 6 characters"/></td>

</tr>

<tr>
<td><label htmlfor="branch">Gender: </label></td>

<input type="radio" name="r1" checked  classname="in"/> Male
<input type="radio" name="r1" checked classname="in"/> Female
<input type="radio" name="r1" checked classname="in"/> Others
</tr>

    
    


<tr>
<td><label htmlfor="aboutus">Address:</label></td>
<td valign="middle" align="center"><textarea></textarea></td>
</tr>

<tr>
<td><label htmlfor="aboutus">Favourite:</label></td>
<select  id="id" name = "dropdown">
            <option value = "Computer Select" selected>Select</option>
            <option value = "Dubai">Dubai</option>
            <option value = "Paris">Paris</option>
            <option value = "Germay">Germany</option>
            <option value = "Delhi">Delhi</option>
            <option value = "Mumbai">Mumbai</option>
         </select>
</tr>

<tr>
<td >
    <Link to="/login">

      <input type="submit" value="Register" />

</Link>
</td>
</tr>

</tbody>
</table>
</form>

            
        </div>
    )
}
