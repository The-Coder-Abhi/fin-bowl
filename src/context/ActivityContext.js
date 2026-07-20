import { createContext, useState } from 'react';

export const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
  const [showActivity, setShowActivity] = useState(false);
  const toggleActivity = () => setShowActivity(prev => !prev);

  return (
    <ActivityContext.Provider value={{ showActivity, toggleActivity, setShowActivity }}>
      {children}
    </ActivityContext.Provider>
  );
};