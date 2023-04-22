import { FC } from 'react';
import Header from '../../components/header/header';
import CitiesList from '../../components/cities-list/cities-list';
import OfferList from '../../components/offer-list/offer-list';
import type { OffersCardInterface } from '../../types/offers-card-types';
import { useAppSelector } from '../../hooks/use-selector';

type MainPageProps = {
  offersCards: OffersCardInterface[];
}

const MainPage: FC<MainPageProps> = ({ offersCards }) => {
  const selectedCity = useAppSelector((state) => state.selectedCity);

  return (
    <>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList selectedCity={selectedCity}/>
        <OfferList offersCards={offersCards} />
      </main>
    </>
  );
};

export default MainPage;
