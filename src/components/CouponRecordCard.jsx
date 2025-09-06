import React from 'react';

function CuponDateInfo({ startsAt, endsAt }) {
  return (
    <div className="box-border content-stretch flex font-bold gap-[5px] h-full items-center justify-center leading-[0] not-italic overflow-clip p-[20px] relative shrink-0 text-[#4b2e2a] text-[15px] text-nowrap tracking-[-0.375px]" data-name="CuponDateInfo">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.1] text-nowrap whitespace-pre">{startsAt}</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.1] text-nowrap whitespace-pre">到</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.1] text-nowrap whitespace-pre">{endsAt}</p>
      </div>
    </div>
  );
}

function CuponDescriptionInfo({ name, discount }) {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="CuponDescriptionInfo">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-center justify-center px-[30px] py-5 relative size-full">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[15px] text-nowrap tracking-[-0.375px]">
            <p className="leading-[1.1] whitespace-pre">{name}</p>
          </div>
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[15px] text-nowrap tracking-[-0.375px]">
            <p className="leading-[1.1] whitespace-pre">{discount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CuponStarus({ status, originalStatus }) {
  // 根據原始狀態決定文字顏色
  const getStatusColor = (originalStatus) => {
    switch (originalStatus) {
      case 'HOLD': 
        return 'text-[#10b981]'; // 綠色 - 可使用
      case 'APPLIED': 
        return 'text-[#f59e0b]'; // 橙色 - 已套用
      case 'USED': 
        return 'text-[#6b7280]'; // 灰色 - 已使用
      case 'REVERSED': 
        return 'text-[#ef4444]'; // 紅色 - 已撤銷
      default: 
        return 'text-[#4b2e2a]'; // 預設顏色
    }
  };

  const textColor = getStatusColor(originalStatus);

  return (
    <div className="box-border content-stretch flex h-full items-center justify-center overflow-clip px-10 py-5 relative shrink-0" data-name="CuponStarus">
      <div className={`flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap tracking-[-0.375px] ${textColor}`}>
        <p className="leading-[1.1] whitespace-pre">{status}</p>
      </div>
    </div>
  );
}

function CouponRecordCard({ startsAt, endsAt, name, discount, status, originalStatus }) {
  return (
    <div className="relative shrink-0 w-[484px]" data-name="CuponRecord">
      <div className="content-stretch flex items-center justify-start overflow-clip relative w-[484px]">
        <div className="flex flex-row items-center self-stretch">
          <CuponDateInfo startsAt={startsAt} endsAt={endsAt} />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <CuponDescriptionInfo name={name} discount={discount} />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <CuponStarus status={status} originalStatus={originalStatus} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default CouponRecordCard;
