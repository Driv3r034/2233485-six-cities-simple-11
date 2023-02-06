import React, { FC } from 'react';
import { OffersCardInterface } from '../../types/offers-card-types';
import { Link } from 'react-router-dom';

interface OfferProps {
  dataOfferCard: OffersCardInterface;
  onMouseOver: (dataOfferCard: OffersCardInterface) => void;
}

const OfferCard: FC<OfferProps> = ({ dataOfferCard, onMouseOver }) => {
  const {id, price, isPremium, title, images, ratingStars, type } = dataOfferCard;

  const handlerOfferCardMouseOver = () => {
    onMouseOver(dataOfferCard);
  };

  return (
    <article className="cities__card place-card" onMouseOver={handlerOfferCardMouseOver}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={images[0]} width="260" height="200" alt='' />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price} </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingStars}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default OfferCard;
