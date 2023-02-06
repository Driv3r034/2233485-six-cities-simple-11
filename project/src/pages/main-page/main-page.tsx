import { FC } from 'react';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import OfferList from '../../components/offer-list/offer-list';
import { OffersCardInterface } from '../../types/offers-card-types';

type MainPageProps = {
  offersCards: OffersCardInterface[];
}

const MainPage: FC<MainPageProps> = ({ offersCards }) => (
  <>
    <Header/>
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Nav/>
      <OfferList offersCards={offersCards} />
    </main>
  </>
);

export default MainPage;
