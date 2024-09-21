import { RiRedditLine } from "react-icons/ri";
const PostForm = () => {
  return (
    <>
      <div className="bg-reddit_dark px-6 py-4">
        <div className="bg-reddit_dark-brighter border-reddit_border text-gray-600 p-2 rounded-md flex items-center">
          <div className="rounded-full bg-gray-500 overflow-hidden w-10 h-10 flex items-center justify-center">
            <RiRedditLine className="w-8 h-8 " />
          </div>

          <form
            action=""
            className="flex-grow bg-reddit_dark-brighter border border-reddit_border rounded-md  ml-4 mr-2"
          >
            <input
              type="text"
              className="bg-reddit_dark-brighter  p-2 px-3 text-sm w-full  text-white outline-none"
              placeholder="New Post"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default PostForm;
