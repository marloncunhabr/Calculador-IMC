import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (altura && peso) {
      const imc = peso / (altura * altura);
      setResultado(imc.toFixed(2));

      if (imc < 18.5) {
        setClassificacao('Abaixo do peso');
      } else if (imc < 24.9) {
        setClassificacao('Peso normal');
      } else if (imc < 29.9) {
        setClassificacao('Sobrepeso');
      } else if (imc < 34.9) {
        setClassificacao('Obesidade grau 1');
      } else if (imc < 39.9) {
        setClassificacao('Obesidade grau 2');
      } else {
        setClassificacao('Obesidade grau 3');
      }
    }
  };

  return (
    <div className={styles.App}>
      <h1 className={styles.h1}>Calculadora de IMC</h1>
      <div>
        <label className={styles.label}>Altura (m):</label>
        <input className={styles.input} placeholder="Exemplo 1.72"
          type="number"
          step="0.01"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <div>
        <label className={styles.label}>Peso (kg):</label>
        <input className={styles.input} placeholder="Exemplo 82,30"
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <button className={styles.button} onClick={calcularIMC}>Calcular IMC</button>
      {resultado && (
        <div className={styles.resultado}>
          <p>Seu IMC é: {resultado}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;
