import React from 'react';
import Hero from './Hero';
import Investment from './Investment';
import Steps from './Steps';
import Benefits from './Benefits';
import Explore from './Explore';
import FAQs from './FAQs';

function SignupPage() {
    return ( 
        <>
            <Hero />
            <Investment />
            <Steps />
            <Benefits />
            <Explore />
            <FAQs />
        </>
     );
}

export default SignupPage;