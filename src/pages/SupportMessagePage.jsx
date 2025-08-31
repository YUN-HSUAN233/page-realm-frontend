import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { userAPI, supportAPI } from '../services/api';
import imgPageRealmLogo0111 from "../assets/logos/PageRealm_LOGO_01_1.png";
import toast from 'react-hot-toast';

// ===== 共用：Header（沿用 user-main 樣式與 Logo） =====
function Logo() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip px-[29px] py-[9px] relative shrink-0 w-[195px]" data-name="Logo">
      <div className="aspect-[1024/539] bg-center bg-cover bg-no-repeat relative rounded-[5px] shrink-0 w-full" data-name="PageRealm_LOGO_01_1 1" style={{ backgroundImage: `url('${imgPageRealmLogo0111}')` }}>
        <div aria-hidden="true" className="absolute border-2 border-[#c86b42] border-dashed inset-0 pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function LogOutBtn({ onClick }) {
  return (
    <button className="cursor-pointer relative rounded-[4px] shrink-0" data-name="LogOutBtn" onClick={onClick}>
      <div className="box-border content-stretch flex items-center justify-center overflow-clip px-4 py-3.5 relative">
        <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
          <p className="leading-[1.1] whitespace-pre">登出</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </button>
  );
}

function Header({ onLogout }) {
  return (
    <header className="bg-[#fffdfb] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[30px] pr-[70px] py-0 relative w-full">
          <Logo />
          <LogOutBtn onClick={onLogout} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#4b2e2a] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
    </header>
  );
}

function CustomerServiceAccent() {
  return <div className="bg-[#4b2e2a] h-[50px] shrink-0 w-4" data-name="CustomerServiceAccent" />;
}

