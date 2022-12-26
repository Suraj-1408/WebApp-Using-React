import React from 'react';
import Slider1 from '../Images/React&node.jpg';
import Slider2 from '../Images/Rc.png';
import Slider3 from '../Images/React3.jpg';
import Slider4 from '../Images/React4.jpg';

function Slider(){
    return(
        <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={Slider1} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5><b>1</b></h5>
                        <p></p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={Slider2} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5><b>2</b></h5>
                        <p></p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={Slider3} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5><b>3</b></h5>
                        <p></p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={Slider4} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5><b>4</b></h5>
                        <p></p>
                    </div>
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
        </div>
    );
}

export default Slider;