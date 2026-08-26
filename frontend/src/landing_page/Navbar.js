import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='container-fluid border-bottom mb-5 py-3 sticky-top bg-white' style={{ paddingInline: "15%" }}>
            <div className='row d-flex align-items-center'>
                <div className='col-2'>
                    <Link to='/'>
                        <img src='media/images/logo.svg' alt='Logo' className='img-fluid' />
                    </Link>
                </div>

                <div className='col'></div>

                <div className='col-5'>
                    <ul className='d-flex justify-content-between list-unstyled mb-0'>
                        <li>
                            <Link to='/signup' className='text-muted text-decoration-none'>Signup</Link>
                        </li>
                        <li>
                            <Link to='/about' className='text-muted text-decoration-none'>About</Link>
                        </li>
                        <li>
                            <Link to='/products' className='text-muted text-decoration-none'>Products</Link>
                        </li>
                        <li>
                            <Link to='/pricing' className='text-muted text-decoration-none'>Pricing</Link>
                        </li>
                        <li>
                            <Link to='/support' className='text-muted text-decoration-none'>Support</Link>
                        </li>
                        <li>
                            <a href='/' className='text-muted text-decoration-none'><i class="fa fa-bars" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;