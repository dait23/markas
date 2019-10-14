import React, { Component } from 'react';
class Slider extends Component {

  render() {
  		
    return (


     
      <div className="slider" id="slider">
        <div className="slider-img"><img src="images/slider.jpg" alt="slider"  />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="slider-captions">
                            <h1 className="slider-title">Lorem Ipsum Dolor. </h1>
                            <p className="slider-text hidden-xs">The low rate you need for the need you want! Call
                                <br/>
                                <strong className="text-highlight">(62) 123-4567</strong></p>
                            <a href="team" className="btn btn-default hidden-xs">Register Now</a> </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="slider-img"><img src="images/slider-01.jpg" alt="slider" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="slider-captions">
                                <h1 className="slider-title"> Lowest Loan Rate <strong className="text-highlight">1.60%</strong> </h1>
                                <p className="slider-text hidden-xs"> We provide an excellent service Loan company. Lorem ipsum simple dummy content goes here.</p>
                                <a href="/" className="btn btn-default hidden-xs">Check Eligiblity</a> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
     
    );
  }
}



export default Slider

