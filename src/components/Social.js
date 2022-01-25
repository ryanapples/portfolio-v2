import React from 'react';
import styled from 'styled-components';

const SocialWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0 20px;
`;

const ListItem = styled.li`
  pointer-events: auto;
  list-style-type: none;
  padding-right: 15px;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
`;

const Social = () => {
  return (
    <SocialWrapper>
      <List>
        <ListItem>
          <Link target="_blank" href="https://www.linkedin.com/in/ryanapples/">
            Linkedin
          </Link>
        </ListItem>
        <ListItem>
          <Link
            target="_blank"
            href="https://github.com/ryanapples?tab=overview&from=2022-01-01&to=2022-01-24"
          >
            Github
          </Link>
        </ListItem>
        <ListItem>
          <Link target="_blank" href="https://www.instagram.com/pogitechie/">
            Instagram
          </Link>
        </ListItem>
      </List>
    </SocialWrapper>
  );
};

export default Social;
