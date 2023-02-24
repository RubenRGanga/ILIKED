import React, { useState } from 'react';
import axios from 'axios';
import AuthConsumer from "../hooks/useAuth";


function Likes({commentId, title}) {
  const [userId, setUserId] = useState('');
  const [user, dispatch] = AuthConsumer();

  const handleClick = async () => {

    try {
      const res = await axios.post(`http://localhost:3000/films/like`, {
        commentId
      });

      console.log(res)
      // props.updateLikes(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <i onClick={handleClick} id='like' className="fa-solid fa-heart-circle-plus"></i>
  );
}

export default Likes;
