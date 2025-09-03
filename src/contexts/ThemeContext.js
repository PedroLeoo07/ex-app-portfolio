import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true); // Default to dark theme like your CSS

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = {
    isDark,
    colors: {
      background: isDark ? '#000000' : '#ffffff',
      surface: isDark ? '#000508' : '#f2f4f7',
      text: isDark ? '#ededed' : '#1a1d21',
      primary: isDark ? '#f00000' : '#d10000',
      secondary: isDark ? '#b0b0b0' : '#666666',
      border: isDark ? '#f00000' : '#d10000',
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
