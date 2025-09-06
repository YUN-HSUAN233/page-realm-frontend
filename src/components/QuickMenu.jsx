import React from 'react';
import { useNavigate } from 'react-router-dom';

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

function MemberBtnG({ onMemberInfo, onSupport, onNotifications }) {
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

function OrderInfoQBtn({ onClick, isActive }) {
  return (
    <button className={`cursor-pointer relative shrink-0 w-full ${isActive ? 'bg-[#fff8ec]' : ''}`} onClick={onClick}>
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

function CuponInfoQBtn({ onClick, isActive }) {
  return (
    <button className={`cursor-pointer relative shrink-0 w-full ${isActive ? 'bg-[#fff8ec]' : ''}`} onClick={onClick}>
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

function PointInfoQBtn({ onClick, isActive }) {
  return (
    <button className={`cursor-pointer relative shrink-0 w-full ${isActive ? 'bg-[#fff8ec]' : ''}`} onClick={onClick}>
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

function UserAssetsBtnG({ onOrderInfo, onCuponInfo, onPointInfo, activePage }) {
  return (
    <div className="relative rounded-md shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative w-full">
        <UserAssetsBtnGTitle />
        <OrderInfoQBtn onClick={onOrderInfo} isActive={activePage === 'orders'} />
        <CuponInfoQBtn onClick={onCuponInfo} isActive={activePage === 'coupon'} />
        <PointInfoQBtn onClick={onPointInfo} isActive={activePage === 'point'} />
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

function WishlistQBtn({ onClick, isActive }) {
  return (
    <button className={`cursor-pointer relative shrink-0 w-full ${isActive ? 'bg-[#fff8ec]' : ''}`} onClick={onClick}>
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

function BookshelfBtnG({ onBookshelf, onWishlist, onFollow, activePage }) {
  return (
    <div className="relative rounded-md shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative w-full">
        <BookshelfBtnGTitle />
        <BookshelfQBtn onClick={onBookshelf} />
        <WishlistQBtn onClick={onWishlist} isActive={activePage === 'wishlist'} />
        <FollowQBtn onClick={onFollow} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none rounded-md" />
    </div>
  );
}

function QuickMenu({ activePage }) {
  const navigate = useNavigate();

  const handleMemberInfo = () => {
    navigate('/user-main');
  };

  const handleSupport = () => {
    navigate('/support');
  };

  const handleNotifications = () => {
    console.log('會員通知 clicked');
    // 實現通知功能
  };

  const handleOrderInfo = () => {
    navigate('/orders');
  };

  const handleCuponInfo = () => {
    navigate('/coupon');
  };

  const handlePointInfo = () => {
    navigate('/point');
  };

  const handleBookshelf = () => {
    console.log('已購書籍 clicked');
    // 實現書櫃功能
  };

  const handleWishlist = () => {
    navigate('/wishlist');
  };

  const handleFollow = () => {
    console.log('關注清單 clicked');
    // 實現關注功能
  };

  return (
    <aside className="bg-[#ffffff] relative rounded-md shrink-0 w-[250px]">
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start overflow-clip px-0 py-5 relative w-[250px]">
        <QuickMenuTitle />
        <MemberBtnG 
          onMemberInfo={handleMemberInfo}
          onSupport={handleSupport}
          onNotifications={handleNotifications}
        />
        <UserAssetsBtnG 
          onOrderInfo={handleOrderInfo}
          onCuponInfo={handleCuponInfo}
          onPointInfo={handlePointInfo}
          activePage={activePage}
        />
        <BookshelfBtnG 
          onBookshelf={handleBookshelf}
          onWishlist={handleWishlist}
          onFollow={handleFollow}
          activePage={activePage}
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </aside>
  );
}

export default QuickMenu;
