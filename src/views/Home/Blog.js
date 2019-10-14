import React, { Component } from 'react';


class Blog extends Component {

  render() {
  		
    return (


     <div className="section-space80">
        <div className="container">
            <div className="row">
                <div className="col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8">
                    <div className="mb60 text-center section-title">
                        <h1>Latest News</h1>
                        <p> Our mission is to deliver reliable, latest news and opinions.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="post-block mb30">
                        <div className="post-img">
                            <a href="/" className="imghover"><img src="images/blog-img.jpg" alt="title" className="img-responsive" /></a>
                        </div>
                        <div className="bg-white pinside40 outline">
                            <h2><a href="blog-single.html" className="title">Fusce sed erat libasellus</a></h2>
                            <p className="meta"><span className="meta-date">Oct 02, 2017</span><span className="meta-author">By<a href="/"> Admin</a></span></p>
                            <p>Fusce sed erat libasellus id orci quis ligula pret do lectus velit, a malesuada urna sodales eu.</p>
                            <a href="/" className="btn-link">Read More</a> </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="post-block mb30">
                        <div className="post-img">
                            <a href="/" className="imghover"><img src="images/blog-img.jpg" alt="blog" className="img-responsive" /></a>
                        </div>
                        <div className="bg-white pinside40 outline">
                            <h2><a href="blog-single.html" className="title">Nulla vehicula nibh vel malesuada</a></h2>
                            <p className="meta"><span className="meta-date">Oct 02, 2017</span><span className="meta-author">By<a href="/"> Admin</a></span></p>
                            <p>Nulla vehicula nibh vel malesuada dapibus ringilla nunc mi sit amet fbendum sapierttitor nibh. </p>
                            <a href="blog-single.html" className="btn-link">Read More</a> </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="post-block mb30">
                        <div className="post-img">
                            <a href="/" className="imghover"><img src="images/blog-img.jpg" alt="blog" className="img-responsive" /></a>
                        </div>
                        <div className="bg-white pinside40 outline">
                            <h2><a href="/" className="title">Malesuada urna sodales euusce ?</a></h2>
                            <p className="meta"><span className="meta-date">Oct 02, 2017</span><span className="meta-author">By<a href="/"> Admin</a></span></p>
                            <p>Malesuada urna sodales euusce sed erat libasellus id orci quis ligula pretium co ctus velit.</p>
                            <a href="/" className="btn-link">Read More</a> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    );
  }
}



export default Blog

