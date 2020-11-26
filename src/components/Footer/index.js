import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="social">
          <ul>
            <li>
              <a rel="noopener noreferrer"
                 target="_blank" href="https://www.facebook.com/voltalivestream">
                  <span
                    uk-icon="icon: facebook; ratio: 2"></span>
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer"
                 target="_blank" href="https://www.instagram.com/voltalivestream">
                    <span
                      uk-icon="icon: instagram; ratio: 2"></span>
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer"
                 target="_blank" href="https://twitter.com/voltalivestream">
                    <span
                      uk-icon="icon: twitter; ratio: 2"></span>
              </a>
            </li>
            <li>
              <a href="mailto:voltalivestream@gmail.com">
                        <span
                          uk-icon="icon: mail; ratio: 2"></span>
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>© 2020 Volta, Inc. All rights reserved.Terms, Privacy, CA Privacy, Copyright, & Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
