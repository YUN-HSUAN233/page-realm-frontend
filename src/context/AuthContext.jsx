import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI, userAPI } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('JWT_TOKEN'));
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (credentials) => {
    try {
      const response = await authAPI.login(credentials);
      // 若後端要求 二階段認證，回傳 tempJwt，暫不寫入正式 JWT
      if (response.data?.require2fa && response.data?.tempJwt) {
        localStorage.setItem('TEMP_JWT_FOR_2FA', response.data.tempJwt);
        return { success: true, require2fa: true };
      }
      const { jwtToken, email, roles } = response.data;
      
      localStorage.setItem('JWT_TOKEN', jwtToken);
      setToken(jwtToken);
      
      // 設置用戶基本信息
      const user = {
        email,
        roles,
        username: email // 後端返回的是 email，暫時用 email 作為 username
      };
      setCurrentUser(user);
      
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      const errorMessage = error.response?.data?.message || '登入失敗';
      return { 
        success: false, 
        error: errorMessage 
      };
    }
  };

  const register = async (userData) => {
    try {
      const response = await authAPI.register(userData);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Register error:', error);
      const errorMessage = error.response?.data?.message || '註冊失敗';
      return { 
        success: false, 
        error: errorMessage 
      };
    }
  };

  const verifyEmail = async (email, code) => {
    try {
      const response = await authAPI.verifyEmail({ email, verificationCode: code });
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Email verification error:', error);
      const backendMessage = error.response?.data?.message || error.response?.data;
      const errorMessage = backendMessage || '驗證失敗，請確認驗證碼與 Email 是否正確';
      return { success: false, error: errorMessage };
    }
  };

  const resendVerification = async (email) => {
    try {
      const response = await authAPI.resendVerification(email);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Resend verification error:', error);
      const errorMessage = error.response?.data || '發送失敗';
      return { 
        success: false, 
        error: errorMessage 
      };
    }
  };

  const forgotPassword = async (email) => {
    try {
      const response = await authAPI.forgotPassword(email);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Forgot password error:', error);
      const errorMessage = error.response?.data?.message || '發送失敗';
      return { 
        success: false, 
        error: errorMessage 
      };
    }
  };

  const resetPassword = async (token, newPassword, checkPassword) => {
    try {
      const response = await authAPI.resetPassword(token, newPassword, checkPassword);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Reset password error:', error);
      const errorMessage = error.response?.data || '重設失敗';
      return { 
        success: false, 
        error: errorMessage 
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('JWT_TOKEN');
    setToken(null);
    setCurrentUser(null);
  };

  const fetchCurrentUser = async () => {
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await userAPI.getCurrentUser();
      setCurrentUser(response.data);
    } catch (error) {
      console.error('Fetch user error:', error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, [token]);

  const value = {
    token,
    currentUser,
    loading,
    login,
    register,
    verifyEmail,
    resendVerification,
    forgotPassword,
    resetPassword,
    logout,
    isAuthenticated: !!token
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
