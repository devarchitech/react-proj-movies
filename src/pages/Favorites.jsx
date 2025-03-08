import "../css/Favorites.css"
import { useMovieContext } from "../contexts/movieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {

    const { favorites } = useMovieContext()
    console.log(favorites)

    if (favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorite Movies</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id}></MovieCard>
                    ))}
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="favorites-empty">
                <h2>No Favorite Movies Yet</h2>
                <p>Start adding movies to your favorites and they will appear here</p>
            </div>
        );
    }

}

export default Favorites