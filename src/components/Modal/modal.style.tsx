import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: min(calc(100% - 32px), 760px);
  outline: 0;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(16, 25, 29, 0.64);
  backdrop-filter: blur(3px);
  z-index: 500;
`;

export const StyledModal = styled.div`
  z-index: 100;
  background: #edf4ef;
  position: relative;
  margin: auto;
  border: 5px solid #252b31;
  border-radius: 15px;
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.35);
`;

export const Header = styled.div`
  border-radius: 9px 9px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background: linear-gradient(135deg, #e44751, #b92436);
`;

export const HeaderText = styled.div`
  color: white;
  align-self: center;
  font-size: .78rem;
  font-weight: 800;
  letter-spacing: .12em;
`;

export const CloseButton = styled.button`
  font-size: 1rem;
  border: 2px solid #252b31;
  border-radius: 5px;
  margin-left: 0.5rem;
  background: #f8faf8;
  :hover {
    cursor: pointer;
  }
  color: #a51d2c;
`;

export const Content = styled.div`
  padding: clamp(12px, 3vw, 22px);
  max-height: min(70vh, 38rem);
  overflow-x: hidden;
  overflow-y: auto;
`;
