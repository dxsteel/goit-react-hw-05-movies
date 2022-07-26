import Loader from "components/Loader";
import { useState, useEffect } from "react";
import api from "services/movieApi";
import MoviesList from "components/MovieList/MoviesList";



const Home = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getMovies = async () => {
            setLoading(true);
            try {
                const { results } = await api.fetchTrendingMovies();
                setVideos(results);
            } catch (error) {
            } finally {
                setLoading(false)
            }
        }
        getMovies()
    }, []);


    return (
        <div>
            <h1>Trending today</h1>
            {loading && <Loader />}
            {videos && <MoviesList videos={videos} />}
        </div>
    )
}

export default Home;