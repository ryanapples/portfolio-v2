import React from 'react';
import styled from 'styled-components';
import bioAvatar from '../assets/bio-ra-avatar.png';

const Wrapper = styled.div`
  padding: 0 20px;
`;

const Image = styled.img.attrs({
  src: `${bioAvatar}`,
})`
  border-radius: 50%;
  width: 100px;
  max-width: 100%;
  display: block;
  margin: 0 auto;
  vertical-align: middle;
`;

const Name = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin: 20px auto;
  text-align: center;
`;

const BioContent = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-top: 0;
  max-width: 400px;
  margin: 0 auto;
`;

const Bio = () => {
  return (
    <Wrapper>
      <Image />
      <Name>Ryan Apellanes</Name>
      <BioContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio voluptas
        odio officia quia quasi obcaecati maxime ipsum incidunt exercitationem
        error. Corrupti tenetur ipsum voluptate, aliquam ex fugiat placeat
        dolorem et!
      </BioContent>
    </Wrapper>
  );
};

export default Bio;
