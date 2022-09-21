import logo from 'assets/img/logo.svg';
import { AppUrl } from 'consts';
import * as S from './header.styled';

const Header = () => (
  <S.StyledHeader>
    <S.HeaderWrapper>
      <S.Logo>
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.Logo>

      <S.Navigation>
        <S.Links>
          <S.LinkItem>
            <S.Link $isActiveLink to={AppUrl.Home}>
              Квесты
            </S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to="#">Новичкам</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to="#">Отзывы</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to="#">Акции</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to={AppUrl.Contacts}>Контакты</S.Link>
          </S.LinkItem>
        </S.Links>
      </S.Navigation>
      <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
);

export default Header;
