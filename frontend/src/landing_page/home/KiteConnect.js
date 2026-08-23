import React from 'react';

function KiteConnect() {
    return (
        <div className='container-fluid my-4'>
            <div className='row align-items-center py-3' style={{ backgroundColor: "aliceblue" }}>
                <div className='col-3 d-flex justify-content-end'>
                    <img src='media/images/kc-logo-landing.svg' className='img-fluid' />
                </div>
                <div className='col-6'>
                    <p className='text-muted'>Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs to place orders, stream market data, manage your account, and more. <a href='/' className='text-decoration-none'>Explore <i className="fa fa-arrow-right" aria-hidden="true"></i></a></p>
                </div>
                <div className='col-3'>
                    <img src='media/images/kc-banner-image.svg' className='img-fluid w-75' />
                </div>
            </div>
        </div>
    );
}

export default KiteConnect;