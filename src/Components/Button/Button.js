import s from "./Button.module.css";

const Button = ({ onLoadMore }) => (
  <button className={s.Button} type="button" onClick={onLoadMore}>
    <span>Load more</span>
  </button>
);
export default Button;
