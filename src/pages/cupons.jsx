import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { couponAPI } from '../services/api';
import CouponRecordCard from '../components/CouponRecordCard';
import QuickMenu from '../components/QuickMenu';
import toast from 'react-hot-toast';
import imgPageRealmLogo0111 from "../assets/logos/PageRealm_LOGO_01_1.png";

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

function CuponTitleAccent() {
  return <div className="bg-[#4b2e2a] h-[50px] shrink-0 w-4" data-name="CuponTitleAccent" />;
}

function CuponTitle() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="CuponTitle">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-5 items-center justify-start px-[7px] py-0 relative w-full">
          <CuponTitleAccent />
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
            <h1 className="block leading-[1.1] whitespace-pre">優惠券</h1>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}


function CuponFormTitle() {
  return (
    <div className="box-border content-stretch flex gap-[15px] items-center justify-center overflow-clip px-0 py-5 relative shrink-0 w-full" data-name="CuponFormTitle">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 4">
            <line stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="8 8" strokeWidth="4" x2="62.5" y1="2" y2="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
        <h2 className="block leading-[1.1] whitespace-pre">我的優惠券</h2>
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

function CouponAddForm({ onAddCoupon, isLoading }) {
  const [couponCode, setCouponCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (couponCode.trim()) {
      onAddCoupon(couponCode.trim());
      setCouponCode('');
    }
  };

  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-6 py-4 relative w-full">
      <form onSubmit={handleSubmit} className="flex gap-3 items-center">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="請輸入優惠券代碼"
          disabled={isLoading}
          className="box-border border border-[#4b2e2a] rounded-[4px] px-3 py-2 font-['Inter:Regular',_'Noto_Sans_JP:Regular',_sans-serif] text-[14px] text-[#4b2e2a] placeholder-[#9ca3af] w-[200px] focus:outline-none focus:ring-2 focus:ring-[#4b2e2a] focus:border-transparent disabled:bg-[#f5f5f5] disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={isLoading || !couponCode.trim()}
          className={`min-w-[80px] h-9 px-4 rounded-[4px] flex items-center justify-center font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold text-[14px] tracking-[-0.35px] transition-colors ${
            isLoading || !couponCode.trim()
              ? 'bg-[#f5f5f5] text-[#9ca3af] border border-[#e5e7eb] cursor-not-allowed'
              : 'bg-[#4b2e2a] text-white hover:bg-[#3a221f]'
          }`}
        >
          {isLoading ? '添加中...' : '添加'}
    </button>
      </form>
    </div>
  );
}

function PointDateTitle() {
  return (
    <div className="bg-[#4b2e2a] box-border content-stretch flex h-full items-center justify-center overflow-clip px-[91px] py-[3px] relative shrink-0" data-name="PointDateTitle">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.375px]">
        <p className="leading-[1.1] whitespace-pre">使用期限</p>
      </div>
    </div>
  );
}

function PointDescriptionTitle() {
  return (
    <div className="bg-[#4b2e2a] box-border content-stretch flex h-full items-center justify-center overflow-clip px-[45px] py-[3px] relative shrink-0" data-name="PointDescriptionTitle">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.375px]">
        <p className="leading-[1.1] whitespace-pre">詳情</p>
      </div>
    </div>
  );
}

