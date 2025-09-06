import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import imgPageRealmLogo0111 from "../assets/logos/PageRealm_LOGO_01_1.png";
import { checkoutAPI } from '../services/api';

function Logo() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip px-[29px] py-[9px] relative shrink-0 w-[195px]" data-name="Logo">
      <div className="aspect-[1024/539] bg-center bg-cover bg-no-repeat relative rounded-[5px] shrink-0 w-full" data-name="PageRealm_LOGO_01_1 1" style={{ backgroundImage: `url('${imgPageRealmLogo0111}')` }}>
        <div aria-hidden="true" className="absolute border-2 border-[#c86b42] border-dashed inset-0 pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function LogOutBtn() {
  return (
    <button className="cursor-pointer relative rounded-[4px] shrink-0" data-name="LogOutBtn">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip px-4 py-3.5 relative">
        <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
          <p className="leading-[1.1] whitespace-pre">登出</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </button>
  );
}

function Header() {
  return (
    <header className="bg-[#fffdfb] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[30px] pr-[70px] py-0 relative w-full">
          <Logo />
          <LogOutBtn />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#4b2e2a] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
    </header>
  );
}

function PaymentTitleAccent() {
  return <div className="bg-[#4b2e2a] h-[50px] shrink-0 w-4" data-name="PaymentTitleAccent" />;
}

function PaymentTitle() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="PaymentTitle">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-5 items-center justify-start px-[7px] py-0 relative w-full">
          <PaymentTitleAccent />
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
            <h1 className="block leading-[1.1] whitespace-pre">結帳</h1>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PDtitle() {
  return (
    <div className="box-border content-stretch flex gap-[15px] items-center justify-center overflow-clip px-0 py-5 relative shrink-0 w-[891px]" data-name="PDtitle">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="PDtitleLineL">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 383 4">
            <line id="PDtitleLineL" stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="8 8" strokeWidth="4" x2="383" y1="2" y2="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
        <h2 className="block leading-[1.1] whitespace-pre">支付選項</h2>
      </div>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="PDtitleLineR">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 383 4">
            <line id="PDtitleLineL" stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="8 8" strokeWidth="4" x2="383" y1="2" y2="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CuponInput({ couponCode, setCouponCode, isProcessing }) {
  const [availableCoupons, setAvailableCoupons] = useState([]);
  const [isLoadingCoupons, setIsLoadingCoupons] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { isAuthenticated, authLoading } = useAuth();

  // 載入可用優惠券
  const loadAvailableCoupons = useCallback(async () => {
    if (!isAuthenticated || authLoading) return;
    
    try {
      setIsLoadingCoupons(true);
      const response = await checkoutAPI.getCouponInfo();
      setAvailableCoupons(response.data || []);
    } catch (err) {
      console.error('載入可用優惠券失敗:', err);
      setAvailableCoupons([]);
    } finally {
      setIsLoadingCoupons(false);
    }
  }, [isAuthenticated, authLoading]);

  // 組件載入時獲取可用優惠券
  useEffect(() => {
    if (!authLoading && isAuthenticated) {
      loadAvailableCoupons();
    }
  }, [authLoading, isAuthenticated, loadAvailableCoupons]);

  // 點擊外部關閉下拉選單
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = event.target.closest('[data-name="CuponDropdown"]');
      if (!dropdown && showDropdown) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showDropdown]);

  // 選擇優惠券
  const handleSelectCoupon = (selectedCoupon) => {
    setCouponCode(selectedCoupon.code || selectedCoupon.couponCode || selectedCoupon.name || '');
    setShowDropdown(false);
  };

