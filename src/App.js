import "./App.css";
import { useState } from "react";
// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
// COMPONENTI
import MyNav from "./components/MyNav.js";
import MyFooter from "./components/MyFooter.js";
import Welcome from "./components/Welcome.js";
import AllTheBooks from "./components/AllTheBooks.js";
import UserComponent from "./components/UserComponent";
// LIBRI
import fantasy from "./books/fantasy.json";
import history from "./books/history.json";
import horror from "./books/horror.json";
import romance from "./books/romance.json";
import scifi from "./books/scifi.json";

export default function App() {

  let [type, setType] = useState("fantasy");

  return (
    <>
      <MyNav />
      <Container className="my-3">
        <Welcome />
        <Button
          variant="dark"
          className="m-1"
          onClick={() => setType("fantasy")}
        >
          History
        </Button>
        <Button
          variant="dark"
          className="m-1"
          onClick={() => setType("history")}
        >
          Fantasy
        </Button>
        <Button
          variant="dark"
          className="m-1"
          onClick={() => setType("horror")}
        >
          Horror
        </Button>
        <Button
          variant="dark"
          className="m-1"
          onClick={() => setType("romance")}
        >
          Romance
        </Button>
        <Button variant="dark" className="m-1" onClick={() => setType("scifi")}>
          Scifi
        </Button>
        {type === "fantasy" && <AllTheBooks books={fantasy} />}
        {type === "history" && <AllTheBooks books={history} />}
        {type === "horror" && <AllTheBooks books={horror} />}
        {type === "horror" && <AllTheBooks books={romance} />}
        {type === "horror" && <AllTheBooks books={scifi} />}

        <UserComponent />
      </Container>
      <MyFooter />
    </>
  );
};

