/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Post = ({ title, summary, cover, createdAt, author, _id }) => {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={`http://localhost:4000/${cover}`} alt="img" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a href="" className="author">
            {author.username}
          </a>
          <time>{format(new Date(createdAt), "d MMM, yyyy HH:mm")}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
};
export default Post;
