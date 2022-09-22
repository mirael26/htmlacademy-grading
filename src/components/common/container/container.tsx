import { PropsWithChildren } from 'react';
import * as S from './container.styled';

const Container = ({ children, ...props }: PropsWithChildren) => (
  <S.Container {...props}>{children}</S.Container>
);

export default Container;
