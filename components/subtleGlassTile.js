import styled from "@emotion/styled";

const SubtleGlassTile = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0.12%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0) 70%,
    rgba(255, 255, 255, 0.14) 100%
  );

  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    width: 150%;
    left: -25%;
    height: 50%;
    top: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.3) 0.12%,
      rgba(255, 255, 255, 0) 110%
    );
    border-radius: 0 0 100% 100%;
    pointer-events: none;
  }

  border: 1px solid rgba(255, 255, 255, 0.3);

  border-radius: 0.5rem;
  max-width: 100%;
  padding: 1rem;
  backdrop-filter: blur(15px);
  text-align: center;
  display: flex;
  flex-direction: column;

  &.blue-section {
    justify-content: space-between;
    align-items: center;
    width: 12.8rem;
    min-height: 7rem;
    svg,
    img {
      margin: 0 auto;
      width: 2.25rem;
      height: auto;
      color: #3b5acc;
    }
    p {
      margin: auto;
    }
  }
  & > * {
    z-index: 10;
  }
`;

export default SubtleGlassTile;
