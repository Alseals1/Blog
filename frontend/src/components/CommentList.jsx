import React, { useEffect, useState } from "react";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const baseURL = import.meta.env.VITE_BASE_URL;
        const res = await fetch(`${baseURL}/api/comments/post/${postId}`);

        const data = await res.json();
        console.log("Fetched comments:", data);
        setComments(data);
      } catch (err) {
        console.error("Failed to load comments:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  if (loading) return <p>Loading comments...</p>;
  if (!comments.length) return <p>No comments yet.</p>;

  return (
    <div className="space-y-4 mt-6">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="border p-4 rounded-md shadow-sm bg-white"
        >
          <p className="text-gray-800">{comment.content}</p>
          <p className="text-sm text-gray-500 mt-2">
            — {comment.anonymous ? "Anonymous" : comment.User?.name || "🕵🏽‍♂️"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
