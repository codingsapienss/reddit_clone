/* eslint-disable react/prop-types */
const Button = ({ outline, className, ...rest }) => {
  let classNames =
    "border border-gray-300 rounded-full px-3 py-1 text-sm font-bold h-8";

  if (outline) {
    classNames += " text-gray-300 ";
  } else {
    classNames += " bg-gray-300 text-reddit_dark";
  }

  return <button {...rest} className={classNames + " " + className}></button>;
};

export default Button;
