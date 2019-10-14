import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import {MainApi} from '../../config/Api/';
class Slider extends Component {

static propTypes = {
    datax: PropTypes.object,
    refresh: PropTypes.func,
  }
  
   constructor(props) {
    super(props);
    this.state = { 
      
    datax:[]
    }
  }



  componentDidMount() {
        this.getData();
  }
 

 getData(){
     var that = this;
     
     var fetch = require('graphql-fetch')(MainApi)
      var query = `
            query allBanners{
              allBanners (orderBy: createdAt_DESC) {
               id
			   title
			   imageUrl

              }
            }
          `
          var queryVars = {
            
          }
          var opts = {
            // custom fetch options
          }


          fetch(query, queryVars, opts).then(function (results) {
            if (results.errors) {
              //...
              return
            }
            //var BlogCategory = results.data.BlogCategory

            that.setState({
              datax : results.data.allBanners,
          

             });
            //...
            console.log(that.state.datax);
          })
  }

 renderSlide(){

 

      return(
      
        <ul>
            <li data-index="rs-1" data-transition="fade" data-slotamount="default"  data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="1000"  data-rotate="0"  data-fstransition="fade" data-fsmasterspeed="800" data-fsslotamount="7" data-saveperformance="off">

		
				<img src="images/bali.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" className="rev-slidebg" data-no-retina data-kenburns="on" data-duration="12000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" />



			</li>


			<li data-index="rs-2" data-transition="fade" data-slotamount="default"  data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="1000"  data-rotate="0"  data-fstransition="fade" data-fsmasterspeed="800" data-fsslotamount="7" data-saveperformance="off">

			
				<img src="images/banner.png" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" className="rev-slidebg" data-no-retina data-kenburns="on" data-duration="12000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" />
		
			

			</li> 
        </ul>
      )
    
 }

  render() {
  		
 
    return (

    <div>
     
     <div id="rev_slider_4_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container" data-alias="classicslider1" style={{margin:'0px', backgroundColor:'transparent', padding:'0px', marginTop:'0px', marginBottom:'0px'}}>

	<div id="rev_slider_4_1" className="rev_slider home fullwidthabanner" style={{display:'none'}} data-version="5.0.7">
	


			{this.renderSlide()}


		
		<div className="tp-static-layers">
			<div className="main-search-container">
	<div className="main-search-inner">

		<div className="container">
			<div className="row">
				<div className="col-md-12">
					

					<div className="main-search-input">

						
						<div className="main-search-input-item">
							<input type="text" placeholder="What are you looking for?" value=""/>
						</div>

						<div className="main-search-input-item location">
							<input type="text" placeholder="Location" value=""/>
							<a href="#"><i className="fa fa-dot-circle-o"></i></a>
						</div>

						<div className="main-search-input-item">
							<select data-placeholder="All Categories" class="chosen-select" >
								<option>All Categories</option>	
								<option>Shops</option>
								<option>Hotels</option>
								<option>Restaurants</option>
								<option>Fitness</option>
								<option>Events</option>
							</select>
						</div>


						<button className="button">GO</button>

					</div>
				</div>
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



export default Slider

