import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide1 from "../../../assets/home/01.jpg"
import slide2 from "../../../assets/home/02.jpg"
import slide3 from "../../../assets/home/01.jpg"
import slide4 from "../../../assets/home/01.jpg"
import slide5 from "../../../assets/home/01.jpg"
import slide6 from "../../../assets/home/01.jpg"


const Banner = () => {

    return (
        <Carousel>
            <div>
                <img src={slide1} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={slide2} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={slide3} />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={slide4} />
                <p className="legend">Legend 4</p>
            </div>
            <div>
                <img src={slide5} />
                <p className="legend">Legend 5</p>
            </div>
            <div>
                <img src={slide6} />
                <p className="legend">Legend 5</p>
            </div>
        </Carousel>
    );
};

export default Banner;