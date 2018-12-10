// import "../styles/Header.css";
// import React from 'react';

// class Header extends React.Component {
//   render() {
//     return (
//       <div className="header">
//       <strong>Kwitter</strong>
//       {/* insert icon
//      */}
//       </div>
//     );
//   }
// }

// export default Header;

import "../styles/Header.css";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="head">
        <div className="kwitterIcon" />
        <h1>KWITTER</h1>
      </div>
    );
  }
}

export default Header;
