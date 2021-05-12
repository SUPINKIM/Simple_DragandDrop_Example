import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  height: 50px;
  border: 1px solid #273c75;
  margin: 10px;
  text-align: center;
  line-height: 50px;
  background-color: #fff;
  &:hover,
  :active {
    background-color: #f7d794;
  }
`;

const Span = styled.div`
  width: 100%;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ num }) => {
  return (
    <Container>
      <Span>Drag and Drop 예제 카드 {num}</Span>
    </Container>
  );
};
