import React from 'react';
import styled from 'styled-components';
import { useTrail, animated } from 'react-spring';

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
    padding: 0 80px;
  }

  @media (max-width: 480px) {
    padding: 0 24px 0;
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
    font-size: 90px;
    font-weight: var(--font-w-bold);
    margin: 0;

    @media (max-width: 821px) {
      font-size: 70px;
    }

    @media (max-width: 480px) {
      font-size: 45px;
    }

    @media only screen and (max-height: 575.98px) and (orientation: landscape) {
      font-size: 45px;
    }
  }

  h3 {
    font-family: var(--font-mono);
    font-weight: var(--font-w-semibold);
    font-size: 40px;
    font-style: italic;
    margin-top: 5px;

    @media (max-width: 480px) {
      font-size: 24px;
    }

    @media only screen and (max-height: 575.98px) and (orientation: landscape) {
      font-size: 22px;
    }
  }

  p {
    font-family: var(--font-sans);
    font-size: 20px;
    font-weight: var(--font-w-regular);
    max-width: 550px;
    margin-top: 20px;

    @media (max-width: 480px) {
      font-size: 16px;
      max-width: 100%;
      padding-right: 15px;
    }

    @media only screen and (max-height: 575.98px) and (orientation: landscape) {
      font-size: 16px;
    }
  }
`;

const Bio = () => {
  const headerOne = <h1>Ohayo! My name is</h1>;
  const headerTwo = <h2 className="header-large">Ryan Apellanes</h2>;
  const headerThree = <h3 className="header-large">& i do dev stuff.</h3>;
  const paragraph = (
    <>
      <p>
        Front End Engineer with an affinity towards learning about our growing
        world of technology. Developing within Web2, but actively curious of
        Web3. A proud crazy cat dad for Kiki and Loafie, and lover of spooky
        podcasts.
      </p>
    </>
  );

  const items = [headerOne, headerTwo, headerThree, paragraph];
  const trail = useTrail(items.length, {
    config: { mass: 3, tension: 789, friction: 100 },
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: 30 },
    delay: 400,
  });

  return (
    <StyledBioSection>
      <>
        {trail.map(({ ...style }, i) => (
          <animated.div key={i} style={style} className="trail-item">
            {items[i]}
          </animated.div>
        ))}
      </>
    </StyledBioSection>
  );
};

export default Bio;
