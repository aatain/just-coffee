import React from 'react';
import coffeeIcon from '../../assets/images/coffee-cup.png';

const Post = props => {
    console.log('props', props)
    let time = new Date(props.post.created_time).toLocaleString()
    return (
        <div className='post'>
            <p className=''>Posted: {time} </p>
            <p className=''>{props.post.message}</p>
            <button className='btn btn-coffee' onClick={() => props.incrementLikes(props.index)}>Brewing on this? Click!  <img alt="Click to like" src={coffeeIcon} width="25" height="25" /></button>
            <div>{props.post.count || 0}</div>
        </div>
    )
}

export default Post;