import ConTentFiler from "./filterSideBar";

function FilterShopPage(props) {
    return (
        <div className="FilterShopPage">
            <ConTentFiler
                onChangeCategory={props.onChangeCategory}
                onChangeAuthor={props.onChangeAuthor}
                onChangeRatingStar={props.onChangeRatingStar}
            />
        </div>
    );
}

export default FilterShopPage;
