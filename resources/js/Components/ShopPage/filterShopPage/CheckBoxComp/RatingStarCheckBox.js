import React from "react";

export default function RatingStarCheckboxs(props) {
    return (
        <>
                <div className="form-check" key = {1}>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value={1}
                        id="1"
                        onChange = {props.onChangeRatingStar}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault" >
                        1 Star
                    </label>
                </div>
                <div className="form-check" key = {2}>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value={2}
                        id="2"
                        onChange = {props.onChangeRatingStar}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        2 Star
                    </label>
                </div>
                <div className="form-check" key = {3}>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value={3}
                        id="3"
                        onChange = {props.onChangeRatingStar}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        3 Star
                    </label>
                </div>
                <div className="form-check" key = {4}>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value={4}
                        id="4"
                        onChange = {props.onChangeRatingStar}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        4 Star
                    </label>
                </div>
                <div className="form-check" key = {5}>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value={5}
                        id="5"
                        onChange = {props.onChangeRatingStar}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        5 Star
                    </label>
                </div>
        </>
    );
}
