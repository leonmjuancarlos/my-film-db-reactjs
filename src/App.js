import "./App.css";
import {Header} from "./components/Header"
import { Billboard } from "./components/Billboard";

function App() {
  const myFilms = [
        "The Blackwell Ghost",
        "stalingrado"
    ]

  // <FilmCard film="Godzilla" />

  return (
    <>
      <Header />
      <Billboard
        className="billboard"
        filmNames={myFilms}
      />
    </>
  )

}

export default App;
