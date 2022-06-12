import TopBar from '../components/TopBar/TopBar'
import Movie from '../components/Movie/Movie'


const Search = () => {


    let movies = null;
    if(this.props.navigation.state.params) {
      movies = this.props.navigation.state.params.movies;
    }

  return (



    <>
      <TopBar />
      <div className="movies-container">
        <>{movies && movies.map(movie => (
          <Movie movie={movie}/>
))}</>

      </div>
    </>

  );
}

export default Search;