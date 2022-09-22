import { PropsWithChildren } from 'react';
import * as S from './page-heading.styled';

const PageHeading = ({ children, ...props }: PropsWithChildren) => (
  <S.PageHeading {...props}>{children}</S.PageHeading>
);

export default PageHeading;
