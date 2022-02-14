import React, { useContext, useEffect, useState } from 'react'; 
import firebase from 'firebase/compat/app';


import { AuthContext } from '../../context/AuthContext';

import './Profile.css';
import { db } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'


function Profile() {

    const { currentUser, handleLogout } = useContext(AuthContext)
    const [info, setInfo] = useState([])
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const deleteAccount = () => {
        const user = firebase.auth().currentUser;
        user.delete().then(() => {
            // User deleted.
        }).catch((error) => {
            console.log('Sign in again to delete account')
        });
    }

    let navigate = useNavigate();
    function goHome() {
        navigate("/");
    }

    useEffect(() => {
      var docRef = db.collection("users").doc(currentUser.uid);
      docRef.get().then((doc) => {
          if (doc.exists) {
              setInfo(doc.data());
              setUsername(info.username)
              setPhone(info.phone)
              setEmail(info.email)

          } 
      }).catch((error) => {
          console.log("Error getting document:", error);
      });

  }, [currentUser.uid, info.name, info.username, info.phone, info.email]);

  console.log(info)



    return (
        <div className="profile">
            <img onClick={goHome} src={logo} alt="" className='auth__Logo'/>
            <div className="logout" onClick={handleLogout}>
                <h4>Logout</h4>
                {/* <ExitToAppIcon className="logout-icon"/> */}
            </div>
            <h1>My Profile</h1>
              <div className="profileContainer">
                  <div className="profile_header">
                      <div className="profile-name">
                          <h4>Username:</h4>
                          <h3>{username}</h3>
                      </div>
                      <div className="profile-email">
                          <h4>Email:</h4>
                          <h3>{email}</h3>
                      </div>
                      <div className="profile-email">
                          <h4>Phone:</h4>
                          <h3>{phone}</h3>
                      </div>
                  </div>
                  <div className="profile_options">
                      <button onClick={deleteAccount}>Delete My Account</button>
                  </div>
              </div>
        </div>
        
    )
}

export default Profile