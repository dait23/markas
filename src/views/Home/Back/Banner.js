import React, { Component } from 'react';


class Banner extends Component {
  render() {
    return (

    <div>
      <a href="/" className="flip-banner parallax margin-top-65" data-background="images/bali.jpg" data-color="#f91942" data-color-opacity="0.85" data-img-width="2500" data-img-height="1666">
			<div className="flip-banner-content">
				<h2 className="flip-visible">Expolore top-rated attractions nearby</h2>
				<h2 className="flip-hidden">Browse Listings <i className="sl sl-icon-arrow-right"></i></h2>
			</div>
		</a>
    </div>
    );
  }
}

export default Banner;
