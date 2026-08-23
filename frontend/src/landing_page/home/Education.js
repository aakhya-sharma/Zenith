import React from 'react';

function Education() {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <div className='col-6 py-5 ps-5'>
                    <img src='media/images/education.svg' className='img-fluid w-75' />
                </div>
                <div className='col-6 py-5 pe-5'>
                    <h1 className='fs-2 mb-4'>Free and open market education</h1>
                    <p className='mb-3 text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='/' className='text-decoration-none'>Varsity <i className="fa fa-arrow-right mb-5" aria-hidden="true"></i></a>
                    <p className='mb-3 text-muted'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='/' className='text-decoration-none'>TradingQ&A <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;