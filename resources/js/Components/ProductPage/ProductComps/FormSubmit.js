import {Form, Button} from "react-bootstrap";
function FormSubmit() {
    return (
        <Form className=" border p-3 rounded">
            <Form.Group className="mb-3" controlId="">
                <Form.Label>Add a title</Form.Label>
                <Form.Control type="" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                    Details please! Your review helps other shoppers
                </Form.Label>
                <Form.Control type="TextField" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Select a rating star</Form.Label>
                <select
                    className="form-select"
                    aria-label="Default select example"
                    defaultValue="1"
                >
                    <option value="1">1 Star</option>
                    <option value="2">2 Star</option>
                    <option value="3">3 Star</option>
                    <option value="4">4 Star</option>
                    <option value="5">5 Star</option>
                </select>
            </Form.Group>
            <Form.Group className="text-center">
                {" "}
                <Button
                    style={{ width: "100%" }}
                    variant="primary"
                    type="submit"
                >
                    Submit Review
                </Button>
            </Form.Group>
        </Form>
    );
}

export default FormSubmit;
