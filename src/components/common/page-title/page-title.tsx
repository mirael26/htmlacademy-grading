import { PropsWithChildren } from 'react';
import * as S from './page-title.styled';

const PageTitle = ({ children, ...props }: PropsWithChildren) => (
  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;
