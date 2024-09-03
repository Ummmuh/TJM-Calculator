import React, { useState } from 'react';
import CurrencyConverter from './CurrencyConverter';

const TJMCalculator = () => {
  const [monthlySalary, setMonthlySalary] = useState(''); // État pour le salaire mensuel souhaité
  const [operatingCost, setOperatingCost] = useState(''); // État pour les frais de fonctionnement
  const [charges, setCharges] = useState(''); // État pour les charges
  const [billableDays, setBillableDays] = useState(''); // État pour le nombre de jours à travailler
  const [tjm, setTJM] = useState(null); // État pour stocker le TJM calculé

  const handleCalculateTJM = () => {
    // Calcule du TJM 
    const totalMonthlyCost = parseFloat(monthlySalary) + parseFloat(operatingCost) + parseFloat(charges);
    const tjmCalculated = totalMonthlyCost / parseFloat(billableDays);
    setTJM(tjmCalculated);
  };

  return (
    <div>
      <h1 className='sectitle'>CALCULATEUR DE TJM</h1>
      <hr></hr>
      <div>
        <label>Salaire Mensuel Souhaité (€) :</label>
        <input
          type="number"
          value={monthlySalary}
          onChange={(e) => setMonthlySalary(e.target.value)} // Met à jour l'état du salaire mensuel
        />
      </div>
      <div>
        <label>Frais de Fonctionnement (€) :</label>
        <input
          type="number"
          value={operatingCost}
          onChange={(e) => setOperatingCost(e.target.value)} // Met à jour l'état des frais de fonctionnement
        />
      </div>
      <div>
        <label>Charges (€) :</label>
        <input
          type="number"
          value={charges}
          onChange={(e) => setCharges(e.target.value)} // Met à jour l'état des charges
        />
      </div>
      <div>
        <label>Nombre de Jours à Travailler :</label>
        <input
          type="number"
          value={billableDays}
          onChange={(e) => setBillableDays(e.target.value)} // Met à jour l'état des jours facturables
        />
      </div>
      <button className='button-container' onClick={handleCalculateTJM}>Calculer</button>
      {tjm !== null && (
        <div>
          <h3>Votre TJM est de {tjm.toFixed(2)} €</h3> {/* Affiche le TJM calculé */}
        </div>
      )}
    </div>
  );
};

export default TJMCalculator;