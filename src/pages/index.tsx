import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faClock,
  faEnvelope,
  faEuroSign,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Home() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div>
      <Head>
        <title>NU Koeriers Hoogeveen</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Of het nu gaat om koeltransport, losse pakketten of palletvervoer, NU Koeriers uit Hoogeveen verzorgt het voor scherpe tarieven. Door het ruime wagenpark met jonge en representatieve wagens, zijn de mogelijkheden zeer uitgebreid."
        ></meta>
      </Head>

      <nav className="navbar navbar-purple navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
              onClick={() => setIsMenuVisible(!isMenuVisible)}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img src="logo.jpg" />
            </a>
            <p className="navbar-text h3">
              <span className="label label-lime">
                <a href="tel:0646417234">
                  <span className="text-white">
                    Bel direct! 06 - 46 41 72 34{" "}
                  </span>
                </a>
              </span>
            </p>
          </div>

          <div id="navbar" className="navbar-collapse navbar-right collapse">
            <ul className="nav navbar-nav">
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#wagenpark">Wagenpark</a>
              </li>
              <li>
                <a href="#klanten">Onze klanten</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {isMenuVisible && (
            <div
              id="navbar"
              className="navbar-collapse navbar-right collapse in"
            >
              <ul className="nav navbar-nav">
                <li>
                  <a href="#service" onClick={() => setIsMenuVisible(false)}>
                    Service
                  </a>
                </li>
                <li>
                  <a href="#wagenpark" onClick={() => setIsMenuVisible(false)}>
                    Wagenpark
                  </a>
                </li>
                <li>
                  <a href="#klanten" onClick={() => setIsMenuVisible(false)}>
                    Onze klanten
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setIsMenuVisible(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      <main>
        <div className="jumbotron jumbotron-auto">
          <div className="container">
            <h1>NU Koeriers</h1>
            <ul className="list-unstyled">
              <li className="h4">
                <span className="text-lime">
                  <FontAwesomeIcon icon={faCheck} />
                </span>{" "}
                1 aanspreekpunt{" "}
              </li>
              <li className="h4">
                <span className="text-lime">
                  <FontAwesomeIcon icon={faCheck} />
                </span>{" "}
                7 dagen per week, 24 uur per dag beschikbaar{" "}
              </li>
              <li className="h4">
                <span className="text-lime">
                  <FontAwesomeIcon icon={faCheck} />
                </span>{" "}
                Uitgebreid wagenpark{" "}
              </li>
              <li className="h4">
                <span className="text-lime">
                  <FontAwesomeIcon icon={faCheck} />
                </span>{" "}
                Koeltransport{" "}
              </li>
              <li className="h4">
                <span className="text-lime">
                  <FontAwesomeIcon icon={faCheck} />
                </span>{" "}
                Scherpe tarieven{" "}
              </li>
              <li className="h4">
                <span className="text-lime">
                  <FontAwesomeIcon icon={faCheck} />
                </span>{" "}
                Nationaal en Internationaal transport{" "}
              </li>
            </ul>
            <ul className="list-inline">
              <li>
                <a
                  className="btn btn-lime btn-lg"
                  href="#"
                  role="button"
                  data-toggle="modal"
                  data-target="#reserveerModal"
                >
                  Reserveer direct een rit &raquo;
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container" id="service">
          <div className="row">
            <div className="text-center">
              <h1>Onze service</h1>
            </div>
            <div className="col-md-4">
              <h1 className="col-md-head">
                <span className="text-purple">
                  <FontAwesomeIcon icon={faGlobe} size="2x" />
                </span>
              </h1>
              <p>
                NU Koeriers, gevestigd in Hoogeveen, is een jong en gedreven
                koeriersbedrijf die staat voor een correcte en snelle
                dienstverlening. Snelle dienstverlening in de positieve zin van
                het woord. Kwaliteit staat bij ons op nummer 1. Wij garanderen
                dat er zeer zorgvuldig en correct met uw goederen wordt
                omgegaan. Transport geschiedt vanaf het ophaaladres rechtstreeks
                naar het afleveradres zonder tussenkomst van derden en/of
                tussenstops.{" "}
              </p>
            </div>
            <div className="col-md-4">
              <h1 className="col-md-head">
                <span className="text-purple">
                  <FontAwesomeIcon icon={faClock} size="2x" />
                </span>
              </h1>
              <p>
                NU Koeriers staat 7 dagen per week, 24 uur per dag paraat om uw
                goederen te vervoeren. Of het nu gaat om koeltransport, losse
                pakketten of palletvervoer, wij kunnen het voor scherpe tarieven
                voor u verzorgen. Door ons ruime wagenpark met jonge en
                representatieve wagens, zijn de mogelijkheden zeer uitgebreid.
              </p>
            </div>
            <div className="col-md-4">
              <h1 className="col-md-head">
                <span className="text-purple">
                  <FontAwesomeIcon icon={faEuroSign} size="2x" />
                </span>
              </h1>
              <p>
                NU Koeriers spreekt van tevoren altijd een prijs met u af, zodat
                u weet wat u kunt verwachten en achteraf niet voor verrassingen
                komt te staan. Tarieven zijn afhankelijk van de afstand en het
                transportvoertuig waarmee uw goederen vervoerd gaan worden.
                Informeer geheel vrijblijvend naar de mogelijkheden en ons
                scherpe tariefaanbod.
              </p>
            </div>
          </div>
        </div>
        <div
          className="jumbotron jumbotron-wagenpark text-center"
          id="wagenpark"
        >
          <div className="container">
            <div className="col-md-4 col-md-offset-4">
              <h1>Wagenpark</h1>
              <ul className="list-unstyled">
                <li className="h4">
                  <span className="text-lime">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>{" "}
                  Bestelauto{" "}
                </li>
                <li className="h4">
                  <span className="text-lime">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>{" "}
                  Bestelbus{" "}
                </li>
                <li className="h4">
                  <span className="text-lime">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>{" "}
                  Bestelbus met aanhangwagen/plateauwagen{" "}
                </li>
                <li className="h4">
                  <span className="text-lime">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>{" "}
                  Personenauto{" "}
                </li>
                <li className="h4">
                  <span className="text-lime">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>{" "}
                  Motor{" "}
                </li>
                <li className="h4">
                  <span className="text-lime">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>{" "}
                  Scooter{" "}
                </li>
              </ul>
              <ul className="list-inline">
                <li>
                  <a
                    className="btn btn-lime btn-lg"
                    href="#"
                    role="button"
                    data-toggle="modal"
                    data-target="#reserveerModal"
                  >
                    Reserveer direct een rit &raquo;
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="col-lg-10 col-lg-offset-1 text-center" id="klanten">
            <h1>Onze klanten</h1>
            <div className="row row-slick">
              <div className="col-md-head">
                <a
                  className="btn btn-link"
                  href="http://www.idra-tech.com/"
                  role="button"
                  target="_blank"
                  rel="noopener"
                >
                  <img src="idratech.gif" />
                </a>
              </div>
              <div className="col-md-head">
                <a
                  className="btn btn-link"
                  href="http://www.vloertechniekhoogeveen.nl/"
                  role="button"
                  target="_blank"
                  rel="noopener"
                >
                  <img src="vloertechniek.gif" />
                </a>
              </div>
              <div className="col-md-head">
                <a
                  className="btn btn-link"
                  href="http://www.vihamij.nl/"
                  role="button"
                  target="_blank"
                  rel="noopener"
                >
                  <img src="vihamij.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="jumbotron jumbotron-purple jumbotron-nobottom"
          id="contact"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>NU Koeriers</h1>
                <ul className="list-unstyled">
                  <li className="h4">Kanaalweg 62 </li>
                  <li className="h4">7902 LN Hoogeveen </li>
                  <br />
                  <li className="h4">
                    <span className="text-lime">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>{" "}
                    06 - 46 41 72 34{" "}
                  </li>
                  <li className="h4">
                    <span className="text-lime">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>{" "}
                    <a href="mailtoe:eddyprinsse@gmail.com">
                      eddyprinsse@gmail.com{" "}
                    </a>
                  </li>
                  <br />
                  <li className="h4"> KVK 04073579 </li>
                  <li className="h4">
                    <span className="text-lime">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>{" "}
                    NU Koeriers vervoert conform de algemene vervoercondities
                    AVC.{" "}
                  </li>
                </ul>
              </div>
              {/* <div className="col-md-4 col-md-offset-1 contact">
                <h1>Contact</h1>
                <form id="form" action="" method="post">
                  <div className="form-group">
                    <label htmlFor="naam">Naam</label>
                    <input
                      type="naam"
                      className="form-control"
                      id="naam"
                      name="naam"
                      placeholder="Naam"
                      data-parsley-required
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mailadres</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="E-mailadres"
                      data-parsley-required
                      required
                      data-parsley-type="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefoon">Telefoonnummer</label>
                    <input
                      type="text"
                      className="form-control"
                      id="telefoon"
                      name="telefoon"
                      placeholder="Telefoonnummer"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="omschrijving">Vraag</label>
                    <textarea
                      rows={3}
                      className="form-control"
                      id="vraag"
                      name="vraag"
                      data-parsley-required
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-lg btn-lime">
                    Verstuur vraag
                  </button>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </main>

      <footer>
        <p className="navbar-text-sd h3">
          <span className="label label-purple">
            <a href="tel:0646417234">
              <span className="text-white">Bel direct! 06 - 46 41 72 34 </span>
            </a>
          </span>
        </p>
      </footer>
    </div>
  );
}
