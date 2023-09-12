import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-white p-4 rounded-md">
            <h1>{title}</h1>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.any,
}

export default Bookmark;