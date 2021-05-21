import { Link, Route, Switch } from "react-router-dom";
import ContactUs from "../components/ContactUs";
import Home from "../components/Home";
import Technologies from "../components/Technologies";

export const routing = (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          TechnoElevate
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technologies">
                Technologies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Switch>
      <Route exact  path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/technologies" component={Technologies} />
      <Route path="/contact" component={ContactUs} />
    </Switch>
  </>
);
