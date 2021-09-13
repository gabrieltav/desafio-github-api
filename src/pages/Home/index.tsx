import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card-text">
        <h1>Desafio Github API</h1>
        <h6>Bootcamp Spring React - DevSuperior</h6>
      </div>
      <div>
        <Link to="/githubsearch">
          <button className="btn btn-primary btn-lg start-button">
            Começar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
