import React from 'react';

function Footer() {
    return (
        <div className='container-fluid border-top mt-4 bg-light' style={{ fontSize: "12px", paddingInline: "10%" }}>
            <div className='row m-5'>
                <div className='col'>
                    <img src='media/images/logo.svg' alt='Logo' style={{ width: "70%" }} className='mb-3' />
                    <p>&copy; 2010 - 2026, Zerodha Broking Ltd. <br />All rights reserved.</p>
                    <a href='/'><i class="fa fa-twitter fs-5 me-3 text-muted" aria-hidden="true"></i></a>
                    <a href='/'><i class="fa fa-facebook-official fs-5 me-3 text-muted" aria-hidden="true"></i></a>
                    <a href='/'><i class="fa fa-instagram fs-5 me-3 text-muted" aria-hidden="true"></i></a>
                    <a href='/'><i class="fa fa-linkedin fs-5 me-3 text-muted" aria-hidden="true"></i></a>
                    <hr />
                    <a href='/'><i class="fa fa-youtube-play fs-5 me-3 text-muted" aria-hidden="true"></i></a>
                    <a href='/'><i class="fa fa-whatsapp fs-5 me-3 text-muted" aria-hidden="true"></i></a>
                    <a href='/'><i class="fa fa-telegram fs-5 me-3 text-muted" aria-hidden="true"></i></a>
                    <br />
                    <a href='/' className='text-decoration-none text-dark'><i class="fa fa-play fs-5 me-3 my-1" aria-hidden="true"></i>Get it on Google Play</a>
                    <br />
                    <a href='/' className='text-decoration-none text-dark'><i class="fa fa-apple fs-5 me-3" aria-hidden="true"></i>Download on the App Store</a>
                </div>
                <div className='col'>
                    <p className='fs-4 fw-semibold'>Account</p>
                    <ul className='list-unstyled fs-6'>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Open demat account</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Minor demat account</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>NRI demat account</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>HUF demat account</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Commodity</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Dematerialisation</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Fund transfer</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>MTF</a></li>
                    </ul>
                </div>
                <div className='col'>
                    <p className='fs-4 fw-semibold'>Support</p>
                    <ul className='list-unstyled fs-6'>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Contact us</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Support portal</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>How to file a complaint?</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Status of your complaints</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Bulletin</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Circular</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Z-Connect blog</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Downloads</a></li>
                    </ul>
                </div>
                <div className='col'>
                    <p className='fs-4 fw-semibold'>Company</p>
                    <ul className='list-unstyled fs-6'>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>About</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Philosophy</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Press & media</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Careers</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Zerodha Cares (CSR)</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Zerodha.tech</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Open source</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Referral program</a></li>
                    </ul>
                </div>
                <div className='col'>
                    <p className='fs-4 fw-semibold'>Quick Links</p>
                    <ul className='list-unstyled fs-6'>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Upcoming IPOs</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Brokerage charges</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Market holidays</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Economic calendar</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Calculators</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Markets</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Sectors</a></li>
                        <li className='my-2'><a href='/' className='text-decoration-none text-dark'>Gift Nifty</a></li>
                    </ul>
                </div>
            </div>

            <div className='row mx-5 mt-5'>
                <p className='text-muted'>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href='/' className='text-decoration-none'>complaints@zerodha.com</a>, for DP related to <a href='/' className='text-decoration-none'>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                <p className='text-muted'>Procedure to file a complaint on <a href='/' className='text-decoration-none'>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                <p className='text-muted'><a href='/' className='text-decoration-none'>Smart Online Dispute Resolution</a> | <a href='/' className='text-decoration-none'>Grievances Redressal Mechanism</a></p>
                <p className='text-muted'>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                <p className='text-muted'>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                <p className='text-muted'>India's largest broker based on networth as per NSE. <a href='/' className='text-decoration-none'>NSE broker factsheet</a></p>
                <p className='text-muted'>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href='/' className='text-decoration-none'>create a ticket here</a>.</p>
                <p className='text-muted'>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>
                <p className='text-muted'>Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).</p>
            </div>

            <ul className='d-flex justify-content-evenly list-unstyled text-muted mx-5'>
                <li>NSE</li>
                <li>BSE</li>
                <li>MCX</li>
                <li>MSEI</li>
                <li>Terms & conditions</li>
                <li>Policies & procedures</li>
                <li>Privacy policy</li>
                <li>Disclosure</li>
                <li>For investor's attention</li>
                <li>Investor charter</li>
                <li>Sitemap</li>
            </ul>
        </div>
    );
}

export default Footer;