// 折扣文字轉換函數
function getDiscountText(discountType, discountValue) {
  switch (discountType) {
    case 'PERCENT': 
      // 當 value=20 時，顯示為 8折
      return `${Math.floor((100-discountValue) / 10)}折 券`;
    case 'FIXED': 
      // 當 value=80 時，顯示為 折80元
      return `折${discountValue}元 券`;
    default: return '券';
  }
}

  return (
    <div className="flex gap-3 items-center relative z-[9997]">
      {/* 輸入框 */}
      <div className="relative rounded-[6px] shrink-0 w-[300px]" data-name="CuponInput">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="輸入優惠券代碼"
          disabled={isProcessing}
          className="box-border w-full bg-transparent border-none outline-none text-[#4b2e2a] font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-semibold text-[18px] tracking-[-0.5px] pl-[15px] pr-10 py-[7px]"
        />
        <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>

      {/* 下拉選單 */}
      <div className="relative z-[9998]" data-name="CuponDropdown">
        <button
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
          disabled={isProcessing || isLoadingCoupons}
          className="bg-[#f8f9fa] border border-[#c8cbd4] text-[#4b2e2a] px-4 py-2 rounded-[6px] font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-semibold text-[16px] hover:bg-[#e9ecef] disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]"
        >
          {isLoadingCoupons ? '載入中...' : '選擇優惠券'}
        </button>

        {/* 下拉選單內容 */}
        {showDropdown && !isProcessing && (
          <div className="absolute top-full left-0 mt-1 w-[280px] bg-white border border-[#c8cbd4] rounded-[6px] shadow-xl z-[9999] max-h-[200px] overflow-y-auto" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }}>
            {availableCoupons.length === 0 ? (
              <div className="px-4 py-3 text-[#6c757d] text-center font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] text-[14px]">
                目前沒有可用的優惠券
              </div>
            ) : (
              availableCoupons.map((coupon, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSelectCoupon(coupon)}
                  className="w-full px-4 py-3 text-left hover:bg-[#f8f9fa] border-b border-[#e9ecef] last:border-b-0 text-[#4b2e2a] font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] text-[14px]"
                >
                  <div className="font-semibold">{(coupon.name || '') + ' ' + getDiscountText(coupon.discountType, coupon.discountValue) || coupon.title || '優惠券'}</div>
                  {coupon.description && (
                    <div className="text-[#6c757d] text-[12px] mt-1">{coupon.description}</div>
                  )}
                  {coupon.code && (
                    <div className="text-[#007bff] text-[12px] mt-1">代碼: {coupon.code}</div>
                  )}
                </button>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Cupon({ couponCode, setCouponCode, onApplyCoupon, isProcessing }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Cupon">
      <div className="flex flex-row items-center overflow-visible relative size-full">
        <div className="box-border content-stretch flex gap-3 items-center justify-start px-8 py-[29px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
            <h3 className="block leading-[1.1] whitespace-pre">{`使用優惠券 : `}</h3>
          </div>
          <CuponInput 
            couponCode={couponCode}
            setCouponCode={setCouponCode}
            isProcessing={isProcessing}
          />
          <button
            onClick={onApplyCoupon}
            disabled={isProcessing || !couponCode.trim()}
            className="bg-[#4b2e2a] text-white px-4 py-2 rounded-[6px] font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-semibold text-[16px] hover:bg-[#3a241f] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            確認使用
          </button>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PointInput({ pointsToApply, setPointsToApply, isProcessing }) {
  return (
    <div className="h-[38px] relative rounded-[6px] shrink-0 w-[216px]" data-name="PointInput">
      <div className="h-[38px] overflow-clip relative w-[216px]">
        <input
          type="number"
          value={pointsToApply}
          onChange={(e) => setPointsToApply(e.target.value)}
          placeholder="輸入欲使用點數數量"
          disabled={isProcessing}
          min="0"
          className="absolute bottom-2 left-5 right-5 top-2 bg-transparent border-none outline-none text-[#4b2e2a] font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-semibold text-[18px] tracking-[-0.5px]"
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function PointBtn({ onApplyPoints, isProcessing, pointsToApply }) {
  return (
    <button
      onClick={onApplyPoints}
      disabled={isProcessing || !pointsToApply || parseInt(pointsToApply) <= 0}
      className="bg-white h-[38px] relative rounded-[6px] shrink-0 w-[106px] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      data-name="PointBtn"
    >
      <div className="h-[38px] overflow-clip relative w-[106px]">
        <div className="absolute flex flex-col font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic text-[#4b2e2a] text-[20px] text-nowrap top-1/2 tracking-[-0.5px] translate-y-[-50%]" style={{ left: "calc(50% - 40px)" }}>
          <p className="leading-[1.1] whitespace-pre">確認使用</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </button>
  );
}

function Point({ pointsToApply, setPointsToApply, onApplyPoints, isProcessing, availablePoints }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Point">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[35px] items-center justify-start px-8 py-[29px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
            <h3 className="block leading-[1.1] whitespace-pre">{`點數折抵 :  `}</h3>
          </div>
          <PointInput 
            pointsToApply={pointsToApply}
            setPointsToApply={setPointsToApply}
            isProcessing={isProcessing}
          />
          <PointBtn 
            onApplyPoints={onApplyPoints}
            isProcessing={isProcessing}
            pointsToApply={pointsToApply}
          />
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
            <h3 className="block leading-[1.1] whitespace-pre">{`目前剩餘點數 :  `}</h3>
          </div>
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
            <h3 className="block leading-[1.1] whitespace-pre">{availablePoints} 點</h3>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CardText() {
  return (
    <div className="box-border content-stretch flex items-center justify-center overflow-clip px-0 py-[5px] relative shrink-0" data-name="CardText">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
        <p className="leading-[1.1] whitespace-pre">信用卡</p>
      </div>
    </div>
  );
}

function CardNumberInput() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="CardNumberInput">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-3 py-[5px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c8cbd4] text-[18px] text-nowrap tracking-[-0.45px]">
            <p className="leading-[1.1] whitespace-pre">信用卡號</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function CardNumber() {
  return (
    <div className="relative shrink-0 w-full" data-name="CardNumber">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] items-start justify-start px-2.5 py-[7px] relative w-full">
          <CardText />
          <CardNumberInput />
        </div>
      </div>
    </div>
  );
}

function ExpiryDate() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="ExpiryDate">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[15px] py-[3px] relative">
        <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold h-[25px] justify-center leading-[0] not-italic relative shrink-0 text-[#c8cbd4] text-[18px] tracking-[-0.45px] w-[150px]">
          <p className="leading-[1.1] whitespace-pre-wrap">{`有效期限  MM / YY`}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function CardCvv() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="CardCvv">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip px-3 py-[5px] relative">
        <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c8cbd4] text-[18px] text-nowrap tracking-[-0.45px]">
          <p className="leading-[1.1] whitespace-pre">末三碼</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function CardSecurity() {
  return (
    <div className="basis-0 content-stretch flex gap-[15px] grow h-full items-start justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="CardSecurity">
      <ExpiryDate />
      <CardCvv />
    </div>
  );
}

function RcCheckbox() {
  return (
    <div className="relative rounded-[3px] shrink-0 size-[21px]" data-name="RCCheckbox">
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function RememberCard() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="RememberCard">
      <div className="flex flex-row items-center justify-end overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2.5 items-center justify-end px-2.5 py-1.5 relative size-full">
          <RcCheckbox />
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[18px] text-nowrap tracking-[-0.45px]">
            <p className="leading-[1.1] whitespace-pre">記住這張信用卡</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardDetial() {
  return (
    <div className="relative shrink-0 w-full" data-name="CardDetial">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[50px] items-center justify-start pb-[7px] pt-1 px-3 relative w-full">
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <CardSecurity />
          </div>
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <RememberCard />
          </div>
        </div>
      </div>
    </div>
  );
}

function CardInfo() {
  return (
    <div className="h-[147px] relative rounded-[3px] shrink-0 w-full" data-name="CardInfo">
      <div className="box-border content-stretch flex flex-col gap-1.5 h-[147px] items-end justify-start overflow-clip px-0 py-[3px] relative w-full">
        <CardNumber />
        <CardDetial />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function PayByCredit() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[18px] items-start justify-start overflow-clip px-8 py-5 relative shrink-0 w-[888px]" data-name="PayByCredit">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] tracking-[-0.6px] w-full">
        <h3 className="block leading-[1.1]">信用卡資料</h3>
      </div>
      <CardInfo />
    </div>
  );
}

function Payway() {
  return (
    <div className="relative shrink-0 w-full" data-name="Payway">
      <div className="content-stretch flex flex-col items-center justify-start overflow-visible relative w-full">
        <PayByCredit />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PaymentDetial({ couponCode, setCouponCode, pointsToApply, setPointsToApply, onApplyCoupon, onApplyPoints, isProcessing, availablePoints }) {
  return (
    <div className="bg-white max-w-[888px] relative rounded-[6px] shrink-0 w-full" data-name="PaymentDetial">
      <div className="box-border content-stretch flex flex-col items-start justify-start max-w-inherit overflow-visible px-0 py-2.5 relative w-full">
        <PDtitle />
        <Cupon 
          couponCode={couponCode}
          setCouponCode={setCouponCode}
          onApplyCoupon={onApplyCoupon}
          isProcessing={isProcessing}
        />
        <Point 
          pointsToApply={pointsToApply}
          setPointsToApply={setPointsToApply}
          onApplyPoints={onApplyPoints}
          isProcessing={isProcessing}
          availablePoints={availablePoints}
        />
        <Payway />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function StText() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="STText">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
        <h3 className="block leading-[1.1] whitespace-pre">{`購物金額 : `}</h3>
      </div>
    </div>
  );
}

function StAmount({ amount }) {
  return (
    <div className="basis-0 box-border content-stretch flex font-bold gap-2.5 grow items-center justify-end leading-[0] min-h-px min-w-px not-italic overflow-clip px-0 py-0.5 relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]" data-name="STAmount">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.1] text-nowrap whitespace-pre">{amount}</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.1] text-nowrap whitespace-pre">元</p>
      </div>
    </div>
  );
}

function SubTotalBox({ amount }) {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-center justify-between min-h-px min-w-px overflow-clip px-0 py-1 relative shrink-0" data-name="SubTotalBox">
      <StText />
      <StAmount amount={amount} />
    </div>
  );
}

function SubTotal({ amount }) {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="SubTotal">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-start justify-start px-[21px] py-[19px] relative w-full">
          <SubTotalBox amount={amount} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CdText() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="CDText">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
        <h3 className="block leading-[1.1] whitespace-pre">優惠券折抵 :</h3>
      </div>
    </div>
  );
}

function CdAmount({ amount }) {
  return (
    <div className="basis-0 box-border content-stretch flex font-bold gap-2.5 grow items-center justify-end leading-[0] min-h-px min-w-px not-italic overflow-clip px-0 py-0.5 relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]" data-name="CDAmount">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.1] text-nowrap whitespace-pre">{amount}</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.1] text-nowrap whitespace-pre">元</p>
      </div>
    </div>
  );
}

function CuponsDiscountBox({ amount }) {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-center justify-between min-h-px min-w-px overflow-clip px-0 py-1 relative shrink-0" data-name="CuponsDiscountBox">
      <CdText />
      <CdAmount amount={amount} />
    </div>
  );
}

function CuponsDiscount({ amount }) {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="CuponsDiscount">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-start px-[21px] py-0 relative w-full">
          <CuponsDiscountBox amount={amount} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PdText() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="PDText">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
        <h3 className="block leading-[1.1] whitespace-pre">點數折抵 :</h3>
      </div>
    </div>
  );
}

function PdAmount({ amount }) {
  return (
    <div className="basis-0 box-border content-stretch flex font-bold gap-2.5 grow items-center justify-end leading-[0] min-h-px min-w-px not-italic overflow-clip px-0 py-0.5 relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]" data-name="PDAmount">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.1] text-nowrap whitespace-pre">{amount}</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.1] text-nowrap whitespace-pre">元</p>
      </div>
    </div>
  );
}

function PointDiscountBox({ amount }) {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-center justify-between min-h-px min-w-px overflow-clip px-0 py-1 relative shrink-0" data-name="PointDiscountBox">
      <PdText />
      <PdAmount amount={amount} />
    </div>
  );
}

function PointDiscount({ amount }) {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="PointDiscount">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-start px-[21px] py-0 relative w-full">
          <PointDiscountBox amount={amount} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SpaceBox() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="SpaceBox">
      <div className="flex flex-row items-center relative size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function GtText() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="GTText">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
        <h3 className="block leading-[1.1] whitespace-pre">{`金額總計 : `}</h3>
      </div>
    </div>
  );
}

function GtAmount({ amount }) {
  return (
    <div className="basis-0 box-border content-stretch flex font-bold gap-2.5 grow items-center justify-end leading-[0] min-h-px min-w-px not-italic overflow-clip px-0 py-0.5 relative shrink-0 text-[24px] text-nowrap tracking-[-0.6px]" data-name="GTAmount">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] justify-center relative shrink-0 text-[#ab3b3a]">
        <p className="leading-[1.1] text-nowrap whitespace-pre">{amount}</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] justify-center relative shrink-0 text-[#4b2e2a]">
        <p className="leading-[1.1] text-nowrap whitespace-pre">元</p>
      </div>
    </div>
  );
}

function GrandTotalBox({ amount }) {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-center justify-between min-h-px min-w-px overflow-clip px-0 py-1 relative shrink-0" data-name="GrandTotalBox">
      <GtText />
      <GtAmount amount={amount} />
    </div>
  );
}

function GrandTotal({ amount }) {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="GrandTotal">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-start justify-start px-[21px] py-[19px] relative w-full">
          <GrandTotalBox amount={amount} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function GpText() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="GPText">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
        <h3 className="block leading-[1.1] whitespace-pre">獲得點數 :</h3>
      </div>
    </div>
  );
}

