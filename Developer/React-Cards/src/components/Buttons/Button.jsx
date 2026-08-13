import cls from "./Button.module.css";

const Button = ({ children, onClick }) => {
  return (
    <button className={cls.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;