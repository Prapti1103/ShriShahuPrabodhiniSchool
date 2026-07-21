import React, { createContext, useContext, useState } from "react";
import { coordinatorsData } from "../data/coordinatorsData.js";
import { studentsData } from "../data/studentsData.js";

// Dummy admin credential (in a real build this must come from a secure backend)
const ADMIN_CREDENTIALS = { username: "admin", password: "admin@123" };

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = sessionStorage.getItem("ssp_user");
    return saved ? JSON.parse(saved) : null;
  });

  function persist(u) {
    setUser(u);
    if (u) sessionStorage.setItem("ssp_user", JSON.stringify(u));
    else sessionStorage.removeItem("ssp_user");
  }

  function loginAdmin(username, password) {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      const u = { role: "admin", name: "Administrator", username };
      persist(u);
      return { success: true };
    }
    return { success: false, message: "Invalid admin username or password." };
  }

  function loginCoordinator(username, password) {
    const found = coordinatorsData.find(
      (c) => c.username === username && c.password === password
    );
    if (found) {
      const u = { role: "coordinator", name: found.name, username, id: found.id, centerId: found.centerId };
      persist(u);
      return { success: true };
    }
    return { success: false, message: "Invalid coordinator username or password." };
  }

  function loginStudent(rollNo, password) {
    const found = studentsData.find(
      (s) => s.rollNo === rollNo && s.password === password
    );
    if (found) {
      const u = { role: "student", name: found.name, rollNo, id: found.id };
      persist(u);
      return { success: true };
    }
    return { success: false, message: "Invalid roll number or password." };
  }

  function logout() {
    persist(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, loginAdmin, loginCoordinator, loginStudent, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
