import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';

const AboutWrapper = styled.section`
  margin-top: 50px;
  width: 100%;
`;

const GridWrapper = styled.ul`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 60px;
  max-width: 650px;
  margin: 0 auto;
  padding: 0 20px;
`;

const GridList = styled.li`
  display: grid;
  grid-template-columns: 70px 1fr;
  grid-gap: 30px;
  text-align: left;
  list-style-type: none;
`;

const ListItemHeader = styled.h3`
  margin: 0;
`;

class About extends React.Component {
  renderGridList() {
    return this.props.gridList.map((item) => {
      return (
        <GridList className="grid-item">
          <div className="icon">
            <Icon icon={item.icon} attr={item.icon_attr} />
          </div>
          <div>
            <ListItemHeader>{item.item_header}</ListItemHeader>
          </div>
        </GridList>
      );
    });
  }

  render() {
    return (
      <AboutWrapper>
        <GridWrapper>{this.renderGridList()}</GridWrapper>
      </AboutWrapper>
    );
  }
}

export default About;
