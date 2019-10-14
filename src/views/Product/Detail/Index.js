import React, { Component } from 'react';
import {MainLink} from '../../../config/Api'


class DetailProduct extends Component {

  render() {
  		
    return (
    <div>
      
      <div className="container mt100">
        <div className="row">
            <div className="col-md-12">
                <div className="wrapper-content bg-white pinside40">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="card-details">
                                <div className="card-head-sections">
                                    <div className="row">
                                        <div className="col-lg-3">
                   
                                            <div className="card-img">
                                                <a href="/"><img src="/images/card-1.png" alt={MainLink} /></a>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <h2 className="card-name"><a href="/" className="title">Borrow Money Card</a></h2>
                                            <p>You now don't have to spend more on your Rewards Credit Card to earn extra reward points. Simple way to reward your points.</p>
                                        </div>
                                        <div className="col-lg-2"> <a href="/" className="btn btn-default btn-sm">Apply Now</a></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <h3>Top reasons to get the Rewards Credit Card</h3>
                                        <ul className="listnone bullet bullet-check-circle-default">
                                            <li>Earn 10 Reward Points for every Rs 125 spent at apparel & department stores and select partners.</li>
                                            <li>Continue earning Reward Points at rate of 1 point for every Rs 125 on all other purchases.</li>
                                            <li>Redeem points instantly at select partners.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="st-tabs">
                                       
                                            <ul className="nav nav-tabs nav-justified" role="tablist">
                                                <li role="presentation" className="active"><a href="#service1" aria-controls="service1" role="tab" data-toggle="tab">Benefits & Features</a></li>
                                                <li role="presentation"><a href="#service2" aria-controls="service2" role="tab" data-toggle="tab">Fees & Charges</a></li>
                                                <li role="presentation"><a href="#service3" aria-controls="service3" role="tab" data-toggle="tab">Redeem Rewards</a></li>
                                                <li role="presentation"><a href="#service4" aria-controls="service4" role="tab" data-toggle="tab">Borrow Privileges</a></li>
                                            </ul>
                           
                                            <div className="tab-content">
                                                <div role="tabpanel" className="tab-pane fade in active" id="service1">
                                                    <h3>Earn unlimited 10X reward points at select partners</h3>
                                                    <ul className="listnone bullet bullet-check-circle-default">
                                                        <li>Earn unlimited 10X reward points at select partners </li>
                                                        <li>Maecenas sit amet tellus at ligula condimentumgravida ei pharetra eulla eu justo mvariusam. </li>
                                                        <li>Aliquam erat volucongue lectus. Morbi p. Sed consequat metus tortor, vel rhoncus orci tempor vel.</li>
                                                        <li>Luctus quam quis mi sagittis venuis consequat facnunc amet fermentumum. </li>
                                                    </ul>
                                                    <h3>Welcome rewards</h3>
                                                    <ul className="listnone bullet bullet-check-circle-default">
                                                        <li>Get 1,500 bonus points on your first spend made within 30 days of card issue. </li>
                                                        <li>Get 1,000 bonus points on your first spend of Rs. 1000 made within 60 days of card issue. </li>
                                                    </ul>
                                                    <h3>Earn bonus reward points</h3>
                                                    <ul className="listnone bullet bullet-check-circle-default">
                                                        <li>Bonus on monthly Spends: Get 300 bonus points on card spends of $1500 or more in a month.</li>
                                                        <li>Maecenas pharetra augue ut nibh blandit, eget pellentesque orci rhoncus.</li>
                                                    </ul>
                                                    <h3>Points that never expire</h3>
                                                    <ul className="listnone bullet bullet-check-circle-default">
                                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                                        <li>Phasellus nec nisl eu metus porttitor consequat.</li>
                                                    </ul>
                                                </div>
                                                <div role="tabpanel" className="tab-pane fade" id="service2">
                                                    <h3>Flexibility Fee and Charges</h3>
                                                    <div className="fee-charges-table">
                                                        <ul className="list-group">
                                                            
                                                            <li className="list-group-item">
                                                                <div className="row">
                                                                    <div className="col-lg-4">Interest Rate</div>
                                                                    <div className="col-lg-8">3.25% per month (40% per annum). This can change periodically based on your spend, payback and utilization patterns.</div>
                                                                </div>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <div className="row">
                                                                    <div className="col-lg-4">Annual Fee</div>
                                                                    <div className="col-lg-8">Your annual fee of Rs1000 is waived on making spends of Rs30,000 in a membership year.</div>
                                                                </div>
                                                            </li>
                                                            
                                                        </ul>
                                                        <p>For further details, please <a href="/">Click here</a></p>
                                                    </div>
                                                </div>
                                                <div role="tabpanel" className="tab-pane fade" id="service3">
                                                        <h3>Fuel</h3>
                                                        <ul className="listnone bullet bullet-check-circle-default"><li>Instant redemption at over 1200 participating oil outlets.</li>
                                                        <li> Redemption rate at oil outlets: 1 Reward Point = Rs 0.25 | Minimum Points required to redeem: 250.</li>
                                                        </ul>
                                                        <h3>In-Store Shopping</h3>
                                                        <ul className="listnone bullet bullet-check-circle-default"><li> Instant redemption at select partner stores.</li>
                                                        <li>Redemption rate at stores: 1 Reward Point = INR 0.30 | Minimum Points required to redeem: 250.</li>
                                                        </ul>
                                                        <h3>Air miles</h3>
                                                        <ul className="listnone bullet bullet-check-circle-default"><li>Redemption rate for air miles: 1 Reward Point = 0.75 miles | Minimum Points required to redeem: 100.</li></ul>
                                                        <h3>Cash back</h3>
                                                        <ul className="listnone bullet bullet-check-circle-default"><li>Adjust points against your Statement outstanding.</li>
                                                        <li>Redemption rate for cash back: 1 Reward Point = Rs 0.35 | Minimum Points required to redeem: 5,000.</li>
                                                        </ul>
                                                </div>
                                                <div role="tabpanel" className="tab-pane fade" id="service4">
                                                    <h3>Personal Concierge Services</h3>
                                                    <p>Call your concierge for help with planning a party, sending flowers, making dining reservations, for travel assistance.</p>
                                                    <div className="fee-charges-table">
                                                        <ul className="list-group">
                                                            <li className="list-group-item">
                                                                <div className="row">
                                                                    <div className="col-lg-4">Dining Privileges</div>
                                                                    <div className="col-lg-8">Up to 15% savings across participating restaurants.</div>
                                                                </div>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <div className="row">
                                                                    <div className="col-lg-4">Shopping Privileges</div>
                                                                    <div className="col-lg-8">Enjoy savings and offers several stores in your City.</div>
                                                                </div>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <div className="row">
                                                                    <div className="col-lg-4">EMI Privileges</div>
                                                                    <div className="col-lg-8">Choose easy EMI options at more than 2,000 consumer electronics and mobile phone 
outlets, leading retail chains and e-retailers.</div>
                                                                </div>
                                                            </li>
                                                            
                                                        </ul>
                                                         
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </div>
    );
  }
}



export default DetailProduct

