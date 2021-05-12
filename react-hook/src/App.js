import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const OuterContainer = styled.div`
  width: 1000px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  background-color: #f1c40f;
`;

function App() {
  const items = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
  ];

  return (
    <OuterContainer>
      {items.length &&
        items.map((x, idx) => (
          <Section key={idx} nums={x} index={idx}></Section>
        ))}
    </OuterContainer>
  );
}

export default App;
