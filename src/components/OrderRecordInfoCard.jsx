// 可重用的訂單資訊卡，維持原樣式，將動態欄位以 props 傳入
export default function OrderRecordInfoCard({ orderNo, paidAtDate, paidAtTime, status, payableAmount, paymentType }) {
  // 狀態值轉換
  const getStatusText = (status) => {
    switch (status) {
      case 'CREATED':
        return '創立訂單';
      case 'FULFILLED':
        return '完成付款';
      case 'FAILED':
        return '付款失敗';
      default:
        return status;
    }
  };

  // 付款方式轉換
  const getPaymentTypeText = (paymentType) => {
    switch (paymentType) {
      case 'Credit_CreditCard':
        return '信用卡';
      default:
        return paymentType;
    }
  };
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="OrderRecordInfo">
      <div className="content-stretch flex items-center justify-start overflow-clip relative">
        <div className="flex flex-row items-center self-stretch">
          <div className="h-full relative shrink-0" data-name="OrderNumcer">
            <div className="content-stretch flex flex-col h-full items-start justify-start overflow-clip relative">
              <div className="bg-[#4b2e2a] relative shrink-0 w-full" data-name="OrderNumcerTitle">
                <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                  <div className="box-border content-stretch flex items-center justify-center px-2.5 py-[3px] relative w-full">
                    <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.375px]"><p className="leading-[1.1] whitespace-pre">訂單編號</p></div>
                  </div>
                </div>
              </div>
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="OrderNumcerInfo">
                <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                  <div className="box-border content-stretch flex items-center justify-center px-2.5 py-5 relative size-full">
                    <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[15px] text-nowrap tracking-[-0.375px]"><p className="leading-[1.1] whitespace-pre">{orderNo}</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
          </div>
        </div>

        <div className="flex flex-row items-center self-stretch">
          <div className="h-full relative shrink-0" data-name="OrderDate">
            <div className="content-stretch flex flex-col h-full items-start justify-start overflow-clip relative">
              <div className="bg-[#4b2e2a] relative shrink-0 w-full" data-name="OrderDateTitle">
                <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                  <div className="box-border content-stretch flex items-center justify-center px-2.5 py-[3px] relative w-full">
                    <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.375px]"><p className="leading-[1.1] whitespace-pre">付款日期</p></div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="OrderDateInfo">
                <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
                  <div className="box-border content-stretch flex flex-col font-['Inter:Bold',_sans-serif] font-bold gap-[5px] items-center justify-center leading-[0] not-italic px-2.5 py-5 relative text-[15px] text-nowrap tracking-[-0.375px] w-full">
                    <div className="flex flex-col justify-center relative shrink-0 text-[#4b2e2a]"><p className="leading-[1.1] text-nowrap whitespace-pre">{paidAtDate}</p></div>
                    <div className="flex flex-col justify-center relative shrink-0 text-[#4b2e2a]"><p className="leading-[1.1] text-nowrap whitespace-pre">{paidAtTime}</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
          </div>
        </div>

        <div className="h-[102px] relative shrink-0" data-name="OrderStatus">
          <div className="content-stretch flex flex-col h-[102px] items-start justify-start overflow-clip relative">
            <div className="bg-[#4b2e2a] relative shrink-0 w-full" data-name="OrderStatusTitle">
              <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                <div className="box-border content-stretch flex items-center justify-center px-2.5 py-[3px] relative w-full">
                  <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.375px]"><p className="leading-[1.1] whitespace-pre">訂單狀態</p></div>
                </div>
              </div>
            </div>
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="OrderStatusInfo">
              <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                <div className="box-border content-stretch flex items-center justify-center px-2.5 py-5 relative size-full">
                                     <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[15px] text-nowrap tracking-[-0.375px]"><p className="leading-[1.1] whitespace-pre">{getStatusText(status)}</p></div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
        </div>

        <div className="h-[102px] relative shrink-0" data-name="OrderPrice">
          <div className="content-stretch flex flex-col h-[102px] items-start justify-start overflow-clip relative">
            <div className="bg-[#4b2e2a] relative shrink-0 w-full" data-name="OrderPriceTitle">
              <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                <div className="box-border content-stretch flex items-center justify-center px-2.5 py-[3px] relative w-full">
                  <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.375px]"><p className="leading-[1.1] whitespace-pre">應付款項</p></div>
                </div>
              </div>
            </div>
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="OrderPriceInfo">
              <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                <div className="box-border content-stretch flex items-center justify-center px-2.5 py-5 relative size-full">
                  <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[15px] text-nowrap tracking-[-0.375px]"><p className="leading-[1.1] whitespace-pre">{payableAmount} 元</p></div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
        </div>

        <div className="h-[102px] relative shrink-0" data-name="Payway">
          <div className="content-stretch flex flex-col h-[102px] items-start justify-start overflow-clip relative">
            <div className="bg-[#4b2e2a] relative shrink-0 w-full" data-name="PaywayTitle">
              <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                <div className="box-border content-stretch flex items-center justify-center px-2.5 py-[3px] relative w-full">
                  <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.375px]"><p className="leading-[1.1] whitespace-pre">付款方式</p></div>
                </div>
              </div>
            </div>
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="PaywayInfo">
              <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                <div className="box-border content-stretch flex items-center justify-center px-2.5 py-5 relative size-full">
                                     <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[15px] text-nowrap tracking-[-0.375px]"><p className="leading-[1.1] whitespace-pre">{getPaymentTypeText(paymentType)}</p></div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
        </div>

        <div className="h-[102px] relative shrink-0" data-name="ReportIssue">
          <div className="content-stretch flex flex-col h-[102px] items-start justify-start overflow-clip relative">
            <div className="bg-[#4b2e2a] relative shrink-0 w-full" data-name="ReportIssueTitle">
              <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                <div className="box-border content-stretch flex items-center justify-center px-2.5 py-[3px] relative w-full">
                  <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify中心 leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.375px]"><p className="leading-[1.1] whitespace-pre">問題回報</p></div>
                </div>
              </div>
            </div>
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="ReportIssueInfo">
              <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                <div className="box-border content-stretch flex items-center justify-center px-2.5 py-5 relative size-full">
                  <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify中心 leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[15px] text-nowrap tracking-[-0.375px]"><p className="leading-[1.1] whitespace-pre">聯絡客服</p></div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}


