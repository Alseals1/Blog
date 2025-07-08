import React, { useState } from "react";

const CommentForm = ({ postId, userId, onCommentAdded }) => {
  const [content, setContent] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    setLoading(true);
    setError("");

    try {
      console.log("Submitting comment:", {
        content,
        postId,
        userId: !anonymous ? userId : null,
        anonymous,
      });
      const res = await fetch("http://localhost:5001/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          postId,
          userId: anonymous ? null : userId,
          anonymous,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to post comment");

      setContent(""); // clear form
      setAnonymous(false);
      onCommentAdded(); // refresh comments
    } catch (err) {
      console.error("POST ERROR:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <textarea
        className="w-full p-3 border rounded-md shadow-sm"
        rows="4"
        placeholder="Write your comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="anonymous"
          checked={anonymous}
          onChange={() => setAnonymous(!anonymous)}
        />
        <label htmlFor="anonymous" className="text-sm text-gray-700">
          Post as Anonymous
        </label>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
      >
        {loading ? "Posting..." : "Post Comment"}
      </button>
    </form>
  );
};

export default CommentForm;
