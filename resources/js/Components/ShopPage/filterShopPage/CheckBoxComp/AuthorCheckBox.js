import React, {useEffect } from "react";
import axios from "axios";

export default function AuthorCheckboxs(props) {
    const [authors, setAuthors] = React.useState([]);
    useEffect(() => {
        axios
            .get("./api/authors")
            .then((res) => {
                const datas = res.data;
                setAuthors(datas);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            {authors.map((author) => (
                <div className="form-check" key={author.id}>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value={author.id}
                        id="flexCheckDefault"
                        onChange = {props.onChangeAuthor}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        {author.author_name}
                    </label>
                </div>
            ))}
        </>
    );
}
