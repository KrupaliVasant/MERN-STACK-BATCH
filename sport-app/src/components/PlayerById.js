import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


function Player() {
    return (
        <>
            <h3>Player</h3>
            <Form>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Player ID</InputGroup.Text>
                    <FormControl aria-label="Player ID" />
                </InputGroup>
            </Form>
        </>
    )
}
export default Player;