import PropTypes from "prop-types";
import { FaRegBookmark } from 'react-icons/fa';

const Author = ({name, image, readTime, posted, handleAddToBookmark}) => {
    // console.log(typeof name);
    return (
        <div className="flex items-center justify-between py-5">
            <div className="flex items-center gap-3">
                <img className="w-12 h-12" src={image} />
                <div>
                    <h2>{name}</h2>
                    <p>{posted}</p>
                </div>
            </div>
            <div>
                <p className="flex items-center gap-1">
                    <span>{readTime} min read </span>
                    <button onClick={handleAddToBookmark}><FaRegBookmark></FaRegBookmark></button>
                </p>
            </div>
        </div>
        
    );
};
Author.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    readTime: PropTypes.number,
    posted: PropTypes.string,
    handleAddToBookmark: PropTypes.func,
}
export default Author;