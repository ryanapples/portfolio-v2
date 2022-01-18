import React from 'react';
import styled from 'styled-components';
import bioAvatar from '../assets/bio-ra-avatar.png';

const Wrapper = styled.div`
  margin-top: 100px;
  padding: 0 20px;
`;

const Image = styled.img.attrs({
  src: `${bioAvatar}`,
})`
  border-radius: 180px;
  width: 180px;
  max-width: 100%;
  display: block;
  margin: 0 auto;
  vertical-align: middle;
`;

const Name = styled.h1`
  font-size: 33px;
  font-weight: 700;
  margin: 20px auto;
  text-align: center;
`;

const BioContent = styled.p`
  font-size: 15px;
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
