import React from 'react'

import './sign-page.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.components';
const SignInPage = () => (
    <div className="sign-page">
        <SignIn />
        <SignUp/>
    </div>
);

export default SignInPage;