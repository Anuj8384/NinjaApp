import React, {Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import twitter from './twitter.png'

class Home extends Component {

  state = {
    posts: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=> {
      // console.log(res)
      this.setState({posts: res.data.length>0 ? res.data.slice(10,15): []})
    }).catch(err =>{
    });
  }

  render(){
    const { posts } = this.state;

    const postList = posts.length ? (
     posts.map(post => {
       return (
         <div className="post card" key={post.id} >
           <img src={twitter} alt="twitter" height="150px" width="128px" ></img>
           <div className="card-content" >
           <Link to={'/post/'+post.id} >
       <span className="card-title green-text">{post.title}</span>
         </Link>

     <p>{post.body}</p>
           </div>
         </div>
       )
     })
    ) : (<div className="center">No Post Yet</div>)

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    )
  }
}

export default Home