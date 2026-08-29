import React from 'react';

function People() {
    return (
        <div className='container'>

            <div className='row'>
                <h2 className='fs-4 my-4 text-center'>People</h2>
            </div>

            <div className='row my-5' style={{ paddingInline: '15%' }}>
                <div className='col-5 text-center text-muted'>
                    <img src='media/images/nithinKamath.jpg' alt='Nithin' className='w-75 rounded-circle mb-3' />
                    <p className='fs-5'>Nithin Kamath</p>
                    <p className='fs-6'>Founder, CEO</p>
                </div>
                <div className='col-7'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href='/' className='text-decoration-none'>Homepage</a> / <a href='/' className='text-decoration-none'>TradingQnA</a> / <a href='/' className='text-decoration-none'>Twitter</a></p>
                </div>
            </div>

            <div className='row p-5 text-center'>
                <div className='col'>
                    <img src='media/images/Nikhil.jpg' alt='Nikhil' className='w-50 rounded-circle mb-3' />
                    <h5 className='fw-normal mb-1'>Nikhil Kamath</h5>
                    <p className='text-muted mb-5'>Co-founder & CFO</p>
                    <img src='media/images/Seema.jpg' alt='Seema' className='w-50 rounded-circle m-3' />
                    <h5 className='fw-normal mb-1'>Seema Patil</h5>
                    <p className='text-muted'>Director</p>
                </div>
                <div className='col'>
                    <img src='media/images/Kailash.jpg' alt='Kailash' className='w-50 rounded-circle mb-3' />
                    <h5 className='fw-normal mb-1'>Dr. Kailash Nadh</h5>
                    <p className='text-muted mb-5'>CTO</p>
                    <img src='media/images/karthik.jpg' alt='Karthik' className='w-50 rounded-circle m-3' />
                    <h5 className='fw-normal mb-1'>Karthik Rangappa</h5>
                    <p className='text-muted'>Chief of Education</p>
                </div>
                <div className='col'>
                    <img src='media/images/Venu.jpg' alt='Venu' className='w-50 rounded-circle mb-3' />
                    <h5 className='fw-normal mb-1'>Venu Madhav</h5>
                    <p className='text-muted mb-5'>COO</p>
                    <img src='media/images/Austin.jpg' alt='Austin' className='w-50 rounded-circle m-3' />
                    <h5 className='fw-normal mb-1'>Austin Prakesh</h5>
                    <p className='text-muted'>Director Strategy</p>
                </div>
            </div>

        </div>
    );
}

export default People;