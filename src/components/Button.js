
const Button = (props) => {

  const { buttonText, onClick, disabled } = props;

  return (
    <button
      className="text-[white]
      text-base
      p-1
      border-2
      border-[darkGreen]
      rounded-md
      bg-[darkGreen]"
      onClick={onClick}
      disabled={disabled}
    >{buttonText}</button>
  );
};
export default Button;
 