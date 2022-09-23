import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import { useEffect } from 'react';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';
import { loadQuests } from 'store/api-action';
import { useAppDispatch } from 'hooks/hooks';

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {    
    let isMounted = true;
    if (isMounted) {
      dispatch(loadQuests());
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch])

  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>
        <QuestsCatalog />
      </S.Main>
    </MainLayout>
  );
}

export default HomePage;
