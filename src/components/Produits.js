import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import MoonLoader from "react-spinners/MoonLoader";
import mockProducts from "../data/mockProducts";
import "../Styles/StylesProduits.css";
import { Helmet } from "react-helmet";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Component to display and filter products
const Products = () => {
  // States for filter settings and product selection
  const [categoryFilter, setCategoryFilter] = useState(""); // Filter for category
  const [priceFilter, setPriceFilter] = useState(""); // Filter for price
  const [searchQuery, setSearchQuery] = useState(""); // Search query for product name
  const [selectedProduct, setSelectedProduct] = useState(null); // Selected product for modal
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [loading, setLoading] = useState(false); // Loading state for UI

  // Function to handle category selection
  const handleCategoryChange = (category) => {
    setLoading(true); // Show loading spinner
    setCategoryFilter(category === "tous" ? "" : category); // Set filter to selected category
  };

  // Function to handle price filter selection
  const handlePriceChange = (price) => {
    setLoading(true); // Show loading spinner
    setPriceFilter(price); // Set price filter
  };

  // Function to handle product search input change
  const handleSearchChange = (query) => {
    setLoading(true); // Show loading spinner
    setSearchQuery(query); // Set search query
  };

  // Function to show modal with selected product details
  const handleShowModal = (product) => {
    setSelectedProduct(product); // Set selected product for modal display
    setShowModal(true); // Show modal
  };

  // Function to close modal
  const handleCloseModal = () => setShowModal(false);

  // Function to clear all filters
  const handleClearFilters = () => {
    setLoading(true); // Show loading spinner
    setCategoryFilter(""); // Reset category filter
    setPriceFilter(""); // Reset price filter
    setSearchQuery(""); // Reset search query
  };

  // Effect hook to simulate loading state delay
  useEffect(() => {
    let timeoutId;
    if (loading) {
      timeoutId = setTimeout(() => {
        setLoading(false); // Turn off loading state after 500ms
      }, 500);
    }
    return () => clearTimeout(timeoutId); // Cleanup the timeout on unmount
  }, [categoryFilter, priceFilter, searchQuery, loading]);

  // Filter products based on selected filters
  const filteredProducts = mockProducts.filter((product) => {
    const categoryMatch = !categoryFilter || product.category === categoryFilter;
    const priceMatch = !priceFilter || product.price <= priceFilter;
    const searchMatch =
      !searchQuery || product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && priceMatch && searchMatch;
  });

  // Responsive carousel settings for different screen sizes
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container>
      {/* Page SEO */}
      <Helmet>
        <title>Nos produits pour vous !</title>
      </Helmet>

      <Row>
        {/* Filters Section */}
        <Col md={3} className="filter-section">
          <h4>Filtrer les produits</h4>
          <Form className="mb-3">
            <Form.Control
              type="text"
              placeholder="Rechercher un produit..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)} // Handle search input
            />
          </Form>
          {/* Category Filter */}
          <DropdownButton id="category-dropdown" title="Category" className="filter-dropdown">
            <Dropdown.Item onClick={() => handleCategoryChange("tous")}>Tous</Dropdown.Item>
            <Dropdown.Item onClick={() => handleCategoryChange("cheveux")}>Cheveux</Dropdown.Item>
            <Dropdown.Item onClick={() => handleCategoryChange("visage")}>Visage</Dropdown.Item>
            <Dropdown.Item onClick={() => handleCategoryChange("soin")}>Soin</Dropdown.Item>
            <Dropdown.Item onClick={() => handleCategoryChange("hygiène")}>Hygiène</Dropdown.Item>
            <Dropdown.Item onClick={() => handleCategoryChange("bébé")}>Bébé</Dropdown.Item>
          </DropdownButton>
          {/* Price Filter */}
          <DropdownButton id="price-dropdown" title="Price" className="filter-dropdown">
            <Dropdown.Item onClick={() => handlePriceChange(15)}>Up to 15 TND</Dropdown.Item>
            <Dropdown.Item onClick={() => handlePriceChange(25)}>Up to 25 TND</Dropdown.Item>
            <Dropdown.Item onClick={() => handlePriceChange(30)}>Up to 30 TND</Dropdown.Item>
          </DropdownButton>
          {/* Clear Filters Button */}
          <Button variant="secondary" onClick={handleClearFilters} className="clear-filters button-clear-filters">
            Effacer les filtres
          </Button>
        </Col>

        {/* Products Section */}
        <Col md={9}>
          <h4 className="products-title">Produits</h4>

          {/* Loading spinner */}
          {loading && (
            <div className="loader-container">
              <MoonLoader color="#051e3a" size={40} margin={5} loading={loading} />
            </div>
          )}

          {/* Displaying filtered products */}
          {!loading && filteredProducts.length === 0 ? (
            <p>Aucun produit trouvé.</p>
          ) : (
            <Carousel responsive={responsive} infinite autoPlay>
              {/* Display filtered products in a carousel */}
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <h5>{product.name}</h5>
                  <p className="product-category">{product.category}</p>
                  <p className="product-price">{product.price} TND</p>
                  <Button variant="primary" onClick={() => handleShowModal(product)} className="learn-more-btn">
                    Apprendre encore plus
                  </Button>
                </div>
              ))}
            </Carousel>
          )}
        </Col>
      </Row>

      {/* Product Modal */}
      {selectedProduct && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Category:</strong> {selectedProduct.category}
            </p>
            <p>
              <strong>Price:</strong> {selectedProduct.price} TND
            </p>
            <p>
              <strong>Description:</strong> {selectedProduct.description}
            </p>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="product-image" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleCloseModal}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default Products;
