import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchPosts} from '../actions';
import {fetchPost, deletePost} from '../actions';
import {Link} from 'react-router-dom';

class PostsShow extends Component {

  // as soon as the component shows op on the screen. ComponentDidMount
  componentDidMount() {
    const {id} = this.props.match.params; // takes the wild card
    this.props.fetchPost(id);
  }

  onDeleteClick(){
    const {id} = this.props.match.params;
    //action creator
    this.props.deletePost(id, ()=>{
      this.props.history.push('/')
    });

  }

  render() {
    const {post} = this.props;

    if (!post) {
      return <div>Loading....</div>;
    }

    return (
      <div>
        <Link className= "pull-xs-left"to= "/"> Back To Index </Link>

        <button className="btn btn-danger pull-xs-right"
                 onClick= {this.onDeleteClick.bind(this)}
                 >Delete Post
               </button>
        <h3>{post.title}</h3>
        <h6>Categories : {post.categories}</h6>
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

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
