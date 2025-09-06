import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { pointsAPI } from '../services/api';
import PointRecordCard from '../components/PointRecordCard';
import QuickMenu from '../components/QuickMenu';
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

function PointTitleAccent() {
  return <div className="bg-[#4b2e2a] h-[50px] shrink-0 w-4" data-name="PointTitleAccent" />;
}

function PointTitle() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="PointTitle">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-5 items-center justify-start px-[7px] py-0 relative w-full">
          <PointTitleAccent />
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
            <h1 className="block leading-[1.1] whitespace-pre">點數</h1>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}



function PointFormTitle() {
  return (
    <div className="box-border content-stretch flex gap-[15px] items-center justify-center overflow-clip px-0 py-5 relative shrink-0 w-full" data-name="PointFormTitle">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 4">
            <line stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="8 8" strokeWidth="4" x2="62.5" y1="2" y2="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
        <h2 className="block leading-[1.1] whitespace-pre">點數明細</h2>
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

function PointsBalanceText() {
  return (
    <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[5px] py-1.5 relative rounded-[6px] shrink-0" data-name="PointsBalanceText">
      <div className="flex flex-col font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[16px] text-nowrap tracking-[-0.4px]">
        <p className="leading-[1.1] whitespace-pre">目前擁有點數 :</p>
      </div>
    </div>
  );
}

function MyPoints({ points = 0 }) {
  return (
    <div className="box-border content-stretch flex font-semibold gap-[15px] items-center justify-center leading-[0] not-italic overflow-clip p-[5px] relative rounded-[6px] shrink-0 text-nowrap" data-name="MyPoints">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] justify-center relative shrink-0 text-[#ab3b3a] text-[32px] tracking-[-0.8px]">
        <p className="leading-[1.1] text-nowrap whitespace-pre">{points}</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] justify-center relative shrink-0 text-[#4b2e2a] text-[20px] tracking-[-0.5px]">
        <p className="leading-[1.1] text-nowrap whitespace-pre">點</p>
      </div>
    </div>
  );
}

function PointsBalance({ points }) {
  return (
    <div className="relative shrink-0 w-full" data-name="PointsBalance">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch cursor-pointer flex gap-2.5 items-center justify-center pb-[5px] pt-[5px] px-6 relative w-full">
          <PointsBalanceText />
          <MyPoints points={points} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PointsHintText() {
  return (
    <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[5px] py-1.5 relative rounded-[6px] shrink-0" data-name="PointsHintText">
      <div className="flex flex-col font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[16px] text-nowrap tracking-[-0.4px]">
        <p className="leading-[1.1] whitespace-pre">您有一筆點數</p>
      </div>
    </div>
  );
}

function DateHint({expPoints="-", expiredAt = "-" }) {
  return (
    <div className="box-border content-stretch flex font-semibold gap-[15px] items-center justify-center leading-[0] not-italic overflow-clip p-[5px] relative rounded-[6px] shrink-0 text-nowrap" data-name="DateHint">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] justify-center relative shrink-0 text-[#ab3b3a] text-[20px] tracking-[-0.8px]">
        <p className="leading-[1.1] text-nowrap whitespace-pre">{expPoints}</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] justify-center relative shrink-0 text-[#4b2e2a] text-[16px] tracking-[-0.5px]">
        <p className="leading-[1.1] text-nowrap whitespace-pre">將於：</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] justify-center relative shrink-0 text-[#ab3b3a] text-[20px] tracking-[-0.8px]">
        <p className="leading-[1.1] text-nowrap whitespace-pre">{expiredAt}</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] justify-center relative shrink-0 text-[#4b2e2a] text-[16px] tracking-[-0.5px]">
        <p className="leading-[1.1] text-nowrap whitespace-pre">到期</p>
      </div>
    </div>
  );
}

function PointsHint({expPoints="-", expiredAt = "-" }) {
  return (
    <div className="relative shrink-0 w-full" data-name="PointsHint">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch cursor-pointer flex gap-2.5 items-center justify-center pb-[15px] px-6 relative w-full">
          <PointsHintText />
          <DateHint expPoints={expPoints} expiredAt={expiredAt} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PointDateTitle() {
  return (
    <div className="basis-0 bg-[#4b2e2a] grow h-full min-h-px min-w-px relative shrink-0" data-name="PointDateTitle">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-2.5 py-[3px] relative size-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.375px]">
            <p className="leading-[1.1] whitespace-pre">日期</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PointDescriptionTitle() {
  return (
    <div className="basis-0 bg-[#4b2e2a] grow h-full min-h-px min-w-px relative shrink-0" data-name="PointDescriptionTitle">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-2.5 py-[3px] relative size-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.375px]">
            <p className="leading-[1.1] whitespace-pre">摘要</p>
          </div>
        </div>
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
            <p className="leading-[1.1] whitespace-pre">獲得</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PointDeductionTitle() {
  return (
    <div className="basis-0 bg-[#4b2e2a] grow h-full min-h-px min-w-px relative shrink-0" data-name="PointDeductionTitle">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[30px] py-[3px] relative size-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.375px]">
            <p className="leading-[1.1] whitespace-pre">使用或失效</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PointRecordTitle() {
  return (
    <div className="relative shrink-0 w-full" data-name="PointRecordTitle">
      <div className="content-stretch flex items-center justify-start overflow-clip relative w-full">
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <PointDateTitle />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <PointDescriptionTitle />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <PointRewardTitle />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <PointDeductionTitle />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PointRecordPageBtnG({ currentPage, totalPages, onPageChange }) {
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
    <div className="relative shrink-0 w-full" data-name="PointRecordPageBtnG">
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

function PointRecordList({ pointsHistory = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  
  if (pointsHistory.length === 0) {
    return (
      <div className="content-stretch flex items-center justify-center overflow-clip py-8 relative">
        <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[16px] text-nowrap tracking-[-0.4px]">
          <p className="leading-[1.1] whitespace-pre">目前沒有點數紀錄</p>
        </div>
      </div>
    );
  }

  // 計算分頁
  const totalPages = Math.ceil(pointsHistory.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const currentRecords = pointsHistory.slice(startIndex, endIndex);

  return (
    <>
      {currentRecords.map((record, index) => (
        <PointRecordCard
          key={startIndex + index}
          date={record.createAt}
          description={record.reason}
          earnedPoints={record.earnedPoints}
          usedPoints={record.usedPoints}
        />
      ))}
      
      <PointRecordPageBtnG 
        currentPage={currentPage - 1} 
        totalPages={totalPages} 
        onPageChange={(page) => setCurrentPage(page + 1)} 
      />
    </>
  );
}

function PointRecord2({ pointsHistory }) {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0" data-name="PointRecord">
      <div className="content-stretch flex flex-col items-center justify-start overflow-clip relative">
        <PointRecordTitle />
        <PointRecordList pointsHistory={pointsHistory} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function PointRecordWrapper({ pointsHistory }) {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-start overflow-clip pb-10 pt-0 px-[30px] relative shrink-0" data-name="PointRecordWrapper">
      <PointRecord2 pointsHistory={pointsHistory} />
    </div>
  );
}

function PointFormTitle1({ points, pointsHistory, expiringPoints }) {
  return (
    <section className="bg-white relative rounded-[6px] shrink-0" data-name="PointFormTitle">
      <div className="content-stretch flex flex-col items-center justify-start overflow-clip relative">
        <PointFormTitle />
        <PointsBalance points={points} />
        <PointsHint expPoints={expiringPoints.expPoints} expiredAt={expiringPoints.expiredAt} />
        <PointRecordWrapper pointsHistory={pointsHistory} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </section>
  );
}

function Frame3({ points, pointsHistory, expiringPoints }) {
  return (
    <div className="box-border content-stretch flex gap-[43px] items-start justify-center overflow-clip px-[50px] py-0 relative shrink-0">
      <QuickMenu activePage="point" />
      <PointFormTitle1 points={points} pointsHistory={pointsHistory} expiringPoints={expiringPoints} />
    </div>
  );
}

function PointPage({ points, pointsHistory, expiringPoints }) {
  return (
    <main className="bg-[#fffdfb] relative rounded-[4px] shrink-0" data-name="PointPage" tabIndex="-1">
      <div className="box-border content-stretch flex flex-col gap-[35px] items-center justify-start overflow-clip pb-[45px] pt-[25px] px-0 relative">
        <PointTitle />
        <Frame3 points={points} pointsHistory={pointsHistory} expiringPoints={expiringPoints} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </main>
  );
}

export default function PointContent() {
  const [points, setPoints] = useState(0);
  const [pointsHistory, setPointsHistory] = useState([]);
  const [expiringPoints, setExpiringPoints] = useState({ expPoints: "-", expiredAt: "-" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuthenticated, authLoading } = useAuth();

  const loadPointsData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // 並行請求點數資訊和點數紀錄
      const [pointsInfoResponse, pointsHistoryResponse] = await Promise.all([
        pointsAPI.getPointsInfo(),
        pointsAPI.getPointsHistory()
      ]);

      // 設定目前可用點數
      if (pointsInfoResponse.data && pointsInfoResponse.data.availablePoints !== undefined) {
        setPoints(pointsInfoResponse.data.availablePoints);
      }

      // 設定點數紀錄
      if (pointsHistoryResponse.data && Array.isArray(pointsHistoryResponse.data)) {
        setPointsHistory(pointsHistoryResponse.data);
        
        // 尋找最快到期的"消費獲得"點數
        const expiringRecords = pointsHistoryResponse.data.filter(record => 
          record.reason === "消費獲得" && 
          record.expiredAt && 
          record.earnedPoints && 
          record.earnedPoints > 0
        );
        
        if (expiringRecords.length > 0) {
          // 按到期日期排序，找出最快到期的
          const sortedByExpiry = expiringRecords.sort((a, b) => {
            return new Date(a.expiredAt) - new Date(b.expiredAt);
          });
          
          const nextExpiring = sortedByExpiry[0];
          setExpiringPoints({
            expPoints: nextExpiring.earnedPoints,
            expiredAt: nextExpiring.expiredAt
          });
        } else {
          setExpiringPoints({ expPoints: "-", expiredAt: "-" });
        }
      }
    } catch (err) {
      console.error('載入點數資料失敗:', err);
      setError('載入點數資料失敗，請稍後再試');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // 等待認證就緒且用戶已認證，再調用 API
    if (!authLoading && isAuthenticated) {
      loadPointsData();
    } else if (!authLoading && !isAuthenticated) {
      setLoading(false);
    }
  }, [authLoading, isAuthenticated]);

  if (loading) {
    return (
      <div className="bg-white box-border content-stretch flex flex-col gap-[49px] items-center justify-start pb-[150px] pt-0 px-0 relative size-full" data-name="PointContent">
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
      <div className="bg-white box-border content-stretch flex flex-col gap-[49px] items-center justify-start pb-[150px] pt-0 px-0 relative size-full" data-name="PointContent">
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
    <div className="bg-white box-border content-stretch flex flex-col gap-[49px] items-center justify-start pb-[150px] pt-0 px-0 relative size-full" data-name="PointContent">
      <Header />
      <PointPage points={points} pointsHistory={pointsHistory} expiringPoints={expiringPoints} />
    </div>
  );
}