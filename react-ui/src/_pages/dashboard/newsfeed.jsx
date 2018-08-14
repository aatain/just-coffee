import React from 'react';
import Post from "./post.jsx";

const Newsfeed = props => {
  let newsfeedArr = [], posts;
  if (props.posts) {
    posts = props.posts.data;
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].message) newsfeedArr.push(<Post key={i} index={i} post={posts[i]} incrementLikes={props.incrementLikes} />);
    }
  }
  return (
    <div className="">
      <h1 style={{ textAlign: 'center' }}>Your Daily Roast</h1>
      <div className=''>
        {newsfeedArr}
      </div>
    </div>
  );
}

export default Newsfeed;