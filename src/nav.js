import { BrowserRouter, Link } from "react-router-dom";
import LinkButton from "./components/LinkButton/LinkButton";
import "./nav.css";

export default function Nav(props) {
  return (
    <BrowserRouter>
      <div id="container">
        <LinkButton link="/movies" className="movies-app" />
        <LinkButton link="/news" className="news-app" />
        <LinkButton link="/music" className="music-app" />
      </div>
    </BrowserRouter>
  );
}
