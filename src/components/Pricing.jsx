import React from 'react'
import { Link } from 'react-router-dom'

export default function Pricing({ data }) {
    return (
        <>
            <section id="pricing" class="pricing-area pt-110">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="section-title text-center pb-30">
                                <h3 class="title">{data ? data.title : "loading"}</h3>
                                <p class="text">{data ? data.desc : 'loading'}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        {
                            data ?
                                data.Pricingbox.map(item =>
                                    <div class="col-lg-4 col-md-7 col-sm-9">
                                        <div class={`single-pricing ${item.cls} text-center mt-30 wow fadeIn`} data-wow-duration="1.3s" data-wow-delay="0.2s">
                                            <div class="pricing-shape">
                                                <img src="assets/images/price-shape.png" alt="" />
                                            </div>
                                            <div div class="pricing-title">
                                                <h4 class="title">{item.title}</h4>
                                            </div>
                                            <div class="pricing-price">
                                                <span class="price">{item.price}</span>
                                                <p class="text">{item.text}</p>
                                            </div>
                                            <div class="pricing-list">
                                                <ul class="list">
                                                    <li>Increase traffic 130%</li>
                                                    <li>Backlink analysis</li>
                                                    <li>Organic traffic 215%</li>
                                                    <li>10 Free Optimization</li>
                                                    <li>24/7 support</li>
                                                </ul>
                                            </div>
                                            <div class="pricing-btn">
                                                <Link class="main-btn" to="/">{item.pricing_btn}</Link>
                                            </div>
                                        </div>
                                    </div>
                                ) : 'loading'
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
