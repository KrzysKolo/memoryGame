import {
  useEffect,
  useState,
  useContext,
  createContext,
  FunctionComponent,
} from "react";
import { firebase } from "./initFirebase";

interface IContext {

  user: firebase.User | null;
  loading: boolean;
  logout: () => void;
};

const AuthContext = createContext<IContext>({
  user: null,
  loading: true,
  logout: () => { }
});

const AuthProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
};
return (
  <AuthContext.Provider
    value={{ user, loading, logout: () => firebase.auth().signOut() }} >
    {children}
    </AuthContext.Provider>
)

export {};