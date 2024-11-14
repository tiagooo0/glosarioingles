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

const Glossary = () => {
  const [glossaryData, setGlossaryData] = useState(initialGlossaryData);
  const [searchTerm, setSearchTerm] = useState('');
  const [newWord, setNewWord] = useState('');
  const [newTranslation, setNewTranslation] = useState('');
  const [newLanguage, setNewLanguage] = useState('english');
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleNewWordChange = (event) => {
    setNewWord(event.target.value);
  };

  const handleNewTranslationChange = (event) => {
    setNewTranslation(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setNewLanguage(event.target.value);
  };

  const addNewWord = () => {
    if (newWord.trim() !== '' && newTranslation.trim() !== '') {
      setLoading(true);
      const newEntry =
        newLanguage === 'english'
          ? { english: newWord, spanish: newTranslation }
          : { english: newTranslation, spanish: newWord };

      setGlossaryData([...glossaryData, newEntry]);
      setNewWord('');
      setNewTranslation('');
      setLoading(false);
    }
  };

  const filteredGlossary = glossaryData.filter((term) =>
    term.english.toLowerCase().includes(searchTerm) ||
    term.spanish.toLowerCase().includes(searchTerm)
  );

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white p-4 sm:p-6">
        {/* Toggle Dark Mode */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="bg-gray-300 text-gray-800 rounded-full p-2 shadow-md hover:scale-105 transform transition duration-200"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 dark:text-white mb-6">
            Glossary (English/Spanish)
          </h1>

          {/* Campo de búsqueda */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search term..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-3 sm:p-4 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm bg-white dark:bg-gray-600 text-gray-800 dark:text-white focus:ring-2 focus:ring-gray-400 outline-none transition ease-in-out"
            />
          </div>

          {/* Formulario para añadir nueva palabra */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Enter a new word"
              value={newWord}
              onChange={handleNewWordChange}
              className="flex-grow p-3 sm:p-4 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm bg-white dark:bg-gray-600 text-gray-800 dark:text-white focus:ring-2 focus:ring-gray-400 outline-none transition ease-in-out"
            />
            <input
              type="text"
              placeholder="Enter translation"
              value={newTranslation}
              onChange={handleNewTranslationChange}
              className="flex-grow p-3 sm:p-4 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm bg-white dark:bg-gray-600 text-gray-800 dark:text-white focus:ring-2 focus:ring-gray-400 outline-none transition ease-in-out"
            />
            <select
              value={newLanguage}
              onChange={handleLanguageChange}
              className="p-3 sm:p-4 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm bg-white dark:bg-gray-600 text-gray-800 dark:text-white focus:ring-2 focus:ring-gray-400 outline-none transition ease-in-out"
            >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
            </select>
            <button
              onClick={addNewWord}
              disabled={loading}
              className={`px-6 py-3 font-medium text-white rounded-xl shadow-sm ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-600 hover:bg-gray-700'
              }`}
            >
              {loading ? 'Adding...' : 'Add Word'}
            </button>
          </div>

          {/* Tabla del glosario */}
          <div className="overflow-x-auto">
            <table className="w-full table-auto bg-white dark:bg-gray-700 rounded-2xl shadow-md">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white">
                  <th className="py-3 px-6 text-left text-lg">English</th>
                  <th className="py-3 px-6 text-left text-lg">Spanish</th>
                </tr>
              </thead>
              <tbody>
                {filteredGlossary.map((term, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-200"
                  >
                    <td className="py-4 px-6">{term.english}</td>
                    <td className="py-4 px-6">{term.spanish}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glossary;
