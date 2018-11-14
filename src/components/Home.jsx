import React from 'react';
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="row" id="main">
                    <div>
                        <section >
                            <div className="media">
                                <img className="mr-3 image-left" src="https://level3.cdnar.net/contents/0e336e8d-d400-44a2-b426-8981492ce5be_Cemento/thumbnails/large.jpg" alt="Cemento, el documental"></img>

                                <div className="media-body">

                                    <div id="outer" className="carousel slide carousel-fade" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img className="d-block w-100" src={require('../img/img01.jpg')} alt="First slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={require('../img/img02.jpg')} alt="Second slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={require('../img/img03.jpg')} alt="Third slide" />
                                            </div>
                                        </div>
                                    </div>

                                    <div id="inner">
                                        <h3 className="mt-0 item-title">Cemento, el documental</h3>
                                        <h4 className="item-title">Cemento (2017)</h4>
                                        <div className="item-title">
                                            <ul className="list-unstyled">
                                                <li>Origen: Argentina</li>
                                                <li>Género: Documental, Arte, Historia, Personalidades, Sociedad, Cine Argentino</li>
                                            </ul>
                                        </div>

                                        <div className="item-title">
                                            <ul className="list-unstyled additional-info-detail">
                                                <li><span className="time"></span>104min</li>
                                                <li><span className="rated rated-1"></span></li><li><span className="icons icon-audiotrack"></span>Es</li>
                                                <li><span className="quality-hd"></span></li>
                                                <li><span className="icons imdb"></span>7.6/10</li>
                                            </ul>
                                        </div>

                                        <div className="col-sm-5 col-md-5 col-lg-4">
                                            <div className="row">
                                                <a href="#" className="item-play btn btn-primary btn-sm" >
                                                    <FontAwesomeIcon icon="play-circle" /> Ver
                                                </a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className="info-text">
                                <h4>
                                    Sinopsis:
                                </h4>
                                <div className="border-top my-2"></div>
                                <p>Hoy es un estacionamiento, pero en los años 80 y 90 Cemento fue la catedral indiscutida del rock nacional. A través de valiosos testimonios, este film reconstruye la historia del epicentro de la contracultura porteña.
                                    <a href="#" > Leer más</a></p>
                            </div>
                        </section>

                    </div>

                </div>

            </div>
        </div>
    );
};



export default Home;
