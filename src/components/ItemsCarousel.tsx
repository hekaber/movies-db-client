import { Carousel, Container } from 'react-bootstrap';
import { ICarouselItem } from '../data/interfaces';
import '../assets/css/ItemsCarousel.css';

interface ICarouselProps {
    items: ICarouselItem[]
}

const ItemsCarousel = (props: ICarouselProps) => {

    const { items } = props;
    const carouselItems = items.map((item, index) => {
        const bcgStyle = {
            backgroundImage: `url(${item.imagePath})`
        }
        return (
            <Carousel.Item key={index} className="custom_carousel_item">
                <Container fluid>
                    <div className="carousel_bck" style={bcgStyle}></div>
                    <Carousel.Caption className="text-left">
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </Carousel.Caption>
                </Container>
            </Carousel.Item>
        );
    });
    return (
        <Carousel interval={2000}>
            {carouselItems}
        </Carousel>
    );

}

export default ItemsCarousel;
