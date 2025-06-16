import "./Button.scss";

type ButtonProps = {
  btnType: string;
  btnText?: string;
  btnIcon?: React.ReactNode;
  onClick?: (...args: any[]) => any;
};

export function Button({ btnType, btnText, btnIcon, onClick }: ButtonProps) {
  return (
    <button className={`btn btn__${btnType}`} onClick={onClick}>
      {btnText && <div className="btnText">{btnText}</div>}
      {btnIcon && <div className="btnIcon">{btnIcon}</div>}
    </button>
  );
}

export default Button;
