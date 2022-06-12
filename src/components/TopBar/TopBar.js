import './TopBar.css';
// import { Search } from '@mui/icons-material';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router";
import axios from 'axios';

const TopBar = () => {

    const navigate = useNavigate();
    const handleSearch = async (e) => {
        e.preventDefault();
        try{

          const res = await axios.get(`/search`);
          console.log(res.data);
          this.props.navigation.navigate("/search", {movies: res.data});



         }
        catch(err){
          console.log(err);
        }


      }




    return (
        <>
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <span className="logo">Movie Finder</span>
                    </Link>
                </div>
                <div className="topbarCenter">
                    <div className="searchbar">
                        {/* <Search className="searchIcon" /> */}
                        {/* <form onSubmit='{handleSearch}'>
                            <input
                                placeholder="Enter movie name..."
                                type="search"
                                className="searchInput"
                                onChange='{handleChange}'
                            />

                        </form> */}
                        <form onSubmit={handleSearch}>
                            <input
                                placeholder="Enter a movie name..."
                                type="search"
                                className="searchInput"
                            />

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopBar;