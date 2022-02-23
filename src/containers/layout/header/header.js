import React, { Component } from 'react'
import './style.css'
import { Carousel, Row, Col } from 'react-bootstrap';

export class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
        }
    }

    handleSelect = (selectedIndex, e) => {
        this.setState({
            index: selectedIndex
        })
    }

    render() {
        const { index } = this.state;

        return (
            <Carousel activeIndex={index} onSelect={this.handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../../../assets/images/first-slice.svg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../../../assets/images/second-slice.svg')}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../../../assets/images/third-slice.svg')}
                        alt="Third slide" 
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Header;