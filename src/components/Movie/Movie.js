import './Movie.css';
import img from './a.jpg'
import { Link } from 'react-router-dom';
const Movie = ({movie}) => {
    return (
        <Link to="/details" style={{ textDecoration: "none" }}>
        <div className="card">
            <img src={img} alt="Avatar"/>
                <div className="card-container">
                    <h4><b>{movie.title}</b></h4>
                </div>
        </div>
        </Link>

    );
}

export default Movie;