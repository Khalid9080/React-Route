
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import '../Clients/Clients.css';

const Posts = () => {

    const posts=useLoaderData();

    return (
        <div >
            <h2>Posts: {posts.length}</h2>
            <div className="clients">
                {
                    posts.map((post,id)=> <Post key={id}  post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;