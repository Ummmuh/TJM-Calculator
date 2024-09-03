import './App.css';
import TJMCalculator from './TJMCalculator';
import CurrencyConverter from './CurrencyConverter';
function App() {
  return (
    <div className="app-container">
      <header>
        <h1 className='logo'>Freelances d'Afrique</h1>
        <p className='slogan'>La plateforme qui vous révèle votre véritable valeur</p>
      </header>
      <div className="content-container">
        <div className="block tjm-calculator">
          <TJMCalculator /> {/* Composant du calculateur TJM */}
        </div>
        <div className="block currency-converter">
          <CurrencyConverter /> {/* Composant du convertisseur de devises */}
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Freelances d'Afrique. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
