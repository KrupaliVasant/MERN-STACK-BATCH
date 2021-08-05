import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Registration() {
    return (
        <>
            <div className="form-center">
                <div className="p-4 bg-light text-dark border-radius shadow-lg">
                    <Form className="text-left">
                        <h3 className="text-center">Registration Form</h3>
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
                            <Form.Label column sm="5">Email Address</Form.Label>
                            <Col sm="7">
                                <Form.Control type="email" placeholder="Enter email address" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                            <Form.Label column="5">Password</Form.Label>
                            <Col sm="7">
                                <Form.Control type="password" placeholder="Enter password" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                            <Form.Label column="5">Confirm Password</Form.Label>
                            <Col sm="7">
                                <Form.Control type="password" placeholder="Enter confirm password" />
                            </Col>
                        </Form.Group>
                        <div className="text-center">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>

                </div>
            </div>
        </>
    )
}
export default Registration;