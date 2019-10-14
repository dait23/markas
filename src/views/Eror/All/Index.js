import React, { Component } from 'react';


class Page404 extends Component {

  render() {
  		
    return (


     
      <div className="mt80">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="wrapper-content bg-white pinside60">
                        <div className="row">
                            <div className="col-md-offset-3 col-md-6 col-sm-12">
                                <div className="error-img mb60">
                                    <img src="images/error-img.png" className="img-responsive" alt="404" />
                                </div>
                                <div className="error-ctn text-center">
                                    <h2 className="msg">Sorry</h2>
                                    <h1 className="error-title mb40">Page Not Found</h1>
                                    <p className="mb40">The webpage you were trying to reach could not be found on the server, or that you typed in the URL incorrectly.</p>
                                    <a href="/" className="btn btn-default text-center">go to homepage</a>
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



export default Page404

