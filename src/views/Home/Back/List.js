import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import 'moment/locale/id';

class ListBlog extends Component {

  static propTypes = {
    blog: PropTypes.object,
    refresh: PropTypes.func,
  }

   constructor(props) {
    super(props);
    //this.handleChange = this.handleChange.bind(this)
  }

  render () {

  	//var xxx = '/slider/edit/'+this.props.slider.id;
    return (

    	<div className="col-md-4">
				<a href={`/blog/${this.props.blog.slug}`} className="blog-compact-item-container">
					<div className="blog-compact-item">
						<img src={this.props.blog.imageUrl} alt={this.props.blog.title} />
						<span className="blog-item-tag">{this.props.blog.category.name}</span>
						<div className="blog-compact-item-content">
							<ul className="blog-post-tags">
								<li>
									<Moment locale="id" format="LL">
						                {this.props.blog.createdAt}
						            </Moment>
								</li>
							</ul>
							<h3>{this.props.blog.title}</h3>
													</div>
					</div>
				</a>
			</div>
     
                    
    )
  }

}

export default ListBlog
