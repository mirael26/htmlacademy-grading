import { useEffect, useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { useParams } from 'react-router-dom';
import { loadCurrentQuest } from 'store/api-action';
import { GenreProperty } from 'components/home/components/quests-catalog/quests-catalog';
import { LevelTitle } from 'consts';

interface IDetailedQuestParams {
  id: string,
};

const DetailedQuest = () => {
  const quest = useAppSelector(State => State.data.currentQuest);
  const dispatch = useAppDispatch();
  const {id} = useParams<IDetailedQuestParams>();

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  useEffect(() => {    
    let isMounted = true;
    if (isMounted) {
      dispatch(loadCurrentQuest(id));
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch, id])

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const genre = quest ? GenreProperty[quest.type].title : null;

  return (
    <MainLayout>
      {quest && <S.Main>
        <S.PageImage
          src={`/${quest.coverImg}`}
          alt={`Квест ${quest.title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{quest.title}</S.PageTitle>
            <S.PageSubtitle>{genre?.toLowerCase()}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{quest.duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{quest.peopleCount[0]}–{quest.peopleCount[1]} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{LevelTitle[quest.level]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {quest.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onPopupClose={() => setIsBookingModalOpened(false)}/>}
      </S.Main>}
    </MainLayout>
  );
};

export default DetailedQuest;
