import React from 'react';

// 小計和回饋點數組件 - 顯示總金額和回饋點數
function OrderSummary({ 
  subtotal = 0, 
  rewardPoints = 0,
  subtotalColor = '#ab3b3a',
  showBorder = true
}) {
  return (
    <div className="box-border content-stretch flex flex-col h-[102px] items-start justify-between overflow-clip pb-5 pt-2.5 px-[21px] relative shrink-0 w-[405px]" data-name="OrderSummary">
      {/* 小計區塊 */}
      <div className="box-border content-stretch flex items-center justify-between overflow-clip px-0 py-1.5 relative shrink-0 w-full" data-name="Subtotal">
        {/* 小計文字 */}
        <div className="box-border content-stretch flex items-center justify-start overflow-clip px-[18px] py-1.5 relative shrink-0 w-[95px]" data-name="SubtotalText">
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold h-[38px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] tracking-[-0.6px] w-[59px]">
            <h2 className="block leading-[1.1]">小計: </h2>
          </div>
        </div>

        {/* 小計價格 */}
        <div className="box-border content-stretch flex font-bold gap-5 items-center justify-start leading-[0] not-italic overflow-clip px-0 py-2 relative shrink-0 text-[24px] text-nowrap tracking-[-0.6px]" data-name="SubtotalPrice">
          <div 
            className="flex flex-col font-['Inter:Bold',_sans-serif] justify-center relative shrink-0"
            style={{ color: subtotalColor }}
          >
            <p className="leading-[1.1] text-nowrap whitespace-pre">{subtotal}</p>
          </div>
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] justify-center relative shrink-0 text-[#4b2e2a]">
            <p className="leading-[1.1] text-nowrap whitespace-pre">元</p>
          </div>
        </div>
      </div>

      {/* 回饋點數區塊 */}
      <div className="h-[23px] overflow-clip relative shrink-0 w-full" data-name="RewardPoints">
        <div className="absolute flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic right-0 text-[#c86b42] text-[16px] text-right tracking-[-0.4px] translate-y-[-50%] w-[117px]" style={{ top: "calc(50% + 0.5px)" }}>
          <p className="leading-[1.1]">回饋點數 : {rewardPoints} 點 </p>
        </div>
      </div>

      {/* 可選邊框 */}
      {showBorder && (
        <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      )}
    </div>
  );
}

export default OrderSummary;

