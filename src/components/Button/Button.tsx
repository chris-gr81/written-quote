import "./Button.scss";

type ButtonProps = {
  className: string;
  btnText: string;
  onClick?: (...args: any[]) => any;
};

export function Button({ className, btnText, onClick }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {btnText}
    </button>
  );
}

export default Button;
