import React from 'react';

function PointDateInfo({ date }) {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-center overflow-clip p-[20px] relative shrink-0 w-[130px]" data-name="PointDateInfo">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[15px] text-nowrap tracking-[-0.375px]">
        <p className="leading-[1.1] whitespace-pre">{date}</p>
      </div>
    </div>
  );
}

function PointDescriptionInfo({ description }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5px] h-full items-center justify-center overflow-clip px-[30px] py-5 relative shrink-0 w-[119px]" data-name="PointDescriptionInfo">
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[15px] text-nowrap tracking-[-0.375px]">
        <p className="leading-[1.1] whitespace-pre">{description}</p>
      </div>
    </div>
  );
}

function PointRewardInfo({ earnedPoints }) {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-center overflow-clip px-[30px] py-5 relative shrink-0 w-[90px]" data-name="PointRewardInfo">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[15px] text-nowrap tracking-[-0.375px]">
        <p className="leading-[1.1] whitespace-pre">{earnedPoints || '-'}</p>
      </div>
    </div>
  );
}

function PointDeductionInfo({ usedPoints }) {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-center overflow-clip px-[30px] py-5 relative shrink-0 w-[134px]" data-name="PointDeductionInfo">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[15px] text-nowrap tracking-[-0.375px]">
        <p className="leading-[1.1] whitespace-pre">{usedPoints || '-'}</p>
      </div>
    </div>
  );
}

function PointRecordCard({ date, description, earnedPoints, usedPoints }) {
  return (
    <div className="relative shrink-0" data-name="PointRecord">
      <div className="content-stretch flex items-center justify-start overflow-clip relative">
        <div className="flex flex-row items-center self-stretch">
          <PointDateInfo date={date} />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <PointDescriptionInfo description={description} />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <PointRewardInfo earnedPoints={earnedPoints} />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <PointDeductionInfo usedPoints={usedPoints} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default PointRecordCard;
