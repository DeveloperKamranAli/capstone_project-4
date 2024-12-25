import React, { useState } from "react";

const Profile = () => {
  const [email, setEmail] = useState(localStorage.getItem("userEmail"));
  const [password, setPassword] = useState(localStorage.getItem("userPassword"));
  const [isEditing, setIsEditing] = useState(false); 

  const handleUpdate = () => {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    alert("Profile updated successfully!");
    setIsEditing(false); 
  };

  const handleEdit = () => {
    setIsEditing(true); 
  };

  return (
    <div>
      <h1>My Profile</h1>
      <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!isEditing} 
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={!isEditing} 
        />
      </div>
      <div>
        {!isEditing ? (
          <button onClick={handleEdit}>Add</button> 
        ) : (
          <button onClick={handleUpdate}>Save</button> 
        )}
      </div>
    </div>
  );
};

export default Profile;


