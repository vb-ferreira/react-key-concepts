import './App.css';
import profilePicture from './assets/profile_picture.jpg';

function App() {
  return (
    <>
      <header>
        <img src={profilePicture} alt="Foto do perfil" />
        <h1>Vinícius Ferreira</h1>
        <p>Desenvolvimento Web & Análise de Dados</p>
      </header>
      <main>
        <p>
          Analista de Sistemas com especialização em Estatística, Engenharia e
          Ciência de Dados.
        </p>
      </main>
    </>
  );
}

export default App;
