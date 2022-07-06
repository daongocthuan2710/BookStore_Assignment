import ConTentFiler from "./filterSideBar";

function FilterShopPage(props) {
  return (
    <div className="FilterShopPage">
      <ConTentFiler onChangeCategory = {props.onChangeCategory}/>
    </div>
  );
}

export default FilterShopPage;