function GpAmount({ points }) {
  return (
    <div className="basis-0 box-border content-stretch flex font-bold gap-2.5 grow items-center justify-end leading-[0] min-h-px min-w-px not-italic overflow-clip px-0 py-0.5 relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]" data-name="GPAmount">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.1] text-nowrap whitespace-pre">{points}</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.1] text-nowrap whitespace-pre">點</p>
      </div>
    </div>
  );
}

function GpBox({ points }) {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-center justify-between min-h-px min-w-px overflow-clip px-0 py-1 relative shrink-0" data-name="GPBox">
      <GpText />
      <GpAmount points={points} />
    </div>
  );
}

function GetPoint({ points }) {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="GetPoint">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-start px-[21px] py-0 relative w-full">
          <GpBox points={points} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ConfirmCheckoutBtn() {
  return (
    <button className="bg-[#ab3b3a] box-border content-stretch cursor-pointer flex items-center justify-center overflow-clip px-10 py-3 relative rounded-[8px] shrink-0" data-name="ConfirmCheckoutBtn">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white tracking-[-0.5px]">
        <p className="leading-[1.1] whitespace-pre">信用卡支付</p>
      </div>
    </button>
  );
}

function ECpayBtn({ onCreateOrder, isProcessing }) {
  return (
    <button
      onClick={onCreateOrder}
      disabled={isProcessing}
      className="bg-[#469e3a] box-border content-stretch flex items-center justify-center overflow-clip px-10 py-[13px] relative rounded-[6px] shrink-0 hover:bg-[#3a8b2a] disabled:opacity-50 disabled:cursor-not-allowed"
      data-name="ECpayBtn"
    >
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white tracking-[-0.5px]">
        <p className="leading-[1.1] whitespace-pre">{isProcessing ? '處理中...' : '綠界支付'}</p>
      </div>
    </button>
  );
}

function ConfirmCheckout({ onCreateOrder, isProcessing }) {
  return (
    <div className="box-border content-stretch flex gap-5 items-center justify-center overflow-clip pb-[19px] pt-0 px-0 relative shrink-0 w-full" data-name="ConfirmCheckout">
      <ConfirmCheckoutBtn />
      <ECpayBtn onCreateOrder={onCreateOrder} isProcessing={isProcessing} />
    </div>
  );
}

function Total({ cartSummary, couponDiscount, pointsDiscount, total, onCreateOrder, isProcessing, error }) {
  return (
    <div className="bg-white h-[460px] relative rounded-[6px] shrink-0" data-name="Total">
      <div className="box-border content-stretch flex flex-col gap-4 h-[460px] items-center justify-center overflow-clip px-5 py-0 relative">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 w-full max-w-md">
            <span className="block sm:inline text-sm">{error}</span>
          </div>
        )}
        <SubTotal amount={cartSummary?.cartTotalAmount || 0} />
        <CuponsDiscount amount={couponDiscount} />
        <PointDiscount amount={pointsDiscount} />
        <SpaceBox />
        <GrandTotal amount={total} />
        <GetPoint points={cartSummary?.expectedPointsReward || 0} />
        <ConfirmCheckout onCreateOrder={onCreateOrder} isProcessing={isProcessing} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function PaymentFrom({ 
  cartSummary, 
  pointsInfo, 
  couponCode, 
  setCouponCode, 
  pointsToApply, 
  setPointsToApply,
  couponDiscount,
  pointsDiscount,
  total,
  onApplyCoupon,
  onApplyPoints,
  onCreateOrder,
  isProcessing,
  error 
}) {
  return (
    <div className="bg-[#fffdfb] max-h-[1370px] max-w-[1000px] relative rounded-[3px] shrink-0 w-full" data-name="PaymentFrom">
      <div className="box-border content-stretch flex flex-col gap-[39px] items-center justify-start max-h-inherit max-w-inherit overflow-visible pb-[45px] pt-[25px] px-0 relative w-full">
        <PaymentTitle />
        <PaymentDetial 
          couponCode={couponCode}
          setCouponCode={setCouponCode}
          pointsToApply={pointsToApply}
          setPointsToApply={setPointsToApply}
          onApplyCoupon={onApplyCoupon}
          onApplyPoints={onApplyPoints}
          isProcessing={isProcessing}
          availablePoints={pointsInfo?.availablePoints || 0}
        />
        <Total 
          cartSummary={cartSummary}
          couponDiscount={couponDiscount}
          pointsDiscount={pointsDiscount}
          total={total}
          onCreateOrder={onCreateOrder}
          isProcessing={isProcessing}
          error={error}
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

export default function PaymentContent() {
  const [cartSummary, setCartSummary] = useState(null);
  const [pointsInfo, setPointsInfo] = useState(null);
  const [couponCode, setCouponCode] = useState('');
  const [pointsToApply, setPointsToApply] = useState('');
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [pointsDiscount, setPointsDiscount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // 載入購物車摘要和點數信息
  const loadInitialData = useCallback(async () => {
    try {
      setLoading(true);
      const [summaryResponse, pointsResponse] = await Promise.all([
        checkoutAPI.getCartSummary(),
        checkoutAPI.getPointsInfo()
      ]);
      
      setCartSummary(summaryResponse.data);
      setPointsInfo(pointsResponse.data);
      setError(null);
    } catch (err) {
      console.error('載入支付頁面數據失敗:', err);
      setError('載入支付頁面數據失敗，請重試');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  // 應用優惠券
  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) {
      setError('請輸入優惠券代碼');
      return;
    }

    try {
      setIsProcessing(true);
      const response = await checkoutAPI.applyCoupon(couponCode.trim());
      const result = response.data;
      
      if (result.result) {
        setCouponDiscount(result.deductionAmount);
        setError(null);
      } else {
        setError(result.message || '優惠券使用失敗');
      }
    } catch (err) {
      console.error('應用優惠券失敗:', err);
      setError('優惠券使用失敗，請重試');
    } finally {
      setIsProcessing(false);
    }
  };

  // 應用點數折抵
  const handleApplyPoints = async () => {
    const points = parseInt(pointsToApply);
    if (!points || points <= 0) {
      setError('請輸入有效的點數');
      return;
    }

    if (points > (pointsInfo?.availablePoints || 0)) {
      setError('點數不足');
      return;
    }

    try {
      setIsProcessing(true);
      const response = await checkoutAPI.applyPoints(points);
      const result = response.data;
      
      setPointsDiscount(result.deductionAmount);
      setError(null);
    } catch (err) {
      console.error('應用點數失敗:', err);
      setError('點數折抵失敗，請重試');
    } finally {
      setIsProcessing(false);
    }
  };

  // 創建訂單並導轉到綠界支付
  const handleCreateOrder = async () => {
    try {
      setIsProcessing(true);
      const response = await checkoutAPI.createOrder();
      
      // 直接在當前頁面顯示綠界支付頁面
      document.open();
      document.write(response.data);
      document.close();
      
    } catch (err) {
      console.error('創建訂單失敗:', err);
      setError('創建訂單失敗，請重試');
    } finally {
      setIsProcessing(false);
    }
  };

  // 計算總金額
  const calculateTotal = () => {
    const subtotal = cartSummary?.cartTotalAmount || 0;
    return Math.max(0, subtotal - couponDiscount - pointsDiscount);
  };

  if (loading) {
    return (
      <div className="bg-white content-stretch flex flex-col gap-[49px] items-center justify-center relative size-full">
        <Header />
        <div className="flex items-center justify-center h-64">
          <p className="text-lg text-gray-600">載入中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white content-stretch flex flex-col gap-[49px] items-center justify-start relative size-full" data-name="PaymentContent">
      <Header />
      <PaymentFrom 
        cartSummary={cartSummary}
        pointsInfo={pointsInfo}
        couponCode={couponCode}
        setCouponCode={setCouponCode}
        pointsToApply={pointsToApply}
        setPointsToApply={setPointsToApply}
        couponDiscount={couponDiscount}
        pointsDiscount={pointsDiscount}
        total={calculateTotal()}
        onApplyCoupon={handleApplyCoupon}
        onApplyPoints={handleApplyPoints}
        onCreateOrder={handleCreateOrder}
        isProcessing={isProcessing}
        error={error}
      />
    </div>
  );
}