import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentList from "../components/CommentList";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const baseURL = import.meta.env.VITE_BASE_URL;
    fetch(`${baseURL}/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Error fetching post:", err));
  }, [id]);

  if (!post) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-6">
          {new Date(post.createdAt).toDateString()}
        </p>
        <div className="text-gray-700 leading-relaxed">{post.content}</div>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Comments
            <CommentList postId={post?.id} />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
