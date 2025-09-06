import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import imgPageRealmLogo0111 from "../assets/logos/PageRealm_LOGO_01_1.png";
import {  imgSortDropdownBtn, imgFilterWrapper, imgSearchIcon } from "./svg-mmrbg";
import { wishlistAPI } from '../services/api';
import WishlistItemCard from '../components/WishlistItemCard';
import QuickMenu from '../components/QuickMenu';

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

function WishlistTitleAccent() {
  return <div className="bg-[#4b2e2a] h-[50px] shrink-0 w-4" data-name="WishlistTitleAccent" />;
}

function WishlistTitle() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="WishlistTitle">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-5 items-center justify-start px-[7px] py-0 relative w-full">
          <WishlistTitleAccent />
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
            <h1 className="block leading-[1.1] whitespace-pre">願望清單</h1>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}



function WishlistFormTitle() {
  return (
    <div className="box-border content-stretch flex gap-[15px] items-center justify-center overflow-clip px-0 py-5 relative shrink-0 w-full" data-name="WishlistFormTitle">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 4">
            <line stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="8 8" strokeWidth="4" x2="62.5" y1="2" y2="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
        <h2 className="block leading-[1.1] whitespace-pre">已收藏的書籍</h2>
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

function SortDropdown() {
  return <div className="h-[29px] shrink-0 w-40" data-name="SortDropdown" />;
}

function SortDropdownBtn() {
  return (
    <div className="relative shrink-0 size-6" data-name="SortDropdownBtn">
      <img className="block max-w-none size-full" src={imgSortDropdownBtn} />
    </div>
  );
}

function SortDropdownWrapper() {
  return (
    <div className="bg-white h-full relative rounded-[4px] shrink-0" data-name="SortDropdownWrapper">
      <div className="box-border content-stretch flex h-full items-center justify-center overflow-clip p-[3px] relative">
        <SortDropdown />
        <SortDropdownBtn />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function FilterWrapper() {
  return (
    <div className="h-[29px] relative shrink-0 w-8" data-name="FilterWrapper">
      <img className="block max-w-none size-full" src={imgFilterWrapper} />
    </div>
  );
}

function WishlistBtnG() {
  return (
    <div className="box-border content-stretch flex gap-5 items-center justify-start overflow-clip p-[11px] relative shrink-0" data-name="WishlistBtnG">
      <div className="flex flex-row items-center self-stretch">
        <SortDropdownWrapper />
      </div>
      <FilterWrapper />
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-5" data-name="SearchIcon">
      <img className="block max-w-none size-full" src={imgSearchIcon} />
    </div>
  );
}

function ButtonSearch() {
  return (
    <div className="box-border content-stretch flex items-center justify-center overflow-clip px-5 py-3 relative rounded-[5px] shrink-0" data-name="button_search">
      <SearchIcon />
    </div>
  );
}

function BookshelfSearchInput() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-[300px]" data-name="BookshelfSearchInput">
      <div className="content-stretch flex items-center justify-end overflow-clip relative w-[300px]">
        <ButtonSearch />
      </div>
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function WishlistSearchG() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="WishlistSearchG">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[18px] items-center justify-start px-5 py-3 relative w-full">
          <BookshelfSearchInput />
        </div>
      </div>
    </div>
  );
}

function WishlistSearchBar() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="WishlistSearchBar">
      <div className="flex flex-row items-end overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-9 items-end justify-start px-5 py-0 relative w-full">
          <WishlistBtnG />
          <WishlistSearchG />
        </div>
      </div>
    </div>
  );
}

function WlSelectAllBtn({ onSelectAll }) {
  return (
    <button 
      className="relative rounded-[6px] shrink-0 hover:bg-gray-50 transition-colors" 
      data-name="WLSelectAllBtn"
      onClick={onSelectAll}
    >
      <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[39px] py-1.5 relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[16px] text-nowrap tracking-[-0.4px]">
          <p className="leading-[1.1] whitespace-pre">全選</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </button>
  );
}

