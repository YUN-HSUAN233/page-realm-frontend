import React from 'react';
import { useNavigate } from 'react-router-dom';
import imgPageRealmLogo0111 from "../assets/logos/PageRealm_LOGO_01_1.png";

function Logo() {
  return (
    <div className="box-border content-stretch flex items-start justify-start overflow-clip px-[29px] py-[9px] relative shrink-0 w-[195px]" data-name="Logo">
      <div className="aspect-[1024/539] basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px relative rounded-[5px] shrink-0" data-name="PageRealm_LOGO_01_1 1" style={{ backgroundImage: `url('${imgPageRealmLogo0111}')` }}>
        <div aria-hidden="true" className="absolute border-2 border-[#c86b42] border-dashed inset-0 pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="bg-[#fffdfb] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[30px] pr-[70px] py-0 relative w-full">
          <Logo />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#4b2e2a] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
    </header>
  );
}

function PurchaseSuccessAccent() {
  return <div className="bg-[#4b2e2a] h-[50px] shrink-0 w-4" data-name="PurchaseSuccessAccent" />;
}

function PurchaseSuccessTitle() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="PurchaseSuccessTitle">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-5 items-center justify-start px-[7px] py-0 relative w-full">
          <PurchaseSuccessAccent />
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
            <h1 className="block leading-[1.1] whitespace-pre">結帳完成</h1>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function NextStepFormTitleText() {
  return (
    <div className="bg-[#fffdfb] box-border content-stretch flex gap-[7px] items-center justify-center overflow-clip px-0 py-1 relative shrink-0" data-name="NextStepFormTitleText">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ab3b3a] text-[24px] text-nowrap tracking-[-0.6px]">
        <h2 className="block leading-[1.1] whitespace-pre">購買成功 ! !</h2>
      </div>
    </div>
  );
}

function NextStepFormTitle() {
  return (
    <div className="box-border content-stretch flex gap-[15px] items-center justify-center overflow-clip px-0 py-1.5 relative shrink-0 w-full" data-name="NextStepFormTitle">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="NextStepFormTitleLineL">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 4">
            <line id="NextStepFormTitleLineL" stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="10 10" strokeWidth="4" x2="19.5" y1="2" y2="2" />
          </svg>
        </div>
      </div>
      <NextStepFormTitleText />
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="NextStepFormTitleLineR">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 4">
            <line id="NextStepFormTitleLineL" stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="10 10" strokeWidth="4" x2="19.5" y1="2" y2="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ReadNowBtn({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="cursor-pointer relative rounded-md shrink-0 w-full hover:bg-gray-50 transition-colors" 
      data-name="ReadNowBtn"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[15px] items-center justify-center px-[35px] py-2 relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
            <p className="leading-[1.1] whitespace-pre">馬上閱讀</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-md" />
    </button>
  );
}

function GoBookselfBtn({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="cursor-pointer relative rounded-md shrink-0 w-full hover:bg-gray-50 transition-colors" 
      data-name="GoBookselfBtn"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[15px] items-center justify-center px-[35px] py-2 relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
            <p className="leading-[1.1] whitespace-pre">前往個人書櫃</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-md" />
    </button>
  );
}

function GoHomepageBtn({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="cursor-pointer relative rounded-md shrink-0 w-full hover:bg-gray-50 transition-colors" 
      data-name="GoHomepageBtn"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[15px] items-center justify-center px-[35px] py-2 relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
            <p className="leading-[1.1] whitespace-pre">回到首頁</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-md" />
    </button>
  );
}

function NextStepForm({ onReadNow, onGoToBookshelf, onGoToHomepage }) {
  return (
    <div className="bg-[#ffffff] relative rounded-md shrink-0" data-name="NextStepForm">
      <div className="box-border content-stretch flex flex-col gap-[30px] items-center justify-start overflow-clip pb-[30px] pt-2.5 px-10 relative">
        <NextStepFormTitle />
        <ReadNowBtn onClick={onReadNow} />
        <GoBookselfBtn onClick={onGoToBookshelf} />
        <GoHomepageBtn onClick={onGoToHomepage} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function PathSection({ onReadNow, onGoToBookshelf, onGoToHomepage }) {
  return (
    <div className="relative shrink-0 w-full" data-name="PathSection">
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start px-[75px] py-5 relative w-full">
          <NextStepForm 
            onReadNow={onReadNow}
            onGoToBookshelf={onGoToBookshelf}
            onGoToHomepage={onGoToHomepage}
          />
        </div>
      </div>
    </div>
  );
}

function PurchaseSuccessPage({ onReadNow, onGoToBookshelf, onGoToHomepage }) {
  return (
    <div className="bg-[#fffdfb] relative rounded shrink-0" data-name="PurchaseSuccessPage">
      <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip pb-10 pt-[25px] px-0 relative">
        <PurchaseSuccessTitle />
        <PathSection 
          onReadNow={onReadNow}
          onGoToBookshelf={onGoToBookshelf}
          onGoToHomepage={onGoToHomepage}
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

export default function PurchaseSuccessContent() {
  const navigate = useNavigate();

  const handleReadNow = () => {
    // 假設有一個閱讀器頁面路由
    // 如果沒有，可以導航到用戶主頁面或書櫃
    navigate('/user-main');
  };

  const handleGoToBookshelf = () => {
    // 假設有個人書櫃頁面路由
    // 如果沒有，可以導航到用戶主頁面
    navigate('/user-main');
  };

  const handleGoToHomepage = () => {
    // 導航到用戶主頁面
    navigate('/user-main');
  };

  return (
    <div className="bg-[#ffffff] content-stretch flex flex-col gap-[50px] items-center justify-start relative size-full" data-name="PurchaseSuccessContent">
      <Header />
      <PurchaseSuccessPage 
        onReadNow={handleReadNow}
        onGoToBookshelf={handleGoToBookshelf}
        onGoToHomepage={handleGoToHomepage}
      />
    </div>
  );
}