import "./Logo.scss";
import { NavLink } from "react-router-dom";

export interface ILogo {
  letters: string[];
  text?: string;
}

const letters = ["c", "a", "v", "e", "p", "o", "t"];

export const Logo = () => {
  return (
    <>
      <NavLink className={`img-wrapper-header`} to="/">
        {letters.map((letter, index) => (
          <div key={index} id={letter}></div>
        ))}
      </NavLink>
    </>
  );
};