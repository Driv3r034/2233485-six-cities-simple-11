import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CITIES } from '../../constants';
import { store } from '../../store/store';
import { selectCityAction } from '../../store/actions';
import { OffersCity } from '../../types/offers-card-types';

type CitiesListProps = {
  selectedCity: OffersCity;
}

const CitiesList: FC<CitiesListProps> = ({ selectedCity }) => {

  const cityActiveClass = 'tabs__item--active';

  const handleCityClick = (ev: MouseEvent) => {
    ev.preventDefault();
    const cityName = ((ev.target as HTMLElement).textContent);
    const city = CITIES.find(({ name }) => name === cityName) as OffersCity;
    store.dispatch(selectCityAction(city));

    // console.log('city', city);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">

          {CITIES.map((item) => (
            <li className="locations__item" key={item.name}>
              <Link
                className={`locations__item-link tabs__item ${selectedCity === item && cityActiveClass}`}
                to={`/${item.name}`}
                onClick={() => handleCityClick}
              >
                <span>{item.name}</span>
              </Link>
            </li>
          ))}

        </ul>
      </section>
    </div>
  );
};

export default CitiesList;
