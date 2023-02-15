import { useEffect } from 'react';
import { createContext, useState } from 'react';
import authAxios from '../services/auth.service';

export const AuthContext = createContext();

const LOCALSTORAGE_TOKEN = 'tokenAuth';

export const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    const storeToken = (token) => {
        localStorage.setItem(LOCALSTORAGE_TOKEN, token.authToken);
    };

    const destroyToken = () => {
        localStorage.removeItem(LOCALSTORAGE_TOKEN);
    };

    const authentication = () => {
        const token = localStorage.getItem(LOCALSTORAGE_TOKEN);

        if (token) {
            authAxios
                .verify(token)
                .then((user) => {
                    setUser(user);
                    setIsLoading(false);
                    setIsLoggedIn(true);
                })
                .catch((err) => {
                    console.log(err);
                    setUser(null);
                    setIsLoading(false);
                    setIsLoggedIn(false);
                });
        } else {
            setUser(null);
            setIsLoading(false);
            setIsLoggedIn(false);
        }
    }

    const logOut = () => {
        destroyToken();
        authentication();
    }

    useEffect(() => {
        authentication();
    }, []);

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, isLoading, user, storeToken, authentication, logOut }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};