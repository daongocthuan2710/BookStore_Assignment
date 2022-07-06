import {Col } from "react-bootstrap";

function HeaderShopPage(props) {
    return (
        <>
            <Col className="fs-4" xs={2} md={2}>
                
            </Col>
            <Col className="fs-6" xs={6} md={6}>
                Show {props.currentPage * props.perPage - props.perPage} -{" "}
                {props.currentPage * props.perPage <= props.totals
                    ? props.currentPage * props.perPage
                    : props.totals}{" "}
                in {props.totals}
            </Col>
            <Col xs={2} md={2}>
                <select
                    onChange={props.onChangeSort}
                    defaultValue="onSale"
                    className="form-select"
                    aria-label="Default select example"
                >
                    <option value="onSale">Sort by onSale</option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="lowToHigh">
                        Sort by price: low to high
                    </option>
                    <option value="highToLow">
                        Sort by price: high to low
                    </option>
                </select>
            </Col>
            <Col xs={2} md={2}>
                <select
                    onChange={props.onChangShowPage}
                    defaultValue="15"
                    className="form-select"
                    aria-label="Default select example"
                >
                    <option value="5">Show 5</option>
                    <option value="10">Show 10</option>
                    <option value="15">Show 15</option>
                    <option value="20">Show 20</option>
                </select>
            </Col>
        </>
    );
}
export default HeaderShopPage;
