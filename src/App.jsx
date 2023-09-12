import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Post from "./Components/Post";
import Sidebar from "./Components/Sidebar";
const App = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('./blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = post => {
    const newBookmarks = [...bookmarks, post]
    setBookmarks(newBookmarks);
  }
  const [readingTime, setReadingTime] = useState(0);
  const handleReadingTime = time => {
    const newReadingTime = readingTime + time;
    
    setReadingTime(newReadingTime);
    console.log(readingTime);
  }
  return (
    <>
      <Header></Header>

      <div className="grid grid-cols-3 max-w-screen-xl mx-auto py-5">
        <div className="col-span-2">
          {
            blogs.map(blog => <Post key={blog.id} post={blog} handleAddToBookmark={handleAddToBookmark} handleReadingTime={handleReadingTime}></Post>)
          }
        </div>
        <div className="col-span-1 py-4">
          <Sidebar bookmark={bookmarks}></Sidebar>
        </div>
      </div>
    </>
  );
};

export default App;