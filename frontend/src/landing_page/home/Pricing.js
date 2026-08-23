import React from 'react';

function Pricing() {
    return (
        <div className='container mt-5'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-4'>Unbeatable Pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='/' className='text-decoration-none'>See pricing <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2 mt-5 pt-4'>
                    <img src='/media/images/pricing0.svg' className='img-fluid w-50' />
                    <p className='text-muted'>Free account opening</p>
                </div>
                <div className='col-2 mt-5 pt-4'>
                    <img src='/media/images/pricing0.svg' className='img-fluid w-50' />
                    <p className='text-muted'>Free equity delivery and direct mutual funds</p>
                </div>
                <div className='col-2 mt-5 pt-4'>
                    <img src='/media/images/intradayTrades.svg' className='img-fluid w-50' />
                    <p className='text-muted'>Intraday and F&O</p>
                </div>
            </div>
        </div>
    );
}

export default Pricing;