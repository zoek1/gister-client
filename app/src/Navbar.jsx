import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #222222;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 0px auto 300px 250px;
  margin: 0 10%;
`;

const Menu = styled.div`
  display: flex;
  justify-content: initial;
`;

const ContentImage = styled.a`
  margin: auto;
  text-decoration: none;
`;

const Imagen = styled.img`
  width: 30px;
  height: 30px;
`;

const ContentList = styled.ul`
  display: flex;
  justify-content: initial;
`;

const List = styled.li`
  list-style: none;
  margin: 0 20px;
`;

const Name = styled.a`
  text-decoration: none;
  color: #fafafa;
`;

const Search = styled.form`
  margin: auto;
`;

function Navbar() {
  return (
    <Nav>
      <Content>
        <ContentImage href="/">
          <Imagen src="/" />
        </ContentImage>
        <Menu>
          <ContentList>
            <List>
              <Name href="/">All gists</Name>
            </List>
            <List>
              <Name className="" href="/">My gists</Name>
            </List>
          </ContentList>
        </Menu>
        <Search>
          <input className="" type="search" placeholder="Search" aria-label="Search"/>
          <button className="" type="submit">Search</button>
        </Search>
        <Menu>
          <ContentList>
            <List>
              <Name href="/">Gist</Name>
            </List>
            <List>
              <Name className="" href="/">Login</Name>
            </List>
          </ContentList>
        </Menu>
      </Content>
    </Nav>
  );
}

export default Navbar;
