import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const baseURL = import.meta.env.VITE_BASE_URL;
    fetch(`${baseURL}/api/posts`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div>
      <h1>Recent Posts</h1>
      {post.map((post) => (
        <Link key={post.id} to={`/post/${post.id}`}>
          <h2>{post.title}</h2>
        </Link>
      ))}
    </div>
  );
}

export default Home;