function WlDeleteAllBtn({ onDeleteSelected, hasSelected, isLoading }) {
  return (
    <button 
      className="relative rounded-[6px] shrink-0 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
      data-name="WLDeleteAllBtn"
      onClick={onDeleteSelected}
      disabled={!hasSelected || isLoading}
    >
      <div className="box-border content-stretch flex items-center justify-center overflow-clip px-5 py-[5px] relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[16px] text-nowrap tracking-[-0.4px]">
          <p className="leading-[1.1] whitespace-pre">{isLoading ? '刪除中...' : '整批刪除'}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </button>
  );
}

function CartAllinBtn({ onAddToCart, hasSelected, isLoading }) {
  return (
    <button 
      className="bg-white relative rounded-[6px] shrink-0 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
      data-name="CartAllinBtn"
      onClick={onAddToCart}
      disabled={!hasSelected || isLoading}
    >
      <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[22px] py-1.5 relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[16px] text-nowrap tracking-[-0.4px]">
          <p className="leading-[1.1] whitespace-pre">{isLoading ? '加入中...' : '整批加入購物車'}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </button>
  );
}

function WishlistBtnGp({ onSelectAll, onDeleteSelected, onAddToCart, hasSelected, isLoading }) {
  return (
    <div className="relative shrink-0 w-full" data-name="WishlistBtnGp">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-7 items-center justify-start px-6 py-[17px] relative w-full">
          <WlSelectAllBtn onSelectAll={onSelectAll} />
          <WlDeleteAllBtn onDeleteSelected={onDeleteSelected} hasSelected={hasSelected} isLoading={isLoading} />
          <CartAllinBtn onAddToCart={onAddToCart} hasSelected={hasSelected} isLoading={isLoading} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c8cbd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

// 移除舊的 Item 相關組件，改用 WishlistItemCard

function WishlistItems({ items, selectedItems, onToggleItem }) {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0 w-full" data-name="WishlistItems">
      {items.map((item) => (
        <WishlistItemCard
          key={item.id}
          item={item}
          isSelected={selectedItems.includes(item.id)}
          onToggle={onToggleItem}
        />
      ))}
    </div>
  );
}

function WishlistForm({ 
  items, 
  selectedItems, 
  onToggleItem, 
  onSelectAll, 
  onDeleteSelected, 
  onAddToCart, 
  isLoading,
  error 
}) {
  const hasSelected = selectedItems.length > 0;

  return (
    <section className="bg-white min-h-[758px] relative rounded-[6px] shrink-0" data-name="WishlistForm">
      <div className="content-stretch flex flex-col items-center justify-start overflow-clip relative">
        <WishlistFormTitle />
        <WishlistSearchBar />
        <WishlistBtnGp 
          onSelectAll={onSelectAll}
          onDeleteSelected={onDeleteSelected}
          onAddToCart={onAddToCart}
          hasSelected={hasSelected}
          isLoading={isLoading}
        />
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 w-full max-w-md">
            <span className="block sm:inline text-sm">{error}</span>
          </div>
        )}
        {items.length > 0 ? (
          <WishlistItems 
            items={items}
            selectedItems={selectedItems}
            onToggleItem={onToggleItem}
          />
        ) : (
          <div className="flex items-center justify-center h-64 w-full">
            <p className="text-lg text-gray-600">目前沒有願望清單商品</p>
          </div>
        )}
        {items.length > 0 && (
          <WishlistBtnGp 
            onSelectAll={onSelectAll}
            onDeleteSelected={onDeleteSelected}
            onAddToCart={onAddToCart}
            hasSelected={hasSelected}
            isLoading={isLoading}
          />
        )}
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </section>
  );
}

