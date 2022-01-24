import React from 'react';

// Styles
import './App.css';
import styled from 'styled-components';

// Components
import Bio from './Bio';
import Header from './Header';
import About from './About';
import Social from './Social';

// About Icons
import knowledge from '../assets/about/knowledge.png';
import coding from '../assets/about/coding.png';
import contact from '../assets/about/contact.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 100px;
  width: 100%;
`;

const gridList = [
  {
    item_header: 'Always Growing',
    icon: knowledge,
    icon_attr: 'School icons created by Freepik - Flaticon',
  },
  {
    item_header: 'Work Experience',
    icon: coding,
    icon_attr: 'Web development icons created by Freepik - Flaticon',
  },
  {
    item_header: 'Contact',
    icon: contact,
    icon_attr: 'Contacts icons created by Freepik - Flaticon',
  },
];

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Bio />
        <About gridList={gridList} />
      </Container>
      <Social />
    </div>
  );
};

export default App;
