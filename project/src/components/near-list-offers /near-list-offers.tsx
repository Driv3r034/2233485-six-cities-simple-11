import { FC } from 'react';
import NearOfferCard from '../near-offer-card/near-offer-card';
import type { OffersCardInterface } from '../../types/offers-card-types';

interface NearListOfferProps {
  offersCards: OffersCardInterface[];
}

const NearListOffer: FC<NearListOfferProps> = ({ offersCards }) => {

  return (
    <div className="near-places__list places__list">

      {offersCards.map((item) =>
        <NearOfferCard key={item.id} dataOfferCard={item} />
      )}

    </div>
  );
};

export default NearListOffer;
