import React from 'react';

function Hero() {
    return ( 
        <div className='container mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5' style={{width: "60%", margin: "0 auto"}}/>
                <h1 className='fs-2'>Invest in everything</h1>
                <p className='fs-5 mt-2 mb-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn btn-primary fs-5' style={{width: "20%", margin: "0 auto"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;