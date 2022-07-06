import React, {useEffect } from "react";
import axios from "axios";

export default function CategoryCheckboxs(props) {
    const [categorys, setCategorys] = React.useState([]);
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/categorys")
            .then((res) => {
                const datas = res.data;
                setCategorys(datas);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            {categorys.map((category) => (
                <div className="form-check" key={category.id}>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value={category.id}
                        id="flexCheckDefault"
                        onChange = {props.onChangeCategory}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        {category.category_name}
                    </label>
                </div>
            ))}
        </>
    );
}
