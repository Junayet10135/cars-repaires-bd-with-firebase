import React, { useEffect } from 'react';
import googleIcon from '../../../images/SocialLogInIcon/googleIcon.png'
import facebookIcon from '../../../images/SocialLogInIcon/facebookIcon.png'
import githubIcon from '../../../images/SocialLogInIcon/githubIcon.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let errorElement;


    const from = location?.state?.from?.pathname || '/';
    useEffect(() => {
        if (user || user1) {
            navigate(from, { replace: true });
        }
    }, [user, user1, navigate, from]);

    if(loading || loading1){
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        </div>

    };

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: 1 }} className='bg-primary w-50'></div>
                <p className='m-2'>or</p>
                <div style={{ height: 1 }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button onClick={() => signInWithGoogle()}
                    className='btn btn-white w-50 d-block mx-auto mb-2 border'>
                    <img style={{ width: '50px' }} src={googleIcon} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-primary w-50 d-block mx-auto mb-2'>
                    <img style={{ width: '30px' }} src={facebookIcon} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-dark w-50 d-block mx-auto'>
                    <img className='bg-white' style={{ width: '30px' }} src={githubIcon} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogIn;