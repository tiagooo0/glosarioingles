import React, { useState } from 'react';

// Datos iniciales del glosario
const initialGlossaryData = [
  { english: 'Hello', spanish: 'Hola' },
  { english: 'Goodbye', spanish: 'Adiós' },
  { english: 'Please', spanish: 'Por favor' },
  { english: 'Thank you', spanish: 'Gracias' },
  { english: 'Yes', spanish: 'Sí' },
  { english: 'No', spanish: 'No' },
  { english: 'Excuse me', spanish: 'Perdón' },
];

// Función simulada para traducir de inglés a español
const translateToSpanish = (englishWord) => {
  // Esta función debería llamarse a una API de traducción real.
  const simulatedTranslations = {
    'apple': 'manzana',
    'house': 'casa',
    'computer': 'computadora',
    'car': 'coche',
  };
  return simulatedTranslations[englishWord.toLowerCase()] || 'Traducción no disponible';
};

const Glossary = () => {
  const [glossaryData, setGlossaryData] = useState(initialGlossaryData);
  const [searchTerm, setSearchTerm] = useState('');
  const [newWord, setNewWord] = useState('');

  // Manejar búsqueda
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Manejar ingreso de nueva palabra
  const handleNewWordChange = (event) => {
    setNewWord(event.target.value);
  };

  // Añadir nueva palabra al glosario
  const addNewWord = () => {
    if (newWord.trim() !== '') {
      const translatedWord = translateToSpanish(newWord);
      setGlossaryData([...glossaryData, { english: newWord, spanish: translatedWord }]);
      setNewWord(''); // Limpiar el campo de texto
    }
  };

  // Filtrar glosario según el término buscado
  const filteredGlossary = glossaryData.filter((term) =>
    term.english.toLowerCase().includes(searchTerm) || 
    term.spanish.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <h1>English/Spanish Glossary</h1>
      
      {/* Campo de búsqueda */}
      <input
        type="text"
        placeholder="Search term..."
        value={searchTerm}
        onChange={handleSearch}
      />

      {/* Formulario para añadir nueva palabra */}
      <div>
        <input
          type="text"
          placeholder="Add a new word in English"
          value={newWord}
          onChange={handleNewWordChange}
        />
        <button onClick={addNewWord}>Add Word</button>
      </div>

      {/* Tabla del glosario */}
      <table>
        <thead>
          <tr>
            <th>English</th>
            <th>Spanish</th>
          </tr>
        </thead>
        <tbody>
          {filteredGlossary.map((term, index) => (
            <tr key={index}>
              <td>{term.english}</td>
              <td>{term.spanish}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Glossary;
