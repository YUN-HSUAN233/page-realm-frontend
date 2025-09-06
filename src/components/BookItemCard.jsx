import React from 'react';

// 書籍明細卡片組件 - 包含選擇框、封面圖、標籤、書名、作者、價格
function BookItemCard({ 
  coverImage, 
  tag, 
  tagColor = '#374c77', 
  bookName, 
  author, 
  price, 
  priceColor = '#4b2e2a',
  showSelector = false,
  isSelected = false,
  onSelectionChange = () => {}
}) {
  const handleCheckboxChange = (e) => {
    onSelectionChange(e.target.checked);
  };

  return (
    <div className="relative shrink-0" data-name="Item">
      <div className="content-stretch flex items-center justify-start overflow-clip relative">
        {/* 選擇框區塊 */}
        {showSelector && (
          <div className="box-border content-stretch flex items-center justify-start overflow-clip px-[33px] py-[54px] relative shrink-0" data-name="ItemSelector">
            <div className="relative rounded-[3px] shrink-0 size-[22px]" data-name="ItemCheckbox">
              <input
                type="checkbox"
                checked={isSelected}
                onChange={handleCheckboxChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-[3px]" />
              {isSelected && (
                <div className="absolute inset-1 bg-[#374c77] rounded-[1px]" />
              )}
            </div>
          </div>
        )}

        {/* 封面圖區塊 */}
        <div className="box-border content-stretch flex items-center justify-center overflow-clip px-0 py-4 relative shrink-0" data-name="BookCoverWrapper">
          <div className="relative rounded-[4px] shrink-0" data-name="BookCover">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative">
              <div 
                className="bg-center bg-cover bg-no-repeat h-[87px] shrink-0 w-[62px]" 
                data-name="封面" 
                style={{ backgroundImage: `url('${coverImage}')` }} 
              />
            </div>
            <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>

        {/* 書籍資訊區塊 */}
        <div className="box-border content-stretch flex flex-col h-[131px] items-start justify-between overflow-clip px-5 py-[18px] relative shrink-0 w-[606px]" data-name="ItemInfo">
          {/* 標籤 */}
          <div 
            className="box-border content-stretch flex items-center justify-center overflow-clip px-2.5 py-0.5 relative rounded-[3px] shrink-0" 
            data-name="Tag"
            style={{ backgroundColor: tagColor }}
          >
            <div className="flex flex-col font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.375px]">
              <p className="leading-[1.1] whitespace-pre">{tag}</p>
            </div>
          </div>

          {/* 書名 */}
          <div className="box-border content-stretch flex items-center justify-center overflow-clip px-0 py-[7px] relative rounded-[3px] shrink-0" data-name="bookname">
            <div className="flex flex-col font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
              <h3 className="block leading-[1.1] whitespace-pre">{bookName}</h3>
            </div>
          </div>

          {/* 作者 */}
          <div className="box-border content-stretch flex items-center justify-center overflow-clip px-0 py-0.5 relative rounded-[3px] shrink-0" data-name="author">
            <div className="flex flex-col font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[15px] text-nowrap tracking-[-0.375px]">
              <p className="leading-[1.1] whitespace-pre">{author}</p>
            </div>
          </div>
        </div>

        {/* 價格區塊 */}
        <div className="content-stretch flex items-end justify-center overflow-clip relative shrink-0 size-[131px]" data-name="ItemPriceWrapper">
          <div className="box-border content-stretch flex font-extrabold gap-3 h-[59px] items-end justify-center leading-[0] not-italic overflow-clip pb-[15px] pt-0 px-0 relative shrink-0 text-[20px] tracking-[-0.5px] w-32" data-name="ItemPrice">
            <div 
              className="flex flex-col font-['Inter:Extra_Bold',_sans-serif] justify-center relative shrink-0 text-nowrap"
              style={{ color: priceColor }}
            >
              <p className="leading-[1.1] whitespace-pre">{price}</p>
            </div>
            <div className="flex flex-col font-['Inter:Extra_Bold',_'Noto_Sans_JP:Black',_sans-serif] justify-end relative shrink-0 size-[19px] text-[#4b2e2a]">
              <p className="leading-[1.1]">元</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default BookItemCard;

