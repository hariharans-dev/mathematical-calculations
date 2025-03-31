import { useEffect, useState } from "react";
import { apiFetch } from "../../api/trial";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

interface Post {
  id: number;
  title: string;
  body: string;
}

const FetchExample = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiFetch<Post[]>(API_URL)
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchExample;
