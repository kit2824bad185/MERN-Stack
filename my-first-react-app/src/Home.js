import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page of our React application!</p>
      <button onClick={() => navigate("/about")}>Go to About</button>
    </div>
  );
}

export default Home;