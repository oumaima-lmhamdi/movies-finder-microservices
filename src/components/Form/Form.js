import './Form.css'
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


const Form = () => {


    const navigate = useNavigate();
    const title = useRef();
    const year = useRef();
    const description = useRef();

    const handlingClick = async (e) => {
        e.preventDefault();

        const movie = {
            title: title.current.value,
            year: year.current.value,
            description: description.current.value,
        };
        try {
            await axios.post("/add", movie);
            navigate("/");
            //console.log(user);
        } catch (err) {
            console.log(err);
        }
    };



    return (
        <>
            <h1>Add a movie</h1>
            <form onSubmit={handlingClick}>
                <input name="title" type="text" class="feedback-input" placeholder="Title" ref={title}  />
                <input name="year" type="text" class="feedback-input" placeholder="Year" ref={year}  />
                <textarea name="description" class="feedback-input" placeholder="Description" ref={description} ></textarea>
                <input type="submit" value="SUBMIT" />
            </form>
        </>
    );
}

export default Form;