function PointRewardTitle() {
  return (
    <div className="basis-0 bg-[#4b2e2a] grow h-full min-h-px min-w-px relative shrink-0" data-name="PointRewardTitle">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[30px] py-[3px] relative size-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.375px]">
            <p className="leading-[1.1] whitespace-pre">使用狀況</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CuponRecordTitle() {
  return (
    <div className="relative shrink-0 w-[484px]" data-name="CuponRecordTitle">
      <div className="content-stretch flex items-center justify-start overflow-clip relative w-[484px]">
        <div className="flex flex-row items-center self-stretch">
          <PointDateTitle />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <PointDescriptionTitle />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <PointRewardTitle />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none" />
    </div>
  );
}


// 狀態轉換函數
function getStatusText(status) {
  switch (status) {
    case 'HOLD': return '可使用';
    case 'APPLIED': return '已套用';
    case 'USED': return '已使用';
    case 'REVERSED': return '已撤銷';
    default: return status;
  }
}

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

function CouponRecordList({ coupons = [] }) {
  if (coupons.length === 0) {
  return (
      <div className="content-stretch flex items-center justify-center overflow-clip py-8 relative">
        <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[16px] text-nowrap tracking-[-0.4px]">
          <p className="leading-[1.1] whitespace-pre">目前沒有優惠券</p>
      </div>
    </div>
  );
}

  // 只將可使用(HOLD)狀態排在最上面，其他狀態保持原有順序
  const sortedCoupons = [...coupons].sort((a, b) => {
    if (a.status === 'HOLD' && b.status !== 'HOLD') return -1;
    if (a.status !== 'HOLD' && b.status === 'HOLD') return 1;
    return 0; // 其他狀態保持原有順序
  });

  return (
    <>
      {sortedCoupons.map((coupon, index) => (
        <CouponRecordCard
          key={index}
          startsAt={coupon.startsAt}
          endsAt={coupon.endsAt}
          name={coupon.name}
          discount={getDiscountText(coupon.discountType, coupon.discountValue)}
          status={getStatusText(coupon.status)}
          originalStatus={coupon.status}
        />
      ))}
    </>
  );
}

function CouponPageBtnG({ currentPage, totalPages, onPageChange }) {
  if (!totalPages || totalPages <= 1) {
    return null; // 不顯示分頁按鈕如果只有一頁或沒有資料
  }

  const generatePageNumbers = () => {
    const pages = [];
    const showPages = 5; // 最多顯示5個頁碼
    
    if (totalPages <= showPages) {
      // 如果總頁數不超過5頁，顯示所有頁碼
      for (let i = 0; i < totalPages; i++) {
        pages.push(i);
      }
    } else {
      // 智能顯示頁碼
      if (currentPage < 3) {
        // 開頭附近：1 2 3 4 ... 最後一頁
        pages.push(0, 1, 2, 3, '...', totalPages - 1);
      } else if (currentPage >= totalPages - 3) {
        // 結尾附近：第一頁 ... N-3 N-2 N-1 N
        pages.push(0, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1);
      } else {
        // 中間：第一頁 ... current-1 current current+1 ... 最後一頁
        pages.push(0, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages - 1);
      }
    }
    
    return pages;
  };

  const pages = generatePageNumbers();

  return (
    <div className="relative shrink-0 w-full" data-name="CouponPageBtnG">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center gap-2 px-4 py-[13px] relative w-full">
          {/* 上一頁按鈕 */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 0}
            className="block overflow-clip relative rounded-[8px] shrink-0 size-[30px] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#f5f5f5]"
          >
            <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic text-[#4b2e2a] text-[16px] text-nowrap top-1/2 tracking-[-0.4px] translate-y-[-50%]" style={{ left: "calc(50% - 8px)" }}>
              <p className="leading-[1.1] whitespace-pre">←</p>
            </div>
          </button>

          {/* 頁碼按鈕 */}
          {pages.map((page, index) => (
            page === '...' ? (
              <span key={`ellipsis-${index}`} className="flex items-center justify-center w-[30px] h-[30px] text-[#4b2e2a] font-bold">
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`block overflow-clip relative rounded-[8px] shrink-0 size-[30px] hover:bg-[#f5f5f5] ${
                  currentPage === page ? 'bg-[#fff8ec]' : ''
                }`}
              >
                <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic text-[#4b2e2a] text-[16px] text-nowrap top-1/2 tracking-[-0.4px] translate-y-[-50%]" style={{ left: "calc(50% - 6px)" }}>
                  <p className="leading-[1.1] whitespace-pre">{page + 1}</p>
                </div>
              </button>
            )
          ))}

          {/* 下一頁按鈕 */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage >= totalPages - 1}
            className="block overflow-clip relative rounded-[8px] shrink-0 size-[30px] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#f5f5f5]"
          >
            <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic text-[#4b2e2a] text-[16px] text-nowrap top-1/2 tracking-[-0.4px] translate-y-[-50%]" style={{ left: "calc(50% - 8px)" }}>
              <p className="leading-[1.1] whitespace-pre">→</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function CuponRecord3({ coupons, currentPage, totalPages, onPageChange }) {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0" data-name="CuponRecord">
      <div className="content-stretch flex flex-col items-center justify-start overflow-clip relative">
        <CuponRecordTitle />
        <CouponRecordList coupons={coupons} />
        
        <CouponPageBtnG 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={onPageChange} 
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function CuponRecordWrapper({ coupons, currentPage, totalPages, onPageChange }) {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-start overflow-clip pb-10 pt-0 px-[30px] relative shrink-0" data-name="CuponRecordWrapper">
      <CuponRecord3 coupons={coupons} currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
}

function CuponFormTitle1({ coupons, currentPage, totalPages, onPageChange, onAddCoupon, isAddingCoupon }) {
  return (
    <section className="bg-white relative rounded-[6px] shrink-0" data-name="CuponFormTitle">
      <div className="content-stretch flex flex-col items-center justify-start overflow-clip relative">
        <CuponFormTitle />
        <CouponAddForm onAddCoupon={onAddCoupon} isLoading={isAddingCoupon} />
        <CuponRecordWrapper coupons={coupons} currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </section>
  );
}

function Frame4({ coupons, currentPage, totalPages, onPageChange, onAddCoupon, isAddingCoupon }) {
  return (
    <div className="box-border content-stretch flex gap-[43px] items-start justify-center overflow-clip px-[50px] py-0 relative shrink-0">
      <QuickMenu activePage="coupon" />
      <CuponFormTitle1 coupons={coupons} currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} onAddCoupon={onAddCoupon} isAddingCoupon={isAddingCoupon} />
    </div>
  );
}

function CuponPage({ coupons, currentPage, totalPages, onPageChange, onAddCoupon, isAddingCoupon }) {
  return (
    <main className="bg-[#fffdfb] relative rounded-[4px] shrink-0" data-name="CuponPage" tabIndex="-1">
      <div className="box-border content-stretch flex flex-col gap-[35px] items-center justify-start overflow-clip pb-[45px] pt-[25px] px-0 relative">
        <CuponTitle />
        <Frame4 coupons={coupons} currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} onAddCoupon={onAddCoupon} isAddingCoupon={isAddingCoupon} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </main>
  );
}

export default function CuponContent() {
  const [coupons, setCoupons] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAddingCoupon, setIsAddingCoupon] = useState(false);
  const { isAuthenticated, authLoading } = useAuth();

  const loadCouponsData = async (page = 0) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await couponAPI.getCoupons(page, 5);
      
      if (response.data) {
        setCoupons(response.data.content || []);
        setTotalPages(response.data.totalPages || 0);
        setCurrentPage(page);
      }
    } catch (err) {
      console.error('載入優惠券資料失敗:', err);
      setError('載入優惠券資料失敗，請稍後再試');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    loadCouponsData(page);
  };

  const handleAddCoupon = async (couponCode) => {
    try {
      setIsAddingCoupon(true);
      setError(null);
      
      await couponAPI.addCoupon(couponCode);
      
      // 添加成功後重新載入當前頁面的優惠券清單
      await loadCouponsData(currentPage);
      
      // 可以添加成功提示
      console.log('優惠券添加成功');
    } catch (err) {
      console.error('添加優惠券失敗:', err);
      toast.error('已擁有優惠劵，添加優惠券失敗');
    } finally {
      setIsAddingCoupon(false);
    }
  };

  useEffect(() => {
    // 等待認證就緒且用戶已認證，再調用 API
    if (!authLoading && isAuthenticated) {
      loadCouponsData(0);
    } else if (!authLoading && !isAuthenticated) {
      setLoading(false);
    }
  }, [authLoading, isAuthenticated]);

  if (loading) {
    return (
      <div className="bg-white box-border content-stretch flex flex-col gap-[49px] items-center justify-start pb-[150px] pt-0 px-0 relative size-full" data-name="CuponContent">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[18px] text-nowrap tracking-[-0.45px]">
            <p className="leading-[1.1] whitespace-pre">載入中...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white box-border content-stretch flex flex-col gap-[49px] items-center justify-start pb-[150px] pt-0 px-0 relative size-full" data-name="CuponContent">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ab3b3a] text-[18px] text-nowrap tracking-[-0.45px]">
            <p className="leading-[1.1] whitespace-pre">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[49px] items-center justify-start pb-[150px] pt-0 px-0 relative size-full" data-name="CuponContent">
      <Header />
      <CuponPage 
        coupons={coupons} 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange} 
        onAddCoupon={handleAddCoupon}
        isAddingCoupon={isAddingCoupon}
      />
    </div>
  );
}