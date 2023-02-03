import Navbar from "./Navbar"
import EpisodeList from "./pages/Episodes"
import Home from "./Home"
import Favourites from "./Favourites"
import SignUpModal from "./pages/SignUpModal"
import { Route, Routes } from "react-router-dom"
import CharacterRoute from "./CharacterPage"
import SignInModal from "./pages/SignInModal"
import WelcomePage from "./pages/WelcomePage"


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/episodes" element={<EpisodeList />} />
          <Route path="/characters/:id" element={<CharacterRoute />} />
          <Route path="/signup" element={<SignUpModal />} />
          <Route path="/signin" element={<SignInModal />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App;