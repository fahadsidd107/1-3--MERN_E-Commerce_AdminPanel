import React from 'react'
import './NewUser.css'

function NewUser() {
  return (
    <div className='newUser'>
        <h1 className='newUserTitle'>New User</h1>
        <form className='newUserForm'> 
     
<Form type='text' label='User Name' placeholder='Fahad'/>
<Form type='text' label='Full Name' placeholder='Fahad Siddiqui'/>
<Form type='password' label='Password' placeholder='password'/>
<Form type='text' label='Phone' placeholder='+92 323 3456123'/>
<Form type='text' label='Address' placeholder='A Area Karachi'/>
<div className='newUserItem'>
<label>Gender</label>
<div className='newUserGender'>
<input type='radio' name='gender' id='male' value='male'/>
<label for='male'>Male</label>
<input type='radio' name='gender' id='female' value='female'/>
<label for='female'>Female</label>
<input type='radio' name='gender' id='other' value='other'/>
<label for='other'>Other</label>
</div>
</div>
<div className='newUserItem'>
<label>Active</label>
<select className='newUserSelect' id='active'> 
<option value='yes'>Yes</option>
<option value='no'>No</option>
</select>
</div>
 </form>
<button className='newUserButton'>Create</button>
    </div>
  )
}



export function Form({label , placeholder ,type }) {
  return (
    <div className='newUserItem'>
      <label>{label}</label>
      <input type={type} placeholder={placeholder}/>
      </div>
  )
}



export default NewUser