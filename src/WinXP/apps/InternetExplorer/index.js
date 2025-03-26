import React, { useState } from 'react';
import styled from 'styled-components';

import { WindowDropDowns } from 'components';
import dropDownData from './dropDownData';
import ie from 'assets/windowsIcons/ie-paper.png';
import printer from 'assets/windowsIcons/17(32x32).png';
import go from 'assets/windowsIcons/290.png';
import links from 'assets/windowsIcons/links.png';
import search from 'assets/windowsIcons/299(32x32).png';
import favorite from 'assets/windowsIcons/744(32x32).png';
import back from 'assets/windowsIcons/back.png';
import earth from 'assets/windowsIcons/earth.png';
import edit from 'assets/windowsIcons/edit.png';
import forward from 'assets/windowsIcons/forward.png';
import history from 'assets/windowsIcons/history.png';
import home from 'assets/windowsIcons/home.png';
import mail from 'assets/windowsIcons/mail.png';
import msn from 'assets/windowsIcons/msn.png';
import stop from 'assets/windowsIcons/stop.png';
import windows from 'assets/windowsIcons/windows.png';
import dropdown from 'assets/windowsIcons/dropdown.png';
import refreshIcon from 'assets/windowsIcons/refresh.png';

function InternetExplorer({ onClose, isFocus, defaultUrl }) {
  const [state, setState] = useState({
    url: defaultUrl || 'https://myedenfocus.rf.gd/',
    inputUrl: defaultUrl || 'https://myedenfocus.rf.gd/',
    history: [defaultUrl || 'https://myedenfocus.rf.gd/'],
    historyIndex: 0,
  });

  function handleUrlChange(e) {
    setState({
      ...state,
      inputUrl: e.target.value,
    });
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      navigateToUrl();
    }
  }

  function navigateToUrl() {
    let url = state.inputUrl;
    if (!url.startsWith('./') && !url.startsWith('file:///') && !/^https?:\/\//i.test(url)) {
      url = 'https://' + url;
    }
    
    const newHistory = [...state.history.slice(0, state.historyIndex + 1), url];
    setState({
      url: url,
      inputUrl: url,
      history: newHistory,
      historyIndex: newHistory.length - 1,
    });
  }

  function goBack() {
    if (state.historyIndex > 0) {
      const newIndex = state.historyIndex - 1;
      setState({
        ...state,
        url: state.history[newIndex],
        inputUrl: state.history[newIndex],
        historyIndex: newIndex,
      });
    }
  }

  function goForward() {
    if (state.historyIndex < state.history.length - 1) {
      const newIndex = state.historyIndex + 1;
      setState({
        ...state,
        url: state.history[newIndex],
        inputUrl: state.history[newIndex],
        historyIndex: newIndex,
      });
    }
  }

  function refresh() {
    setState({
      ...state,
      url: state.url,
    });
  }

  function goHome() {
    const homeUrl = 'https://myedenfocus.rf.gd/';
    const newHistory = [
      ...state.history.slice(0, state.historyIndex + 1),
      homeUrl,
    ];
    setState({
      url: homeUrl,
      inputUrl: homeUrl,
      history: newHistory,
      historyIndex: newHistory.length - 1,
    });
  }

  function onClickOptionItem(item) {
    switch (item) {
      case 'Close':
        onClose();
        break;
      case 'Home Page':
        goHome();
        break;
      case 'Back':
        goBack();
        break;
      case 'Forward':
        goForward();
        break;
      case 'Refresh':
        refresh();
        break;
      default:
    }
  }

  return (
    <Div>
      <section className="ie__toolbar">
        <div className="ie__options">
          <WindowDropDowns
            items={dropDownData}
            onClickItem={onClickOptionItem}
            height={21}
          />
        </div>
        <img className="ie__windows-logo" src={windows} alt="windows" />
      </section>
      <section className="ie__function_bar">
        <div
          onClick={goBack}
          className={`ie__function_bar__button${
            state.historyIndex === 0 ? '--disable' : ''
          }`}
        >
          <img className="ie__function_bar__icon" src={back} alt="" />
          <span className="ie__function_bar__text">Back</span>
          <div className="ie__function_bar__arrow" />
        </div>
        <div
          onClick={goForward}
          className={`ie__function_bar__button${
            state.historyIndex === state.history.length - 1 ? '--disable' : ''
          }`}
        >
          <img className="ie__function_bar__icon" src={forward} alt="" />
          <div className="ie__function_bar__arrow" />
        </div>
        <div
          className="ie__function_bar__button"
          onClick={() => setState({ ...state, url: 'about:blank' })}
        >
          <img className="ie__function_bar__icon--margin-1" src={stop} alt="" />
        </div>
        <div className="ie__function_bar__button" onClick={refresh}>
          <img
            className="ie__function_bar__icon--margin-1"
            src={refreshIcon}
            alt=""
          />
        </div>
        <div className="ie__function_bar__button" onClick={goHome}>
          <img className="ie__function_bar__icon--margin-1" src={home} alt="" />
        </div>
        <div className="ie__function_bar__separate" />
        <div className="ie__function_bar__button">
          <img
            className="ie__function_bar__icon--normalize"
            src={search}
            alt=""
          />
          <span className="ie__function_bar__text">Search</span>
        </div>
        <div className="ie__function_bar__button">
          <img
            className="ie__function_bar__icon--normalize"
            src={favorite}
            alt=""
          />
          <span className="ie__function_bar__text">Favorites</span>
        </div>
        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon" src={history} alt="" />
        </div>
        <div className="ie__function_bar__separate" />
        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--margin-1" src={mail} alt="" />
          <div className="ie__function_bar__arrow--margin-11" />
        </div>
        <div className="ie__function_bar__button">
          <img
            className="ie__function_bar__icon--margin12"
            src={printer}
            alt=""
          />
        </div>
        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon" src={edit} alt="" />
        </div>
        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--margin12" src={msn} alt="" />
        </div>
      </section>
      <section className="ie__address_bar">
        <div className="ie__address_bar__title">Address</div>
        <div className="ie__address_bar__content">
          <img src={ie} alt="ie" className="ie__address_bar__content__img" />
          <input
            type="text"
            className="ie__address_bar__content__text"
            value={state.inputUrl}
            onChange={handleUrlChange}
            onKeyDown={handleKeyDown}
          />
          <img
            src={dropdown}
            alt="dropdown"
            className="ie__address_bar__content__img"
          />
        </div>
        <div className="ie__address_bar__go" onClick={navigateToUrl}>
          <img className="ie__address_bar__go__img" src={go} alt="go" />
          <span className="ie__address_bar__go__text">Go</span>
        </div>
        <div className="ie__address_bar__separate" />
        <div className="ie__address_bar__links">
          <span className="ie__address_bar__links__text">Links</span>
          <img
            className="ie__address_bar__links__img"
            src={links}
            alt="links"
          />
        </div>
      </section>
      <div className="ie__content">
        <div className="ie__content__inner">
          <iframe
            src={state.url}
            title="Internet Explorer"
            className="ie__content__iframe"
            style={{ width: '100%', height: '100%', border: 'none' }}
            allow="*; clipboard-write; clipboard-read"
            referrerPolicy="no-referrer"
          />
          {!isFocus && (
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                left: 0,
                top: 0,
                pointerEvents: 'none',
              }}
            />
          )}
        </div>
      </div>
      <footer className="ie__footer">
        <div className="ie__footer__status">
          <img className="ie__footer__status__img" src={ie} alt="" />
          <span className="ie__footer__status__text">Done</span>
        </div>
        <div className="ie__footer__block" />
        <div className="ie__footer__block" />
        <div className="ie__footer__block" />
        <div className="ie__footer__block" />
        <div className="ie__footer__right">
          <img className="ie__footer__right__img" src={earth} alt="" />
          <span className="ie__footer__right__text">Internet</span>
          <div className="ie__footer__right__dots" />
        </div>
      </footer>
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);

  .ie__toolbar {
    position: relative;
    display: flex;
    align-items: center;
    line-height: 100%;
    height: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    flex-shrink: 0;
  }
  .ie__options {
    height: 23px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    border-right: 1px solid rgba(0, 0, 0, 0.15);
    padding-left: 2px;
    flex: 1;
  }
  .ie__windows-logo {
    height: 100%;
    border-left: 1px solid white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .ie__function_bar {
    height: 36px;
    display: flex;
    align-items: center;
    font-size: 11px;
    padding: 1px 3px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .ie__function_bar__button {
    display: flex;
    height: 100%;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 3px;
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.1);
    }
    &:hover:active {
      border: 1px solid rgb(185, 185, 185);
      background-color: #dedede;
      box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.7);
      color: rgba(255, 255, 255, 0.7);
      & > * {
        transform: translate(1px, 1px);
      }
    }
  }
  .ie__function_bar__button--disable {
    filter: grayscale(1);
    opacity: 0.7;
    display: flex;
    height: 100%;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
  }
  .ie__function_bar__text {
    margin-right: 4px;
  }
  .ie__function_bar__icon {
    height: 30px;
    width: 30px;
    &--normalize {
      height: 22px;
      width: 22px;
      margin: 0 4px 0 1px;
    }
    &--margin12 {
      height: 22px;
      width: 22px;
      margin: 0 1px 0 2px;
    }
    &--margin-1 {
      margin: 0 -1px;
      height: 30px;
      width: 30px;
    }
  }
  .ie__function_bar__separate {
    height: 90%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.2);
    margin: 0 2px;
  }
  .ie__function_bar__arrow {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 4px;
    &:before {
      content: '';
      display: block;
      border-width: 3px 3px 0;
      border-color: #000 transparent;
      border-style: solid;
    }
  }
  .ie__function_bar__arrow--margin-11 {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 1px 0 -1px;
    &:before {
      content: '';
      display: block;
      border-width: 3px 3px 0;
      border-color: #000 transparent;
      border-style: solid;
    }
  }
  .ie__address_bar {
    border-top: 1px solid rgba(255, 255, 255, 0.7);
    height: 22px;
    font-size: 11px;
    display: flex;
    align-items: center;
    padding: 0 2px 2px;
    box-shadow: inset 0 -2px 3px -1px #2d2d2d;
  }
  .ie__address_bar__title {
    line-height: 100%;
    color: rgba(0, 0, 0, 0.5);
    padding: 5px;
  }
  .ie__address_bar__content {
    border: rgba(122, 122, 255, 0.6) 1px solid;
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    background-color: white;
    position: relative;
    &__img {
      width: 14px;
      height: 14px;
    }
    &__text {
      flex: 1;
      border: none;
      outline: none;
      width: 100%;
      padding: 0 5px;
      font-size: 11px;
    }
  }
  .ie__address_bar__go {
    display: flex;
    align-items: center;
    padding: 0 5px;
    height: 100%;
    position: relative;
    &__img {
      height: 95%;
      border-radius: 3px 0 0 0;
      padding: 3px;
      background-color: #dedede;
      box-shadow: inset 1px 1px 0px white, inset -1px -1px 0px rgb(26, 26, 26);
    }
    &__text {
      line-height: 100%;
      background-color: #dedede;
      height: 95%;
      border-radius: 0 3px 0 0;
      padding: 3px 5px 3px 0px;
      box-shadow: inset 1px 1px 0px white, inset -1px -1px 0px rgb(26, 26, 26);
    }
    &:hover {
      filter: brightness(1.1);
    }
    &:hover:active {
      & > * {
        transform: translate(1px, 1px);
        transition: transform 0.2s;
      }
    }
  }
  .ie__address_bar__separate {
    height: 100%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    margin: 0 2px;
  }
  .ie__address_bar__links {
    display: flex;
    align-items: center;
    padding: 0 7px;
    height: 100%;
    position: relative;
    &__img {
      height: 95%;
      padding: 0 4px;
    }
    &__text {
      line-height: 100%;
      height: 95%;
      padding: 3px 0px;
    }
  }
  .ie__content {
    flex: 1;
    position: relative;
    margin-top: 3px;
    overflow: hidden;
    background-color: white;
    border-top: 1px solid rgba(255, 255, 255, 0.7);
    &__inner {
      width: 100%;
      height: 100%;
      position: relative;
    }
    &__iframe {
      border: none;
      width: 100%;
      height: 100%;
    }
  }
  .ie__footer {
    height: 20px;
    background-color: rgb(236, 233, 216);
    display: flex;
    align-items: center;
    padding-left: 2px;
    font-size: 11px;
    flex-shrink: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  .ie__footer__status {
    display: flex;
    align-items: center;
    height: 80%;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    padding-right: 10px;
    &__text {
      margin-left: 3px;
    }
    &__img {
      height: 13px;
    }
  }
  .ie__footer__block {
    width: 14px;
    height: 80%;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
  .ie__footer__right {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 20px;
    &__text {
      margin-left: 5px;
      margin-right: 20px;
    }
    &__img {
      height: 15px;
    }
    &__dots {
      height: 4px;
      width: 4px;
      border-radius: 50%;
      box-shadow: 0 0 0 2px rgb(90, 90, 90);
      margin: 0 7px;
    }
  }

  @media (max-width: 800px) {
    .ie__function_bar {
      display: none;
    }
    .ie__address_bar {
      display: none;
    }
  }
`;

export default InternetExplorer;
