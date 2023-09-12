import PropTypes from 'prop-types';
import Author from './Author';

const Post = ({ post, handleAddToBookmark, handleReadingTime }) => {
    const {cover, title, author_img, author, reading_time, posted_date, hashtags} = post
    // console.log("p",post);
    // console.log(hashtags);
    return (
        <div>
            <div className="w-full p-5">
                <figure><img src={cover} alt="Cover Photo" className='w-full' /></figure>
                <Author name={author} image={author_img} readTime={reading_time} posted={posted_date}  handleAddToBookmark={() => handleAddToBookmark(post)}></Author>
                <div className="">

                    <div className="space-y-4">
                        <h2 className="text-4xl">{title}</h2>
                        <p>
                            {
                               hashtags.map((hash, index) => <span key={index}>#{hash} </span>) 
                            }
                        </p>
                        <p>
                            <button className="underline" onClick={() => handleReadingTime(reading_time)}>Mark as read</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object,
    handleAddToBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func,
}
export default Post;