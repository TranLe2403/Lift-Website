import React from 'react'
import Link from "./Link";

function Img () {
  return (
    <div>
      <Link href="/">
      <img src="https://cutt.ly/jwpgf2R" alt="logo" className="logo_img" />
      </Link>
      <style jsx>
        {`
      .logo_img {
        background: #444141;
      }
      `}
      </style>
    </div>
  );
}

export default Img