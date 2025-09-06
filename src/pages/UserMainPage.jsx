import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { userAPI, membershipAPI, authAPI } from '../services/api';
import imgPageRealmLogo0111 from "../assets/logos/PageRealm_LOGO_01_1.png";
import toast from 'react-hot-toast';
import TwoFactorModal from '../components/components/TwoFactorModal.jsx';

function Logo() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip px-[29px] py-[9px] relative shrink-0 w-[195px]">
      <div className="aspect-[1024/539] bg-center bg-cover bg-no-repeat relative rounded-[5px] shrink-0 w-full" style={{ backgroundImage: `url('${imgPageRealmLogo0111}')` }}>
        <div aria-hidden="true" className="absolute border-2 border-[#c86b42] border-dashed inset-0 pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function LogOutBtn({ onClick }) {
  return (
    <button className="cursor-pointer relative rounded shrink-0" onClick={onClick}>
      <div className="box-border content-stretch flex items-center justify-center overflow-clip px-4 py-3.5 relative">
        <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
          <p className="leading-[1.1] whitespace-pre">登出</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded" />
    </button>
  );
}

function Header({ onLogout }) {
  return (
    <header className="bg-[#fffdfb] relative shrink-0 w-full">
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

function MainPageAccent() {
  return <div className="bg-[#4b2e2a] h-[50px] shrink-0 w-4" />;
}

function MainPageTitle() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-5 items-center justify-start px-[7px] py-0 relative w-full">
          <MainPageAccent />
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[1.1] whitespace-pre">會員主頁</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function QuickMenuTitle() {
  return (
    <div className="bg-[#ffffff] content-stretch flex gap-[15px] items-center justify-center overflow-clip relative shrink-0 w-full">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 4">
            <line stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="8 8" strokeWidth="4" x2="62.5" y1="2" y2="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.1] whitespace-pre">常用功能</p>
      </div>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 4">
            <line stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="8 8" strokeWidth="4" x2="62.5" y1="2" y2="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MemberBtnGTitle() {
  return (
    <div className="bg-[#fff8ec] relative shrink-0 w-full">
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
    <button className="cursor-pointer relative shrink-0 w-full" onClick={onClick}>
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

function SupportMessagesQBtn({ onClick }) {
  return (
    <button className="cursor-pointer relative shrink-0 w-full" onClick={onClick}>
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

function UserNotificationsQBtn({ onClick }) {
  return (
    <button className="cursor-pointer relative shrink-0 w-full" onClick={onClick}>
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

function MemberBtnG({ onMemberInfo, onSupport, onNotifications, activeSection }) {
  return (
    <div className="relative rounded-md shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative w-full">
        <MemberBtnGTitle />
        <MemberInfoQBtn onClick={onMemberInfo} />
        <SupportMessagesQBtn onClick={onSupport} />
        <UserNotificationsQBtn onClick={onNotifications} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none rounded-md" />
    </div>
  );
}

function UserAssetsBtnGTitle() {
  return (
    <div className="bg-[#fff8ec] relative shrink-0 w-full">
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

function OrderInfoQBtn({ onClick }) {
  return (
    <button className="cursor-pointer relative shrink-0 w-full" onClick={onClick}>
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

function CuponInfoQBtn({ onClick }) {
  return (
    <button className="cursor-pointer relative shrink-0 w-full" onClick={onClick}>
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

function PointInfoQBtn({ onClick }) {
  return (
    <button className="cursor-pointer relative shrink-0 w-full" onClick={onClick}>
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

function UserAssetsBtnG({ onOrderInfo, onCuponInfo, onPointInfo }) {
  return (
    <div className="relative rounded-md shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative w-full">
        <UserAssetsBtnGTitle />
        <OrderInfoQBtn onClick={onOrderInfo} />
        <CuponInfoQBtn onClick={onCuponInfo} />
        <PointInfoQBtn onClick={onPointInfo} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none rounded-md" />
    </div>
  );
}

function BookshelfBtnGTitle() {
  return (
    <div className="bg-[#fff8ec] relative shrink-0 w-full">
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

function BookshelfQBtn({ onClick }) {
  return (
    <button className="cursor-pointer relative shrink-0 w-full" onClick={onClick}>
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

function WishlistQBtn({ onClick }) {
  return (
    <button className="cursor-pointer relative shrink-0 w-full" onClick={onClick}>
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

function FollowQBtn({ onClick }) {
  return (
    <button className="cursor-pointer relative shrink-0 w-full" onClick={onClick}>
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

function BookshelfBtnG({ onBookshelf, onWishlist, onFollow }) {
  return (
    <div className="relative rounded-md shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative w-full">
        <BookshelfBtnGTitle />
        <BookshelfQBtn onClick={onBookshelf} />
        <WishlistQBtn onClick={onWishlist} />
        <FollowQBtn onClick={onFollow} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none rounded-md" />
    </div>
  );
}

function QuickMenu({ onMemberInfo, onSupport, onNotifications, onOrderInfo, onCuponInfo, onPointInfo, onBookshelf, onWishlist, onFollow, activeSection }) {
  return (
    <aside className="bg-[#ffffff] relative rounded-md shrink-0 w-[250px]">
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start overflow-clip px-0 py-5 relative w-[250px]">
        <QuickMenuTitle />
        <MemberBtnG 
          onMemberInfo={onMemberInfo}
          onSupport={onSupport}
          onNotifications={onNotifications}
          activeSection={activeSection}
        />
        <UserAssetsBtnG 
          onOrderInfo={onOrderInfo}
          onCuponInfo={onCuponInfo}
          onPointInfo={onPointInfo}
        />
        <BookshelfBtnG 
          onBookshelf={onBookshelf}
          onWishlist={onWishlist}
          onFollow={onFollow}
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </aside>
  );
}

// 會員資料區塊
function MifTitle() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[15px] items-center justify-center px-[23px] py-[25px] relative w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <div className="h-0 relative w-[245px]">
                <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 4">
                    <line stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="7 7" strokeWidth="4" x2="245" y1="2" y2="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[1.1] whitespace-pre">會員資料</p>
          </div>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <div className="h-0 relative w-[245px]">
                <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 4">
                    <line stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="7 7" strokeWidth="4" x2="245" y1="2" y2="2" />
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

function InfoRow({ label, value, onEdit }) {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-between px-6 py-[18px] relative w-full">
          <div className="box-border content-stretch flex items-center justify-start overflow-clip px-0 py-[21px] relative shrink-0">
            <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
              <p className="leading-[1.1] whitespace-pre">{label}</p>
            </div>
          </div>
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center overflow-clip relative size-full">
              <div className="box-border content-stretch flex items-center justify-start pl-[75px] pr-0 py-5 relative w-full">
                <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
                  <p className="leading-[1.1] whitespace-pre">{value}</p>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer relative rounded-[3px] shrink-0" onClick={onEdit}>
            <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[13px] py-2.5 relative">
              <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] tracking-[-0.5px] w-[100px]">
                <p className="leading-[1.1]">前往設定→</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-[3px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

function MemberInfoForm({ userData, onEditField, onOpenTwoFactor, onChangeAvatar, avatarVersion, isTwoFactorEnabled }) {
  const fileInputRef = useRef(null);
  const handleAvatarClick = () => fileInputRef.current?.click();
  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) onChangeAvatar(file);
  };
  const getSrc = (url) => (url || '');
  const withBuster = (src) => (avatarVersion ? (src + (src.includes('?') ? `&v=${avatarVersion}` : `?v=${avatarVersion}`)) : src);

  // v1 外觀結構
  return (
    <main className="bg-white relative rounded-[6px] shrink-0">
      <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative">
        <MifTitle />

        {/* Account 行：含頭像（可上傳）、帳號文字 */}
        <div className="bg-white relative shrink-0 w-full">
          <div className="flex flex-row items-end overflow-clip relative size-full">
            <div className="box-border content-stretch flex items-end justify-between pb-7 pt-0 px-6 relative w-full">
              <button className="cursor-pointer relative rounded-[6px] shrink-0" onClick={handleAvatarClick} title="點擊更換頭像">
                <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[13px] relative">
                  <img
                    src={withBuster(getSrc(userData?.avatarUrl))}
                    alt="avatar"
                    className="relative shrink-0 size-[152px] object-cover"
                    style={{ aspectRatio: '1 / 1' }}
                  />
                </div>
                <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px]" />
              </button>
              <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />

              {/* 右側兩列：帳號 + 暱稱（含設定按鈕） */}
              <div className="basis-0 content-stretch flex flex-col gap-5 grow items-center justify-end min-h-px min-w-px overflow-clip relative shrink-0">
                {/* 帳號列 */}
                <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
                  <div className="box-border content-stretch flex items-center justify-start overflow-clip px-10 py-[21px] relative shrink-0">
                    <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
                      <p className="leading-[1.1] whitespace-pre">帳號</p>
                    </div>
                  </div>
                  <div className="basis-0 box-border content-stretch flex grow items-center justify-start min-h-px min-w-px overflow-clip px-0 py-5 relative shrink-0">
                    <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
                      <p className="leading-[1.1] whitespace-pre">{userData?.email || '未設定'}</p>
                    </div>
                  </div>
                </div>
                {/* 暱稱列（含前往設定） */}
                <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
                  <div className="box-border content-stretch flex items-center justify-start overflow-clip px-10 py-[21px] relative shrink-0">
                    <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
                      <p className="leading-[1.1] whitespace-pre">暱稱</p>
                    </div>
                  </div>
                  <div className="basis-0 box-border content-stretch flex grow items-center justify-start min-h-px min-w-px overflow-clip px-0 py-5 relative shrink-0">
                    <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
                      <p className="leading-[1.1] whitespace-pre">{userData?.username || '未設定'}</p>
                    </div>
                  </div>
                  <button className="cursor-pointer relative rounded-[3px] shrink-0" onClick={() => onEditField('username')}>
                    <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[13px] py-2.5 relative">
                      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] tracking-[-0.5px] w-[100px]">
                        <p className="leading-[1.1]">前往設定→</p>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-[3px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        </div>

        {/* Password 行 */}
        <div className="bg-white relative shrink-0 w-full">
          <div className="flex flex-row items-center overflow-clip relative size-full">
            <div className="box-border content-stretch flex items-center justify-between px-6 py-[18px] relative w-full">
              <div className="box-border content-stretch flex items-center justify-center overflow-clip px-0 py-[21px] relative shrink-0">
                <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
                  <p className="leading-[1.1] whitespace-pre">密碼</p>
                </div>
              </div>
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                <div className="flex flex-row items-center overflow-clip relative size-full">
                  <div className="box-border content-stretch flex items-center justify-start pl-[100px] pr-0 py-5 relative w-full">
                    <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
                      <p className="leading-[1.1] whitespace-pre">{(userData?.signedMethod && userData.signedMethod !== 'email') ? '未設定' : '***************'}</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer relative rounded-[3px] shrink-0" onClick={() => onEditField('password')}>
                <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[13px] py-2.5 relative">
                  <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] tracking-[-0.5px] w-[100px]">
                    <p className="leading-[1.1]">前往設定→</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-[3px]" />
              </button>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        </div>

        {/* Gender 行 */}
        <div className="bg-white relative shrink-0 w-full">
          <div className="flex flex-row items-center overflow-clip relative size-full">
            <div className="box-border content-stretch flex items-center justify-between px-6 py-[18px] relative w-full">
              <div className="box-border content-stretch flex items-center justify-center px-0 py-[21px] relative shrink-0">
                <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
                  <p className="leading-[1.1] whitespace-pre">性別</p>
                </div>
              </div>
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                <div className="flex flex-row items-center overflow-clip relative size-full">
                  <div className="box-border content-stretch flex items-center justify-start pl-[100px] pr-0 py-5 relative w-full">
                    <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_JP:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
                      <p className="leading-[1.1] whitespace-pre">{userData?.gender === 'MALE' ? '男' : userData?.gender === 'FEMALE' ? '女' : '未設定'}</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer relative rounded-[3px] shrink-0" onClick={() => onEditField('gender')}>
                <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[13px] py-2.5 relative">
                  <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] tracking-[-0.5px] w-[100px]">
                    <p className="leading-[1.1]">前往設定→</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-[3px]" />
              </button>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        </div>

        {/* BirthDate 行 */}
        <div className="bg-white relative shrink-0 w-full">
          <div className="flex flex-row items-center overflow-clip relative size-full">
            <div className="box-border content-stretch flex items-center justify-between px-6 py-[18px] relative w-full">
              <div className="box-border content-stretch flex items-center justify-center overflow-clip px-0 py-[21px] relative shrink-0">
                <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
                  <p className="leading-[1.1] whitespace-pre">出生年月</p>
                </div>
              </div>
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                <div className="flex flex-row items-center overflow-clip relative size-full">
                  <div className="box-border content-stretch flex items-center justify-start pl-[50px] pr-0 py-5 relative w-full">
                    <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_JP:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
                      <p className="leading-[1.1] whitespace-pre">{userData?.birthdate ? new Date(userData.birthdate).toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric' }) : '未設定'}</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer relative rounded-[3px] shrink-0" onClick={() => onEditField('birthdate')}>
                <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[13px] py-2.5 relative">
                  <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] tracking-[-0.5px] w-[100px]">
                    <p className="leading-[1.1]">前往設定→</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-[3px]" />
              </button>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        </div>

        {/* 二階段認證 行 */}
        <div className="bg-white relative shrink-0 w-full">
          <div className="flex flex-row items-center overflow-clip relative size-full">
            <div className="box-border content-stretch flex items-center justify-between px-6 py-[18px] relative w-full">
              <div className="box-border content-stretch flex items-center justify-center overflow-clip px-0 py-[21px] relative shrink-0">
                <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
                  <p className="leading-[1.1] whitespace-pre">二階段認證</p>
                </div>
              </div>
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                <div className="flex flex-row items-center overflow-clip relative size-full">
                  <div className="box-border content-stretch flex items-center justify-start pl-[30px] pr-0 py-5 relative w-full">
                    <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_JP:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
                      <p className="leading-[1.1] whitespace-pre">{isTwoFactorEnabled ? '已啟用' : '尚未設定'}</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer relative rounded-[3px] shrink-0" onClick={onOpenTwoFactor}>
                <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[13px] py-2.5 relative">
                  <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] tracking-[-0.5px] w-[100px]">
                    <p className="leading-[1.1]">前往設定→</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-[3px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </main>
  );
}

function AvatarCard({ avatarUrl, onChangeAvatar, version }) {
  const fileInputRef = useRef(null);
  const handleClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      onChangeAvatar(file);
    }
  };
  const getSrc = (url) => (url || '');
  const withBuster = (src) => {
    if (!version) return src;
    return src + (src.includes('?') ? `&v=${version}` : `?v=${version}`);
  };
  return (
    <aside className="bg-[#ffffff] relative rounded-md shrink-0 w-[260px]">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-4 relative w-full">
        <button onClick={handleClick} className="relative w-full" title="點擊更換頭像">
          <img
            src={withBuster(getSrc(avatarUrl))}
            alt="avatar"
            className="w-full rounded-md object-cover"
            style={{ aspectRatio: '1 / 1' }}
          />
        </button>
        <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </aside>
  );
}

// 會員等級區塊
function MrTitle() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-[15px] items-center justify-center overflow-clip px-0 py-5 relative shrink-0 w-full">
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[0.145deg] w-full">
          <div className="h-0 relative w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 415 4">
                <line stroke="var(--stroke-0, black)" strokeDasharray="8 8" strokeWidth="4" x2="414.5" y1="2" y2="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.1] whitespace-pre">會員等級</p>
      </div>
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[0.145deg] w-full">
          <div className="h-0 relative w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 415 4">
                <line stroke="var(--stroke-0, black)" strokeDasharray="8 8" strokeWidth="4" x2="414.5" y1="2" y2="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LevelInfoRow({ label, value, isLevel = false }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[65px] items-center justify-start leading-[0] not-italic px-6 py-[27px] relative text-[#4b2e2a] text-nowrap w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[24px] tracking-[-0.6px]">
            <p className="leading-[1.1] text-nowrap whitespace-pre">{label}</p>
          </div>
          <div className={`flex flex-col justify-center relative shrink-0 text-[20px] tracking-[-0.5px] ${isLevel ? 'font-[\'Inter:Extra_Bold\',_sans-serif] font-extrabold text-[#ab3b3a]' : 'font-[\'Inter:Regular\',_sans-serif] font-normal'}`}>
            <p className="leading-[1.1] text-nowrap whitespace-pre">{value}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MrForm({ memberStatus }) {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-md shrink-0">
      <div className="box-border content-stretch flex flex-col gap-[5px] items-start justify-start overflow-clip px-0 py-2.5 relative w-full">
        <MrTitle />
        <LevelInfoRow 
          label="目前等級" 
          value={memberStatus ? `Lv ${memberStatus.currentLevel}` : 'Lv 1'} 
          isLevel={true} 
        />
        <LevelInfoRow 
          label="等級有效期限" 
          value={memberStatus?.periodText || '未設定'} 
        />
        <LevelInfoRow 
          label="結帳回饋點數" 
          value={memberStatus?.cashbackText || '未設定'} 
        />
        <LevelInfoRow 
          label="下月升等條件" 
          value={memberStatus?.nextUpgradeText || '未設定'} 
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

// 二階段認證移至彈窗，移除頁內卡片

function MemberInfoSection({ userData, memberStatus, onEditField, onMemberInfo, onSupport, onNotifications, onOrderInfo, onCuponInfo, onPointInfo, onBookshelf, onWishlist, onFollow, activeSection, onChangeAvatar, avatarVersion, isTwoFactorEnabled, onOpenTwoFactor }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[43px] items-start justify-start px-[50px] py-[7px] relative w-full">
          <QuickMenu 
            onMemberInfo={onMemberInfo}
            onSupport={onSupport}
            onNotifications={onNotifications}
            onOrderInfo={onOrderInfo}
            onCuponInfo={onCuponInfo}
            onPointInfo={onPointInfo}
            onBookshelf={onBookshelf}
            onWishlist={onWishlist}
            onFollow={onFollow}
            activeSection={activeSection}
          />
          <MemberInfoForm 
            userData={userData} 
            onEditField={onEditField} 
            onOpenTwoFactor={onOpenTwoFactor}
            onChangeAvatar={onChangeAvatar}
            avatarVersion={avatarVersion}
            isTwoFactorEnabled={isTwoFactorEnabled}
          />
        </div>
      </div>
    </div>
  );
}

function MemberRankSection({ memberStatus }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-start overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-start justify-start px-[50px] py-0 relative w-full">
          <div className="w-full"><MrForm memberStatus={memberStatus} /></div>
        </div>
      </div>
    </div>
  );
}

function MainPage({ userData, memberStatus, onEditField, onMemberInfo, onSupport, onNotifications, onOrderInfo, onCuponInfo, onPointInfo, onBookshelf, onWishlist, onFollow, activeSection, onChangeAvatar, avatarVersion, isTwoFactorEnabled, onOpenTwoFactor }) {
  return (
    <div className="bg-[#fffdfb] relative rounded-[3px] shrink-0">
      <div className="box-border content-stretch flex flex-col gap-[29px] items-center justify-center overflow-clip pb-[45px] pt-[25px] px-0 relative">
        <MainPageTitle />
        <MemberInfoSection 
          userData={userData}
          memberStatus={memberStatus}
          onEditField={onEditField}
          onMemberInfo={onMemberInfo}
          onSupport={onSupport}
          onNotifications={onNotifications}
          onOrderInfo={onOrderInfo}
          onCuponInfo={onCuponInfo}
          onPointInfo={onPointInfo}
          onBookshelf={onBookshelf}
          onWishlist={onWishlist}
          onFollow={onFollow}
          activeSection={activeSection}
          onChangeAvatar={onChangeAvatar}
          avatarVersion={avatarVersion}
          isTwoFactorEnabled={isTwoFactorEnabled}
          onOpenTwoFactor={onOpenTwoFactor}
        />
        <MemberRankSection memberStatus={memberStatus} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

const UserMainPageContainer = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [userData, setUserData] = useState(null);
  const [memberStatus, setMemberStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('member-info');
  const [avatarVersion, setAvatarVersion] = useState(0);
  const [twoFactorOpen, setTwoFactorOpen] = useState(false);
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'password' | 'birthdate' | 'gender' | 'username' | null

  useEffect(() => {
    fetchUserData();
    fetchMemberStatus();
    fetchTwoFactorStatus();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await userAPI.getCurrentUser();
      setUserData(response.data);
    } catch (error) {
      console.error('獲取用戶資料失敗:', error);
    }
  };

  const fetchMemberStatus = async () => {
    try {
      const response = await membershipAPI.getMembershipStatus();
      setMemberStatus(response.data);
    } catch (error) {
      console.error('獲取會員等級失敗:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTwoFactorStatus = async () => {
    try {
      const res = await authAPI.getTotpStatus();
      setIsTwoFactorEnabled(Boolean(res.data?.is2faEnabled));
    } catch (e) {
      // ignore
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('已登出');
      navigate('/login');
    } catch (error) {
      console.error('登出失敗:', error);
    }
  };

  const handleEditField = (field) => {
    switch (field) {
      case 'password':
        setActiveModal('password');
        break;
      case 'birthdate':
        setActiveModal('birthdate');
        break;
      case 'gender':
        setActiveModal('gender');
        break;
      case 'username':
        setActiveModal('username');
        break;
      case 'avatar':
        navigate('/settings/avatar');
        break;
      case 'twofactor':
        setTwoFactorOpen(true);
        break;
      case 'email':
      case 'invoiceEmail':
        toast.error('此欄位目前不支援前台直接修改，請聯繫客服或由後端提供 API 後再開放。');
        break;
      default:
        break;
    }
  };

  const handleMemberInfo = () => {
    setActiveSection('member-info');
  };

  const handleSupport = () => {
    navigate('/support');
  };

  const handleNotifications = () => {
    console.log('會員通知 clicked');
    // 實現通知功能
  };

  const handleOrderInfo = () => {
    console.log('訂單紀錄 clicked');
    navigate('/orders');
  };

  const handleCuponInfo = () => {
    console.log('優惠券 clicked');
    navigate('/coupon');
  };

  const handlePointInfo = () => {
    console.log('點數管理 clicked');
    navigate('/point');
  };

  const handleBookshelf = () => {
    console.log('已購書籍 clicked');
    // 實現書櫃功能
  };

  const handleWishlist = () => {
    console.log('願望清單 clicked');
    navigate('/wishlist');
  };

  const handleFollow = () => {
    console.log('關注清單 clicked');
    // 實現關注功能
  };

  const handleChangeAvatar = async (file) => {
    try {
      const res = await userAPI.uploadAvatar(file);
      // 整合這裡！！！！
      const url = res?.data?.url || res?.data;
      setUserData((prev) => ({ ...(prev || {}), avatarUrl: url }));
      setAvatarVersion(Date.now());
      toast.success('頭像已更新');
    } catch (e) {
      toast.error(e.response?.data?.message || '上傳失敗');
    }
  };

  // ---- Modals submit handlers ----
  const submitPassword = async (newPassword, confirmPassword) => {
    if (!newPassword || newPassword.length < 8) {
      toast.error('新密碼至少 8 碼');
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error('兩次輸入的密碼不一致');
      return;
    }
    try {
      await userAPI.updatePassword(newPassword, confirmPassword);
      toast.success('密碼已更新');
      setActiveModal(null);
    } catch (e) {
      toast.error(e.response?.data?.message || '更新失敗');
    }
  };

  const submitBirthdate = async (birthdate) => {
    if (!birthdate) {
      toast.error('請選擇日期');
      return;
    }
    try {
      await userAPI.updateBirthdate(birthdate);
      setUserData((prev) => ({ ...(prev || {}), birthdate }));
      toast.success('生日已更新');
      setActiveModal(null);
    } catch (e) {
      toast.error(e.response?.data?.message || '更新失敗');
    }
  };

  const submitGender = async (gender) => {
    if (!gender) {
      toast.error('請選擇性別');
      return;
    }
    try {
      await userAPI.updateGender(gender);
      setUserData((prev) => ({ ...(prev || {}), gender }));
      toast.success('性別已更新');
      setActiveModal(null);
    } catch (e) {
      toast.error(e.response?.data?.message || '更新失敗');
    }
  };

  const submitUsername = async (username) => {
    const trimmed = (username || '').trim();
    if (!trimmed) {
      toast.error('請輸入暱稱');
      return;
    }
    try {
      await userAPI.updateUsername(trimmed);
      setUserData((prev) => ({ ...(prev || {}), username: trimmed }));
      toast.success('暱稱已更新');
      setActiveModal(null);
    } catch (e) {
      toast.error(e.response?.data?.message || '更新失敗');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-[#4b2e2a] text-[20px]">載入中...</div>
      </div>
    );
  }

  return (
    <div className="bg-[#ffffff] content-stretch flex flex-col gap-[50px] items-center justify-start relative size-full">
      <Header onLogout={handleLogout} />
      <MainPage 
        userData={userData}
        memberStatus={memberStatus}
        onEditField={handleEditField}
        onMemberInfo={handleMemberInfo}
        onSupport={handleSupport}
        onNotifications={handleNotifications}
        onOrderInfo={handleOrderInfo}
        onCuponInfo={handleCuponInfo}
        onPointInfo={handlePointInfo}
        onBookshelf={handleBookshelf}
        onWishlist={handleWishlist}
        onFollow={handleFollow}
        activeSection={activeSection}
        onChangeAvatar={handleChangeAvatar}
        avatarVersion={avatarVersion}
        isTwoFactorEnabled={isTwoFactorEnabled}
        onOpenTwoFactor={() => setTwoFactorOpen(true)}
      />
      {twoFactorOpen && (
        <TwoFactorModal 
          isOpen={twoFactorOpen}
          onClose={() => setTwoFactorOpen(false)}
          onStatusChange={(enabled) => {
            setIsTwoFactorEnabled(Boolean(enabled));
            fetchTwoFactorStatus();
          }}
        />
      )}

      {activeModal === 'password' && (
        <PasswordModal 
          onClose={() => setActiveModal(null)}
          onSubmit={submitPassword}
        />
      )}
      {activeModal === 'birthdate' && (
        <BirthdateModal 
          onClose={() => setActiveModal(null)}
          onSubmit={submitBirthdate}
          initial={userData?.birthdate ? new Date(userData.birthdate).toISOString().slice(0,10) : ''}
        />
      )}
      {activeModal === 'gender' && (
        <GenderModal 
          onClose={() => setActiveModal(null)}
          onSubmit={submitGender}
          initial={userData?.gender || ''}
        />
      )}
      {activeModal === 'username' && (
        <UsernameModal 
          onClose={() => setActiveModal(null)}
          onSubmit={submitUsername}
          initial={userData?.username || ''}
        />
      )}
    </div>
  );
};

export default UserMainPageContainer;

// ---- Inline Modals ----
function ModalShell({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-md w-[520px] max-w-[92vw] shadow-[0_8px_24px_rgba(0,0,0,0.18)] p-6">
        <h2 className="text-[#4b2e2a] text-2xl font-bold mb-4 text-center">{title}</h2>
        {children}
      </div>
    </div>
  );
}

function PasswordModal({ onClose, onSubmit }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handle = async () => {
    setLoading(true);
    await onSubmit(newPassword, confirmPassword);
    setLoading(false);
  };
  return (
    <ModalShell title="修改密碼" onClose={onClose}>
      <input type="password" className="border rounded p-3 mb-3 block w-full" placeholder="新密碼" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} />
      <input type="password" className="border rounded p-3 mb-5 block w-full" placeholder="確認新密碼" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
      <div className="flex justify-end gap-2">
        <button className="px-4 py-2 rounded border" onClick={onClose}>取消</button>
        <button className="bg-[#ab3b3a] text-white rounded px-4 py-2 disabled:opacity-60" onClick={handle} disabled={loading}>儲存</button>
      </div>
    </ModalShell>
  );
}

function BirthdateModal({ onClose, onSubmit, initial }) {
  const [birthdate, setBirthdate] = useState(initial || '');
  const [loading, setLoading] = useState(false);
  const handle = async () => {
    setLoading(true);
    await onSubmit(birthdate);
    setLoading(false);
  };
  return (
    <ModalShell title="修改生日" onClose={onClose}>
      <input type="date" className="border rounded p-3 mb-5 block w-full" value={birthdate} onChange={(e)=>setBirthdate(e.target.value)} />
      <div className="flex justify-end gap-2">
        <button className="px-4 py-2 rounded border" onClick={onClose}>取消</button>
        <button className="bg-[#ab3b3a] text-white rounded px-4 py-2 disabled:opacity-60" onClick={handle} disabled={loading}>儲存</button>
      </div>
    </ModalShell>
  );
}

function GenderModal({ onClose, onSubmit, initial }) {
  const [gender, setGender] = useState(initial || '');
  const [loading, setLoading] = useState(false);
  const handle = async () => {
    setLoading(true);
    await onSubmit(gender);
    setLoading(false);
  };
  return (
    <ModalShell title="修改性別" onClose={onClose}>
      <select className="border rounded p-3 mb-5 block w-full" value={gender} onChange={(e)=>setGender(e.target.value)}>
        <option value="">請選擇</option>
        <option value="MALE">男</option>
        <option value="FEMALE">女</option>
      </select>
      <div className="flex justify-end gap-2">
        <button className="px-4 py-2 rounded border" onClick={onClose}>取消</button>
        <button className="bg-[#ab3b3a] text-white rounded px-4 py-2 disabled:opacity-60" onClick={handle} disabled={loading}>儲存</button>
      </div>
    </ModalShell>
  );
}

function UsernameModal({ onClose, onSubmit, initial }) {
  const [username, setUsername] = useState(initial || '');
  const [loading, setLoading] = useState(false);
  const handle = async () => {
    setLoading(true);
    await onSubmit(username);
    setLoading(false);
  };
  return (
    <ModalShell title="修改暱稱" onClose={onClose}>
      <input className="border rounded p-3 mb-5 block w-full" placeholder="輸入暱稱" value={username} onChange={(e)=>setUsername(e.target.value)} />
      <div className="flex justify-end gap-2">
        <button className="px-4 py-2 rounded border" onClick={onClose}>取消</button>
        <button className="bg-[#ab3b3a] text-white rounded px-4 py-2 disabled:opacity-60" onClick={handle} disabled={loading}>儲存</button>
      </div>
    </ModalShell>
  );
}