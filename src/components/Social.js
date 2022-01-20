import React from 'react';
import styled from 'styled-components';

const SocialWrapper = styled.div`
  position: fixed;
  bottom: 15px;
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 20px 20px 0;
`;

const ListItem = styled.li`
  list-style-type: none;
  padding-right: 10px;
`;

const Social = () => {
  return (
    <SocialWrapper>
      <List>
        <ListItem>Linkedin</ListItem>
        <ListItem>Github</ListItem>
        <ListItem>Instagram</ListItem>
        <ListItem>Twitter</ListItem>
      </List>
    </SocialWrapper>
  );
};

export default Social;
