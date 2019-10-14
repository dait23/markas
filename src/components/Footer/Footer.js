import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
    <div>
      <div className="footer section-space80">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="footer-logo">
                        
                        <img src="images/logo-whitex.png" alt="kaslancar" />
                     </div>
          
                </div>
                <div className="col-md-8 col-sm-8 col-xs-12">
                    <div className="col-md-5">
                        <h3 className="newsletter-title">Signup Our Newsletter</h3>
                    </div>
                    <div className="col-md-7">
                        <div className="newsletter-form">
                            <form action="/" method="post">
                                <div className="input-group">
                                    <input type="email" className="form-control" id="newsletter" name="newsletter" placeholder="Write E-Mail Address" required />
                                    <span className="input-group-btn">
                                    <button className="btn btn-default" type="submit">Go!</button>
                                    </span>
                                </div>
                                
                            </form>
                        </div>
          
                    </div>
     
                </div>
            </div>
            <hr className="dark-line" />
            <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="widget-text mt40">
                     
                        <p>Kaslancar  is to Invoice Marketplace at insight competitive interest rates lorem ipsums. We are the loan provider, you can use our loan product.</p>
                        <div className="row">
                            <div className="col-md-6 col-xs-6">
                                <p className="address-text"><span><i className="icon-placeholder-3 icon-1x"></i> </span>Jakarta, Indonesia </p>
                            </div>
                            <div className="col-md-6 col-xs-6">
                                <p className="call-text"><span><i className="icon-phone-call icon-1x"></i></span>+62 800-123-456</p>
                            </div>
                        </div>
                    </div>
               
                </div>
                <div className="col-md-2 col-sm-4 col-xs-6">
                    <div className="widget-footer mt40">
                        <ul className="listnone">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">News</a></li>
                            <li><a href="/">Faq</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                    </div>
         
                </div>
                <div className="col-md-2 col-sm-4 col-xs-6">
                    <div className="widget-footer mt40">
                        <ul className="listnone">
                            <li><a href="/">Personal Invoice</a></li>
                            <li><a href="/">Invoice Pro</a></li>
                           
                        </ul>
                    </div>
                </div>
                <div className="col-md-2 col-sm-4 col-xs-12">
                    <div className="widget-social mt40">
                        <ul className="listnone">
                            <li><a href="/"><i className="fa fa-facebook"></i>Facebook</a></li>
                            <li><a href="/"><i className="fa fa-google-plus"></i>Google Plus</a></li>
                            <li><a href="/"><i className="fa fa-twitter"></i>Twitter</a></li>
                            <li><a href="/"><i className="fa fa-linkedin"></i>Linked In</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="tiny-footer">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-6">
                    <p>© Copyright 2017 | kaslancar.com - All Right Reversed</p>
                </div>
                <div className="col-md-6 col-sm-6 text-right col-xs-6">
                    <p>Terms of use | Privacy Policy</p>
                </div>
            </div>
        </div>
    </div>
    <a href="#0" className="cd-top" title="Go to top">Top</a>  
    </div>
    )
  }
}

export default Footer;
