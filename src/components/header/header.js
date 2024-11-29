import React from 'react';
import './header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header-wrap">
                <div className="header-left">
                    <div className="header-logo">런메이트</div>
                    <nav className="header-menu">
                        <a href="/">과외찾기</a>
                        <a href="/">프로필</a>
                        <a href="/">커뮤니티</a>
                    </nav>
                </div>
                <div className="header-right">
                    <div className="header-auth">
                        <button className="login-btn">로그인</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;