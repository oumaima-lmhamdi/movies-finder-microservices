import TopBar from '../components/TopBar/TopBar'
import Movie from '../components/Movie/Movie'
import useFetch from './useFetch';


const Home = () => {

  const { data: movies } = useFetch(`http://localhost:...`);


  return (

    <>
      <TopBar />
      <h1>Most rated movies</h1>
      <div className="movies-container">

        <>{movies && movies.map(movie => (
          <Movie movie={movie}/>
))}</>

      </div>
    </>

  );
}

export default Home;

