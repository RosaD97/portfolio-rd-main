import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();


export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('it'); // Imposta la lingua predefinita

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};