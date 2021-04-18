import React from 'react'
import { Link } from 'react-router-dom'

function Footer({ data }) {
    return (
        <>
            <footer id="footer" class="footer-area">
                <div class="footer-shape shape-1"></div>
                <div class="footer-shape shape-2"></div>
                <div class="footer-shape shape-3"></div>
                <div class="footer-shape shape-4"></div>
                <div class="footer-shape shape-5"></div>
                <div class="footer-shape shape-6"></div>
                <div class="footer-shape shape-7"></div>
                <div class="footer-shape shape-8">
                    <img class="svg" src="assets/images/footer-shape.svg" alt="Shape" />
                </div>
                <div class="footer-widget pt-30 pb-80">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <div class="footer-about mt-50 wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.2s">
                                    <Link class="logo" to="/">
                                        <img src="assets/images/logo.png" alt="Logo" />
                                    </Link>
                                    <p class="text">{data ? data.address : 'loading'}</p>
                                    <ul class="social">
                                        <li>
                                            <Link to="/"><i class="lni lni-facebook"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="/"><i class="lni lni-twitter"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="/"><i class="lni lni-instagram"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="/"><i class="lni lni-linkedin"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-6">
                                <div class="footer-link d-flex flex-wrap">
                                    <div class="footer-link-wrapper mt-45 wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.4s">
                                        <div class="footer-title">
                                            <h4 class="title">{data ? data.ttl1 : 'loading'}</h4>
                                        </div>
                                        <ul class="link">
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/">Features</Link></li>
                                            <li><Link to="/">Testimonial</Link></li>
                                            <li><Link to="/">Pricing</Link></li>
                                            <li><Link to="/">Contact</Link></li>
                                        </ul>
                                    </div>
                                    <div class="footer-link-wrapper mt-45 wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.6s">
                                        <div class="footer-title">
                                            <h4 class="title">{data ? data.ttl2 : 'loading'}</h4>
                                        </div>
                                        <ul class="link">
                                            <li><Link to="/">FAQ</Link></li>
                                            <li><Link to="/">Privacy Policy</Link></li>
                                            <li><Link to="/">Terms Of Use</Link></li>
                                            <li><Link to="/">Legal</Link></li>
                                            <li><Link to="/">Site Map</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="footer-contact mt-45 wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.8s">
                                    <div class="footer-title">
                                        <h4 class="title">{data ? data.ttl3 : 'loading'}</h4>
                                    </div>
                                    <ul class="contact-list">
                                        <li>
                                            <div class="contact-info d-flex">
                                                <div class="info-content media-body">
                                                    <p class="text"><i class="lni lni-phone"></i> +809272561823</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="contact-info d-flex">
                                                <div class="info-content media-body">
                                                    <p class="text">
                                                        <Link to="/"><i class="lni lni-envelope"></i> <span class="__cf_email__" data-cfemail="7f161119103f1e0f0f131e111b511c1012">[email&#160;protected]</span></Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="contact-info d-flex">
                                                <div class="info-content media-body">
                                                    <p class="text">
                                                        <Link to="/"><i class="lni lni-world"></i> www.yourweb.com</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="contact-info d-flex">
                                                <div class="info-content media-body">
                                                    <p class="text"><i class="lni lni-map"></i> 123 Stree New York City , United States Of America 750.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="copyright d-sm-flex justify-content-between">
                                    <div class="copyright-text text-center">
                                        <p class="text">Crafted by <a href="https://github.com/shivkumarprajapat">Shivkumar</a></p>
                                    </div>
                                    <div class="copyright-privacy text-center">
                                        <Link to="/">Report Issues</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <Link to="/" class="back-to-top"><i class="lni lni-chevron-up"></i></Link>
        </>
    )
}


export default Footer