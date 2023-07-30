const Button = (props) => {
  const { buttonText, onClick, disabled, className } = props;

  const defaultClassName =
    "text-white p-1 border-2 border-[darkGreen] rounded-md bg-[darkGreen]";

  const combinedClassName = className ? `${defaultClassName} ${className}` : defaultClassName;

  return (
    <button
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

export default Button;
