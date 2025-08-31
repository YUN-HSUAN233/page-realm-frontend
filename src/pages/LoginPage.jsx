import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { API_BASE_URL } from '../services/api';
import toast from 'react-hot-toast';
import imgPageRealmLogo0111 from "../assets/logos/PageRealm_LOGO_01_1.png";
import imgChromeLogo from "../assets/logos/chrome.webp";
import imgFacebookLogo from "../assets/logos/Facebook_Logo_Primary.png";
import imgGithubLogo from "../assets/logos/github-mark.png";

function Logo() {
  return (
    <div className="box-border content-stretch flex items-start justify-start overflow-clip px-[29px] py-[9px] relative shrink-0 w-[195px]">
      <div 
        className="aspect-[1024/539] basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px relative rounded-[5px] shrink-0" 
        style={{ backgroundImage: `url('${imgPageRealmLogo0111}')` }}
      >
        <div aria-hidden="true" className="absolute border-2 border-[#c86b42] border-dashed inset-0 pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="bg-[#fffdfb] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[30px] pr-[70px] py-0 relative w-full">
          <Logo />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#4b2e2a] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
    </header>
  );
}

function LoginAccent() {
  return <div className="bg-[#4b2e2a] h-[50px] shrink-0 w-4" />;
}

function LoginTitle() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-5 items-center justify-start px-[7px] py-0 relative w-full">
          <LoginAccent />
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
            <h1 className="block leading-[1.1] whitespace-pre">會員登入</h1>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function EmailLoginTitleText() {
  return (
    <div className="bg-[#fffdfb] box-border content-stretch flex items-center justify-center overflow-clip px-0 py-1 relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
        <h2 className="block leading-[1.1] whitespace-pre">透過 Email 登入</h2>
      </div>
    </div>
  );
}

function EmailLoginTitle() {
  return (
    <div className="box-border content-stretch flex gap-[15px] items-center justify-start overflow-clip px-0 py-1.5 relative shrink-0 w-full">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 4">
            <line stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="10 10" strokeWidth="4" x2="49.5" y1="2" y2="2" />
          </svg>
        </div>
      </div>
      <EmailLoginTitleText />
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 4">
            <line stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="10 10" strokeWidth="4" x2="49.5" y1="2" y2="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function EmailInput({ value, onChange }) {
  return (
    <div className="relative rounded-md shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-start px-[17px] py-3 relative w-full">
          <input
            type="email"
            placeholder="Email : "
            value={value}
            onChange={onChange}
            className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px] w-full bg-transparent border-none outline-none"
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-md" />
    </div>
  );
}

function PasswordInput({ value, onChange }) {
  return (
    <div className="relative rounded-md shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-start px-[17px] py-3 relative w-full">
          <input
            type="password"
            placeholder="Password : "
            value={value}
            onChange={onChange}
            className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px] w-full bg-transparent border-none outline-none"
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-md" />
    </div>
  );
}

function EmailLoginBtn({ onClick, loading }) {
  return (
    <button 
      className="cursor-pointer relative rounded-md shrink-0" 
      onClick={onClick}
      disabled={loading}
    >
      <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[107px] py-3 relative">
        <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
          <p className="leading-[1.1] whitespace-pre">{loading ? '登入中...' : '登入'}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-md" />
    </button>
  );
}

function EmailLoginBtnSection({ onLogin, loading }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-center justify-center px-5 py-0 relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4b2e2a] text-[16px] text-right tracking-[-0.4px]" style={{ width: "min-content" }}>
            <Link to="/forgot-password" className="leading-[1.1] hover:underline text-[#4b2e2a]">忘記密碼?</Link>
          </div>
          <EmailLoginBtn onClick={onLogin} loading={loading} />
        </div>
      </div>
    </div>
  );
}