function CustomerServiceTitle() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="CustomerServiceTitle">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-5 items-center justify-start px-[7px] py-0 relative w-full">
          <CustomerServiceAccent />
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[1.1] whitespace-pre">聯絡客服</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function QuickMenuTitle() {
  return (
    <div className="bg-white content-stretch flex gap-[15px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="QuickMenuTitle">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="QMTAccentL">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 4">
            <line id="QMTAccentL" stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="8 8" strokeWidth="4" x2="62.5" y1="2" y2="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.1] whitespace-pre">常用功能</p>
      </div>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="QMTAccentR">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 4">
            <line id="QMTAccentL" stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="8 8" strokeWidth="4" x2="62.5" y1="2" y2="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MemberBtnGTitle() {
  return (
    <div className="bg-[#fff8ec] relative shrink-0 w-full" data-name="MemberBtnGTitle">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-5 py-4 relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
            <p className="leading-[1.1] whitespace-pre">個人專區</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function MemberInfoQBtn({ onClick }) {
  return (
    <button className="cursor-pointer relative shrink-0 w-full" data-name="MemberInfoQBtn" onClick={onClick}>
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-5 py-4 relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
            <p className="leading-[1.1] whitespace-pre">會員資料</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-dashed inset-0 pointer-events-none" />
    </button>
  );
}

function SupportMessagesQBtn() {
  return (
    <button className="cursor-pointer relative shrink-0 w-full" data-name="SupportMessagesQBtn">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-5 py-4 relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
            <p className="leading-[1.1] whitespace-pre">客服訊息</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-dashed inset-0 pointer-events-none" />
    </button>
  );
}

function UserNotificationsQBtn() {
  return (
    <button className="cursor-pointer relative shrink-0 w-full" data-name="UserNotificationsQBtn">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-5 py-4 relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
            <p className="leading-[1.1] whitespace-pre">會員通知</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-dashed inset-0 pointer-events-none" />
    </button>
  );
}

function MemberBtnG({ onMemberInfo }) {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="MemberBtnG">
      <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative w-full">
        <MemberBtnGTitle />
        <MemberInfoQBtn onClick={onMemberInfo} />
        <SupportMessagesQBtn />
        <UserNotificationsQBtn />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function UserAssetsBtnGTitle() {
  return (
    <div className="bg-[#fff8ec] relative shrink-0 w-full" data-name="UserAssetsBtnGTitle">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-5 py-4 relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
            <p className="leading-[1.1] whitespace-pre">消費與紀錄</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function OrderInfoQBtn() {
  return (
    <button className="cursor-pointer relative shrink-0 w-full" data-name="OrderInfoQBtn">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-5 py-4 relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
            <p className="leading-[1.1] whitespace-pre">訂單紀錄</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-dashed inset-0 pointer-events-none" />
    </button>
  );
}

function CuponInfoQBtn() {
  return (
    <button className="cursor-pointer relative shrink-0 w-full" data-name="CuponInfoQBtn">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-5 py-4 relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
            <p className="leading-[1.1] whitespace-pre">優惠券</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-dashed inset-0 pointer-events-none" />
    </button>
  );
}

function PointInfoQBtn() {
  return (
    <button className="cursor-pointer relative shrink-0 w-full" data-name="PointInfoQBtn">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-5 py-4 relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
            <p className="leading-[1.1] whitespace-pre">點數管理</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-dashed inset-0 pointer-events-none" />
    </button>
  );
}

function UserAssetsBtnG() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="UserAssetsBtnG">
      <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative w-full">
        <UserAssetsBtnGTitle />
        <OrderInfoQBtn />
        <CuponInfoQBtn />
        <PointInfoQBtn />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function BookshelfBtnGTitle() {
  return (
    <div className="bg-[#fff8ec] relative shrink-0 w-full" data-name="BookshelfBtnGTitle">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-5 py-4 relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
            <p className="leading-[1.1] whitespace-pre">個人書櫃</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function BookshelfQBtn() {
  return (
    <button className="cursor-pointer relative shrink-0 w-full" data-name="BookshelfQBtn">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-5 py-4 relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
            <p className="leading-[1.1] whitespace-pre">已購書籍</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-dashed inset-0 pointer-events-none" />
    </button>
  );
}

function WishlistQBtn() {
  return (
    <button className="cursor-pointer relative shrink-0 w-full" data-name="WishlistQBtn">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-5 py-4 relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
            <p className="leading-[1.1] whitespace-pre">願望清單</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-dashed inset-0 pointer-events-none" />
    </button>
  );
}

function FollowQBtn() {
  return (
    <button className="cursor-pointer relative shrink-0 w-full" data-name="FollowQBtn">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-5 py-4 relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
            <p className="leading-[1.1] whitespace-pre">關注清單</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-dashed inset-0 pointer-events-none" />
    </button>
  );
}

function BookshelfBtnG() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="BookshelfBtnG">
      <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative w-full">
        <BookshelfBtnGTitle />
        <BookshelfQBtn />
        <WishlistQBtn />
        <FollowQBtn />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function QuickMenu({ onMemberInfo }) {
  return (
    <aside className="bg-white relative rounded-[6px] shrink-0 w-[250px]" data-name="QuickMenu">
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start overflow-clip px-0 py-5 relative w-[250px]">
        <QuickMenuTitle />
        <MemberBtnG onMemberInfo={onMemberInfo} />
        <UserAssetsBtnG />
        <BookshelfBtnG />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </aside>
  );
}

function CustomerServiceTitle1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="CustomerServiceTitle">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[15px] items-center justify-center px-[23px] py-[25px] relative w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <div className="h-0 relative w-[245px]" data-name="CSTLineL">
                <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 4">
                    <line id="CSTLineL" stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="7 7" strokeWidth="4" x2="245" y1="2" y2="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[1.1] whitespace-pre">聯絡客服</p>
          </div>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <div className="h-0 relative w-[245px]" data-name="CSTLineR">
                <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 4">
                    <line id="CSTLineL" stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="7 7" strokeWidth="4" x2="245" y1="2" y2="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPersonText() {
  return (
    <div className="content-stretch flex items-center justify-start overflow-clip relative shrink-0" data-name="Contact PersonText">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.1] whitespace-pre">聯絡人</p>
      </div>
    </div>
  );
}

function ContactPersonInput({ value, onChange }) {
  return (
    <div className="h-[42px] relative rounded-[6px] shrink-0 w-full" data-name="ContactPersonInput">
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center relative size-full">
        <input
          className="h-[42px] w-full px-3 bg-transparent outline-none text-[#4b2e2a]"
          placeholder="請輸入聯絡人"
          value={value}
          onChange={(e)=>onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

function ContactPerson() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="ContactPerson">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-6 py-[18px] relative w-full">
          <ContactPersonText />
          <ContactPersonInput value={''} onChange={(v) => {}} />
        </div>
      </div>
    </div>
  );
}

function ContactEmailText() {
  return (
    <div className="content-stretch flex items-center justify-start overflow-clip relative shrink-0" data-name="ContactEmailText">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.1] whitespace-pre">電子信箱</p>
      </div>
    </div>
  );
}

function ContactEmailInput({ value, onChange }) {
  return (
    <div className="h-[42px] relative rounded-[6px] shrink-0 w-full" data-name="ContactEmailInput">
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center relative size-full">
        <input
          type="email"
          className="h-[42px] w-full px-3 bg-transparent outline-none text-[#4b2e2a]"
          placeholder="請輸入 Email"
          value={value}
          onChange={(e)=>onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

function ContactEmail() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="ContactEmail">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-6 py-[18px] relative w-full">
          <ContactEmailText />
          <ContactEmailInput value={''} onChange={(v) => {}} />
        </div>
      </div>
    </div>
  );
}

function IssueTypeText() {
  return (
    <div className="content-stretch flex items-center justify-start overflow-clip relative shrink-0" data-name="IssueTypeText">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.1] whitespace-pre">問題類型</p>
      </div>
    </div>
  );
}

function IssueTypeDropdown({ value, onChange }) {
  return (
    <div className="h-[42px] relative rounded-[6px] shrink-0 w-full" data-name="IssueTypeDropdown">
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center relative size-full">
        <select
          className="h-[42px] w-full px-3 bg-transparent outline-none text-[#4b2e2a]"
          value={value}
          onChange={(e)=>onChange(e.target.value)}
        >
          <option value="ACCOUNT">註冊・個人帳戶問題</option>
          <option value="ORDER">訂單與付款</option>
          <option value="CONTENT">書籍內容/版權</option>
          <option value="OTHER">其他</option>
        </select>
      </div>
    </div>
  );
}

function IssueType() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="IssueType">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-6 py-[18px] relative w-full">
          <IssueTypeText />
          <IssueTypeDropdown value={''} onChange={(v) => {}} />
        </div>
      </div>
    </div>
  );
}

function IssueTitleText() {
  return (
    <div className="content-stretch flex items-center justify-start overflow-clip relative shrink-0" data-name="IssueTitleText">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.1] whitespace-pre">問題標題</p>
      </div>
    </div>
  );
}

function IssueTitleInput({ value, onChange }) {
  return (
    <div className="h-[42px] relative rounded-[6px] shrink-0 w-full" data-name="IssueTitleInput">
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center relative size-full">
        <input
          className="h-[42px] w-full px-3 bg-transparent outline-none text-[#4b2e2a]"
          placeholder="請輸入標題"
          value={value}
          onChange={(e)=>onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

function IssueTitle() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="IssueTitle">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-6 py-[18px] relative w-full">
          <IssueTitleText />
          <IssueTitleInput value={''} onChange={(v) => {}} />
        </div>
      </div>
    </div>
  );
}

function DescriptionText() {
  return (
    <div className="content-stretch flex items-center justify-start overflow-clip relative shrink-0" data-name="DescriptionText">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.1] whitespace-pre">問題說明</p>
      </div>
    </div>
  );
}

function DescriptionInput({ value, onChange }) {
  return (
    <div className="h-[200px] relative rounded-[6px] shrink-0 w-full" data-name="DescriptionInput">
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center relative size-full">
        <textarea
          className="h-[200px] w-full p-3 bg-transparent outline-none text-[#4b2e2a] resize-none"
          placeholder="請輸入問題說明"
          value={value}
          onChange={(e)=>onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Description">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-6 py-[18px] relative w-full">
          <DescriptionText />
          <DescriptionInput value={''} onChange={(v) => {}} />
        </div>
      </div>
    </div>
  );
}

function IssueOutputBtn({ onClick, loading }) {
  return (
    <button onClick={onClick} disabled={loading} className="bg-[#ab3b3a] box-border content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[6px] shrink-0 disabled:opacity-60" data-name="IssueOutputBtn">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[-0.6px]">
        <p className="leading-[1.1] whitespace-pre">{loading ? '送出中...' : '確認送出'}</p>
      </div>
    </button>
  );
}

function IssueOutput({ onSubmit, loading }) {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="IssueOutput">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center pb-[18px] pt-2 px-6 relative w-full">
          <IssueOutputBtn onClick={onSubmit} loading={loading} />
        </div>
      </div>
    </div>
  );
}

function CustomerServiceFrom({ form, onChange, onSubmit, loading }) {
  return (
    <main className="bg-white relative rounded-[6px] shrink-0" data-name="CustomerServiceFrom" tabIndex="-1">
      <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative">
        <CustomerServiceTitle1 />
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-6 py-[18px] relative w-full">
            <ContactPersonText />
            <ContactPersonInput value={form.contactName} onChange={(v)=>onChange('contactName', v)} />
          </div>
        </div>
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-6 py-[18px] relative w-full">
            <ContactEmailText />
            <ContactEmailInput value={form.contactEmail} onChange={(v)=>onChange('contactEmail', v)} />
          </div>
        </div>
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-6 py-[18px] relative w-full">
            <IssueTypeText />
            <IssueTypeDropdown value={form.category} onChange={(v)=>onChange('category', v)} />
          </div>
        </div>
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-6 py-[18px] relative w-full">
            <IssueTitleText />
            <IssueTitleInput value={form.subject} onChange={(v)=>onChange('subject', v)} />
          </div>
        </div>
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-6 py-[18px] relative w-full">
            <DescriptionText />
            <DescriptionInput value={form.content} onChange={(v)=>onChange('content', v)} />
          </div>
        </div>
        <IssueOutput onSubmit={onSubmit} loading={loading} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </main>
  );
}

function CustomerServiceSection({ form, onChange, onSubmit, loading, onMemberInfo }) {
  return (
    <div className="relative shrink-0 w-full" data-name="CustomerServiceSection">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[43px] items-start justify-start px-[50px] py-[7px] relative w-full">
          <QuickMenu onMemberInfo={onMemberInfo} />
          <CustomerServiceFrom form={form} onChange={onChange} onSubmit={onSubmit} loading={loading} />
        </div>
      </div>
    </div>
  );
}

function CustomerService() {
  return (
    <div className="bg-[#fffdfb] relative rounded-[3px] shrink-0" data-name="CustomerService">
      <div className="box-border content-stretch flex flex-col gap-[29px] items-center justify-center overflow-clip pb-[45px] pt-[25px] px-0 relative">
        <CustomerServiceTitle />
        <CustomerServiceSection />
      </div>
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

export default function CustomerServiceContain() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [form, setForm] = useState({ contactName: '', contactEmail: '', category: 'ACCOUNT', subject: '', content: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    userAPI.getCurrentUser().then((res) => {
      const u = res.data || {};
      setForm((p) => ({ ...p, contactName: u.username || p.contactName, contactEmail: u.email || p.contactEmail }));
    }).catch(() => {});
  }, []);

  const onChange = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const onSubmit = async () => {
    if (!form.contactName || !form.contactEmail || !form.subject || !form.content) {
      toast.error('請完整填寫欄位');
      return;
    }
    setLoading(true);
    try {
      await supportAPI.createTicket({
        contactName: form.contactName,
        contactEmail: form.contactEmail,
        category: form.category,
        subject: form.subject,
        content: form.content,
      });
      toast.success('已送出，客服將盡快回覆');
      navigate('/user-main');
    } catch (e) {
      toast.error(e.response?.data?.message || e.response?.data || '送出失敗');
    } finally {
      setLoading(false);
    }
  };

  const onLogout = async () => {
    try {
      await logout();
      toast.success('已登出');
      navigate('/login');
    } catch {}
  };

  const goMemberInfo = () => navigate('/user-main');

  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[50px] items-center justify-start pb-[150px] pt-0 px-0 relative size-full" data-name="CustomerServiceContain">
      <Header onLogout={onLogout} />
      <div className="bg-[#fffdfb] relative rounded-[3px] shrink-0" data-name="CustomerService">
        <div className="box-border content-stretch flex flex-col gap-[29px] items-center justify-center overflow-clip pb-[45px] pt-[25px] px-0 relative">
          <CustomerServiceTitle />
          <CustomerServiceSection form={form} onChange={onChange} onSubmit={onSubmit} loading={loading} onMemberInfo={goMemberInfo} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-[3px]" />
      </div>
    </div>
  );
}