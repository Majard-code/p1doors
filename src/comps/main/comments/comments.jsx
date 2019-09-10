import React from 'react';
import './comments.css';
import { useComments } from '../../../libs/useComments';
import useGlobal from '../../../store';
import Comment from './comment/comment';
import { showMoreComments } from '../../../libs/actions1';

const Comments = () => {
  console.log('перерисовка Comments');
  const [state, dispatch] = useComments(useGlobal()[0].comments.data);
  return (
    <section className="comments">
      <h2>ОТЗЫВЫ</h2>
      <div className="comments__block">
        {state.data.map((comment) => <Comment key={comment.id} comment={comment} />)}
      </div>
      <div className="comments__btns">
        <div className="comments__btn" onClick={() => dispatch(showMoreComments())}>Еще отзывы</div>
        <div className="comments__btn">Оставить отзыв</div>
      </div>
    </section>
  );
}

export default Comments;
