// 2.Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
// Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
// Create multiple instances of the UserCard component with different user data.

import React from 'react';

const UserCard=(props)=>{
  
    return(
        <div>
            Name : {props.name}
            <br></br>
            Email: {props.email};
            <br></br>
            <a href={props.url}>Image</a>
        </div>
    )
  
}
export default UserCard;