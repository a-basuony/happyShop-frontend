import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";

const ProductDetalis = ({ item, images, cat, brand }) => {
  return (
    <div>
      <Row className="py-3">
        <Col lg="4">
          <ProductGallery images={images} />
        </Col>

        <Col lg="8">
          <ProductText item={item} cat={cat} brand={brand} />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetalis;
