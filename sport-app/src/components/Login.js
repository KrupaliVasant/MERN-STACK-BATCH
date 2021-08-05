import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import PlayerList from './PlayerList';
import '../components/custom.css'

function Login() {

    // let loginName = "Krupali";

    return (
        <>
            <div className="form-center">
                <div className="p-4 bg-light text-dark border-radius shadow-lg">
                    <h3 className="text-center">Login</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control id="username" type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <div className="text-center">
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
            {/* <PlayerList username={loginName}/> */}
        </>
    )
}
export default Login;