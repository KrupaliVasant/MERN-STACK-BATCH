import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function AddPlayer() {
    return (
        <>
            <h3>Add Player</h3>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                    <Form.Label column sm="5">First Name</Form.Label>
                    <Col sm="7">
                        <Form.Control type="text" placeholder="Enter first name" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                    <Form.Label column sm="5">Last Name</Form.Label>
                    <Col sm="7">
                        <Form.Control type="text" placeholder="Enter last name" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                    <Form.Label column sm="5">Age</Form.Label>
                    <Col sm="7">
                        <Form.Control type="number" placeholder="Enter Age" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                    <Form.Label column="5">Runs</Form.Label>
                    <Col sm="7">
                        <Form.Control type="number" placeholder="Enter runs" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                    <Form.Label column="5">Matches</Form.Label>
                    <Col sm="7">
                        <Form.Control type="number" placeholder="Enter Matches" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                    <Form.Label column="5">100s</Form.Label>
                    <Col sm="7">
                        <Form.Control type="number" placeholder="Enter 100s" />
                    </Col>
                </Form.Group>
                <div className="text-center">
                    <Button variant="primary" type="submit">
                        ADD
                    </Button>
                </div>
            </Form>
        </>
    )
}
export default AddPlayer;