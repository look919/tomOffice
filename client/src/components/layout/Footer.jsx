import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PhoneIcon } from '../layout/Icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <PhoneIcon />
        <div className="footer__contact__info">
          <h3 className="heading-3 footer__contact__info__heading">
            <FormattedMessage
              id="Footer.phone"
              defaultMessage="TEL. 12 345 67 89"
            />
          </h3>
          <h4 className="heading-4 footer__contact__info__subheading">
            <FormattedMessage
              id="Footer.customerServiceOffice"
              defaultMessage="Centrum obsługi klienta"
            />
          </h4>
          <span className="footer__contact__info__text">
            <FormattedMessage
              id="Footer.time"
              defaultMessage="pon-sob 10:00-20:00, niedz 10:00-18:00"
            />
          </span>
          <span className="footer__contact__info__text">
            <FormattedMessage
              id="Footer.info"
              defaultMessage="(Opłata za połączenie zgodna ze stawką przewidzianą przez operatora wg aktualnego cennika)"
            />
          </span>
        </div>
      </div>
      <div className="footer__list">
        <h4 className="heading-4 footer__list__heading">
          <FormattedMessage
            id="Footer.list.offerHeader"
            defaultMessage="Oferta"
          />
        </h4>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.offer.one"
            defaultMessage="Aktualne promocje"
          />
        </Link>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.offer.two"
            defaultMessage="Meble według typów"
          />
        </Link>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.offer.three"
            defaultMessage="Strefa premium"
          />
        </Link>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.offer.four"
            defaultMessage="Dostawa"
          />
        </Link>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.offer.five"
            defaultMessage="Dostawa w salonach"
          />
        </Link>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.offer.six"
            defaultMessage="Karta podarunkowa"
          />
        </Link>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.offer.seven"
            defaultMessage="eKarta podarunkowa"
          />
        </Link>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.offer.eight"
            defaultMessage="Zakupy przez telefon"
          />
        </Link>
      </div>
      <div className="footer__list">
        <h4 className="heading-4 footer__list__heading">
          <FormattedMessage
            id="Footer.list.customerServiceHeader"
            defaultMessage="Obsługa klienta"
          />
        </h4>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.custService.one"
            defaultMessage="Reklamacje i zwroty"
          />
        </Link>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.custService.two"
            defaultMessage="FAQ"
          />
        </Link>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.custService.three"
            defaultMessage="Metody płatności"
          />
        </Link>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.custService.four"
            defaultMessage="Zakupy na raty"
          />
        </Link>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.custService.five"
            defaultMessage="Regulamin"
          />
        </Link>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.custService.six"
            defaultMessage="Polityka prywatności"
          />
        </Link>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.custService.seven"
            defaultMessage="Bezpieczne zakupy"
          />
        </Link>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.custService.eight"
            defaultMessage="Podziel się opinią"
          />
        </Link>
      </div>
      <div className="footer__list">
        <h4 className="heading-4 footer__list__heading">
          <FormattedMessage
            id="Footer.list.companyHeader"
            defaultMessage="Firma"
          />
        </h4>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.company.one"
            defaultMessage="Kontakt"
          />
        </Link>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.company.two"
            defaultMessage="O nas"
          />
        </Link>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.company.three"
            defaultMessage="Nasze salony"
          />
        </Link>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.company.four"
            defaultMessage="Nasze produkty"
          />
        </Link>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.company.five"
            defaultMessage="Kariera"
          />
        </Link>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.company.six"
            defaultMessage="Oferty pracy"
          />
        </Link>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.company.seven"
            defaultMessage="Dla dostawców"
          />
        </Link>
        <Link className="footer__list__item" to="/">
          <FormattedMessage
            id="Footer.list.company.eight"
            defaultMessage="Dla mediów"
          />
        </Link>
      </div>
      <section className="footer__copyright">
        <FormattedMessage
          id="Footer.copyrightOne"
          defaultMessage="Coded by Tomasz Wirkus 2020. Design based on"
        />
        <a className="footer__list__item" href="https://www.agatameble.pl/">
          {' '}
          Agata Meble{' '}
        </a>
        <FormattedMessage
          id="Footer.copyrightTwo"
          defaultMessage="All products and graphics comes straight from their website"
        />
      </section>
    </footer>
  );
};

export default Footer;
