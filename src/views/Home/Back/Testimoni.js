import React, { Component } from 'react';


class Testimoni extends Component {

  render() {
    return (

   <section className="fullwidth margin-top-70 padding-top-55 padding-bottom-70" data-background-color="#fff">

	<div className="container">

		<div className="row">
			<div className="col-md-8 col-md-offset-2">
				<h3 className="headline centered">
					What Our Users Say
					<span className="margin-top-25">We collect reviews from our users so you can get an honest opinion of what an experience with our website are really like!</span>
				</h3>
			</div>
		</div>

	</div>



	<div className="fullwidth-carousel-container margin-top-20">
		<div className="testimonial-carousel testimonials">


			<div className="fw-carousel-review">
				<div className="testimonial-box">
					<div className="testimonial">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation is on the runway heading towards a streamlined cloud solution user generated content.</div>
				</div>
				<div className="testimonial-author">
					<img src="images/happy-client-01.jpg" alt="" />
					<h4>Jennie Smith </h4>
				</div>
			</div>
			
		
			<div className="fw-carousel-review">
				<div className="testimonial-box">
					<div className="testimonial">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop.</div>
				</div>
				<div className="testimonial-author">
					<img src="images/happy-client-02.jpg" alt="" />
					<h4>Tom Baker </h4>
				</div>
			</div>

	
			<div className="fw-carousel-review">
				<div className="testimonial-box">
					<div className="testimonial">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view.</div>
				</div>
				<div className="testimonial-author">
					<img src="images/happy-client-03.jpg" alt="" />
					<h4>Jack Paden </h4>
				</div>
			</div>

		</div>
	</div>


</section>
    );
  }
}

export default Testimoni;
