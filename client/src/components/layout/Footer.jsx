import React from 'react';
import { PhoneIcon } from '../layout/Icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__contact'>
        <PhoneIcon />
        <div className='footer__contact__info'>
          <h3 className='heading-3 footer__contact__info__heading'>
            TEL. 12 345 67 89
          </h3>
          <h4 className='heading-4 footer__contact__info__subheading'>
            Biuro obsługi clienta
          </h4>
          <span className='footer__contact__info__text'>
            pn.-sb. 10:00-20:00, nd. 10:00-18:00
          </span>
          <span className='footer__contact__info__text'>
            (Opłata za połączenie zgodna ze stawką przewidzianą przez operatora
            wg aktualnego cennika)
          </span>
        </div>
      </div>
      <div className='footer__list'>
        <h4 className='heading-4 footer__list__heading'>Oferta</h4>
        <Link className='footer__list__item' to='/'>
          Aktualne promocje
        </Link>
        <Link className='footer__list__item' to='/'>
          Meble według typów
        </Link>
        <Link className='footer__list__item' to='/'>
          Strefa Premium
        </Link>
        <Link className='footer__list__item' to='/'>
          Dostawa w sklepie internetowym
        </Link>
        <Link className='footer__list__item' to='/'>
          Dostawa w salonach
        </Link>
        <Link className='footer__list__item' to='/'>
          Karta podarunkowa
        </Link>
        <Link className='footer__list__item' to='/'>
          eKarta podarunkowa
        </Link>
        <Link className='footer__list__item' to='/'>
          Zakupy przez telefon
        </Link>
      </div>
      <div className='footer__list'>
        <h4 className='heading-4 footer__list__heading'>Obsługa klienta</h4>
        <Link className='footer__list__item' to='/'>
          Reklamacje i zwroty
        </Link>
        <Link className='footer__list__item' to='/'>
          FAQ
        </Link>
        <Link className='footer__list__item' to='/'>
          Formy płatności
        </Link>
        <Link className='footer__list__item' to='/'>
          Zakupy na raty
        </Link>
        <Link className='footer__list__item' to='/'>
          Refulamin
        </Link>
        <Link className='footer__list__item' to='/'>
          Polityka prywatności
        </Link>
        <Link className='footer__list__item' to='/'>
          Bezpieczne zakupy
        </Link>
        <Link className='footer__list__item' to='/'>
          Podziel się opinią
        </Link>
      </div>
      <div className='footer__list'>
        <h4 className='heading-4 footer__list__heading'>Firma</h4>
        <Link className='footer__list__item' to='/'>
          Kontakt
        </Link>
        <Link className='footer__list__item' to='/'>
          O nas
        </Link>
        <Link className='footer__list__item' to='/'>
          Nasze salony
        </Link>
        <Link className='footer__list__item' to='/'>
          Nasze produkty
        </Link>
        <Link className='footer__list__item' to='/'>
          Kariera
        </Link>
        <Link className='footer__list__item' to='/'>
          Oferty Pracy
        </Link>
        <Link className='footer__list__item' to='/'>
          Dla dostawców
        </Link>
        <Link className='footer__list__item' to='/'>
          Dla mediów
        </Link>
      </div>
      <section className='footer__copyright'>
        Coded by Tomasz Wirkus 2020. Design based on
        <a className='footer__list__item' href='https://www.agatameble.pl/'>
          {' '}
          Agata Meble{' '}
        </a>
        All products and graphics comes straight from their website
      </section>
    </footer>
  );
};

export default Footer;
