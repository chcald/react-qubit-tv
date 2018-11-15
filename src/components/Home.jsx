import React, { Component} from 'react';
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as api from "../api"

class Home extends Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = { data: {}, metadata:{}};
    }

    componentWillMount() {
        this._isMounted = true;
        if (this._isMounted) {
            api.getContent().then(content => {
                this.setState({ data: content.Content, 
                    metadata:content.Content.metadata })
                console.log(this.state.metadata)
            })
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row" id="main">
                        <div>
                            <section >
                                <div className="media">
                                    <img className="mr-3 image-left" src={this.state.metadata.img_medium} alt={this.state.metadata.titulo_internacional}></img>

                                    <div className="media-body">

                                        <div id="outer" className="carousel slide carousel-fade" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img className="d-block w-100" src={this.state.metadata.img_fanart_1} alt="First slide" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block w-100" src={this.state.metadata.img_fanart_2} alt="Second slide" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block w-100" src={this.state.metadata.img_fanart_3} alt="Third slide" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block w-100" src={this.state.metadata.img_fanart_4} alt="Third slide" />
                                                </div>
                                            </div>
                                        </div>

                                        <div id="inner">
                                            <h3 className="mt-0 item-title">{this.state.metadata.titulo_internacional}</h3>
                                            <h4 className="item-title"></h4>
                                            <div className="item-title">
                                                <ul className="list-unstyled">
                                                    <li>Origen: {this.state.data.countries}</li>
                                                    <li>Género: {this.state.data.genres}</li>
                                                </ul>
                                            </div>

                                            <div className="item-title">
                                                <ul className="list-unstyled additional-info-detail">
                                                    <li><span className="time"></span>{this.state.data.runtime}min</li>
                                                    <li><span className="rated rated-1"></span></li><li><span className="icons icon-audiotrack"></span>{this.state.data.default_language}</li>
                                                    <li><span className="quality-hd"></span></li>
                                                    <li><span className="icons imdb"></span>{this.state.data.rated}/10</li>
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
                                    <p>{this.state.data.short_summary}
                                    <a href="#" > Leer más</a></p>
                                </div>
                            </section>

                        </div>

                    </div>

                </div>
            </div>
        );
    };
}


export default Home;
