import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  state = {
    post: null
  };
  componentDidMount() {
    let id = this.props.match.params.post_id;
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(res => {
        this.setState({ post: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    let postList = this.state.post ? (
    //   <div className="post card" key={this.state.post.id}>
        <div className="card-content">
          <span className="card-title">{this.state.post.title}</span>
          <p>{this.state.post.body}</p>
        </div>
    //   </div>
    ) : (
      <div className="center">
        <p>Loading...</p>
      </div>
    );

    return (
      <div className="container">
        <h4 style={{ textAlign: "center" }}>Post</h4>
        <div className="post card">
          <div className="card-content">{postList}</div>
        </div>
      </div>
    );
  }
}
export default Post;
