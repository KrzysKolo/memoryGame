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

export {};