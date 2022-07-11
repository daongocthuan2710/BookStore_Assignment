import axios from "axios";
import React, { useState, useEffect } from "react";
import {Form, Button} from "react-bootstrap";
function FormSubmit(props) {
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [rating, setRating] = useState(1);
    
    function tempAlert(msg, duration,color) {
        var el = document.createElement("div");
        el.setAttribute(
            "style",
            `position:absolute;top:90%;left:70%;background-color:${color}; font-size:20px`
        );
        el.innerHTML = msg;
        setTimeout(function () {
            el.parentNode.removeChild(el);
        }, duration);
        document.body.appendChild(el);
    }

    const handleSubmitReview = () => {
        axios.post('http://127.0.0.1:8000/api/reviews', {
            book_id: props.bookId,
            review_title: title,
            rating_start: rating,
            review_details: des 
          })
          .then(function (response) {
            // console.log(response);
            tempAlert('successful Submited!', 3000,'green');
            setTimeout(function(){
                window.location.reload();
             }, 2000);
          })
          .catch(function (error) {
            tempAlert('Submit failed!', 3000,'red')
            console.log(error);
          });
    }

    return (
        <Form className=" border p-3 rounded">
            <Form.Group className="mb-3" controlId="">
                <Form.Label>Add a title</Form.Label>
                <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Title">
                <Form.Label>
                    Details please! Your review helps other shoppers
                </Form.Label>
                <Form.Control type="Text" onChange={(e) => setDes(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Select a rating star</Form.Label>
                <select
                    className="form-select"
                    aria-label="Default select example"
                    value={rating}
                    onChange={(e)=> setRating(e.target.value)}
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
                    onClick= {handleSubmitReview}
                >
                    Submit Review
                </Button>
            </Form.Group>
        </Form>
    );
}

export default FormSubmit;
