import React from 'react';
import {
  AppContainer,
  NavBarContainer,
  MainSectionContainer,
  FooterContainer
} from './style.js';
import { Navbar } from './Navbar/Navbar.js';
import { Footer } from './Footer/Footer.js';
import { Main } from './Main/Main.js';

function App() {
  return (
    <AppContainer>
      <NavBarContainer>
        <Navbar />
      </NavBarContainer>
      <MainSectionContainer>
        <Main />
      </MainSectionContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </AppContainer>
  );
}

export default App;
