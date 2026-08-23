import React from 'react';

function Navbar() {
    return (
        <div className='container-fluid border-bottom mb-5 py-3 sticky-top bg-white' style={{ paddingInline: "15%" }}>
            <div className='row d-flex align-items-center'>
                <div className='col-2'>
                    <img src='media/images/logo.svg' alt='Logo' className='img-fluid' />
                </div>
                <div className='col'></div>
                <div className='col-5'>
                    <ul className='d-flex justify-content-between list-unstyled mb-0'>
                        <li><a href='/' className='text-muted text-decoration-none'>Signup</a></li>
                        <li><a href='/' className='text-muted text-decoration-none'>About</a></li>
                        <li><a href='/' className='text-muted text-decoration-none'>Products</a></li>
                        <li><a href='/' className='text-muted text-decoration-none'>Pricing</a></li>
                        <li><a href='/' className='text-muted text-decoration-none'>Support</a></li>
                        <li><a href='/' className='text-muted text-decoration-none'><i class="fa fa-bars" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;