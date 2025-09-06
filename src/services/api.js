import axios from 'axios';

export const API_BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true,
});

// 請求攔截器 - 添加 JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('JWT_TOKEN');
    const url = config.url || '';
    const isPublicAuth = url.includes('/auth/public/');

    if (token && !isPublicAuth) {
      config.headers.Authorization = `Bearer ${token}`;
    } else if (isPublicAuth) {
      // 確保公開端點不帶入舊的 Authorization
      if (config.headers && 'Authorization' in config.headers) {
        delete config.headers.Authorization;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 響應攔截器 - 處理錯誤
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const url = error.config?.url || '';

    const isPublicAuth = url.includes('/auth/public/');
    const onTotpLoginFlow = typeof window !== 'undefined' && window.location?.pathname === '/settings/totp' && localStorage.getItem('TEMP_JWT_FOR_2FA');

    if (status === 401 && !isPublicAuth && !onTotpLoginFlow) {
      localStorage.removeItem('JWT_TOKEN');
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// 認證相關 API
export const authAPI = {
  // 登入
  login: (credentials) => api.post('/auth/public/signin', credentials),
  
  // 註冊
  register: (userData) => api.post('/auth/public/signup', userData),
  
  // Email 驗證（JSON body，符合 AuthController.EmailVerifyRequest）
  verifyEmail: (verificationData) => api.post('/auth/public/verify', verificationData, { withCredentials: false }),
  // Email 驗證（query params, POST）
  verifyEmailCode: (email, code) => api.post('/auth/public/verify', null, { params: { email, code }, withCredentials: false }),
  // Email 驗證（query params, GET）
  verifyEmailCodeGet: (email, code) => api.get('/auth/public/verify', { params: { email, code }, withCredentials: false }),
  
  // 重新發送驗證碼
  resendVerification: (email) => api.post('/auth/public/resend-verification', null, { params: { email } }),
  
  // 忘記密碼
  forgotPassword: (email) => api.post('/auth/public/forgot-password', null, { params: { email } }),
  
  // 重設密碼
  resetPassword: (token, newPassword, checkPassword) => api.post('/auth/public/reset-password', null, { params: { token, newPassword, checkPassword } }),
  
  // 二階段認證（TOTP）相關
  enableTotp: () => api.post('/auth/enable-totp'),
  disableTotp: () => api.post('/auth/disable-totp'),
  verifyTotp: (code) => api.post('/auth/verify-totp', null, { params: { code } }),
  getTotpStatus: () => api.get('/auth/user/totp-status'),
  verifyTotpLogin: (code, tempJwt) => api.post('/auth/public/verify-totp-login', null, { params: { code, tempJwt } })
};

// 用戶相關 API
export const userAPI = {
  getCurrentUser: () => api.get('/user/'),
  getUsername: () => api.get('/user/username'),
  updatePassword: (newPassword, checkPassword) => api.put('/user/password', null, { params: { newPassword, checkPassword } }),
  updateBirthdate: (birthdate) => api.put('/user/birthdate', null, { params: { birthdate } }),
  updateGender: (gender) => api.put('/user/gender', null, { params: { gender } }),
  updateUsername: (username) => api.put('/user/username', null, { params: { username } }),
  uploadAvatar: (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return api.post('/user/avatar', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
  },
  deleteUser: () => api.delete('/user/')
};

// 會員相關 API
export const membershipAPI = {
  getMembershipStatus: () => api.get('/membership/status')
};

// 客服相關 API
export const supportAPI = {
  // 創建客服票據（顯式帶入 Authorization，避免特殊情境攔截器未附帶）
  createTicket: (payload) => {
    const token = localStorage.getItem('JWT_TOKEN');
    const cfg = token ? { headers: { Authorization: `Bearer ${token}` } } : undefined;
    return api.post('/support/tickets', payload, cfg);
  },
  // 使用者自己的工單列表（摘要）
  getUserTickets: () => api.get('/support/tickets'),
  // 指定工單詳情（含訊息）
  getTicketDetail: (ticketId) => api.get(`/support/tickets/${ticketId}`),
  // 新增訊息
  addMessage: (ticketId, content) => api.post(`/support/tickets/${ticketId}/messages`, { content }),
  // 一次取回全部工單與訊息
  getAllTicketDetails: () => api.get('/support/tickets/details')
};

// 願望清單相關 API
export const wishlistAPI = {
  // 查看願望清單
  getWishlist: () => api.get('/wish/view'),
  // 從願望清單移除商品（批量操作）
  removeFromWishlist: (itemIds) => api.delete('/wish/remove', { data: { ids: Array.isArray(itemIds) ? itemIds : [itemIds] } }),
  // 將願望清單商品加入購物車（批量操作）
  moveToCart: (itemIds) => api.post('/wish/toCart', { ids: Array.isArray(itemIds) ? itemIds : [itemIds] })
};

// 購物車相關 API
export const cartAPI = {
  // 查看購物車
  getCart: () => api.get('/cart/view'),
  // 從購物車移除商品（批量操作）
  removeFromCart: (itemIds) => api.delete('/cart/remove', { data: { ids: Array.isArray(itemIds) ? itemIds : [itemIds] } }),
  // 將購物車商品加入願望清單（批量操作）
  moveToWishlist: (itemIds) => api.post('/cart/toWish', { ids: Array.isArray(itemIds) ? itemIds : [itemIds] })
};

// 結帳相關 API
export const checkoutAPI = {
  // 獲取購物車摘要（小計、回饋點數等）
  getCartSummary: () => api.get('/checkout/summary'),
  // 獲取會員等級信息
  getMembershipTier: () => api.get('/checkout/membershipTier'),
  // 獲取可用點數信息
  getPointsInfo: () => api.get('/checkout/pointsInfo'),
  // 獲取可用優惠券信息
  getCouponInfo: () => api.get('/checkout/couponInfo'),
  // 應用點數折抵
  applyPoints: (pointsToApply) => api.post('/checkout/applyPoints', { pointsToApply }),
  // 應用優惠券
  applyCoupon: (couponCode) => api.post('/checkout/applyCoupon', { couponCode }),
  // 創建訂單並獲取綠界支付頁面
  createOrder: () => api.post('/checkout/createOrder', {}, { 
    responseType: 'text',
    headers: {
      'Accept': 'text/html'
    }
  })
};

// 訂單相關 API
export const ordersAPI = {
  // 查看訂單清單
  getOrders: (page = 0, size = 5) => api.get('/order/view', { params: { page, size } }),
};

// 點數相關 API
export const pointsAPI = {
  // 獲取目前可用點數信息
  getPointsInfo: () => api.get('/checkout/pointsInfo'),
  // 獲取點數紀錄
  getPointsHistory: () => api.get('/points/view'),
};

// 優惠券相關 API
export const couponAPI = {
  // 獲取優惠券清單（支援分頁）
  getCoupons: (page = 0, size = 5) => api.get('/coupon/view', { params: { page, size } }),
  // 添加優惠券
  addCoupon: (couponCode) => api.post('/coupon/add', { couponCode }),
};



export default api;
