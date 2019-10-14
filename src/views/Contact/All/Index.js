import React, { Component } from 'react';


class Contact extends Component {

  render() {
  		
    return (


     
          <div className="mt100">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="wrapper-content bg-white pinside40">
                        <div className="contact-form mb60">
                            <div>
                                <div className="col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                                    <div className="mb60  section-title text-center  ">
                                        <h1>Get In Touch</h1>
                                        <p>Reach out to us &amp; we will respond as soon as we can.</p>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <div className="contact-us mb60">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mb60  section-title">
                                        <h1>We are here to help you </h1>
                                        <p className="lead">Various versions have evolved over the years sometimes by accident sometimes on purpose injected humour and the like.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-xs-12">
                                    <div className="bg-boxshadow pinside60 outline text-center mb30">
                                        <div className="mb40"><i className="icon-briefcase icon-2x icon-default"></i></div>
                                        <h2 className="capital-title">Branch Office</h2>
                                        <p>Jakarta
                                            <br /> Indonesia</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-xs-12">
                                    <div className="bg-boxshadow pinside60 outline text-center mb30">
                                        <div className="mb40"><i className="icon-phone-call icon-2x icon-default"></i></div>
                                        <h2 className="capital-title">Call us at </h2>
                                        <h1 className="text-big">+62 21 12345678 </h1>
                                    </div>
                                </div>
                                <div className="col-md-4 col-xs-12">
                                    <div className="bg-boxshadow pinside60 outline text-center mb30">
                                        <div className="mb40"> <i className="icon-letter icon-2x icon-default"></i></div>
                                        <h2 className="capital-title">Email Address</h2>
                                        <p>lnfo@kaslancar.com</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="map" id="googleMap"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
  }
}



export default Contact

