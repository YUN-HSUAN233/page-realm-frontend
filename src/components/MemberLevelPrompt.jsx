import React from 'react';

// 會員等級提示組件 - 顯示升等信息
function MemberLevelPrompt({ 
  requiredAmount = 'OOO', 
  targetLevel = 'Lv11',
  titleText = '會員等級提示',
  promptText = `再消費${requiredAmount}元就可以升等為${targetLevel}`
}) {
  return (
    <div className="relative shrink-0 w-full" data-name="MemberLevelPrompt">
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold gap-[15px] items-center justify-start leading-[0] not-italic pb-5 pt-2.5 px-[21px] relative text-nowrap text-right w-full">
          <div className="flex flex-col justify-center relative shrink-0 text-[#4b2e2a] text-[20px] tracking-[-0.5px]">
            <p className="leading-[1.1] text-nowrap whitespace-pre">{titleText}</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#c86b42] text-[16px] tracking-[-0.4px]">
            <p className="leading-[1.1] text-nowrap whitespace-pre">{promptText}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default MemberLevelPrompt;

