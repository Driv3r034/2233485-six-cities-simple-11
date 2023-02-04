import { FC, useState } from 'react';
import { OffersCardInterface, OffersLocation } from '../../types/offers-card-types';
import OfferCard from '../offer-card/offer-card';
import Map from '../map/map';

type OfferListProps = {
  offersCards: OffersCardInterface[];
}

const CITY: OffersLocation = {
  latitude: 52.370216,
  longitude: 4.895168,
  zoom: 10
};

const OfferList: FC<OfferListProps> = ({ offersCards }) => {
  const [openSort, setOpenSort] = useState(false);
  const [activeOfferCardId, setActiveOfferCardId] = useState<number | null>(null);

  const handleSortOffer = () => {
    setOpenSort((prevState) => !prevState);
  };

  const handlerOfferCardMouseOver = (dataOfferCard: OffersCardInterface) => {
    setActiveOfferCardId(dataOfferCard.id);
  };

  const points = offersCards.map((offerCard) => {
    const { id, location } = offerCard;
    return {
      id,
      ...location,
    };
  });

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by </span>
            <span className="places__sorting-type" tabIndex={0} onClick={handleSortOffer}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            {openSort && (
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            )}
          </form>
          <div className="cities__places-list places__list tabs__content">

            {offersCards.map((item) =>
              <OfferCard key={item.id} dataOfferCard={item} onMouseOver={handlerOfferCardMouseOver} />
            )}

          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map
              city={CITY}
              points={points}
              selectedPointsId={activeOfferCardId}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default OfferList;
