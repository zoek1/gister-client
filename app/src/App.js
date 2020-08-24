import React from 'react';
import styled from 'styled-components';
import './App.css';
import Gist from './Gist.jsx';
import Navbar from './Navbar.jsx';

const gists =[
  {
    "img" : "/",
    "name" : "Miguel Angel Gordian",
    "time" : "Created 3 hours ago",
    "description" : "Update the gist pendiente",
    "etiqueta" : "diff",
    "code" : "(num) => num + 1 "
  },
  {
    "img" : "/",
    "name" : "Mónica Benitez",
    "time" : "Created an hour ago",
    "description" : "Update the gist pendiente",
    "etiqueta" :
                [
                  "diff",
                  "plaintext"
                ],
    "code" : "(num) => num + 1 "
  }
]

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
        {
          gists.map(gist => <Gist
                              img={gist.img}
                              name={gist.name}
                              time={gist.time}
                              description={gist.description}
                              etiqueta={gist.etiqueta}
                              code={gist.code}/>)
        }
      </Content>
    </div>
  );
}

export default App;
