import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import styles from './Cards.module.css';

const Cards = () => {
  return (
    <Container className={styles.cardContainer}>
    <Row md={4} className={styles.rowCard}>
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col key={idx} xl={3}>
          <Card className={styles.cards}>
            <Card.Img variant="top" src="../src/assets/dummy.jpg" className={styles.cardsImg}/>
            <Card.Body className="bg-secondary text-white">
              <Card.Title>Card title</Card.Title>
              <Card.Text >
                This is a  card 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  )
}
export default Cards