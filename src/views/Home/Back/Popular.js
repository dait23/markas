import React, { Component } from 'react';

class Popular extends Component {
  render() {
    return (

		<div className="container">
			<div className="row">

				<div className="col-md-12">
					<h3 className="headline centered margin-bottom-35 margin-top-70">Popular Destinations <span>Browse listings in popular places</span></h3>
				</div>
				
				<div className="col-md-6">

		
					<a href="/" className="img-box" data-background-image="images/lombok.jpg">
						<div className="img-box-content visible">
							<h4>Lombok</h4>
							<span>14 Destinations</span>
							<br /><br />
							<a href="/" className="button"><i className="im im-icon-Geo3-"></i>Plan My Trip</a>
						</div>
						
					</a>

				</div>	
					
				<div className="col-md-6">


					<a href="/" className="img-box" data-background-image="images/bali.jpg">
						<div className="img-box-content visible">
							<h4>Bali</h4>
							<span>24 Destinations</span>
						</div>
					</a>

				</div>	

				<div className="col-md-8">

	
					<a href="/" className="img-box" data-background-image="images/raja.jpg">
						<div className="img-box-content visible">
							<h4>Raja Ampat</h4>
							<span>12 Destinations</span>
						</div>
					</a>

				</div>	
					
				<div className="col-md-4">

					<a href="/" className="img-box" data-background-image="images/raja.jpg">
						<div className="img-box-content visible">
							<h4>Papua</h4>
							<span>9 Destinations</span>
						</div>
					</a>

				</div>

			</div>
		</div>
    );
  }
}

export default Popular;
