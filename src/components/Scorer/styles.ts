import styled from "styled-components";

interface StoneProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
`;

export const Row = styled.button`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  color: #fff;
  background: #5cc398;
  padding: 10px;
`;

export const ResetButton = styled.button`
  display: flex;
  justify-content: center;
  height: 40px;

  color: #fff;
  background: #57ba91;

  font-size: 18px;
  font-weight: bold;
`;

export const PointList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;

  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  ul > li {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const Total = styled.span`
  display: flex;
  flex-grow: 2;
  justify-content: flex-end;
  font-size: 200px;
`;

export const Stone = styled.button<StoneProps>`
  background: transparent;
  opacity: ${(props) => (props.selected ? 1 : 0.4)};
`;
