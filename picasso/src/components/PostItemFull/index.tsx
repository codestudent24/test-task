import { FC } from "react";
import { Post } from "../../api/api.types";
import './postItemFull.css';

interface IPostItemProps {
  post: Post
}

export const PostItemFull: FC<IPostItemProps> = ({ post }) => {
  return (
    <div className="container-full">
      <h1 className="container-full__title">
        {post.title}
      </h1>
      <h2 className="container-full__number">
        Id: {post.id}
      </h2>
      <p className="container-full__text">
        {post.body}
      </p>
    </div>
  )
}