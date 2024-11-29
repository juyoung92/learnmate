import React from 'react';
import Header from '../../components/header/header';
import Search from '../../components/search/search';
import CardView from '../../components/card-view/card-view';
import './main.css';

function Main() {
  return (
      <div className="main-page">
        <Header />
        <div className="main-content">
          <Search />
          <CardView />
        </div>
      </div>
  );
}

export default Main;