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
  padding: 0 130px;
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (max-width: 480px) {
    padding-bottom: 10vh;
  }

  h1,
  h2,
  h3 {
    margin: 0;
  }

  h1 {
    font-family: var(--font-mono);
    font-weight: var(--font-w-semibold);
    font-size: 20px;
    margin-bottom: 20px;
  }

  h2 {
    font-family: var(--font-sans);
    font-size: 80px;
    font-weight: var(--font-w-bold);
    margin: 0;
    @media (max-width: 480px) {
      font-size: 40px;
    }
  }

  h3 {
    font-family: var(--font-mono);
    font-weight: var(--font-w-semibold);
    font-size: 40px;
    font-style: italic;
    margin-top: 10px;
  }

  p {
    font-family: var(--font-sans);
    font-size: 20px;
    font-weight: var(--font-w-regular);
    max-width: 500px;
    margin: 20px auto 0;
    @media (max-width: 480px) {
      max-width: 100%;
      padding-right: 15px;
    }
  }
`;

const Bio = () => {
  const headerOne = <h1>Ohayo! My name is</h1>;
  const headerTwo = <h2 className="big-heading">Ryan Apellanes</h2>;
  const headerThree = <h3 className="big-heading">& i do dev stuff.</h3>;
  const paragraph = (
    <>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
        rerum. Ipsa quod repellat hic dolor praesentium amet animi, explicabo
        quidem odit vitae adipisci soluta a quisquam magnam voluptatum atque
        nobis.
      </p>
    </>
  );

  const items = [headerOne, headerTwo, headerThree, paragraph];

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
