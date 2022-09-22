import { PageTitle } from 'components/common/common';
import { AppUrl } from 'consts';
import * as S from './not-found.styled';

const NotFound = () => (
  <S.Main>
    <PageTitle>404 Not Found</PageTitle>
    <S.Link to={AppUrl.Home}>На главную</S.Link>
  </S.Main>
);

export default NotFound;