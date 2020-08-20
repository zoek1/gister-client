import React from 'react';
import styled from 'styled-components';
import './App.css';
import Gist from './Gist.jsx';
import Navbar from './Navbar.jsx';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10%;
`;

function App() {
  return (
    <div>
      <Navbar/>
      <Content>
        <Gist/>
      </Content>
    </div>
  );
}

export default App;
