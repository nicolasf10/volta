import styled, { keyframes } from "styled-components";

const ProgressBar = styled.div`
  width: 100%;
  height: 16px;
  border-radius: 100px;
  background-color: lightgray;
  position: relative;
  margin: 10px 0px;
`;

const fillAnimation = (fillPercentage) => keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: ${Math.min(fillPercentage, 100)}%;
  }
`;

const Filling = styled.div`
  height: 100%;
  border-radius: 100px;
  background-color: ${(props) => (props.error ? "red" : "limegreen")};
  width: ${(props) => (props.current > props.total ? "100%" : props.fillPercentage + "%")};
  animation: ${(props) => fillAnimation(props.fillPercentage)} 0.7s ease-in-out;
`;

const Progress = ({ total, current }) => {
  const fillPercentage = total > 0 ? (current / total) * 100 : 0;
  const error = current > total;

  return (
    <ProgressBar>
      <Filling fillPercentage={fillPercentage} error={error} total={total} current={current} />
    </ProgressBar>
  );
};

export default Progress;
