import React from 'react'
import '../styles/_footer.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="Footer">
              <a
          href="https://www.instagram.com/lajamadjulieta/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="icon_ig" />
        </a>
        </div>

    )
}

export default Footer
