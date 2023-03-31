import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import Review from '../../components/review/review';
import ReviewForm from '../../components/review/review-form';
import { getRatingStars } from '../../components/review/review.utils';
import { reviews } from '../../mocks/reviews';
import Map from '../../components/map/map';
import OfferCard from '../../components/offer-card/offer-card';
import type { OffersCardInterface, OffersLocation } from '../../types/offers-card-types';

type RoomPageProps = {
  offersCards: OffersCardInterface[];
}

const CITY: OffersLocation = {
  latitude: 52.370216,
  longitude: 4.895168,
  zoom: 10
};

const RoomPage: FC<RoomPageProps> = ({ offersCards }) => {
  const { id } = useParams();
  const offerCard = offersCards.find((item) => item.id === Number(id)) as OffersCardInterface;
  const {
    title, description, price, isPremium, type, images, ratingStars, bedrooms, facilities, host, maxAdults,
  } = offerCard || {};

  const [activeOfferCardId, setActiveOfferCardId] = useState<number | null>(null);
  const handlerOfferCardMouseOver = (dataOfferCard: OffersCardInterface) => {
    setActiveOfferCardId(dataOfferCard.id);
  };

  const points = offersCards.map((offersCardsItem) => {
    const { id: idNumber, location } = offersCardsItem;
    return {
      id: idNumber,
      ...location,
    };
  });

  return (
    <>
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images && images.map((image, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div className="property__image-wrapper" key={`img-${i}`}>
                  <img className="property__image" src={image} alt='' />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getRatingStars(ratingStars)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{ratingStars}</span> {/* 4.8 */}
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {facilities?.map((item, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li className="property__inside-item" key={`facilities-${i}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`
                    property__avatar-wrapper
                    ${host?.isPro ? 'property__avatar-wrapper--pro' : ''}
                    user__avatar-wrapper
                  `}
                  >
                    <img className="property__avatar user__avatar" src={host?.avatarUrl} width="74" height="74" alt='' />
                  </div>
                  <span className="property__user-name">
                    {host?.name}
                  </span>
                  {host?.isPro && (
                    <span className="property__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera,
                    but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot;<span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">
                  {reviews.map((review) => (
                    <Review review={review} key={review.id} />
                  ))}
                </ul>
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              city={CITY}
              points={points}
              selectedPointsId={activeOfferCardId}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

              {offersCards.map((item) =>
                <OfferCard key={item.id} dataOfferCard={item} onMouseOver={handlerOfferCardMouseOver} />
              ).slice(0, 3)}

            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default RoomPage;
