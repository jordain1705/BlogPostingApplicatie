import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchPost} from '../actions';
import {Link} from 'react-router-dom';

class PostsShow extends Component {

  // as soon as the component shows op on the screen. ComponentDidMount
  componentDidMount() {
    const {id} = this.props.match.params; // takes the wild card
    this.props.fetchPost(id);
  }

  render() {
    const {post} = this.props;

    if (!post) {
      return <div>Loading....</div>;
    }

    return (
      <div>
        <Link className= "btn btn-warning"to= "/"> Back TO Index </Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// now we need to take that post that's fetched out of our application level
// state and put it into our component wit mapstatetoProps()
function mapStateToProps({
  posts
}, ownProps) {
  return {
    post: posts[ownProps.match.params.id]
  }
}; // now instead of returnig the big list of post we return the post we care about

export default connect(mapStateToProps, {fetchPost})(PostsShow);
