import { PropsWithChildren } from 'react';
import * as S from './page-subtext.styled';

const PageSubtext = ({ children, ...props }: PropsWithChildren) => (
  <S.PageSubtext {...props}>{children}</S.PageSubtext>
);

export default PageSubtext;
