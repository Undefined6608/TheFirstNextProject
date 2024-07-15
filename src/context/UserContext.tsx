import { createContext, FC, ReactNode, useContext, useState } from "react";
import { UserContextType, UserState } from "@/types/global";

const UserContext = createContext<UserContextType | null>(null);

// 创建一个提供者组件
export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserState | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
