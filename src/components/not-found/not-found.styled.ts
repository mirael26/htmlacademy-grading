import { Link as RouterLink } from 'components/common/common';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  max-width: 556px;
  margin: 150px auto;
`;

const Link = styled(RouterLink)`
  display: flex;
  align-items: center;

  max-width: 100%;
  margin: 0;
  padding-top: 22px;
  padding-right: 47px;
  padding-bottom: 23px;
  padding-left: 48px;

  font-family: inherit;
  font-size: ${({ theme }) => theme.font.upperbase};
  line-height: 20px;
  letter-spacing: 0.03em;
  font-weight: 800;
  text-transform: uppercase;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.tangerine};
  border: none;
  border-radius: 65px;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.color.carrotOrange};
  }

  &:active {
    opacity: 0.8;
  }
`;

export {
  Main,
  Link,
};