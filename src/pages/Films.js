import React from 'react';
import {
  Link
} from "react-router-dom";

const Films = () => {
  return (
    <div>
      <h1>Films:</h1>
     <h2> <Link to="/films/she">She</Link></h2>
            <h2> <Link to="/films/hatting">Hatting</Link></h2>
          </div>
  );
}

export default Films
