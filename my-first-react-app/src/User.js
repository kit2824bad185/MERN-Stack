import { useParams } from "react-router-dom";
function User() {
    const { id } = useParams();
    return (
        <div>
            <h2>User page{id}</h2>
            <p>user ID: {id}</p>
            <a href="/Home">Go to Home Page</a>
        </div>
    );
}

export default User;