import React, { Component } from 'react';


class Help extends Component {

  render() {
  		
    return (


      <div className="section-space80 bg-white">
        <div className="container">
            <div className="row">
                <div className="col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8">
                    <div className="mb60 text-center section-title">
          
                        <h1>We are Here to Help You</h1>
                        <p>Our mission is to deliver reliable, latest news and opinions.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="bg-white bg-boxshadow pinside40 outline text-center mb30">
                        <div className="mb40"><i className="icon-calendar-3 icon-2x icon-default"></i></div>
                        <h2 className="capital-title">Apply For Loan</h2>
                        <p>Looking to Grow your Bussiness? then apply for loan now.</p>
                        <a href="/" className="btn-link">Get Appointment</a> </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="bg-white bg-boxshadow pinside40 outline text-center mb30">
                        <div className="mb40"><i className="icon-phone-call icon-2x icon-default"></i></div>
                        <h2 className="capital-title">Call us at </h2>
                        <h1 className="text-big">+62 800-123-456  </h1>
                        <p>lnfo@kaslancar.com</p>
                        <a href="/" className="btn-link">Contact us</a> </div>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                    <div className="bg-white bg-boxshadow pinside40 outline text-center mb30">
                        <div className="mb40"> <i className="icon-users icon-2x icon-default"></i></div>
                        <h2 className="capital-title">Talk to Advisor</h2>
                        <p>Need to loan advise? Talk to our Loan advisors.</p>
                        <a href="/" className="btn-link">Meet The Advisor</a> </div>
                </div>
            </div>
        </div>
    </div>
    
    
    );
  }
}



export default Help

