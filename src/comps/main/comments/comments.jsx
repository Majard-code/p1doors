import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './comments.css';
import Comment from './comment/comment';
import { fetchComments, commentsNextPage } from '../../../redux/reducers/comments';


const Comments = (props) => {
  const page = props.page;
  const comments = props.comments;
  const fetchComments = props.fetchComments;
  const commentsNextPage = props.commentsNextPage;

  useEffect (() => {
    let didCancel = false;
    fetchComments(didCancel, 2, page);
    return () => {didCancel = true};
  }, [page, fetchComments]);

  return (
    <section className="comments" id="comments">
      <h2 className="app__h2">ОТЗЫВЫ</h2>
      <p className="app__sub-h2">ВЫ ТОЖЕ МОЖЕТЕ ОСТАВИТЬ СВОЙ ОТЗЫВ, ЗАПОЛНИВ СПЕЦИАЛЬНУЮ ФОРМУ</p>
      <div className="comments__block">
        {comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
      </div>
      <div className="comments__btns">
        {page < 5 && <div className="comments__btn" onClick={commentsNextPage}>Еще отзывы</div>}
        <div className="comments__btn">Оставить отзыв</div>
      </div>
    </section>
  );
}
const mapStateToProps = (state) => {

  return {
    comments: state.comments.data,
    page: state.comments.page
  }
}
export default connect(mapStateToProps, { fetchComments, commentsNextPage })(Comments);