function EmailLogin({ formData, onInputChange, onLogin, loading }) {
  return (
    <div className="bg-[#ffffff] relative rounded-md self-stretch shrink-0">
      <div className="box-border content-stretch flex flex-col gap-[30px] h-full items-center justify-start overflow-clip pb-[30px] pt-2.5 px-[30px] relative">
        <EmailLoginTitle />
        <EmailInput 
          value={formData.email} 
          onChange={(e) => onInputChange('email', e.target.value)} 
        />
        <PasswordInput 
          value={formData.password} 
          onChange={(e) => onInputChange('password', e.target.value)} 
        />
        <EmailLoginBtnSection onLogin={onLogin} loading={loading} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function SociaLoginTitleText() {
  return (
    <div className="bg-[#fffdfb] box-border content-stretch flex gap-[7px] items-center justify-center overflow-clip px-0 py-1 relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
        <h2 className="block leading-[1.1] whitespace-pre">第三方登入</h2>
      </div>
    </div>
  );
}

function SocialLoginTitle() {
  return (
    <div className="box-border content-stretch flex gap-[15px] items-center justify-center overflow-clip px-0 py-1.5 relative shrink-0 w-full">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82 4">
            <line stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="10 10" strokeWidth="4" x2="82" y1="2" y2="2" />
          </svg>
        </div>
      </div>
      <SociaLoginTitleText />
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82 4">
            <line stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="10 10" strokeWidth="4" x2="82" y1="2" y2="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function GoogleLoginBtn({ onClick }) {
  return (
    <button className="cursor-pointer relative rounded-md shrink-0 w-full" onClick={onClick}>
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[15px] items-center justify-center px-4 py-0 relative w-full">
          <div className="bg-center bg-cover bg-no-repeat shrink-0 size-11" style={{ backgroundImage: `url('${imgChromeLogo}')` }} />
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
            <p className="leading-[1.1] whitespace-pre">使用 Google 帳號登入</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-md" />
    </button>
  );
}

function FbLoginBtn({ onClick }) {
  return (
    <button className="cursor-pointer relative rounded-md shrink-0 w-full" onClick={onClick}>
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[15px] items-center justify-center px-[25px] py-2 relative w-full">
          <div className="bg-center bg-cover bg-no-repeat shrink-0 size-[29px]" style={{ backgroundImage: `url('${imgFacebookLogo}')` }} />
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
            <p className="leading-[1.1] whitespace-pre">使用 Facebook 帳號登入</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-md" />
    </button>
  );
}

function GithubLoginBtn({ onClick }) {
  return (
    <button className="cursor-pointer relative rounded-md shrink-0 w-full" onClick={onClick}>
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[15px] items-center justify-center px-[25px] py-2 relative w-full">
          <div className="bg-center bg-cover bg-no-repeat shrink-0 size-[29px]" style={{ backgroundImage: `url('${imgGithubLogo}')` }} />
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
            <p className="leading-[1.1] whitespace-pre">使用 Github 帳號登入</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-md" />
    </button>
  );
}

function SocialLogin({ onGoogleLogin, onFacebookLogin, onGithubLogin }) {
  return (
    <div className="bg-[#ffffff] relative rounded-md shrink-0">
      <div className="box-border content-stretch flex flex-col gap-[30px] items-center justify-start overflow-clip pb-[30px] pt-2.5 px-[30px] relative">
        <SocialLoginTitle />
        <GoogleLoginBtn onClick={onGoogleLogin} />
        <FbLoginBtn onClick={onFacebookLogin} />
        <GithubLoginBtn onClick={onGithubLogin} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function LoginSection({ formData, onInputChange, onLogin, onGoogleLogin, onFacebookLogin, onGithubLogin, loading }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-10 items-start justify-center px-[75px] py-5 relative w-full">
          <EmailLogin 
            formData={formData} 
            onInputChange={onInputChange} 
            onLogin={onLogin} 
            loading={loading} 
          />
          <SocialLogin 
            onGoogleLogin={onGoogleLogin}
            onFacebookLogin={onFacebookLogin}
            onGithubLogin={onGithubLogin}
          />
        </div>
      </div>
    </div>
  );
}

function Signuptitle() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-5 py-[3px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
            <h2 className="block leading-[1.1] whitespace-pre">尚未加入會員?</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

function SignupBtn({ onClick }) {
  return (
    <button className="bg-[#ab3b3a] cursor-pointer relative rounded-lg shrink-0" onClick={onClick}>
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[30px] py-3 relative">
        <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[20px] text-nowrap tracking-[-0.5px]">
          <p className="leading-[1.1] whitespace-pre">立即使用 Email 註冊會員</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-lg" />
    </button>
  );
}

function Signup({ onSignupClick }) {
  return (
    <div className="bg-[#ffffff] relative rounded-md shrink-0">
      <div className="box-border content-stretch flex flex-col gap-[15px] items-center justify-center overflow-clip px-10 py-5 relative">
        <Signuptitle />
        <SignupBtn onClick={onSignupClick} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function SignupSection({ onSignupClick }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-start px-[75px] py-0 relative w-full">
          <Signup onSignupClick={onSignupClick} />
        </div>
      </div>
    </div>
  );
}

function LoginPage({ formData, onInputChange, onLogin, onGoogleLogin, onFacebookLogin, onGithubLogin, onSignupClick, loading }) {
  return (
    <div className="bg-[#fffdfb] relative rounded shrink-0">
      <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip pb-10 pt-[25px] px-0 relative">
        <LoginTitle />
        <LoginSection 
          formData={formData}
          onInputChange={onInputChange}
          onLogin={onLogin}
          onGoogleLogin={onGoogleLogin}
          onFacebookLogin={onFacebookLogin}
          onGithubLogin={onGithubLogin}
          loading={loading}
        />
        <SignupSection onSignupClick={onSignupClick} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

const LoginPageContainer = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const result = await login(formData);
      if (result.success) {
        if (result.require2fa) {
          navigate('/settings/totp');
        } else {
          navigate('/user-main');
        }
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('登入失敗，請稍後再試');
    } finally {
      setLoading(false);
    }
  };

  // OAuth2 登入：導向後端授權端點
  const redirectToOAuth2 = (provider) => {
    window.location.href = `${API_BASE_URL}/oauth2/authorization/${provider}`;
  };

  const handleGoogleLogin = () => redirectToOAuth2('google');
  const handleFacebookLogin = () => toast('Facebook 不在此版本需求範圍');
  const handleGithubLogin = () => redirectToOAuth2('github');

  const handleSignupClick = () => {
    navigate('/register-email');
  };

  return (
    <div className="bg-[#ffffff] content-stretch flex flex-col gap-[41px] items-center justify-start relative size-full">
      <Header />
      <LoginPage 
        formData={formData}
        onInputChange={handleInputChange}
        onLogin={handleLogin}
        onGoogleLogin={handleGoogleLogin}
        onFacebookLogin={handleFacebookLogin}
        onGithubLogin={handleGithubLogin}
        onSignupClick={handleSignupClick}
        loading={loading}
      />
    </div>
  );
};

export default LoginPageContainer;