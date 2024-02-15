import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Post } from "../../api/api.types";
import './postItem.css';

interface IPostItemProps {
  post: Post
}

export const PostItem: FC<IPostItemProps> = ({ post }) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="container__number">
        {post.id}.
      </div>
      <div className="container__title">
        {post.title}
      </div>
      <div className="container__text">
        {post.body}
      </div>
      <button className='button' onClick={() => {
        navigate(`/${post.id}`)
      }}
      >Посмотреть</button>
    </div>
  )
}