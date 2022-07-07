function PaginationButton(props) {
    return (
        <>
            <div className="text-center my-5">
                <button
                    className="btn btn-outline-secondary me-2"
                    disabled={props.currentPage == 1}
                    onClick={() => setCurrentPage(props.currentPage - 1)}
                    style={
                        Math.ceil(props.totals / props.perPage) < 2
                            ? { display: "none" }
                            : {}
                    }
                >
                    Previous
                </button>
                <button
                    className="btn btn-outline-secondary me-2"
                    style={props.currentPage - 1 == 0 ? { display: "none" } : {}}
                    onClick={() => setCurrentPage(props.currentPage - 1)}
                >
                    {props.currentPage - 1}
                </button>
                <button
                    className="btn btn-outline-secondary me-2"
                    disabled={props.currentPage}
                    style={
                        Math.ceil(props.totals / props.perPage) < 2
                            ? { display: "none" }
                            : {}
                    }
                >
                    {props.currentPage}
                </button>
                <button
                    disabled={props.currentPage == Math.ceil(props.totals / props.perPage)}
                    style={
                        Math.ceil(props.totals / props.perPage) < 2
                            ? { display: "none" }
                            : {}
                    }
                    className="btn btn-outline-secondary me-2"
                    onClick={() => setCurrentPage(props.currentPage + 1)}
                >
                    {props.currentPage + 1}
                </button>
                <button
                    className="btn btn-outline-secondary me-2"
                    disabled={props.currentPage == Math.ceil(props.totals / props.perPage)}
                    style={
                        Math.ceil(props.totals / props.perPage) < 2
                            ? { display: "none" }
                            : {}
                    }
                    onClick={() => props.setCurrentPage(props.currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </>
    );
}

export default PaginationButton;
