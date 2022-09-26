import mapPinImage from 'assets/img/map-pin.png';
import { MainLayout, PageTitle, PageSubtext } from 'components/common/common';
import * as S from './contacts.styled';
import { useEffect } from 'react';

const DG = require('2gis-maps');

const mapPin = DG.icon({
  iconUrl: mapPinImage,
  iconSize: [56, 70],
  iconAnchor: [28, 60],
});

const Contacts = () => {
  
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      DG.then(function() {
        let map;
        map = DG.map('map', {
            'center': [59.96840, 30.31734],
            'zoom': 16
        });
        DG.marker([59.96840, 30.31734], {icon: mapPin}).addTo(map);
      });
    }
    return () => {
      isMounted = false;
    };
  }, [])

  return (
    <MainLayout>
      <S.Main>
        <S.ContentWrapper>
          <S.PageHeading>
            <PageTitle>Контакты</PageTitle>
            <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
          </S.PageHeading>

          <S.Contacts>
            <S.ContactsList>
              <S.ContactTitle>Адрес</S.ContactTitle>
              <S.ContactValue>
                <S.ContactAddress>
                  Санкт-Петербург,
                  <br />
                  Набережная реки Карповка, д 5
                </S.ContactAddress>
              </S.ContactValue>

              <S.ContactTitle>Режим работы</S.ContactTitle>
              <S.ContactValue>Ежедневно, с 9:00 до 20:00</S.ContactValue>

              <S.ContactTitle>Телефон</S.ContactTitle>
              <S.ContactValue>
                <S.ContactLink href="tel:8 (800) 333-55-99">
                  8 (800) 333-55-99
                </S.ContactLink>
              </S.ContactValue>

              <S.ContactTitle>E-mail</S.ContactTitle>
              <S.ContactValue>
                <S.ContactLink href="mailto:info@escape-room.ru">
                  info@escape-room.ru
                </S.ContactLink>
              </S.ContactValue>
            </S.ContactsList>

            <S.ContactsMap>
              <S.ContactsMapFrame id="map"></S.ContactsMapFrame>
            </S.ContactsMap>
          </S.Contacts>
        </S.ContentWrapper>
      </S.Main>
    </MainLayout>
  )
};

export default Contacts;
