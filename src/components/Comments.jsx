import React, { useEffect, useState } from "react";

function Comments() {
  const API_URL = "https://693c4072b762a4f15c3ffa0f.mockapi.io/api/v1/comment";
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const [newComment, setNewComment] = useState("");
  const [editText, setEditText] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    GET();
  }, []);
  async function GET() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch comments");
      const comments = await response.json();
      setComments(comments);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  }
  async function POST(e) {
    e.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: newComment }),
      });
      if (!response.ok) throw new Error("Failed to create comment");
      GET();
      setComments("");
      setError("");
    } catch (error) {
      setError(error.message);
    }
  }
  async function PATCH(id) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: editText }),
      });
      if (!response.ok) throw new Error("Failed to fetch comments");
      GET();
      setError("");
      setEditText('');
      setEditId(null)
    } catch (error) {
      setError(error.message);
    }
  }
  async function DELETE(id) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to fetch comments");
      GET();

      setError("");
    } catch (error) {
      setError(error.message); // message возвращает fetch
    }
  }

  return (
    <div className="container m-auto mt-5 p-5">
      <h2 className="text-xl font-bold mb-4">Комментарии</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <ul>
        {comments.map((comment) => (
          <li className="mb-2 p-2 border rounded" key={comment.id}>
            {editId === comment.id ? (
              <div className="flex gap-2">
                <input
                  className="border p-1 flex-1"
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={()=>PATCH(comment.id)} className="bg-green-500 text-white px-3 py-1 rounded text-sm cursor-pointer">
                  Сохранить
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <span>{comment.text}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditId(comment.id);
                      setEditText(comment.text);
                    }}
                    className="bg-yellow-500 text-white px-3 py-1 rounded text-sm cursor-pointer"
                  >
                    Изменить
                  </button>
                  <button
                    onClick={() => DELETE(comment.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm cursor-pointer"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <h2>Добавить комментарий</h2>
      <form onSubmit={POST} className="flex gap-2">
        <input
          type="text"
          placeholder="Ваш текст"
          className="border p-2 flex-1"
          required
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Добавить комментарий
        </button>
      </form>
    </div>
  );
}

export default Comments;
