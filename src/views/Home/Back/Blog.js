import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import ListBlog from './List';
import { graphql, gql } from 'react-apollo';
import PropTypes from 'prop-types';



class Blog extends Component {

 static propTypes = {
    data: PropTypes.object,
    refresh: PropTypes.func,
  }
  
   constructor(props) {
    super(props);
   // this.forceUpdate();
    //this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
       this.forceUpdate();
  }

  render() {

  	if (this.props.data.loading) {
      return (<div><p>Loading...</p></div>)
    }

    return (
      <div>
    <section className="fullwidth border-top margin-top-70 padding-top-75 padding-bottom-75" style={{backgroundColor:'#e8e8e8'}} data-background-color="#e8e8e8">
	<div className="container">

		<div className="row">
			<div className="col-md-12">
				<h3 className="headline centered margin-bottom-45">
					From The Blog
				</h3>
			</div>
		</div>

		<div className="row">
		
			
		
         {this.props.data.allBlogs.map((blog) => (
            <ListBlog
              key={blog.id}
              blog={blog}
              refresh={() => this.props.data.refetch()}
            />
          ))}



			<div className="col-md-12 centered-content">
				<a href="/blogs" className="button border margin-top-10">View Blog</a>
			</div>

		</div>

	</div>

</section>
   </div>
    );
  }
}

const FeedQuery = gql`query allBlogs {
  allBlogs (orderBy: createdAt_DESC, first:3) {
    id
    title
    slug
    description
    category{
      name
    }
    imageUrl
    imageId
    createdAt
  }
}`

const ListPageWithData = graphql(FeedQuery)(Blog)

export default ListPageWithData
