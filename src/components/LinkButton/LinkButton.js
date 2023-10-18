import { Link } from "react-router-dom";
import "./LinkButton.css";

const LinkButton = ({ link = "/", className }) => {
  return (
    <Link to={link}>
      <div className={`image ${className}`}></div>
    </Link>
  );
};

export default LinkButton;
