import React from 'react';
import PageCollection from "./PageCollection";

function MainPage({ displayData }) {

  return (
    <div>
      <PageCollection displayData={ displayData }/> 
    </div>
  )
}

export default MainPage;