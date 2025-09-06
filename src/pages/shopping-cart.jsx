import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import imgPageRealmLogo0111 from "../assets/logos/PageRealm_LOGO_01_1.png";
import img1 from "../assets/logos/PageRealm_LOGO_01.png"; // 暫時使用現有圖片作為書籍封面
import BookItemCard from "../components/BookItemCard";
import MemberLevelPrompt from "../components/MemberLevelPrompt";
import OrderSummary from "../components/OrderSummary";
import { cartAPI, checkoutAPI } from "../services/api";

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

function CartTitleAccent() {
  return <div className="bg-[#4b2e2a] h-[50px] shrink-0 w-4" data-name="CartTitleAccent" />;
}

function CartTitle() {
  return (
    <div className="bg-white relative shrink-0 w-[1000px]" data-name="CartTitle">
      <div className="box-border content-stretch flex gap-5 items-center justify-start overflow-clip px-[7px] py-0 relative w-[1000px]">
        <CartTitleAccent />
        <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
          <h1 className="block leading-[1.1] whitespace-pre">購物車</h1>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function OrderFormTitle() {
  return (
    <div className="box-border content-stretch flex gap-[15px] items-center justify-center overflow-clip px-0 py-5 relative shrink-0 w-full" data-name="OrderFormTitle">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="OrderFormTitleLineR">
        <div className="absolute bottom-[-2px] left-0 right-0 top-[-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 381 4">
            <path d="M0 2H381" id="OrderFormTitleLineR" stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="8 8" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
        <h2 className="block leading-[1.1] whitespace-pre">訂單明細</h2>
      </div>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="OrderFormTitleLineL">
        <div className="absolute bottom-[-2px] left-0 right-0 top-[-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 381 4">
            <path d="M0 2H381" id="OrderFormTitleLineR" stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="8 8" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SelectAllBtn({ onSelectAll, isAllSelected }) {
  return (
    <button 
      className="relative rounded-[6px] shrink-0" 
      data-name="SelectAllBtn"
      onClick={onSelectAll}
    >
      <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[39px] py-1.5 relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[16px] text-nowrap tracking-[-0.4px]">
          <p className="leading-[1.1] whitespace-pre">{isAllSelected ? '取消全選' : '全選'}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </button>
  );
}

function DeleteAllBtn({ onRemoveSelected, hasSelected }) {
  return (
    <button 
      className={`relative rounded-[6px] shrink-0 ${hasSelected ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`} 
      data-name="DeleteAllBtn"
      onClick={hasSelected ? onRemoveSelected : undefined}
      disabled={!hasSelected}
    >
      <div className="box-border content-stretch flex items-center justify-center overflow-clip px-5 py-[5px] relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[16px] text-nowrap tracking-[-0.4px]">
          <p className="leading-[1.1] whitespace-pre">整批刪除</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </button>
  );
}

function WishlistAllinBtn({ onMoveToWishlist, hasSelected }) {
  return (
    <button 
      className={`bg-white relative rounded-[6px] shrink-0 ${hasSelected ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`} 
      data-name="WishlistAllinBtn"
      onClick={hasSelected ? onMoveToWishlist : undefined}
      disabled={!hasSelected}
    >
      <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[22px] py-1.5 relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[16px] text-nowrap tracking-[-0.4px]">
          <p className="leading-[1.1] whitespace-pre">整批加入願望清單</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </button>
  );
}

function OrderBtnGp({ 
  onSelectAll, 
  onRemoveSelected, 
  onMoveToWishlist, 
  isAllSelected, 
  hasSelected 
}) {
  return (
    <div className="relative shrink-0 w-full" data-name="OrderBtnGp">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch cursor-pointer flex gap-7 items-center justify-start px-6 py-[17px] relative w-full">
          <SelectAllBtn onSelectAll={onSelectAll} isAllSelected={isAllSelected} />
          <DeleteAllBtn onRemoveSelected={onRemoveSelected} hasSelected={hasSelected} />
          <WishlistAllinBtn onMoveToWishlist={onMoveToWishlist} hasSelected={hasSelected} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8cbd4] border-solid inset-0 pointer-events-none" />
    </div>
  );
}


function OrderForm() {
  return (
    <section className="bg-white h-[758px] relative rounded-[6px] shrink-0" data-name="OrderForm">
      <div className="content-stretch flex flex-col h-[758px] items-center justify-start overflow-clip relative">
        <OrderFormTitle />
        <OrderBtnGp />
        <OrderItem />
        <OrderItem1 />
        <OrderBtnGp />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </section>
  );
}

// 帶數據的訂單表單組件
function OrderFormWithData({ 
  items, 
  selectedItems, 
  onItemSelection, 
  onSelectAll, 
  onRemoveSelected, 
  onMoveToWishlist, 
  isAllSelected, 
  hasSelected, 
  error 
}) {
  return (
    <section className="bg-white min-h-[758px] relative rounded-[6px] shrink-0" data-name="OrderForm">
      <div className="content-stretch flex flex-col min-h-[758px] items-center justify-start overflow-clip relative">
        <OrderFormTitle />
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 w-full max-w-md">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        <OrderBtnGp 
          onSelectAll={onSelectAll}
          onRemoveSelected={onRemoveSelected}
          onMoveToWishlist={onMoveToWishlist}
          isAllSelected={isAllSelected}
          hasSelected={hasSelected}
        />
        
        <DynamicCartItems 
          items={items}
          selectedItems={selectedItems}
          onItemSelection={onItemSelection}
        />
        
        <OrderBtnGp 
          onSelectAll={onSelectAll}
          onRemoveSelected={onRemoveSelected}
          onMoveToWishlist={onMoveToWishlist}
          isAllSelected={isAllSelected}
          hasSelected={hasSelected}
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </section>
  );
}


function GotoPayBtn({ onNavigateToPayment }) {
  return (
    <button 
      className="bg-[#ab3b3a] cursor-pointer relative rounded-[8px] shrink-0" 
      data-name="GotoPayBtn"
      onClick={onNavigateToPayment}
    >
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[100px] py-3 relative">
        <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white tracking-[-0.5px]">
          <p className="leading-[1.1] whitespace-pre">{`前往結帳  ->`}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </button>
  );
}

function GotoPay() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0" data-name="GotoPay">
      <div className="box-border content-stretch flex flex-col gap-[15px] items-center justify-start overflow-clip px-0 py-5 relative">
        <SubtotalBox />
        <SubtotalBox1 />
        <GotoPayBtn />
      </div>
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

// 帶數據的結帳區域組件
function GotoPayWithData({ cartSummary, membershipInfo, onNavigateToPayment }) {
  console.log('Cart Summary:', cartSummary); // 調試用
  console.log('Membership Info:', membershipInfo); // 調試用
  
  // 處理 API 響應數據結構
  // API: /checkout/summary 返回 { "cartTotalAmount": ..., "expectedPointsReward": ... }
  const subtotal = cartSummary?.cartTotalAmount || 0;
  const rewardPoints = cartSummary?.expectedPointsReward || 0;
  
  // API: /checkout/membershipTier 返回 { "currentTier": "", "amountToNextTier": ..., "nextTier": "" }
  const requiredAmount = membershipInfo?.amountToNextTier || 'OOO';
  const targetLevel = membershipInfo?.nextTier || 'Lv11';

  return (
    <div className="bg-white relative rounded-[6px] shrink-0" data-name="GotoPay">
      <div className="box-border content-stretch flex flex-col gap-[15px] items-center justify-start overflow-clip px-0 py-5 relative">
        <MemberLevelPrompt
          requiredAmount={requiredAmount}
          targetLevel={targetLevel}
          titleText="會員等級提示"
        />
        
        <OrderSummary
          subtotal={subtotal}
          rewardPoints={rewardPoints}
          subtotalColor="#ab3b3a"
          showBorder={false}
        />
        
        <GotoPayBtn onNavigateToPayment={onNavigateToPayment} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#374c77] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function CartForm() {
  return (
    <main className="bg-[#fffdfb] max-w-[1000px] relative rounded-[4px] shrink-0 w-full" data-name="CartForm" tabIndex="-1">
      <div className="box-border content-stretch flex flex-col gap-[35px] items-center justify-start max-w-inherit overflow-clip pb-[45px] pt-[25px] px-0 relative w-full">
        <CartTitle />
        <OrderForm />
        <GotoPay />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </main>
  );
}

// 動態渲染購物車商品
function DynamicCartItems({ items, selectedItems, onItemSelection }) {
  if (!items || items.length === 0) {
    return (
      <div className="content-stretch flex flex-col items-center justify-center h-64 overflow-clip relative shrink-0 w-full" data-name="EmptyCart">
        <p className="text-lg text-gray-500">購物車目前沒有商品</p>
      </div>
    );
  }

  // 處理標籤顏色映射 - 使用正確的 format 欄位
  const getTagColor = (format) => {
    switch (format) {
      case '漫畫':
        return '#eb5160'; // 紅色
      case '輕小說':
        return '#374c77'; // 藍色
      case '工具書':
        return '#4a7b59'; // 綠色
      case '雜誌':
        return '#8b5a3c'; // 棕色
    };
    return colorMap[format] || '#374c77';
  };

  // 處理圖片 URL - 加上 API 基礎路徑
  const getImageUrl = (coverImageUrl) => {
    if (!coverImageUrl) return img1;
    if (coverImageUrl.startsWith('http')) return coverImageUrl;
    // 如果是相對路徑，加上 API 基礎 URL
    return `${import.meta.env.VITE_API_URL || 'http://localhost:8080'}${coverImageUrl}`;
  };

  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0 w-full" data-name="DynamicCartItems">
      {items.map((item, index) => {
        // 移除重複的 console.log，只在開發環境顯示
        if (process.env.NODE_ENV === 'development' && index === 0) {
          console.log('Cart items structure:', items[0]);
        }

        return (
          <BookItemCard
            key={item.id || index}
            coverImage={getImageUrl(item.coverImageUrl)}
            tag={item.format || '書籍'}
            tagColor={getTagColor(item.format)}
            bookName={item.title || '作品名'}
            author={item.author || '作者名'}
            price={item.snapshotPrice?.toString() || '0'}
            priceColor="#ab3b3a"
            showSelector={true}
            isSelected={selectedItems.has(item.id || item.itemId)}
            onSelectionChange={(isSelected) => onItemSelection(item.id || item.itemId, isSelected)}
          />
        );
      })}
    </div>
  );
}

// 帶數據的購物車表單組件
function CartFormWithData({ 
  items, 
  selectedItems, 
  cartSummary, 
  membershipInfo, 
  onItemSelection, 
  onSelectAll, 
  onRemoveSelected, 
  onMoveToWishlist, 
  onNavigateToPayment,
  error 
}) {
  const isAllSelected = items.length > 0 && selectedItems.size === items.length;
  const hasSelected = selectedItems.size > 0;

  return (
    <main className="bg-[#fffdfb] max-w-[1000px] relative rounded-[4px] shrink-0 w-full" data-name="CartForm" tabIndex="-1">
      <div className="box-border content-stretch flex flex-col gap-[35px] items-center justify-start max-w-inherit overflow-clip pb-[45px] pt-[25px] px-0 relative w-full">
        <CartTitle />
        
        <OrderFormWithData 
          items={items}
          selectedItems={selectedItems}
          onItemSelection={onItemSelection}
          onSelectAll={onSelectAll}
          onRemoveSelected={onRemoveSelected}
          onMoveToWishlist={onMoveToWishlist}
          isAllSelected={isAllSelected}
          hasSelected={hasSelected}
          error={error}
        />
        
        <GotoPayWithData 
          cartSummary={cartSummary}
          membershipInfo={membershipInfo}
          onNavigateToPayment={onNavigateToPayment}
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </main>
  );
}

// 主要的購物車內容組件
function ShoppingCartContent() {
  const { loading: authLoading, isAuthenticated } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [cartSummary, setCartSummary] = useState(null);
  const [membershipInfo, setMembershipInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const hasLoadedRef = useRef(false); // 追蹤是否已經載入過數據
  const navigate = useNavigate();

  // 載入購物車數據 - 使用 useCallback 防止重複創建
  const loadCartData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await cartAPI.getCart();
      console.log('Cart API response:', response.data); // 調試用
      
      // 處理不同可能的數據結構
      const items = response.data.items || response.data.data || response.data || [];
      setCartItems(items);
      setError(null);
    } catch (err) {
      console.error('載入購物車失敗:', err);
      setError(`載入購物車失敗：${err.message || '請重試'}`);
    } finally {
      setLoading(false);
    }
  }, []);

  // 載入購物車摘要 - 使用 useCallback 防止重複創建
  const loadCartSummary = useCallback(async () => {
    try {
      const response = await checkoutAPI.getCartSummary();
      setCartSummary(response.data);
    } catch (err) {
      console.error('載入購物車摘要失敗:', err);
    }
  }, []);

  // 載入會員信息 - 使用 useCallback 防止重複創建
  const loadMembershipInfo = useCallback(async () => {
    try {
      const response = await checkoutAPI.getMembershipTier();
      setMembershipInfo(response.data);
    } catch (err) {
      console.error('載入會員信息失敗:', err);
    }
  }, []);

  // 頁面載入時獲取數據
  useEffect(() => {
    // 等待認證狀態就緒，避免未帶 JWT 時就打 API 導致 401
    if (authLoading) return;
    if (!isAuthenticated) return;
    if (!hasLoadedRef.current) {
      hasLoadedRef.current = true;
      loadCartData();
      loadCartSummary();
      loadMembershipInfo();
    }
  }, [authLoading, isAuthenticated, loadCartData, loadCartSummary, loadMembershipInfo]);

  // 處理單個商品選擇
  const handleItemSelection = (itemId, isSelected) => {
    const newSelected = new Set(selectedItems);
    if (isSelected) {
      newSelected.add(itemId);
    } else {
      newSelected.delete(itemId);
    }
    setSelectedItems(newSelected);
  };

  // 處理全選
  const handleSelectAll = () => {
    if (selectedItems.size === cartItems.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(cartItems.map(item => item.id || item.itemId)));
    }
  };

  // 移除選中的商品
  const handleRemoveSelected = async () => {
    try {
      const selectedIds = Array.from(selectedItems);
      if (selectedIds.length === 0) return;
      
      await cartAPI.removeFromCart(selectedIds);
      await loadCartData();
      await loadCartSummary();
      setSelectedItems(new Set());
    } catch (err) {
      console.error('刪除商品失敗:', err);
      setError('刪除商品失敗，請重試');
    }
  };

  // 將選中商品移至願望清單
  const handleMoveToWishlist = async () => {
    try {
      const selectedIds = Array.from(selectedItems);
      if (selectedIds.length === 0) return;
      
      await cartAPI.moveToWishlist(selectedIds);
      await loadCartData();
      await loadCartSummary();
      setSelectedItems(new Set());
    } catch (err) {
      console.error('移至願望清單失敗:', err);
      setError('移至願望清單失敗，請重試');
    }
  };

  // 導航到支付頁面
  const handleNavigateToPayment = () => {
    navigate('/payment');
  };

  if (loading) {
    return (
      <div className="bg-white box-border content-stretch flex flex-col gap-[49px] items-center justify-start pb-[150px] pt-0 px-0 relative size-full">
        <Header />
        <div className="flex items-center justify-center h-64">
          <p className="text-lg text-gray-600">載入中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[49px] items-center justify-start pb-[150px] pt-0 px-0 relative size-full" data-name="ShoppingCartContent">
      <Header />
      <CartFormWithData 
        items={cartItems}
        selectedItems={selectedItems}
        cartSummary={cartSummary}
        membershipInfo={membershipInfo}
        onItemSelection={handleItemSelection}
        onSelectAll={handleSelectAll}
        onRemoveSelected={handleRemoveSelected}
        onMoveToWishlist={handleMoveToWishlist}
        onNavigateToPayment={handleNavigateToPayment}
        error={error}
      />
    </div>
  );
}

export default ShoppingCartContent;