function WishlistFormWrapper({ 
  items, 
  selectedItems, 
  onToggleItem, 
  onSelectAll, 
  onDeleteSelected, 
  onAddToCart, 
  isLoading,
  error 
}) {
  return (
    <div className="box-border content-stretch flex gap-[43px] items-center justify-start overflow-clip px-[50px] py-0 relative shrink-0" data-name="WishlistFormWrapper">
      <QuickMenu activePage="wishlist" />
      <WishlistForm 
        items={items}
        selectedItems={selectedItems}
        onToggleItem={onToggleItem}
        onSelectAll={onSelectAll}
        onDeleteSelected={onDeleteSelected}
        onAddToCart={onAddToCart}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}

function WishlistPage({ 
  items, 
  selectedItems, 
  onToggleItem, 
  onSelectAll, 
  onDeleteSelected, 
  onAddToCart, 
  isLoading,
  error 
}) {
  return (
    <main className="bg-[#fffdfb] relative rounded-[4px] shrink-0" data-name="WishlistPage" tabIndex="-1">
      <div className="box-border content-stretch flex flex-col gap-[35px] items-center justify-start overflow-clip pb-[45px] pt-[25px] px-0 relative">
        <WishlistTitle />
        <WishlistFormWrapper 
          items={items}
          selectedItems={selectedItems}
          onToggleItem={onToggleItem}
          onSelectAll={onSelectAll}
          onDeleteSelected={onDeleteSelected}
          onAddToCart={onAddToCart}
          isLoading={isLoading}
          error={error}
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </main>
  );
}

export default function WishlistContent() {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // 載入願望清單數據
  const loadWishlistData = async () => {
    try {
      setLoading(true);
      const response = await wishlistAPI.getWishlist();
      const wishlistData = response.data;
      
      if (wishlistData && wishlistData.items) {
        setItems(wishlistData.items);
      } else {
        setItems([]);
      }
      setError(null);
    } catch (err) {
      console.error('載入願望清單失敗:', err);
      setError('載入願望清單失敗，請重試');
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWishlistData();
  }, []);

  // 切換單個商品選中狀態
  const handleToggleItem = (itemId) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  // 全選/取消全選
  const handleSelectAll = () => {
    if (selectedItems.length === items.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map(item => item.id));
    }
  };

  // 刪除選中的商品
  const handleDeleteSelected = async () => {
    if (selectedItems.length === 0) return;

    try {
      setIsLoading(true);
      await wishlistAPI.removeFromWishlist(selectedItems);
      
      // 更新本地狀態
      setItems(prev => prev.filter(item => !selectedItems.includes(item.id)));
      setSelectedItems([]);
      setError(null);
    } catch (err) {
      console.error('刪除商品失敗:', err);
      setError('刪除商品失敗，請重試');
    } finally {
      setIsLoading(false);
    }
  };

  // 將選中商品加入購物車
  const handleAddToCart = async () => {
    if (selectedItems.length === 0) return;

    try {
      setIsLoading(true);
      await wishlistAPI.moveToCart(selectedItems);
      
      // 移除已加入購物車的商品
      setItems(prev => prev.filter(item => !selectedItems.includes(item.id)));
      setSelectedItems([]);
      setError(null);
    } catch (err) {
      console.error('加入購物車失敗:', err);
      setError('加入購物車失敗，請重試');
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white box-border content-stretch flex flex-col gap-[49px] items-center justify-center pb-[150px] pt-0 px-0 relative size-full" data-name="WishlistContent">
        <Header />
        <div className="flex items-center justify-center h-64">
          <p className="text-lg text-gray-600">載入中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[49px] items-center justify-start pb-[150px] pt-0 px-0 relative size-full" data-name="WishlistContent">
      <Header />
      <WishlistPage 
        items={items}
        selectedItems={selectedItems}
        onToggleItem={handleToggleItem}
        onSelectAll={handleSelectAll}
        onDeleteSelected={handleDeleteSelected}
        onAddToCart={handleAddToCart}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}