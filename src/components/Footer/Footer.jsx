import React from 'react'
//Images
import Logo from '../../Images/logon.png'
import Image1 from '../../assets/images/payments.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3">
                                <div className="widget widget-about">
                                    <h4 className="widget-title">about shop</h4>
                                    <p>OlajazzNFT is an Edo Born, phoenix based fashion and passion. A board established in the year 2022 by a fashion model Olajazz. The brand is rooted in his idea for Fashion, Art, Poems and Music.</p>

                                    <div className="social-icons">
                                        <a href="https://twitter.com/olajazzNFT" className="social-icon" title="Twitter" rel="noreferrer" target="_blank"><i className="icon-twitter"></i></a>
                                        <a href="https://www.instagram.com/olajazznft" rel="noreferrer" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                        <a href="https://www.youtube.com/channel/UC3vhaMyTPBEalnYh4I5v3yA" className="social-icon" title="Youtube" rel="noreferrer" target="_blank"><i className="icon-youtube"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="widget">
                                    <h4 className="widget-title">Useful Links</h4>

                                    <ul className="widget-list">
                                        <li><a href="about.html">About Shop</a></li>
                                        <li><a href="/">How to shop</a></li>
                                        <li><a href="/">FAQ</a></li>
                                        <li><a href="/">Contact us</a></li>
                                    
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="widget">
                                    <h4 className="widget-title">Customer Service</h4>

                                    <ul className="widget-list">
                                        <li><a href="/">Payment Methods</a></li>
                                        <li><a href="/">Money-back guarantee!</a></li>
                                        <li><a href="/">Returns</a></li>
                                        <li><a href="/">Shipping</a></li>
                                        <li><a href="/">Terms and conditions</a></li>
                                        <li><a href="/">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="widget">
                                    <h4 className="widget-title">My Account</h4>

                                    <ul className="widget-list">
                                        <li><a href="/">Sign In</a></li>
                                        <li><a href="/">View Cart</a></li>
                                        <li><a href="/">My Wishlist</a></li>
                                        <li><a href="/">Track My Order</a></li>
                                        <li><a href="/">Help</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <figure className="footer-payments">
                            <img src={Image1} alt="Payment methods" width="272" height="20" />
                        </figure>
                        <img src={Logo} alt="FooterLogo" width="102" height="45" />
                        <p className="footer-copyright">Copyright © 2022 OlajazzNFT. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
            
        </div>
    )
}

export default Footer
