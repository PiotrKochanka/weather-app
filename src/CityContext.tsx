import React, {createContext, useState, ReactNode} from 'react';

interface CityContextType {
    city: string;
    setCity: (city: string) => void;
}

export const CityContext = createContext<CityContextType | undefined>(undefined);

interface CityProviderProps {
    children: ReactNode;
}

export const CityProvider: React.FC<CityProviderProps> = ({ children }) => {
  const [city, setCity] = useState<string>("Poznan"); // Domyślne miasto

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};