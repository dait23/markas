import React, { Component } from 'react';


class BestPick extends Component {
  render() {
    return (

    <div>
       <section className="fullwidth margin-top-65 padding-top-5 padding-bottom-70" data-background-color="#f8f8f8">

		<div className="container" >
			<div className="row">

				<div className="col-md-12">
					<h3 className="headline centered margin-top-75">
						Best Picks
						<span>Browse <i>the most desirable</i> collection</span>
					</h3>
				</div>

			</div>
		</div>

		<div className="fullwidth-carousel-container margin-top-25">
			<div className="fullwidth-slick-carousel category-carousel">


				<div className="fw-carousel-item">

					<div className="category-box-container half">
						<a href="/" className="category-box" data-background-image="images/category-box-01.jpg">
							<div className="category-box-content">
								<h3>Hotels</h3>
								
							</div>
							<span className="category-box-btn">Browse</span>
						</a>
					</div>

					<div className="category-box-container half">
						<a href="/" className="category-box" data-background-image="images/bali.jpg">
							<div className="category-box-content">
								<h3>Shops</h3>
								
							</div>
							<span className="category-box-btn">Browse</span>
						</a>
					</div>
				</div>

				<div className="fw-carousel-item">
					<div className="category-box-container">
						<a href="/" className="category-box" data-background-image="images/category-box-03.jpg">
							<div className="category-box-content">
								<h3>Events</h3>
								
							</div>
							<span className="category-box-btn">Browse</span>
						</a>
					</div>
				</div>


				<div className="fw-carousel-item">
					<div className="category-box-container">
						<a href="/" className="category-box" data-background-image="images/category-box-05.jpg">
							<div className="category-box-content">
								<h3>Nightlife</h3>
								
							</div>
							<span className="category-box-btn">Browse</span>
						</a>
					</div>
				</div>

				<div className="fw-carousel-item">
					<div className="category-box-container">
						<a href="/" className="category-box" data-background-image="images/category-box-06.jpg">
							<div className="category-box-content">
								<h3>Eat & Drink</h3>
							
							</div>
							<span className="category-box-btn">Browse</span>
						</a>
					</div>
				</div>

			</div>
		</div>

		</section>
    </div>
    );
  }
}

export default BestPick;
