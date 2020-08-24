import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Container = styled.div`
  margin-top: 40px;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
`;

const Nombre = styled.h2`
  font-size: 1.2em;
  font-weight: normal;
  margin: 0 20px;
`;

const Created = styled.h3`
  font-size: 0.8em;
  margin: 10px 60px;
`;

const Description = styled.p`
  font-size: 1em;
  color: #acacac;
`;

const Imagen = styled.img`
  width: 40px;
`;

const Etiqueta = styled.h4`
  background: #222;
  border-radius: 25px;
  padding: 0 15px;
  width: max-content;
  display: flex;
  justify-content: center;
  color: #fcfcfc;
`;

function Gist (props) {
  return (
    <Container>
      <Head>
        <Imagen src={props.img}/>
        <Nombre>{props.name}</Nombre>
      </Head>
      <Created>{props.time}</Created>
      <Description>{props.description}</Description>
      <Etiqueta>{props.etiqueta}</Etiqueta>
      <SyntaxHighlighter language="javascript" showLineNumbers="true" style={docco}>
        {props.code}
      </SyntaxHighlighter>
    </Container>
  );
}

export default Gist;
