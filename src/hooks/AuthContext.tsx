import React, { createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  market: {
    id: string;
    avatar: string;
    city: string;
    email: string;
    name: string;
  };
}

interface AuthContextData {
  market: {
    id: string;
    avatar: string;
    city: string;
    email: string;
    name: string;
  };
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@IntegraMarket:token");
    const market = localStorage.getItem("@IntegraMarket:market");
    if (token && market) {
      return { token, market: JSON.parse(market) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("/sessions", {
      email,
      password,
    });
    const { token, market } = response.data;
    localStorage.setItem("@IntegraMarket:token", token);
    localStorage.setItem("@IntegraMarket:market", JSON.stringify(market));

    setData({ token, market });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@IntegraMarket:token");
    localStorage.removeItem("@IntegraMarket:market");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ market: data.market, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
