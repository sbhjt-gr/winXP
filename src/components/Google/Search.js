import React, { useState } from 'react';
import styled from 'styled-components';

import find from './find.svg';
import smile from './smile.svg';

function Search({ className, goMain, onSearch, query }) {
  const [value, setValue] = useState(query);
  const [tag, setTag] = useState('Apps');
  function onChange(e) {
    setValue(e.target.value);
  }
  function onClick() {
    onSearch(value);
  }
  function onKeyDown(e) {
    if (e.key !== 'Enter') return;
    onSearch(value);
  }
  function renderTags() {
    return 'Apps,Games,Movies,Books,Children,Premium'
      .split(',')
      .map(tagName => (
        <div
          onClick={() => setTag(tagName)}
          className={`tag ${tagName === tag ? 'active' : ''}`}
          key={tagName}
        >
          {tagName}
        </div>
      ));
  }
  return (
    <div className={className}>
      <section className="top-bars">
        <div className="top-bar">
          <div className="bar-items left">
            <img
              onClick={goMain}
              className="logo"
              src="https://www.the-gorai-portfolio.com/playstore_logo.png"
              alt="Play Store"
            />
            <div className="search-bar">
              <input
                id="search"
                type="text"
                name="search"
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
              />
              <div className="icon">
                <img
                  src="https://www.the-gorai-portfolio.com/microphone.png"
                  alt="microphone"
                />
              </div>
              <div className="icon" onClick={onClick}>
                <img src={find} alt="find" />
              </div>
            </div>
          </div>
          <div className="bar-items right">
            <div className="functions">
              <img src={smile} alt="user profile" />
            </div>
          </div>
        </div>
        <div className="app-bar">
          <div className="tags left">{renderTags()}</div>
          <div className="tags right">
            <div className="tag">My apps</div>
            <div className="tag">Settings</div>
          </div>
        </div>
      </section>
      <section className="content">
        <h2>App not found</h2>
        <p>
          Your search - <span id="search-in-content">{query}</span> - did not
          match any applications in the Play Store.
        </p>
        <p>Suggestions</p>
        <ul>
          <li>Check if the app name is spelled correctly.</li>
          <li>Try searching for similar apps.</li>
          <li>Browse the categories for related applications.</li>
          <li>Check if the app is available in your region.</li>
        </ul>

        <div className="featured-apps">
          <h3>Popular Apps</h3>
          <div className="app-grid">
            <div className="app-card">
              <div className="app-icon"></div>
              <div className="app-info">
                <div className="app-name">Sample App 1</div>
                <div className="app-rating">★★★★☆ 4.2</div>
                <div className="app-price">Free</div>
              </div>
            </div>
            <div className="app-card">
              <div className="app-icon"></div>
              <div className="app-info">
                <div className="app-name">Sample App 2</div>
                <div className="app-rating">★★★★★ 4.8</div>
                <div className="app-price">Free</div>
              </div>
            </div>
            <div className="app-card">
              <div className="app-icon"></div>
              <div className="app-info">
                <div className="app-name">Sample App 3</div>
                <div className="app-rating">★★★☆☆ 3.5</div>
                <div className="app-price">$1.99</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <section className="upper">
          <div className="footer-items left">
            <div className="item">Your Country</div>
          </div>
        </section>
        <section className="lower">
          <div className="footer-items left">
            <div className="item">Help</div>
            <div className="item">Send feedback</div>
            <div className="item">Privacy</div>
            <div className="item">Terms</div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default styled(Search)`
  height: 100%;
  background: white;
  padding-top: 22px;
  position: relative;
  .top-bars {
    border-bottom: 1px rgb(235, 235, 235) solid;
  }
  .top-bar {
    height: 44px;
  }
  .app-bar {
    height: 58px;
    margin-left: 154px;
    position: relative;
    width: 584px;
  }
  .bar-items {
    display: flex;
    align-items: center;
    position: relative;
    height: 44px;
  }
  .left {
    position: absolute;
    left: 0;
  }
  .right {
    position: absolute;
    right: 4px;
  }
  .logo {
    width: 150px;
    height: 34px;
    padding: 4px 28px 0 30px;
    cursor: pointer;
  }
  .search-bar {
    display: flex;
    align-items: center;
    border-radius: 22px;
    width: 586px;
    height: 46px;
    border: 1px rgb(223, 225, 229) solid;
    padding: 5px 0 0 20px;
    input {
      outline: 0;
      border: 0;
      flex: 1;
      width: 30px;
      font-size: 16px;
    }
    img {
      width: 24px;
      height: 24px;
    }
    .icon {
      width: 40px;
    }
    .icon:nth-of-type(1) {
      cursor: pointer;
    }
    .icon:nth-of-type(2) {
      fill: rgb(66, 133, 244);
      color: rgb(66, 133, 244);
    }
  }
  .functions {
    display: flex;
    align-items: center;
    height: 100%;
    padding-right: 14px;
    img {
      margin: 8px;
      width: 24px;
      cursor: pointer;
      height: 24px;
    }
  }
  .tags {
    height: 100%;
    display: flex;
    font-size: 13px;
    align-items: center;
    color: rgb(119, 119, 119);
  }
  .tag.active {
    color: #01875f;
    border-bottom: 3px #01875f solid;
    font-weight: 700;
  }
  .tag {
    height: 100%;
    cursor: pointer;
    padding: 28px 16px 0;
    &:hover:not(.active) {
      color: rgb(34, 34, 34);
    }
  }

  .content {
    color: rgb(34, 34, 34);
    padding: 55px 0 0 170px;
    p {
      margin: 16px 0;
    }
    h2 {
      margin-bottom: 16px;
      color: #01875f;
    }
    h3 {
      margin: 32px 0 16px 0;
      color: #01875f;
    }
  }
  #search-in-content {
    font-weight: 700;
  }

  .featured-apps {
    margin-top: 40px;
  }

  .app-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .app-card {
    width: 120px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

  .app-icon {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    background-color: #f1f1f1;
    margin: 0 auto 8px;
  }

  .app-info {
    text-align: center;
  }

  .app-name {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 4px;
  }

  .app-rating {
    font-size: 12px;
    color: #757575;
    margin-bottom: 4px;
  }

  .app-price {
    font-size: 12px;
    color: #01875f;
    font-weight: 500;
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 83px;
    border-top: 1px solid rgba(0, 0, 0, 0.07);
    background-color: rgba(0, 0, 0, 0.05);
    .upper {
      position: relative;
      color: rgba(0, 0, 0, 0.54);
      width: 100%;
      font-size: 15px;
      padding-bottom: 2px;
      height: 50%;
    }
    .lower {
      position: relative;
      border-top: 1px solid rgba(0, 0, 0, 0.07);
      height: 50%;
      color: rgb(95, 99, 104);
      font-size: 13px;
      width: 100%;
      .item {
        cursor: pointer;
      }
      .item:hover {
        text-decoration: underline;
      }
    }
    .footer-items {
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 150px;
      position: relative;
    }
    .left .item {
      margin-right: 27px;
    }
  }
  @media (max-width: 800px) {
    .top-bar {
      height: auto;
    }
    .bar-items.left {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: auto;
      position: relative;
    }
    .bar-items.right {
      display: none;
    }
    .search-bar {
      margin-top: 15px;
      width: 90%;
      height: 40px;
      border-radius: 3px;
      padding: 0px 5px 0 10px;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
      }
    }
    .app-bar {
      margin: 0 15px;
      width: calc(100% - 30px);
      height: 40px;
    }
    .tags {
      display: flex;
      width: 100%;
    }
    .tags.right {
      display: none;
    }
    .tag {
      text-align: center;
      padding: 16px 0 0 0;
      flex: 1;
    }
    .content {
      padding: 10px 40px;
    }
    .footer-items.left {
      padding-left: 25px;
    }
    footer .left .item {
      margin-right: 15px;
    }

    .app-grid {
      justify-content: center;
    }
  }
`;
