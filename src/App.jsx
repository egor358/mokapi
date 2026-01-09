import { useDispatch } from "react-redux";
import "./App.css";
import { useState } from "react";git
import { fetchData } from "./state/dataSlice";
import { useSelector } from "react-redux";
function App() {
  const [showPosts, setshowPosts] = useState(false);
  const dispatch = useDispatch();
  // const allData = useSelector((state) => state.posts.posts);
  // const isLoading = useSelector((state) => state.posts.isLoading);
  // const error = useSelector((state) => state.posts.error);
  const { posts, isLoading, error } = useSelector((state) => state.posts);
  console.log(posts);

  const fetchPosts = () => {
    dispatch(fetchData("https://jsonplaceholder.typicode.com/posts"));
  };

  return (
    <button onClick={fetchPosts} disabled={isLoading}>
      {isLoading ? "loading..." : "getPosts"}
    </button>
  );
}

export default App;
