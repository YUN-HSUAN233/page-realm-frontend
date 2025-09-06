import React, { useEffect, useState } from 'react';
import imgPageRealmLogo0111 from "../assets/logos/PageRealm_LOGO_01_1.png";
import OrderRecordInfoCard from "../components/OrderRecordInfoCard";
import QuickMenu from "../components/QuickMenu";
import { ordersAPI } from "../services/api";

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

function OrrTitleAccent() {
  return <div className="bg-[#4b2e2a] h-[50px] shrink-0 w-4" data-name="ORRTitleAccent" />;
}

function OrderRecordPageTitle() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="OrderRecordPageTitle">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-5 items-center justify-start px-[7px] py-0 relative w-full">
          <OrrTitleAccent />
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[1.1] whitespace-pre">訂單紀錄</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none" />
    </div>
  );
}



function OrderListFormTitle() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[15px] items-center justify-center overflow-clip px-0 py-[15px] relative shrink-0 w-full" data-name="OrderListFormTitle">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="OLFLineL">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 216 4">
            <line id="OLFLineL" stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="8 8" strokeWidth="4" x2="215.5" y1="2" y2="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.1] whitespace-pre">訂單紀錄</p>
      </div>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="OLFLineR">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 216 4">
            <line id="OLFLineL" stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="8 8" strokeWidth="4" x2="215.5" y1="2" y2="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function OrderNumcerTitle() {
  return (
    <div className="bg-[#4b2e2a] relative shrink-0 w-full" data-name="OrderNumcerTitle">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-2.5 py-[3px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.375px]">
            <p className="leading-[1.1] whitespace-pre">訂單編號</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderNumcerInfo() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="OrderNumcerInfo">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-2.5 py-5 relative size-full">
          <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[15px] text-nowrap tracking-[-0.375px]">
            <p className="leading-[1.1] whitespace-pre">235846</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderNumcer() {
  return (
    <div className="h-full relative shrink-0" data-name="OrderNumcer">
      <div className="content-stretch flex flex-col h-full items-start justify-start overflow-clip relative">
        <OrderNumcerTitle />
        <OrderNumcerInfo />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function OrderDateTitle() {
  return (
    <div className="bg-[#4b2e2a] relative shrink-0 w-full" data-name="OrderDateTitle">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-2.5 py-[3px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.375px]">
            <p className="leading-[1.1] whitespace-pre">付款日期</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderDateInfo() {
  return (
    <div className="relative shrink-0 w-full" data-name="OrderDateInfo">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col font-['Inter:Bold',_sans-serif] font-bold gap-[5px] items-center justify-center leading-[0] not-italic px-2.5 py-5 relative text-[15px] text-nowrap tracking-[-0.375px] w-full">
          <div className="flex flex-col justify-center relative shrink-0 text-[#4b2e2a]">
            <p className="leading-[1.1] text-nowrap whitespace-pre">2025-08-08</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-black">
            <p className="leading-[1.1] text-nowrap whitespace-pre">20:05:20</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderDate() {
  return (
    <div className="h-full relative shrink-0" data-name="OrderDate">
      <div className="content-stretch flex flex-col h-full items-start justify-start overflow-clip relative">
        <OrderDateTitle />
        <OrderDateInfo />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function OrderStatusTitle() {
  return (
    <div className="bg-[#4b2e2a] relative shrink-0 w-full" data-name="OrderStatusTitle">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-2.5 py-[3px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.375px]">
            <p className="leading-[1.1] whitespace-pre">訂單狀態</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderStatusInfo() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="OrderStatusInfo">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-2.5 py-5 relative size-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[15px] text-nowrap tracking-[-0.375px]">
            <p className="leading-[1.1] whitespace-pre">已完成</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderStatus() {
  return (
    <div className="h-[102px] relative shrink-0" data-name="OrderStatus">
      <div className="content-stretch flex flex-col h-[102px] items-start justify-start overflow-clip relative">
        <OrderStatusTitle />
        <OrderStatusInfo />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function OrderPriceTitle() {
  return (
    <div className="bg-[#4b2e2a] relative shrink-0 w-full" data-name="OrderPriceTitle">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-2.5 py-[3px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.375px]">
            <p className="leading-[1.1] whitespace-pre">應付款項</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderPriceInfo() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="OrderPriceInfo">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-2.5 py-5 relative size-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[15px] text-nowrap tracking-[-0.375px]">
            <p className="leading-[1.1] whitespace-pre">777 元</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderPrice() {
  return (
    <div className="h-[102px] relative shrink-0" data-name="OrderPrice">
      <div className="content-stretch flex flex-col h-[102px] items-start justify-start overflow-clip relative">
        <OrderPriceTitle />
        <OrderPriceInfo />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function PaywayTitle() {
  return (
    <div className="bg-[#4b2e2a] relative shrink-0 w-full" data-name="PaywayTitle">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-2.5 py-[3px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.375px]">
            <p className="leading-[1.1] whitespace-pre">付款方式</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaywayInfo() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="PaywayInfo">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-2.5 py-5 relative size-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[15px] text-nowrap tracking-[-0.375px]">
            <p className="leading-[1.1] whitespace-pre">綠界</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Payway() {
  return (
    <div className="h-[102px] relative shrink-0" data-name="Payway">
      <div className="content-stretch flex flex-col h-[102px] items-start justify-start overflow-clip relative">
        <PaywayTitle />
        <PaywayInfo />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ReportIssueTitle() {
  return (
    <div className="bg-[#4b2e2a] relative shrink-0 w-full" data-name="ReportIssueTitle">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-2.5 py-[3px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.375px]">
            <p className="leading-[1.1] whitespace-pre">問題回報</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportIssueInfo() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="ReportIssueInfo">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-2.5 py-5 relative size-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[15px] text-nowrap tracking-[-0.375px]">
            <p className="leading-[1.1] whitespace-pre">聯絡客服</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportIssue() {
  return (
    <div className="h-[102px] relative shrink-0" data-name="ReportIssue">
      <div className="content-stretch flex flex-col h-[102px] items-start justify-start overflow-clip relative">
        <ReportIssueTitle />
        <ReportIssueInfo />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

// 已改用 OrderRecordInfoCard，移除舊的聚合元件

function OrderRecordInfoWrapper({ order }) {
  const paidAt = order?.paidAt || '';
  const dateObj = paidAt ? new Date(paidAt) : null;
  const paidAtDate = dateObj ? dateObj.toISOString().slice(0, 10) : '';
  const paidAtTime = dateObj ? dateObj.toTimeString().slice(0, 8) : '';
  return (
    <div className="bg-white relative shrink-0" data-name="OrderRecordInfoWrapper">
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip px-[25px] py-[18px] relative">
        <OrderRecordInfoCard 
          orderNo={order?.orderNo || ''}
          paidAtDate={paidAtDate||'尚未付款'}
          paidAtTime={paidAtTime||'請盡速繳納'}
          status={order?.status || '尚未付款'}
          payableAmount={order?.payableAmount || ''}
          paymentType={order?.paymentType || '未付款'}
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function OrderListPageBtnG({ currentPage, totalPages, onPageChange }) {
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
    <div className="relative shrink-0 w-full" data-name="OrderListPageBtnG">
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

function OrderListForm() {
  const [orders, setOrders] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  const loadOrdersData = async (page = 0) => {
    try {
      setLoading(true);
      setError('');
      
      const response = await ordersAPI.getOrders(page, 5);
      
      if (response.data) {
        setOrders(response.data.content || []);
        setTotalPages(response.data.totalPages || 0);
        setCurrentPage(page);
      }
    } catch (err) {
      console.error('載入訂單資料失敗:', err);
      setError('載入訂單資料失敗，請稍後再試');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    loadOrdersData(page);
  };

  React.useEffect(() => {
    loadOrdersData(0);
  }, []);

  if (loading) {
    return (
      <div className="bg-white relative rounded-[6px] shrink-0" data-name="OrderListForm">
        <div className="content-stretch flex flex-col items-center justify-center py-20 relative">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[18px] text-nowrap tracking-[-0.45px]">
            <p className="leading-[1.1] whitespace-pre">載入中...</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      </div>
    );
  }

  return (
    <div className="bg-white relative rounded-[6px] shrink-0" data-name="OrderListForm">
      <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative">
        <OrderListFormTitle />
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 w-full max-w-md">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        {orders.length === 0 && !loading ? (
          <div className="content-stretch flex items-center justify-center overflow-clip py-8 relative w-full">
            <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[16px] text-nowrap tracking-[-0.4px]">
              <p className="leading-[1.1] whitespace-pre">目前沒有訂單記錄</p>
            </div>
          </div>
        ) : (
          orders.map((o, i) => (
            <OrderRecordInfoWrapper key={o.orderNo || i} order={o} />
          ))
        )}
        <OrderListPageBtnG 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function OrderListWrapper() {
  return (
    <div className="box-border content-stretch flex gap-5 items-start justify-start overflow-clip px-[26px] py-2.5 relative shrink-0" data-name="OrderListWrapper">
      <QuickMenu activePage="orders" />
      <OrderListForm />
    </div>
  );
}

function OrderRecordPage() {
  return (
    <div className="bg-[#fffdfb] relative rounded-[3px] shrink-0" data-name="OrderRecordPage">
      <div className="box-border content-stretch flex flex-col gap-[35px] items-center justify-start overflow-clip px-0 py-[25px] relative">
        <OrderRecordPageTitle />
        <OrderListWrapper />
      </div>
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

export default function OrderRecordContain() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[50px] items-center justify-start pb-[150px] pt-0 px-0 relative size-full" data-name="OrderRecordContain">
      <Header />
      <OrderRecordPage />
    </div>
  );
}