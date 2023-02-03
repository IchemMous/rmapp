import RandomCharacters from "./RandomCharacters";
import RecentFavoritesList from "./RecentFavoritesList";
import './Home.css';

function Home() {
    return (
        <div className='homeDiv'>
            <span className='homeSpan'><RandomCharacters /></span>
            <span className='homeSpan'><RecentFavoritesList /></span>
        </div>
    )
}

export default Home;