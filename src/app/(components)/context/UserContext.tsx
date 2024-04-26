import React, { createContext, useState, useEffect, ReactNode } from 'react';


interface UserContextType {
    userId: string | null;
    setUserId: (userId: string) => void;
}

const defaultState: UserContextType = {
    userId: null,
    setUserId: () => {}
};

export const UserContext = createContext<UserContextType>(defaultState);

export const UserProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [userId, setUserId] = useState<string | null>(null);

    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserContext.Provider>
    );
};

/*

type UserProviderProps = {
    children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        // Simulate fetching user ID
        const fetchUserId = async () => {
            // Example: Fetch from local storage or authentication service
            setUserId('fetched-user-id');
        };

        fetchUserId();
    }, []);

    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserContext.Provider>
    );
};
*/
