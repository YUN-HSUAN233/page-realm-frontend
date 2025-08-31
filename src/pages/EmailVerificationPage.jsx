import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
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

function EvAccent() {
  return <div className="bg-[#4b2e2a] h-[50px] shrink-0 w-4" />;
}

function EvTitle() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-5 items-center justify-start px-[7px] py-0 relative w-full">
          <EvAccent />
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
            <h1 className="block leading-[1.1] whitespace-pre">Email 註冊</h1>
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
        <h2 className="block leading-[1.1] whitespace-pre">輸入驗證碼</h2>
      </div>
    </div>
  );
}

function EvfTitle() {
  return (
    <div className="box-border content-stretch flex gap-[15px] items-center justify-start overflow-clip px-0 py-1.5 relative shrink-0 w-full">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 4">
            <line stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="10 10" strokeWidth="4" x2="112" y1="2" y2="2" />
          </svg>
        </div>
      </div>
      <EmailLoginTitleText />
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 4">
            <line stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="10 10" strokeWidth="4" x2="112" y1="2" y2="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function VerificationCodeInput({ value, onChange }) {
  return (
    <div className="h-[38px] relative rounded-md shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-start px-[17px] py-3 relative w-full">
          <input
            type="text"
            placeholder="請輸入六位數驗證碼"
            value={value}
            onChange={onChange}
            maxLength={6}
            className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px] w-full bg-transparent border-none outline-none"
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-md" />
    </div>
  );
}

function VerificationCode({ verificationCode, onVerificationCodeChange }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[15px] items-center justify-center pb-[5px] pt-[15px] px-[30px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ab3b3a] text-[20px] text-nowrap tracking-[-0.5px]">
            <h3 className="block leading-[1.1] whitespace-pre">會員註冊即將完成</h3>
          </div>
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[14px] text-nowrap tracking-[-0.35px]">
            <p className="leading-[1.1] whitespace-pre">請輸入會員註冊的六位數驗證碼以完成註冊</p>
          </div>
          <VerificationCodeInput 
            value={verificationCode} 
            onChange={onVerificationCodeChange} 
          />
        </div>
      </div>
    </div>
  );
}

function ConfirmCodeBtn({ onClick, loading }) {
  return (
    <button 
      className="bg-[#ab3b3a] box-border content-stretch flex items-center justify-center overflow-clip px-[30px] py-2 relative rounded-xl shrink-0" 
      onClick={onClick}
      disabled={loading}
    >
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[20px] text-nowrap tracking-[-0.5px]">
        <p className="leading-[1.1] whitespace-pre">{loading ? '驗證中...' : '進行驗證'}</p>
      </div>
    </button>
  );
}

function ConfirmCodeSection({ onVerify, loading }) {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip px-2 py-[5px] relative shrink-0">
      <ConfirmCodeBtn onClick={onVerify} loading={loading} />
    </div>
  );
}

function UsingEmail({ email }) {
  return (
    <div className="relative rounded-lg shrink-0">
      <div className="box-border content-stretch flex flex-col font-bold gap-[5px] items-center justify-center leading-[0] not-italic overflow-clip px-[30px] py-2.5 relative text-nowrap">
        <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] justify-center relative shrink-0 text-[#374c77] text-[16px] tracking-[-0.4px]">
          <p className="leading-[1.1] text-nowrap whitespace-pre">{`收件Email : `}</p>
        </div>
        <div className="flex flex-col font-['Inter:Bold',_sans-serif] justify-center relative shrink-0 text-[#4b2e2a] text-[14px] tracking-[-0.35px]">
          <p className="leading-[1.1] text-nowrap whitespace-pre">{email}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#c8cbd4] border-dashed inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function NoticeText() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_JP:Regular',_'Noto_Sans_SC:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[14px] tracking-[-0.35px] w-full">
        <p className="leading-[1.1]">
          如果沒有收到驗證信,請檢查信箱中的垃圾郵件
          <br aria-hidden="true" />
          如果無法在垃圾郵件找到驗證信,請確認Email資訊是否正確
          <br aria-hidden="true" />
          如果您希望變更註冊的Email,請點擊下方按鈕
        </p>
      </div>
    </div>
  );
}

function ReRegisterBtn({ onClick }) {
  return (
    <button 
      className="bg-[#ffffff] relative rounded-xl shrink-0" 
      onClick={onClick}
    >
      <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[30px] py-2.5 relative">
        <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[16px] text-nowrap tracking-[-0.4px]">
          <p className="leading-[1.1] whitespace-pre">重新註冊</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-xl" />
    </button>
  );
}

function ReRegisterSection({ onReRegister }) {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip px-[5px] py-[3px] relative shrink-0">
      <ReRegisterBtn onClick={onReRegister} />
    </div>
  );
}

function EvForm({ verificationCode, onVerificationCodeChange, onVerify, onReRegister, email, loading }) {
  return (
    <div className="bg-[#ffffff] relative rounded-md shrink-0">
      <div className="box-border content-stretch flex flex-col gap-[5px] items-center justify-start overflow-clip pb-[30px] pt-2.5 px-2.5 relative">
        <EvfTitle />
        <VerificationCode 
          verificationCode={verificationCode} 
          onVerificationCodeChange={onVerificationCodeChange} 
        />
        <ConfirmCodeSection onVerify={onVerify} loading={loading} />
        <UsingEmail email={email} />
        <NoticeText />
        <ReRegisterSection onReRegister={onReRegister} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function EvSection({ verificationCode, onVerificationCodeChange, onVerify, onReRegister, email, loading }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-10 items-start justify-center px-[75px] py-5 relative w-full">
          <EvForm 
            verificationCode={verificationCode}
            onVerificationCodeChange={onVerificationCodeChange}
            onVerify={onVerify}
            onReRegister={onReRegister}
            email={email}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

function EVpage({ verificationCode, onVerificationCodeChange, onVerify, onReRegister, email, loading }) {
  return (
    <div className="bg-[#fffdfb] relative rounded shrink-0">
      <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip pb-10 pt-[25px] px-0 relative">
        <EvTitle />
        <EvSection 
          verificationCode={verificationCode}
          onVerificationCodeChange={onVerificationCodeChange}
          onVerify={onVerify}
          onReRegister={onReRegister}
          email={email}
          loading={loading}
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

const EmailVerificationPageContainer = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { verifyEmail, resendVerification } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const emailParam = searchParams.get('email');
    if (emailParam) {
      setEmail(decodeURIComponent(emailParam));
    }
  }, [searchParams]);

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleVerify = async () => {
    if (!verificationCode.trim()) {
      toast.error('請輸入驗證碼');
      return;
    }

    setLoading(true);
    try {
      const result = await verifyEmail(email, verificationCode);
      if (result.success) {
        toast.success('驗證成功！');
        navigate('/login');
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error('驗證失敗，請稍後再試');
    } finally {
      setLoading(false);
    }
  };

  const handleReRegister = () => {
    navigate('/register-email');
  };

  return (
    <div className="bg-[#ffffff] content-stretch flex flex-col gap-[41px] items-center justify-start relative size-full">
      <Header />
      <EVpage 
        verificationCode={verificationCode}
        onVerificationCodeChange={handleVerificationCodeChange}
        onVerify={handleVerify}
        onReRegister={handleReRegister}
        email={email}
        loading={loading}
      />
    </div>
  );
};

export default EmailVerificationPageContainer;