// import React from "react";
import { bookCover } from "../../../datas/bookCover";

function BookInfo(props) {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <div className="col-md-12">
                        <img
                            src={bookCover[props.books.book_cover_photo]}
                            className="img-fluid rounded-start"
                            alt="..."
                        />
                    </div>
                    <div className="col-md-12">
                        <p className="card-text m-2">
                            By(author) {props.books.author_name}
                        </p>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card-body border rounded">
                        <h3 className="card-title">{props.books.book_title}</h3>
                        <p className="card-text">{props.books.book_summary}</p>
                        <p className="card-text">
                            <small className="text-muted">
                                Last updated 3 mins ago
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookInfo;
