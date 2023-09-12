import PropTypes from 'prop-types';
import Bookmark from './Bookmark';


const Sidebar = ({ bookmark }) => {
    return (
        <div className="px-5">
            <div className='bg-[#f0edfe] py-5 px-5 mb-6 rounded-xl font-bold text-2xl'>
                <h2>Spent time on read : 120 min</h2>
            </div>
            <div className="bg-[#f3f3f3] p-5 rounded-xl grid gap-4">
                <h2 className='font-bold text-2xl'>Bookmarked Blogs : {bookmark.length}</h2>
                {
                    bookmark.map(bookmark => <Bookmark  key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    bookmark: PropTypes.array,
}
export default Sidebar;

