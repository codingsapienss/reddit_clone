/* eslint-disable react/prop-types */

const Input = ({ className, ...restProps }) => {
  return (
    <input
      className={
        "bg-reddit_dark-brighter text-reddit_text p-2 border border-reddit_dark-brightest rounded-md block " +
        className
      }
      {...restProps}
    ></input>
  );
};

export default Input;
