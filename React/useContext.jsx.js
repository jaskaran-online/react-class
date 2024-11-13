import React, { createContext, useContext, useState } from 'react';

// Create a context for theme
const ThemeContext = createContext();

// Theme provider component
const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      background: isDarkMode ? '#333' : '#fff',
      text: isDarkMode ? '#fff' : '#333'
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Example components using the theme context
const App = () => {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
};

const MainContent = () => {
  const { isDarkMode, toggleTheme, colors } = useTheme();

  return (
    <div style={{ 
      backgroundColor: colors.background, 
      color: colors.text,
      padding: '20px',
      minHeight: '100vh'
    }}>
      <h1>Theme Context Example</h1>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <p>This content adapts to the current theme!</p>
    </div>
  );
};

export default App;
