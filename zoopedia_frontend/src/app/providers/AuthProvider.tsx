import React, { createContext, useContext, useMemo, useState } from "react";

/**
 * Minimal auth shape for tonight.
 * You can replace login/logout later with your real Django auth endpoints.
 */
type User = { id: string; email: string } | null;

type AuthContextValue = {
  user: User;
  isAuthenticated: boolean;
  loginMock: (email: string) => void;
  logoutMock: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: !!user,
      loginMock: (email: string) => setUser({ id: "user_mock", email }),
      logoutMock: () => setUser(null),
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
