import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import PulseLoader from 'react-spinners/PulseLoader';

// Confirm the link is a sign-in with email link.

const VerifyEmail = () => {
    const navigate = useNavigate()
    const [error, seterror] = useState<undefined | boolean>(undefined)
    useEffect(()=>{
        const auth = getAuth();
        if (isSignInWithEmailLink(auth, window.location.href)) {
            // Additional state parameters can also be passed via URL.
            // This can be used to continue the user's intended action before triggering
            // the sign-in operation.
            // Get the email if available. This should be available if the user completes
            // the flow on the same device where they started it.
            let email = window.localStorage.getItem('emailForSignIn');
            if (!email) {
                // User opened the link on a different device. To prevent session fixation
                // attacks, ask the user to provide the associated email again. For example:
                email = window.prompt('Please provide your email for confirmation');
            }
            // The client SDK will parse the code from the link for you.
            signInWithEmailLink(auth, email as string, window.location.href)
                .then((result) => {
                    console.log(result)
                // Clear email from storage.
                setTimeout(() => {
                    navigate('/ny-varsel')
                }, 1000);
                // You can access the new user via result.user
                // Additional user info profile not available via:
                // result.additionalUserInfo.profile == null
                // You can check if the user is new or existing:
                // result.additionalUserInfo.isNewUser
                })
                .catch((error) => {
                    seterror(true)
                    console.error(error)
                // Some error occurred, you can inspect the code: error.code
                // Common errors could be invalid email and invalid or expired OTPs.
                });
            }
    },[])
  return (
    <div>
        {
            !error?
            <>
            <h1>Gode greier</h1>
            <PulseLoader />
            </>
            :
            <>
            <h1>Verifisering feilet</h1>
            <NavLink to={'/ny-varsel'}>returner til forrige side</NavLink>
            </>
        }
    </div>
  )
}

export default VerifyEmail