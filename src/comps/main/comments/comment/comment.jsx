import React from 'react';
import './comment.css';

const Comment = (props) => {

  return(
    <section className="comment">
      <img className="comment__img" src={require(`./comments_img/${props.comment.img}`)} alt="Фото выполненных работ"/>
      <h3 className="comment__h3">{props.comment.name}</h3>
      <p className="comment__socnet">{props.comment.socnet}</p>
      <p className="comment__comment">{props.comment.comment}</p>

    </section>
  );
}

export default Comment;
