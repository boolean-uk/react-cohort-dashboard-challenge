/* eslint-disable react/prop-types */
import Postpagelistitem from '../Postpage/Postpagelistitem';

export default function Postpage({ posts, API_BASE_URL }) {
  return (
    <div className="entrycontainer">
      <ul className="entrylist">
        {posts
          .map((post, index) => (
            <Postpagelistitem
              key={index}
              post={post}
              API_BASE_URL={API_BASE_URL}
            />
          ))
          .reverse()}
      </ul>
    </div>
  );
}