import React from 'react';
import {Book, RPage, LPage} from '../Book';

const Short = () => {

  const content = {
    left: [
    <LPage><h2>Hi1</h2></LPage>, 
    <LPage><h2>Hi3</h2></LPage>, 
    <LPage><h2>Hi5</h2></LPage>,
    <LPage><h2>Hi7</h2></LPage>
    ],
    right: [
    <RPage><h2>Hi2</h2></RPage>, 
    <RPage><h2>Hi4</h2></RPage>, 
    <RPage><h2>Hi6</h2></RPage>, 
    <RPage><h2>Hi8</h2></RPage>
  ],
  }

  return (
    <div>
      <Book color={'short-color'} content={content}/>
    </div>
  );
}

export default Short
