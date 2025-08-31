import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import imgPageRealmLogo0111 from "../assets/logos/PageRealm_LOGO_01_1.png";

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

function ForgotPasswordAccent() {
  return <div className="bg-[#4b2e2a] h-[50px] shrink-0 w-4" />;
}

function ForgotPasswordTitle() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-5 items-center justify-start px-[7px] py-0 relative w-full">
          <ForgotPasswordAccent />
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
            <h1 className="block leading-[1.1] whitespace-pre">忘記密碼</h1>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
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
            placeholder="請輸入您的 Email"
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

function SubmitBtn({ onClick, loading }) {
  return (
    <button 
      className="bg-[#ab3b3a] box-border content-stretch flex items-center justify-center overflow-clip px-[30px] py-3 relative rounded-xl shrink-0" 
      onClick={onClick}
      disabled={loading}
    >
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[20px] text-nowrap tracking-[-0.5px]">
        <p className="leading-[1.1] whitespace-pre">{loading ? '發送中...' : '發送重設密碼信'}</p>
      </div>
    </button>
  );
}

function BackToLoginBtn({ onClick }) {
  return (
    <button 
      className="bg-[#ffffff] relative rounded-xl shrink-0" 
      onClick={onClick}
    >
      <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[30px] py-2.5 relative">
        <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[16px] text-nowrap tracking-[-0.4px]">
          <p className="leading-[1.1] whitespace-pre">返回登入</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-xl" />
    </button>
  );
}

function ForgotPasswordForm({ email, onEmailChange, onSubmit, onBackToLogin, loading }) {
  return (
    <div className="bg-[#ffffff] relative rounded-md shrink-0">
      <div className="box-border content-stretch flex flex-col gap-[30px] items-center justify-start overflow-clip pb-[30px] pt-2.5 px-[30px] relative">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-center tracking-[-0.5px]">
            <p className="leading-[1.1]">請輸入您的 Email 地址</p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[16px] text-center tracking-[-0.4px]">
            <p className="leading-[1.1]">我們將發送重設密碼的連結到您的 Email</p>
          </div>
        </div>
        
        <EmailInput value={email} onChange={onEmailChange} />
        
        <div className="flex flex-col gap-4 items-center">
          <SubmitBtn onClick={onSubmit} loading={loading} />
          <BackToLoginBtn onClick={onBackToLogin} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ForgotPasswordSection({ email, onEmailChange, onSubmit, onBackToLogin, loading }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-10 items-start justify-center px-[75px] py-5 relative w-full">
          <ForgotPasswordForm 
            email={email}
            onEmailChange={onEmailChange}
            onSubmit={onSubmit}
            onBackToLogin={onBackToLogin}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

function ForgotPasswordPage({ email, onEmailChange, onSubmit, onBackToLogin, loading }) {
  return (
    <div className="bg-[#fffdfb] relative rounded shrink-0">
      <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip pb-10 pt-[25px] px-0 relative">
        <ForgotPasswordTitle />
        <ForgotPasswordSection 
          email={email}
          onEmailChange={onEmailChange}
          onSubmit={onSubmit}
          onBackToLogin={onBackToLogin}
          loading={loading}
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

const ForgotPasswordPageContainer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { forgotPassword } = useAuth();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    if (!email.trim()) {
      toast.error('請輸入 Email 地址');
      return;
    }

    setLoading(true);
    try {
      const result = await forgotPassword(email);
      if (result.success) {
        toast.success('重設密碼信已發送到您的 Email，請檢查收件匣');
        navigate('/login');
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      console.error('Forgot password error:', error);
      toast.error('發送失敗，請稍後再試');
    } finally {
      setLoading(false);
    }
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="bg-[#ffffff] content-stretch flex flex-col gap-[41px] items-center justify-start relative size-full">
      <Header />
      <ForgotPasswordPage 
        email={email}
        onEmailChange={handleEmailChange}
        onSubmit={handleSubmit}
        onBackToLogin={handleBackToLogin}
        loading={loading}
      />
    </div>
  );
};

export default ForgotPasswordPageContainer;
