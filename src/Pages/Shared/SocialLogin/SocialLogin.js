import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn btn-outline btn-accent w-full'>connect with google</button>
        </div>
    );
};

export default SocialLogin;