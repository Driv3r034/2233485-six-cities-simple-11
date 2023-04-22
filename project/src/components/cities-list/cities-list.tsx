import { FC, BaseSyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { cityNames } from '../../constants';
import { store } from '../../store/store';
import { selectCityAction } from '../../store/actions';

type CitiesListProps = {
  selectedCity: string;
}

const CitiesList: FC<CitiesListProps> = ({ selectedCity }) => {

  const cities = Object.values(cityNames);
  const cityActiveClass = 'tabs__item--active';

  const handleCityClick = (ev: BaseSyntheticEvent) => {
    ev.preventDefault();
    const city: string = ev.target.textContent;
    store.dispatch(selectCityAction(city));

    console.log('ev', ev);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">

          {cities.map((item) => (
            <li className="locations__item" key={item}>
              <Link
                className={`locations__item-link tabs__item ${selectedCity === item && cityActiveClass}`}
                to="#"
                onClick={handleCityClick}
              >
                <span>{item}</span>
              </Link>
            </li>
          ))}

        </ul>
      </section>
    </div>
  );
};

export default CitiesList;
