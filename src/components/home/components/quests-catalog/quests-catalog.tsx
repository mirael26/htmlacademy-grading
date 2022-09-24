import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { loadQuests } from 'store/api-action';
import { Genre } from 'consts';
import { IQuest, TGenre, TQuests } from 'types';

const DEFAULT_GENRE = 'Default';

const GenreProperty = {
  Adventures: {
    title: 'Приключения',
    img: IconAdventures,
  },
  Horror: {
    title: 'Ужасы',
    img: IconHorrors,
  },
  Mystic: {
    title: 'Мистика',
    img: IconMystic,
  },
  Detective: {
    title: 'Детектив',
    img: IconDetective,
  },
  SciFi: {
    title: 'Sci-fi',
    img: IconScifi,
  },
} as const;

const LevelTitle = {
  Hard: 'сложный',
  Medium: 'средний',
  Easy: 'легкий',
} as const;

const QuestsCatalog = () => {
  const quests = useAppSelector(State => State.data.quests);
  const genres = useAppSelector(State => State.data.genres);
  const dispatch = useAppDispatch();

  const [currentGenre, setCurrentGenre] = useState<TGenre | typeof DEFAULT_GENRE>(DEFAULT_GENRE);

  const filterQuests = (quests: TQuests | null, genre: TGenre) => {
    return quests?.filter((quest: IQuest) => quest.type === genre) || null;
  };
  const filteredQuests = useMemo(() => filterQuests(quests, currentGenre as TGenre), [quests, currentGenre]);

  const displayedQuests = (currentGenre === DEFAULT_GENRE) ? quests : filteredQuests;

  const displayedGenres: Array<TGenre> = (Object.keys(Genre) as Array<TGenre>).filter(genre => {
    return genres?.includes(genre);
  });

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
    <>
      <S.Tabs>
        <S.TabItem>
          <S.TabButton isActive={currentGenre === DEFAULT_GENRE} onClick={() => setCurrentGenre(DEFAULT_GENRE)}>
            <IconAllQuests />
            <S.TabTitle>Все квесты</S.TabTitle>
          </S.TabButton>
        </S.TabItem>

        {displayedGenres && displayedGenres?.map((genre, i) => {
          const currentGenreProperty = GenreProperty[genre];
          return <S.TabItem key={`genre-${i}`}>
            <S.TabButton isActive={currentGenre === genre} onClick={() => setCurrentGenre(genre)}>
              {<currentGenreProperty.img/>}
              <S.TabTitle>{currentGenreProperty.title}</S.TabTitle>
            </S.TabButton>
          </S.TabItem>
        })}
      </S.Tabs>

      <S.QuestsList>

        {displayedQuests && displayedQuests?.map((quest, i) => {
          return <S.QuestItem key={`quest-${i}`}>
            <S.QuestItemLink to={`/quest${quest.id}`}>
              <S.Quest>
                <S.QuestImage
                  src={quest.previewImg}
                  width="344"
                  height="232"
                  alt={`квест ${quest.title}`}
                />

                <S.QuestContent>
                  <S.QuestTitle>{quest.title}</S.QuestTitle>

                  <S.QuestFeatures>
                    <S.QuestFeatureItem>
                      <IconPerson />
                      {quest.peopleCount[0]}–{quest.peopleCount[1]} чел
                    </S.QuestFeatureItem>
                    <S.QuestFeatureItem>
                      <IconPuzzle />
                      {LevelTitle[quest.level]}
                    </S.QuestFeatureItem>
                  </S.QuestFeatures>
                </S.QuestContent>
              </S.Quest>
            </S.QuestItemLink>
          </S.QuestItem>
        })}
      </S.QuestsList>
    </>
  );
};

export default QuestsCatalog;
