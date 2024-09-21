const BoardHeader = () => {
  return (
    <>
      <div
        className="h-20 bg-cover "
        style={{
          backgroundImage:
            "url('https://styles.redditmedia.com/t5_2r0ij/styles/bannerBackgroundImage_6gx1wewyz5x11.jpg?width=1448&frame=1&auto=webp&s=90485d2793dbfcb7cf22eab90a7f38dbb7f95f5b')",
        }}
      ></div>
      <div className="bg-reddit_dark-brighter">
        <div className="mx-6 relative flex">
          <div className=" h-20 w-20 rounded-full overflow-hidden relative -top-3 border-4 border-reddit_dark-brighter bg-reddit_dark-brighter">
            <img
              src="https://styles.redditmedia.com/t5_2r0ij/styles/communityIcon_yor9myhxz5x11.png"
              alt=""
            />
          </div>

          <div className="pt-2 pl-4">
            <h1 className="text-gray-300 text-3xl">
              webdev : reddit for developers
            </h1>
            <h5 className="text-gray-500 "> r/webdev</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardHeader;
