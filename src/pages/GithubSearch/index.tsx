import './styles.css';

import ResultCard from 'components/ResultCard';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

type FormData = {
  git: string;
};

type Data = {
  url: string;
  followers: string;
  location: string;
  name: string;
  avatar_url: string;
};

const GithubSearch = () => {
  const [data, setData] = useState<Data>();
  const [formData, setFormData] = useState<FormData>({
    git: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formData.git}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setData(undefined);
        console.log(error);
      });
  };

  return (
    <div className="github-search-container">
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <h1>Encontre um perfil Github</h1>
            <input
              type="text"
              name="git"
              value={formData.git}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {data && (
        <div className="info-search-container">
          <div>
            <img src={data?.avatar_url} alt="" />
          </div>
          <div className="return-container">
            <h4>Informações</h4>
            <ResultCard title="Perfil:" description={data.url} />
            <ResultCard title="Seguidores:" description={data.followers} />
            <ResultCard title="Localidade:" description={data.location} />
            <ResultCard title="Nome:" description={data.name} />
          </div>
        </div>
      )}
    </div>
  );
};

export default GithubSearch;
