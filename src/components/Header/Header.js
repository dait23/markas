import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
     <div>
        <div className="collapse searchbar" id="searchbar">
          <div className="search-area">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="input-group">
                              <input type="text" className="form-control" placeholder="Search for..." />
                              <span className="input-group-btn">
              <button className="btn btn-default" type="button">Go!</button>
              </span> </div>
    
                      </div>
        
                  </div>
              </div>
          </div>
      </div>
      <div className="top-bar">
          <div className="container">
              <div className="row">
                  <div className="col-md-4 hidden-xs hidden-sm">
                      <p className="mail-text">Welcome to Kaslancar - Invoice Marketplace</p>
                  </div>
                  <div className="col-md-8 col-sm-12 text-right col-xs-12">
                      <div className="top-nav"> <span className="top-text hidden-xs"><a href="mailto:info@kaslancar.com">info@kaslancar.com</a> </span> <span className="top-text"><a href="tel:621234567">+62 123-4567</a></span> <span className="top-text"><a href="login">Login | Register</a></span> </div>
                  </div>
              </div>
          </div>
      </div>


          <div className="header">
        <div className="container">
            <div className="row">
                <div className="col-md-2 col-sm-12 col-xs-6">
                    <div className="logo">
                        <a href="/"><img src="/images/logox.png" alt="logo" /></a>
                    </div>
                </div>
                <div className="col-md-9 col-sm-12 col-xs-12">
                    <div id="navigation" className="hidden-xs">
                    
                        <ul>
                            <li className="active"><a href="/" className="animsition-link">Home</a>
                            
                            </li>
                            <li><a href="/products" className="animsition-link">Product</a>
                                <ul>
                                    <li><a href="/product/personal-invoice" title="Personal Invoice" className="animsition-link">Personal Invoice</a></li>
                                    <li><a href="/product/invoice-pro" title="Invoice Pro" className="animsition-link">Invoice Pro</a></li>
                                </ul>
                            </li>
                            <li><a href="/about-us" className="animsition-link">About us</a>
                                
                            </li>
                            <li><a href="/blog" className="animsition-link">Blog</a>
                            </li>
                            <li><a href="/how-it-works" className="animsition-link">How it Works</a>
                    
                            </li>
                            <li><a href="/contact-us" title="Contact us" className="animsition-link">Contact us</a></li>
                        </ul>
                    </div>


                    <div id="navigation" className="small-screen hidden-sm hidden-lg"><div id="menu-button">Menu</div>
                        <ul style={{display: 'none'}}>
                            <li className="active has-sub"><span className="submenu-button"></span><a href="index.html" className="animsition-link">Home</a>
                            
                            </li>
                            <li className="has-sub"><span className="submenu-button"></span><a href="loan-listing-image.html" className="animsition-link">Product</a>
                            
                            </li>
                            <li className="has-sub"><span className="submenu-button"></span><a href="about.html" className="animsition-link">About us</a>
                                
                            </li>
                            <li className="has-sub"><span className="submenu-button"></span><a href="blog-listing.html" className="animsition-link">Blog</a>
                                
                            </li>
                            <li className="has-sub"><span className="submenu-button"></span><a href="compare-loan.html" className="animsition-link">Features</a>
                                
                            </li>
                            <li><a href="contact-us.html"  className="animsition-link">Contact us</a></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="col-md-1 hidden-sm">
                
                    <div className="search-nav"> <a className="search-btn" role="button" data-toggle="collapse" href="#searchbar" aria-expanded="false"><i className="fa fa-search"></i></a> </div>
                </div>
           
            </div>
        </div>
    </div>
    </div>
    );
  }
}


export default Header;
