import React from 'react';

import styled from 'styled-components';

const StyledBioSection = styled.section`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0 50px;
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (max-width: 480px) {
    padding-bottom: 10vh;
  }

  h1,
  h3 {
    margin: 0 0 15px;
  }

  h1 {
    font-size: 16px;
  }

  h2 {
    font-size: 70px;
    font-weight: 600;
    margin: 0;
    @media (max-width: 480px) {
      font-size: 40px;
    }
  }

  p {
    font-size: 16px;
    font-weight: 400;
    margin-top: 0;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const Bio = () => {
  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Ryan Apellanes</h2>;
  const three = <h3 className="big-heading">& i do dev stuff.</h3>;
  const four = (
    <>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
        rerum. Ipsa quod repellat hic dolor praesentium amet animi, explicabo
        quidem odit vitae adipisci soluta a quisquam magnam voluptatum atque
        nobis. .
      </p>
    </>
  );

  const items = [one, two, three, four];

  return (
    <StyledBioSection>
      <>
        {items.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </>
    </StyledBioSection>
  );
};

export default Bio;
