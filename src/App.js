import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Footer from './components/Footer';
import FooterSocialInfoPart from './components/FooterSocialInfoPart.js';

// components
import Header from './components/Header';
import Main from './components/Main';

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
`

export default class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
