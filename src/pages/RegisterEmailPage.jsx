import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import imgPageRealmLogo0111 from "../assets/logos/PageRealm_LOGO_01_1.png";
import { useForm } from 'react-hook-form';

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

function RbeAccent() {
  return <div className="bg-[#4b2e2a] h-[50px] shrink-0 w-4" />;
}

function RbeTitle() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-5 items-center justify-start px-[7px] py-0 relative w-full">
          <RbeAccent />
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
        <h2 className="block leading-[1.1] whitespace-pre">透過 Email 註冊</h2>
      </div>
    </div>
  );
}

function RbefTitle() {
  return (
    <div className="box-border content-stretch flex gap-[15px] items-center justify-start overflow-clip px-0 py-1.5 relative shrink-0 w-full">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 4">
            <line stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="10 10" strokeWidth="4" x2="91" y1="2" y2="2" />
          </svg>
        </div>
      </div>
      <EmailLoginTitleText />
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 4">
            <line stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="10 10" strokeWidth="4" x2="91" y1="2" y2="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RemindTag() {
  return (
    <div className="bg-[#ab3b3a] box-border content-stretch flex items-center justify-center overflow-clip p-[3px] relative rounded-md shrink-0">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[20px] text-nowrap tracking-[-0.5px]">
        <p className="leading-[1.1] whitespace-pre">必填</p>
      </div>
    </div>
  );
}

function EmailInfoText() {
  return (
    <div className="content-stretch flex gap-[15px] items-center justify-center overflow-clip relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
        <h3 className="block leading-[1.1] whitespace-pre">Email :</h3>
      </div>
      <RemindTag />
    </div>
  );
}

function EmailInfoInput({ value, onChange }) {
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

function PasswordInfoText() {
  return (
    <div className="content-stretch flex gap-[15px] items-center justify-start overflow-clip relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
        <h3 className="block leading-[1.1] whitespace-pre">密碼 :</h3>
      </div>
      <RemindTag />
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
            placeholder="請輸入您的密碼 (6-40 個字符)"
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

function ConfirmPasswordInfoText() {
  return (
    <div className="content-stretch flex gap-[15px] items-center justify-start overflow-clip relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
        <h3 className="block leading-[1.1] whitespace-pre">確認密碼 :</h3>
      </div>
      <RemindTag />
    </div>
  );
}

function ConfirmPasswordInput({ value, onChange }) {
  return (
    <div className="relative rounded-md shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-start px-[17px] py-3 relative w-full">
          <input
            type="password"
            placeholder="請再次輸入您的密碼"
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

function UsernameInfoText() {
  return (
    <div className="content-stretch flex gap-[15px] items-center justify-start overflow-clip relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
        <h3 className="block leading-[1.1] whitespace-pre">用戶名 :</h3>
      </div>
      <RemindTag />
    </div>
  );
}

function UsernameInput({ value, onChange }) {
  return (
    <div className="relative rounded-md shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-start px-[17px] py-3 relative w-full">
          <input
            type="text"
            placeholder="請輸入用戶名 (3-20 個字符)"
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

function GenderInfoText() {
  return (
    <div className="content-stretch flex gap-[15px] items-center justify-start overflow-clip relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
        <h3 className="block leading-[1.1] whitespace-pre">性別 :</h3>
      </div>
      <RemindTag />
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_JP:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[16px] text-nowrap tracking-[-0.4px]">
        <p className="leading-[1.1] whitespace-pre">*註冊後無法變更</p>
      </div>
    </div>
  );
}

function GenderDropdown({ value, onChange }) {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-start justify-start p-[10px] relative w-full">
          <select
            value={value}
            onChange={onChange}
            className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px] w-full bg-transparent border-none outline-none"
          >
            <option value="">請選擇性別</option>
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function BirthDateInfoText() {
  return (
    <div className="content-stretch flex gap-[15px] items-center justify-start overflow-clip relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
        <h3 className="block leading-[1.1] whitespace-pre">出生年月 :</h3>
      </div>
      <RemindTag />
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_JP:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[16px] text-nowrap tracking-[-0.4px]">
        <p className="leading-[1.1] whitespace-pre">*註冊後無法變更</p>
      </div>
    </div>
  );
}

function BirthDateInput({ value, onChange }) {
  const today = new Date();
  const parsed = (value || '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
  const [year, setYear] = useState(parsed ? parsed[1] : '');
  const [month, setMonth] = useState(parsed ? parsed[2] : '');
  const [day, setDay] = useState(parsed ? parsed[3] : '');

  const years = Array.from({ length: 120 }, (_, i) => String(today.getFullYear() - i));
  const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
  const daysInMonth = year && month ? new Date(Number(year), Number(month), 0).getDate() : 31;
  const days = Array.from({ length: daysInMonth }, (_, i) => String(i + 1).padStart(2, '0'));

  const emit = (y, m, d) => {
    if (y && m && d) {
      const composed = `${y}-${m}-${d}`;
      onChange({ target: { value: composed } });
    } else {
      onChange({ target: { value: '' } });
    }
  };

  const onYear = (v) => { setYear(v); emit(v, month, day); };
  const onMonth = (v) => { setMonth(v); emit(year, v, '01' <= day && Number(day) <= new Date(Number(year||today.getFullYear()), Number(v||1), 0).getDate() ? day : ''); };
  const onDay = (v) => { setDay(v); emit(year, month, v); };

  return (
    <div className="relative rounded-[5px] shrink-0 w-full">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-between gap-3 p-[10px] relative w-full">
          <select
            value={year}
            onChange={(e)=>onYear(e.target.value)}
            className="flex-1 min-w-0 bg-transparent border border-[#4b2e2a] rounded-[5px] p-2 text-[#4b2e2a]"
          >
            <option value="">年</option>
            {years.map((y) => (<option key={y} value={y}>{y}</option>))}
          </select>
          <select
            value={month}
            onChange={(e)=>onMonth(e.target.value)}
            className="flex-1 min-w-0 bg-transparent border border-[#4b2e2a] rounded-[5px] p-2 text-[#4b2e2a]"
          >
            <option value="">月</option>
            {months.map((m) => (<option key={m} value={m}>{m}</option>))}
          </select>
          <select
            value={day}
            onChange={(e)=>onDay(e.target.value)}
            className="flex-1 min-w-0 bg-transparent border border-[#4b2e2a] rounded-[5px] p-2 text-[#4b2e2a]"
          >
            <option value="">日</option>
            {days.map((d) => (<option key={d} value={d}>{d}</option>))}
          </select>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function TermsOfService() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[31px] py-0 relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#374c77] text-[16px] text-nowrap tracking-[-0.4px]">
        <p className="leading-[1.1] whitespace-pre">PageRealm 服務條款 與 隱私權政策</p>
      </div>
    </div>
  );
}

function AgreeBtn({ onClick, loading }) {
  return (
    <button 
      className="bg-[#ab3b3a] box-border content-stretch flex items-center justify-center overflow-clip px-[30px] py-3 relative rounded-xl shrink-0" 
      onClick={onClick}
      disabled={loading}
    >
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[20px] text-nowrap tracking-[-0.5px]">
        <p className="leading-[1.1] whitespace-pre">{loading ? '註冊中...' : '我已同意服務條款與隱私權政策'}</p>
      </div>
    </button>
  );
}

function AgreeBtnSection({ onClick, loading }) {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip px-2 py-3 relative shrink-0">
      <AgreeBtn onClick={onClick} loading={loading} />
    </div>
  );
}

function EmailInfoSection({ formData, onInputChange, errors }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[30px] py-[15px] relative w-full">
          <UsernameInfoText />
          <UsernameInput 
            value={formData.username} 
            onChange={(e) => onInputChange('username', e.target.value)} 
          />
          {errors?.username && (
            <p className="text-red-600 text-[17px] mt-1">{errors.username.message}</p>
          )}
          <EmailInfoText />
          <EmailInfoInput 
            value={formData.email} 
            onChange={(e) => onInputChange('email', e.target.value)} 
          />
          {errors?.email && (
            <p className="text-red-600 text-[17px] mt-1">{errors.email.message}</p>
          )}
          <PasswordInfoText />
          <PasswordInput 
            value={formData.password} 
            onChange={(e) => onInputChange('password', e.target.value)} 
          />
          {errors?.password && (
            <p className="text-red-600 text-[17px] mt-1">{errors.password.message}</p>
          )}
          <ConfirmPasswordInfoText />
          <ConfirmPasswordInput 
            value={formData.confirmPassword} 
            onChange={(e) => onInputChange('confirmPassword', e.target.value)} 
          />
          {errors?.confirmPassword && (
            <p className="text-red-600 text-[17px] mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function GenderInfoSection({ formData, onInputChange, errors }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[30px] py-[15px] relative w-full">
          <GenderInfoText />
          <GenderDropdown 
            value={formData.gender} 
            onChange={(e) => onInputChange('gender', e.target.value)} 
          />
          {errors?.gender && (
            <p className="text-red-600 text-[17px] mt-1">{errors.gender.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function BirthDateInfoSection({ formData, onInputChange, errors }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[30px] py-[15px] relative w-full">
          <BirthDateInfoText />
          <BirthDateInput 
            value={formData.birthdate} 
            onChange={(e) => onInputChange('birthdate', e.target.value)} 
          />
          {errors?.birthdate && (
            <p className="text-red-600 text-[17px] mt-1">{errors.birthdate.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function RigisterByEmailForm({ formData, onInputChange, onSubmit, loading, errors }) {
  return (
    <div className="bg-[#ffffff] relative rounded-md shrink-0">
      <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-start overflow-clip pb-[30px] pt-2.5 px-2.5 relative">
        <RbefTitle />
        <EmailInfoSection formData={formData} onInputChange={onInputChange} errors={errors} />
        <GenderInfoSection formData={formData} onInputChange={onInputChange} errors={errors} />
        <BirthDateInfoSection formData={formData} onInputChange={onInputChange} errors={errors} />
        <TermsOfService />
        <AgreeBtnSection onClick={onSubmit} loading={loading} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function RbeSection({ formData, onInputChange, onSubmit, loading, errors }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-10 items-start justify-center px-[75px] py-5 relative w-full">
          <RigisterByEmailForm 
            formData={formData} 
            onInputChange={onInputChange} 
            onSubmit={onSubmit} 
            loading={loading}
            errors={errors}
          />
        </div>
      </div>
    </div>
  );
}

function RigisterByEmailPage({ formData, onInputChange, onSubmit, loading, errors }) {
  return (
    <div className="bg-[#fffdfb] relative rounded shrink-0">
      <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip pb-10 pt-[25px] px-0 relative">
        <RbeTitle />
        <RbeSection 
          formData={formData} 
          onInputChange={onInputChange} 
          onSubmit={onSubmit} 
          loading={loading}
          errors={errors}
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

const RegisterEmailPageContainer = () => {
  const [loading, setLoading] = useState(false);
  const { register: doRegister } = useAuth();
  const navigate = useNavigate();

  const {
    register: rhfRegister,
    handleSubmit: rhfHandleSubmit,
    setValue,
    watch,
    getValues,
    formState: { errors, isSubmitting }
  } = useForm({ mode: 'onChange' });

  useEffect(() => {
    rhfRegister('username', {
      required: '請輸入用戶名',
      minLength: { value: 3, message: '用戶名至少 3 個字符' },
      maxLength: { value: 20, message: '用戶名最多 20 個字符' }
    });
    rhfRegister('email', {
      required: '請輸入 Email',
      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email 格式不正確' }
    });
    rhfRegister('password', {
      required: '請輸入密碼',
      minLength: { value: 6, message: '密碼至少 6 個字符' },
      maxLength: { value: 40, message: '密碼最多 40 個字符' }
    });
    rhfRegister('confirmPassword', {
      required: '請再次輸入密碼',
      validate: (v) => v === getValues('password') || '密碼確認不一致'
    });
    rhfRegister('gender', { required: '請選擇性別' });
    rhfRegister('birthdate', { required: '請選擇生日' });
  }, [rhfRegister, getValues]);

  const handleInputChange = (field, value) => {
    setValue(field, value, { shouldValidate: true, shouldDirty: true, shouldTouch: true });
  };

  const formData = {
    username: watch('username') || '',
    email: watch('email') || '',
    password: watch('password') || '',
    confirmPassword: watch('confirmPassword') || '',
    gender: watch('gender') || '',
    birthdate: watch('birthdate') || ''
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const submitData = {
        username: data.username,
        email: data.email,
        password: data.password,
        gender: data.gender,
        birthdate: data.birthdate,
        role: ['user']
      };

      const result = await doRegister(submitData);
      if (result.success) {
        toast.success('註冊成功！請檢查您的 Email 進行驗證。');
        navigate(`/email-verification?email=${encodeURIComponent(data.email)}`);
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error('註冊失敗，請稍後再試');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#ffffff] content-stretch flex flex-col gap-[41px] items-center justify-start relative size-full">
      <Header />
      <RigisterByEmailPage 
        formData={formData} 
        onInputChange={handleInputChange} 
        onSubmit={rhfHandleSubmit(onSubmit)} 
        loading={loading || isSubmitting} 
        errors={errors}
      />
    </div>
  );
};

export default RegisterEmailPageContainer;