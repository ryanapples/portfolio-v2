import React from 'react';
import styled from 'styled-components';
import SocialIcon from './icons/SocialIcon';
import { useReduceMotion } from 'react-reduce-motion';
import { useTrail, animated } from 'react-spring';

const SocialWrapper = styled.div`
  position: fixed;
  bottom: 25px;
  right: 0;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 0;
  padding: 25px 25px 0;
`;

const ListItem = styled(animated.li)`
  pointer-events: auto;
  list-style-type: none;
  padding-left: 20px;
  width: 24px;
  height: 24px;
`;

const socialArr = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ryanapples/',
  },
  {
    name: 'Github',
    url: 'https://github.com/ryanapples?tab=overview&from=2022-01-01&to=2022-01-24',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/pogitechie/',
  },
];

const Social = () => {
  const reduceMotion = useReduceMotion();
  const trail = useTrail(socialArr.length, {
    config: { mass: 3, tension: 1000, friction: 200 },
    opacity: 1,
    y: 0,
    from: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 20,
    },
    delay: reduceMotion ? 0 : 1000,
  });

  return (
    <SocialWrapper>
      <List>
        {trail.map(({ ...style }, i) => (
          <ListItem key={i} style={style}>
            <a
              href={socialArr[i].url}
              aria-label={`${socialArr[i].name} Icon`}
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon name={socialArr[i].name} />
            </a>
          </ListItem>
        ))}
      </List>
    </SocialWrapper>
  );
};

export default Social;

// {socialArr.map(({ name, url }, i) => (
//   <ListItem key={i}>
//     <a href={url} aria-label={name} target="_blank" rel="noreferrer">
//       <SocialIcon name={name} />
//     </a>
//   </ListItem>
// ))}
