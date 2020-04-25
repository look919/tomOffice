import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";

const NotFoundPage = () => {
  return (
    <section className="notFound">
      <Link to="/">
        <img src={Logo} alt="logo" className="notFound__logo" />
      </Link>
      <div className="notFound__info">
        <h2 className="heading-2 notFound__info__header">Nie znaleziono</h2>
        <p>
          Strona której szukasz prawdopodobnie nie istnieje{" "}
          <Link to="/" className="notFound__info__link">
            wróć na stronę główną
          </Link>
        </p>
      </div>
    </section>
  );
};

export default NotFoundPage;
