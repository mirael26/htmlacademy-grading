import { PageTitle } from 'components/common/common';
import * as S from './not-found.styled';

const NotFound = () => (
  <S.Main>
    <PageTitle>404 Not Found</PageTitle>
    <S.Link to={'/'}>На главную</S.Link>
  </S.Main>
);

export default NotFound;