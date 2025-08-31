# PageRealm 會員系統前端

這是一個基於 React + Vite + Tailwind CSS 的電子書商城會員系統前端專案，已與 Spring Boot 後端 API 完成串接。

## 專案結構

```
src/
├── components/           # 可重用組件
│   ├── common/          # 通用組件
│   │   ├── Logo.jsx
│   │   ├── Header.jsx
│   │   ├── PageTitle.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── InputField.jsx
│   │   ├── Button.jsx
│   │   └── RequiredTag.jsx
│   ├── auth/            # 認證相關組件
│   │   ├── OAuthButtons.jsx
│   │   ├── LoginForm.jsx
│   │   ├── RegisterForm.jsx
│   │   └── ProtectedRoute.jsx
│   └── layout/          # 布局組件
│       ├── PageLayout.jsx
│       └── AuthLayout.jsx
├── pages/               # 頁面組件
│   ├── LoginPage.jsx
│   ├── RegisterEmailPage.jsx
│   ├── EmailVerificationPage.jsx
│   ├── RegisterMethodPage.jsx
│   └── UserMainPage.jsx
├── context/             # Context API
│   └── AuthContext.jsx
├── services/            # API 服務
│   └── api.js
├── styles/              # 樣式文件
│   ├── main.css
│   ├── layout.css
│   └── components/
│       ├── common.css
│       └── auth.css
└── App.jsx              # 主應用組件
```

## 核心功能

### 1. 認證系統
- JWT Token 身份驗證
- 登入/註冊功能
- Email 驗證
- OAuth 第三方登入 (Google, Facebook, GitHub)
- 路由保護
- 自動登出處理

### 2. 組件化設計
- 可重用的通用組件
- 模組化的認證組件
- 統一的布局組件
- 響應式設計

### 3. 狀態管理
- Context API 全局狀態管理
- 用戶認證狀態
- 載入狀態處理

### 4. API 整合
- Axios 攔截器
- JWT Token 自動添加
- 錯誤處理
- 401 自動登出

## 技術棧

- **前端框架**: React 18
- **構建工具**: Vite
- **樣式**: CSS + Tailwind CSS
- **路由**: React Router v6
- **HTTP 客戶端**: Axios
- **狀態管理**: React Context API

## 開發指南

### 安裝依賴
```bash
npm install
```

### 啟動開發服務器
```bash
npm run dev
```

### 構建生產版本
```bash
npm run build
```

### 環境變數
創建 `.env` 文件：
```
VITE_API_URL=http://localhost:8080
```

## API 串接說明

### 認證 API 端點
- `POST /api/auth/public/signin` - 用戶登入
- `POST /api/auth/public/signup` - 用戶註冊
- `POST /api/auth/public/verify` - Email 驗證
- `POST /api/auth/public/resend-verification` - 重新發送驗證碼

### 用戶 API 端點
- `GET /api/user/` - 獲取當前用戶信息
- `GET /api/user/username` - 獲取用戶名
- `PUT /api/user/password` - 更新密碼
- `PUT /api/user/birthdate` - 更新生日
- `PUT /api/user/gender` - 更新性別
- `PUT /api/user/username` - 更新用戶名
- `POST /api/user/avatar` - 上傳頭像
- `DELETE /api/user/` - 刪除用戶

## 組件使用說明

### 通用組件

#### Logo
```jsx
import Logo from './components/common/Logo';

<Logo />
```

#### Header
```jsx
import Header from './components/common/Header';

<Header />
```

#### InputField
```jsx
import InputField from './components/common/InputField';

<InputField
  label="Email"
  type="email"
  placeholder="請輸入 Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>
```

#### Button
```jsx
import Button from './components/common/Button';

<Button onClick={handleClick} disabled={loading}>
  提交
</Button>
```

### 認證組件

#### LoginForm
```jsx
import LoginForm from './components/auth/LoginForm';

<LoginForm onSubmit={handleLogin} loading={loading} />
```

#### RegisterForm
```jsx
import RegisterForm from './components/auth/RegisterForm';

<RegisterForm onSubmit={handleRegister} loading={loading} />
```

### 布局組件

#### PageLayout
```jsx
import PageLayout from './components/layout/PageLayout';

<PageLayout title="頁面標題">
  <div>頁面內容</div>
</PageLayout>
```

#### AuthLayout
```jsx
import AuthLayout from './components/layout/AuthLayout';

<AuthLayout
  title="登入"
  onGoogleClick={handleGoogleLogin}
  onFacebookClick={handleFacebookLogin}
  onGithubClick={handleGithubLogin}
>
  <LoginForm onSubmit={handleLogin} />
</AuthLayout>
```

## API 整合

### 認證 API
- `POST /api/auth/public/signin` - 用戶登入
- `POST /api/auth/public/signup` - 用戶註冊
- `POST /api/auth/public/verify` - Email 驗證
- `POST /api/auth/public/resend-verification` - 重新發送驗證碼

### 使用 Context
```jsx
import { useAuth } from './context/AuthContext';

const { 
  login, 
  register, 
  verifyEmail, 
  resendVerification,
  logout, 
  currentUser, 
  isAuthenticated 
} = useAuth();
```

## 樣式系統

### 顏色主題
- 主色: `#4b2e2a` (深棕色)
- 強調色: `#ab3b3a` (紅色)
- 背景色: `#fffdfb` (米白色)

### 響應式斷點
- 手機: `max-width: 640px`
- 平板: `max-width: 768px`
- 桌面: `min-width: 1024px`

## 路由結構

- `/` - 重定向到登入頁面
- `/login` - 登入頁面
- `/register-email` - Email 註冊頁面
- `/email-verification` - Email 驗證頁面
- `/register-method` - 註冊方式選擇頁面
- `/user-main` - 用戶主頁 (需要認證)

## 表單驗證

### 註冊表單驗證
- 用戶名: 3-20 個字符
- Email: 有效的 Email 格式
- 密碼: 6-40 個字符
- 確認密碼: 必須與密碼一致
- 性別: 必選
- 生日: 不能是今天或未來日期

### 登入表單驗證
- Email: 有效的 Email 格式
- 密碼: 必填

## 注意事項

1. 所有 API 調用都會自動添加 JWT Token
2. 401 錯誤會自動登出並跳轉到登入頁面
3. 受保護的路由會自動檢查認證狀態
4. 組件都支持響應式設計
5. 使用 Context API 進行狀態管理，避免 prop drilling
6. 表單驗證包含前端驗證和後端錯誤處理
7. Email 驗證流程完整，包含重新發送功能

## 後續開發

1. 實現 OAuth 第三方登入
2. 添加忘記密碼功能
3. 添加用戶資料編輯功能
4. 實現會員等級系統
5. 添加通知系統
6. 實現客服系統
7. 添加購物車功能
8. 實現訂單管理
9. 添加支付系統
