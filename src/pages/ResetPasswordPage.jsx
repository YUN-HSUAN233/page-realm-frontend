import { useState } from 'react';
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

function Title() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-5 items-center justify-start px-[7px] py-0 relative w-full">
          <div className="bg-[#4b2e2a] h-[50px] shrink-0 w-4" />
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
            <h1 className="block leading-[1.1] whitespace-pre">重設密碼</h1>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function LabeledInput({ type, placeholder, value, onChange }) {
  return (
    <div className="relative rounded-md shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-start px-[17px] py-3 relative w-full">
          <input
            type={type}
            placeholder={placeholder}
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
        <p className="leading-[1.1] whitespace-pre">{loading ? '提交中...' : '確認重設'}</p>
      </div>
    </button>
  );
}

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || '';
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { resetPassword } = useAuth();

  const onSubmit = async () => {
    if (!token) {
      toast.error('重設連結無效或已過期');
      return;
    }
    if (!password || password.length < 8) {
      toast.error('請輸入至少 8 碼的新密碼');
      return;
    }
    if (password !== confirm) {
      toast.error('兩次輸入的密碼不一致');
      return;
    }

    setLoading(true);
    try {
      const result = await resetPassword(token, password, confirm);
      if (result.success) {
        toast.success('密碼已重設，請使用新密碼登入');
        navigate('/login');
      } else {
        toast.error(result.error || '重設失敗');
      }
    } catch (e) {
      console.error(e);
      toast.error('重設失敗，請稍後再試');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#ffffff] content-stretch flex flex-col gap-[41px] items-center justify-start relative size-full">
      <Header />
      <div className="bg-[#fffdfb] relative rounded shrink-0 w-full max-w-[800px]">
        <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start overflow-clip pb-[30px] pt-2.5 px-[30px] relative">
          <Title />
          <div className="w-full flex flex-col gap-4">
            <LabeledInput type="password" placeholder="請輸入新密碼" value={password} onChange={(e) => setPassword(e.target.value)} />
            <LabeledInput type="password" placeholder="請再次輸入新密碼" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
          </div>
          <SubmitBtn onClick={onSubmit} loading={loading} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      </div>
    </div>
  );
}
