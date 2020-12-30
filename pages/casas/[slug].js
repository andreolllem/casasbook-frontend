import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { fromImageToUrl, API_URL } from "../../utils/urls";

function ControlledCarousel({ casa }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{ margin: 80 }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fromImageToUrl(casa.image[0])}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{casa.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fromImageToUrl(casa.image[1])}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>{casa.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fromImageToUrl(casa.image[2])}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{casa.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fromImageToUrl(casa.image[3])}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{casa.name}</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fromImageToUrl(casa.image[4])}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{casa.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fromImageToUrl(casa.image[5])}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{casa.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fromImageToUrl(casa.image[6])}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{casa.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fromImageToUrl(casa.image[7])}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{casa.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fromImageToUrl(casa.image[8])}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{casa.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fromImageToUrl(casa.image[9])}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{casa.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fromImageToUrl(casa.image[10])}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{casa.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fromImageToUrl(casa.image[11])}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{casa.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fromImageToUrl(casa.image[12])}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{casa.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fromImageToUrl(casa.image[13])}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{casa.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fromImageToUrl(casa.image[14])}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{casa.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fromImageToUrl(casa.image[15])}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{casa.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const casa_res = await fetch(`${API_URL}/casas/?slug=${slug}`);
  const found = await casa_res.json();

  return {
    props: {
      casa: found[0],
    },
  };
}

export async function getStaticPaths() {
  // Get external data from the file system, API, DB, etc.
  const casas_res = await fetch(`${API_URL}/casas`);
  const casas = await casas_res.json();
  return {
    paths: casas.map((casa) => ({
      params: { slug: String(casa.slug) },
    })),
    fallback: false,
  };
}

export default ControlledCarousel;
