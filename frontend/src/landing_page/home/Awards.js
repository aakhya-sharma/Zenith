import React from 'react';

function Awards() {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <div className='col-6 py-5 ps-5'>
                    <img src='media/images/largestBroker.svg' className='img-fluid w-75' />
                </div>
                <div className='col-6 py-5 pe-5'>
                    <h1 className='fs-2 mb-4'>Largest stock broker in India</h1>
                    <p className='mb-3'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6 mt-3'>
                            <ul>
                                <li className='py-2'>Futures and Options</li>
                                <li className='py-2'>Commodity derivatives</li>
                                <li className='py-2'>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6 mt-3'>
                            <ul>
                                <li className='py-2'>Stocks & IPOs</li>
                                <li className='py-2'>Direct mutual funds</li>
                                <li className='py-2'>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                        <img src='media/images/pressLogos.png' className='img-fluid w-75 mt-3' />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Awards;