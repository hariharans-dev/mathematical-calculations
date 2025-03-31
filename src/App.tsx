import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { apiFetch } from "../api/trial";

const API_URL =
  "http://ec2-13-203-74-111.ap-south-1.compute.amazonaws.com:3000";

interface Post {
  id: number;
  title: string;
  body: string;
}

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiFetch(API_URL, "GET")
      .then((data) => setPosts(String(data)))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div>
          <h1>Posts</h1>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <ul>{posts}</ul>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
