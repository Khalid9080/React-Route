

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Post = ({post}) => {
    const {id, title, body} = post;
    const postStyle={
        border: '2px solid yellow',
        borderRadius:'1rem',
        margin:'5px',
        padding:'10px',
        text: 'left',
    }

    const navigate=useNavigate();

    const handleShowDetail=()=>{
        navigate(`/post/${id}`);

    }

    return (
        <div style={postStyle}>
            <h4>Post of Id:{id}</h4>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={`/post/${id}`}><button>Post Detail</button></Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};
Link
Post.propTypes = {
    post:PropTypes.object.isRequired,
   
}
export default Post;