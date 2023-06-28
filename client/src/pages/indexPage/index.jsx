import { useEffect, useState } from "react";
import Post from "../../components/Post";

const IndexPage = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPost(posts);
      });
    });
  }, []);

  return (
    <>
      {posts.length > 0 &&
        posts.map((post, index) => <Post key={index} {...post} />)}
    </>
  );
};

export default IndexPage;
