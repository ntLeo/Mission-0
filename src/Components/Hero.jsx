import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import styles from './Hero.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Hero = () => {
  return (
    <Container className={styles.heroContainer}>
    

    <Card className="bg-dark text-white">
      <Card.Img src="../src/assets/dummyHero.jpg" alt="Card image" className={styles.heroImg}/>
      <Card.ImgOverlay>
        <Card.Title className={styles.heroTitle}>Welcome to My Company</Card.Title>
        <Form inline className={styles.searchForm}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className={styles.searchInput}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className={styles.searchBtn}>Submit</Button>
          </Col>
        </Row>
      </Form>

        
        
      </Card.ImgOverlay>
    </Card>

    </Container>
  )
}
export default Hero