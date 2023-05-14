import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import { Button } from 'react-bootstrap';


const Admin = () => {

    const [theUser, setUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);                
            } else {
                setUser(null);
                window.location.href = '/';
            }
        });
        return () => {
            listen();
        };
    }, []);

    const logOut = () => {
        signOut(auth)
        .then(() => {

        }).catch(err => {
            console.log(err);
        });
    };



    return (
        <div className='text-center m-4'>
            <h3>Admin Page</h3>
            <p className="text-muted">Where the magic happens 🖥️</p>
            <p>Welcome {theUser?.email}</p>
            <Button variant='danger' onClick={logOut}>Sign Out, Hasta Luego!</Button>
        </div>
    )
}

export default Admin;