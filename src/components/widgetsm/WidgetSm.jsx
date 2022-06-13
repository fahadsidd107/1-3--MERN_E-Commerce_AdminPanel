import React, { useState, useEffect } from "react";
import "./WidgetSm.css";
import { Visibility } from "@material-ui/icons";
import { userRequest } from "../../requestMethods";
function WidgetSm({ data, uname, utitle }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("user/?new=true");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);
  return (
    <div className="WidgetSm">
      <span className="widgetSmTitle">New Join Memebers</span>
      <ul className="WidgetSmList">
        {users.map((user) => (
          <ListItem
            name={user.username}
            image={
              user.image ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            }
          />
        ))}
      </ul>
    </div>
  );
}

export function ListItem({ name, image }) {
  return (
    <div>
      <li className="WidgetSmListItem">
        <img src={image} alt="user" className="widgetSmImg" />
        <div className="widgetSmUser">
          <span className="widgetUserName">{name}</span>
        </div>
        <button className="widgetSmButton">
          <Visibility className="widgetSmIcon" />
          Display
        </button>
      </li>
    </div>
  );
}

export default WidgetSm;
