import React from 'react';

// 依據書籍格式返回對應的顏色
function getFormatColor(format) {
  switch (format) {
    case '漫畫':
      return '#eb5160'; // 紅色
    case '輕小說':
      return '#374c77'; // 藍色
    case '工具書':
      return '#4a7b59'; // 綠色
    case '雜誌':
      return '#8b5a3c'; // 棕色
    default:
      return '#374c77'; // 默認藍色
  }
}

function ItemCheckbox({ isSelected, onToggle, itemId }) {
  return (
    <div 
      className="relative rounded-[3px] shrink-0 size-[22px] cursor-pointer" 
      data-name="ItemCheckbox"
      onClick={() => onToggle(itemId)}
    >
      {isSelected && (
        <div className="absolute inset-0 bg-[#4b2e2a] rounded-[3px] flex items-center justify-center">
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function ItemSelector({ isSelected, onToggle, itemId }) {
  return (
    <div className="box-border content-stretch flex items-center justify-start overflow-clip px-[33px] py-[54px] relative shrink-0" data-name="ItemSelector">
      <ItemCheckbox isSelected={isSelected} onToggle={onToggle} itemId={itemId} />
    </div>
  );
}

function BookCover({ coverImageUrl }) {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="BookCover">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative">
        <div 
          className="bg-center bg-cover bg-no-repeat h-[87px] shrink-0 w-[62px]" 
          data-name="封面" 
          style={{ backgroundImage: `url('${coverImageUrl}')` }} 
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function BookCoverWrapper({ coverImageUrl }) {
  return (
    <div className="box-border content-stretch flex items-center justify-center overflow-clip px-0 py-4 relative shrink-0" data-name="BookCoverWrapper">
      <BookCover coverImageUrl={coverImageUrl} />
    </div>
  );
}

function Tag({ format }) {
  const backgroundColor = getFormatColor(format);
  
  return (
    <div 
      className="box-border content-stretch flex items-center justify-center overflow-clip px-2.5 py-0.5 relative rounded-[3px] shrink-0" 
      data-name="Tag"
      style={{ backgroundColor }}
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.375px]">
        <p className="leading-[1.1] whitespace-pre">{format}</p>
      </div>
    </div>
  );
}

function Bookname({ title }) {
  return (
    <div className="box-border content-stretch flex items-center justify-center overflow-clip px-0 py-[7px] relative rounded-[3px] shrink-0" data-name="bookname">
      <div className="flex flex-col font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[20px] text-nowrap tracking-[-0.5px]">
        <h3 className="block leading-[1.1] whitespace-pre">{title}</h3>
      </div>
    </div>
  );
}

function Author({ author }) {
  return (
    <div className="box-border content-stretch flex items-center justify-center overflow-clip px-0 py-0.5 relative rounded-[3px] shrink-0" data-name="author">
      <div className="flex flex-col font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[15px] text-nowrap tracking-[-0.375px]">
        <p className="leading-[1.1] whitespace-pre">{author}</p>
      </div>
    </div>
  );
}

function ItemInfo({ format, title, author }) {
  return (
    <div className="box-border content-stretch flex flex-col h-[131px] items-start justify-between overflow-clip px-5 py-[18px] relative shrink-0 w-[400px]" data-name="ItemInfo">
      <Tag format={format} />
      <Bookname title={title} />
      <Author author={author} />
    </div>
  );
}

function ItemPrice({ price }) {
  return (
    <div className="bg-white box-border content-stretch flex font-extrabold gap-3 h-[59px] items-end justify-center leading-[0] not-italic overflow-clip pb-[15px] pt-0 px-0 relative shrink-0 text-[#4b2e2a] text-[20px] tracking-[-0.5px] w-32" data-name="ItemPrice">
      <div className="flex flex-col font-['Inter:Extra_Bold',_sans-serif] justify-center relative shrink-0 text-nowrap">
        <p className="leading-[1.1] whitespace-pre">{price}</p>
      </div>
      <div className="flex flex-col font-['Inter:Extra_Bold',_'Noto_Sans_JP:Bold',_sans-serif] justify-end relative shrink-0 size-[19px]">
        <p className="leading-[1.1]">元</p>
      </div>
    </div>
  );
}

function ItemPriceWrapper({ price }) {
  return (
    <div className="content-stretch flex items-end justify-center overflow-clip relative shrink-0 size-[131px]" data-name="ItemPriceWrapper">
      <ItemPrice price={price} />
    </div>
  );
}

// 可重複利用的願望清單商品卡片組件
export default function WishlistItemCard({ 
  item, 
  isSelected, 
  onToggle 
}) {
  const {
    id,
    title,
    author,
    price,
    format,
    coverImageUrl
  } = item;

  return (
    <div className="relative shrink-0" data-name="WishlistItem">
      <div className="content-stretch flex items-center justify-start overflow-clip relative">
        <ItemSelector isSelected={isSelected} onToggle={onToggle} itemId={id} />
        <BookCoverWrapper coverImageUrl={coverImageUrl} />
        <ItemInfo format={format} title={title} author={author} />
        <ItemPriceWrapper price={price} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none" />
    </div>
  );
}


