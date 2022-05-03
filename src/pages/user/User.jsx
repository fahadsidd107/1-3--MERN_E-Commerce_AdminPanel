import React from "react";
import ReactDOM from "react-dom";
import "./User.css";
import { Link } from "react-router-dom";
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons";
function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to='/newUser'>
        <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
<img alt="" className="userShowImg" src="https://pps.whatsapp.net/v/t61.24694-24/234743491_372249084383775_7612602405731643070_n.jpg?ccb=11-4&oh=f06c30ab5033f0dc3b612a1260fa8efd&oe=62353341"/>
        <div className="userShowTopTitle">
          <span className="userShowTopTitleName">Fahad Siddiqui</span>
          <span className="userShowTopTitleJob">Software Engineer</span>
        </div> 
          </div>
          <div className="userShowBottom">
<span className="userShowTitle">Account Detail</span>
   <div className="userShowInfoContainer">
   <PermIdentity className="userShowIcon"/>    
<span className="userShowInfoTitle">fad_flex</span>
   </div>
   <div className="userShowInfoContainer">
   <CalendarToday className="userShowIcon"/>    
<span className="userShowInfoTitle">10.12.1998</span>
   </div>
   <span className="userShowTitle">Contact Detail</span>
   <div className="userShowInfoContainer">
   <PhoneAndroid className="userShowIcon"/>    
<span className="userShowInfoTitle">+92 321 3730963</span>
   </div>
   <div className="userShowInfoContainer">
   <MailOutline className="userShowIcon"/>    
<span className="userShowInfoTitle">fsiddiqui107@gmail.com</span>
   </div>
   <div className="userShowInfoContainer">
   <LocationSearching className="userShowIcon"/>    
<span className="userShowInfoTitle">House 12/12 B-Area,Karachi</span>
   </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
        <form className="userUpdateForm">
<div className="userUpdateLeft">
<div className="userupdateItem">
  <label>Username</label>
  <input type='text' placeholder='fad_flex' className="userUpdateInput"/>
</div>

<div className="userupdateItem">
  <label>Date of birth</label>
  <input type='text' placeholder='10.12.1998' className="userUpdateInput"/>
</div>

<div className="userupdateItem">
  <label>Contact no.</label>
  <input type='text' placeholder='+92 321 3730963' className="userUpdateInput"/>
</div>

<div className="userupdateItem">
  <label>Email</label>
  <input type='text' placeholder='fsiddiqui107@gmail.com' className="userUpdateInput"/>
</div>

<div className="userupdateItem">
  <label>Address</label>
  <input type='text' placeholder='House 12/12 B-Area,Karachi' className="userUpdateInput"/>
</div>
</div>
<div className="userUpdateRight">
<div className="userUpdateUpload">
  <img src='https://pps.whatsapp.net/v/t61.24694-24/234743491_372249084383775_7612602405731643070_n.jpg?ccb=11-4&oh=f06c30ab5033f0dc3b612a1260fa8efd&oe=62353341' alt="" className="userUpdateImage"/>
<label htmlFor="file"><Publish className="userUpdateIcon"/></label>
<input type='file' id="file" style={{display:'none'}}/>
</div>
<button className="userUpdateButton">Update</button>
</div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default User;
