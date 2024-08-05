import React from "react";
import logoImg from "../images/logo.svg";
import profileImge from "../images/profile.svg";
import './Header.css';

function Header () {

  const loginBtnTap = () => {
    <button className="loginBtn">로그인</button>
  }

  const profileTap = () => {
    <img src={profileImge} alt="프로필" className="profileImg"/>
  }

  return (
    <header className="headerContain">
      <img src={logoImg} alt="판다마켓" className="logoImg"/>
      <ul className="boardList">
        <li>자유게시판</li>
        <li>중고마켓</li>
      </ul>
      <img src={profileImge} alt="프로필" className="profileImg"/>
    </header>
  );
};

export default Header;
