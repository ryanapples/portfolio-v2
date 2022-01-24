import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 70px;
`;

const Icon = (props) => {
  return (
    <div>
      <Image src={props.icon} alt={props.icon_attr} />
    </div>
  );
};

export default Icon;
