import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supportAPI } from '../services/api';
import toast from 'react-hot-toast';
import imgPageRealmLogo0111 from "../assets/logos/PageRealm_LOGO_01_1.png";
import { useForm } from 'react-hook-form';

function Logo() {
  return (
    <div className="box-border content-stretch flex items-start justify-start overflow-clip px-[29px] py-[9px] relative shrink-0 w-[195px]">
      <div
        className="aspect-[1024/539] basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px relative rounded-[5px] shrink-0"
        style={{ backgroundImage: `url('${imgPageRealmLogo0111}')` }}
      >
        <div aria-hidden="true" className="absolute border-2 border-[#c86b42] border-dashed inset-0 pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function LogOutBtn({ onClick }) {
  return (
    <button className="cursor-pointer relative rounded shrink-0" onClick={onClick}>
      <div className="box-border content-stretch flex items-center justify-center overflow-clip px-4 py-3.5 relative">
        <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
          <p className="leading-[1.1] whitespace-pre">登出</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded" />
    </button>
  );
}

function Header({ onLogout }) {
  return (
    <header className="bg-[#fffdfb] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[30px] pr-[70px] py-0 relative w-full">
          <Logo />
          <LogOutBtn onClick={onLogout} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#4b2e2a] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
    </header>
  );
}

function TitleBar() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-5 items-center justify-start px-[7px] py-0 relative w-full">
          <div className="bg-[#4b2e2a] h-[50px] shrink-0 w-4" />
          <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
            <h1 className="block leading-[1.1] whitespace-pre">客服訊息</h1>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4b2e2a] border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function TicketItem({ ticket, active, onClick }) {
  const date = useMemo(() => ticket.lastMessageAt || ticket.updatedAt || ticket.createdAt, [ticket]);
  const categoryMap = {
    ACCOUNT: '註冊、個人帳戶問題',
    BILLING: '訂單與付款',
    TECHNICAL: '技術問題',
    GENERAL: '一般詢問'
  };
  return (
    <button onClick={onClick} className={`w-full text-left px-4 py-3 rounded-md border ${active ? 'border-[#4b2e2a] bg-[#fff8ec]' : 'border-[#c8cbd4]'} hover:border-[#4b2e2a] transition-colors`}>
      <div className="flex justify-between items-center">
        <div className="font-bold text-[#4b2e2a] text-[18px] truncate">{ticket.subject}</div>
        <div className="text-xs text-[#6b7280]">{date ? new Date(date).toLocaleString('zh-TW') : ''}</div>
      </div>
      <div className="mt-1 flex items-center gap-2 text-sm">
        <span className="inline-block px-2 py-[2px] rounded bg-[#f3f4f6] text-[#374151]">{categoryMap[ticket.category] || ticket.category}</span>
      </div>
    </button>
  );
}

function MessageBubble({ msg }) {
  const isUser = msg.sender === 'USER';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} my-2`}>
      <div className={`${isUser ? 'bg-[#ab3b3a] text-white' : 'bg-[#f3f4f6] text-[#111827]'} max-w-[75%] rounded-lg px-3 py-2 whitespace-pre-wrap break-words`}>
        <div className="text-[14px] leading-snug">{msg.content}</div>
        <div className={`mt-1 text-[12px] ${isUser ? 'text-white/80' : 'text-[#6b7280]'}`}>{new Date(msg.createdAt).toLocaleString('zh-TW')}</div>
      </div>
    </div>
  );
}

function TicketDetail({ ticket, onSend }) {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm({ mode: 'onChange' });
  if (!ticket) {
    return (
      <div className="flex items-center justify-center h-full text-[#4b2e2a]">請從左側選擇一則提問</div>
    );
  }
  const categoryMap = {
    ACCOUNT: '註冊、個人帳戶問題',
    BILLING: '訂單與付款',
    TECHNICAL: '技術問題',
    GENERAL: '一般詢問'
  };
  const submit = async (data) => {
    if (!data.content?.trim()) return;
    await onSend(ticket.id, data.content.trim());
    reset({ content: '' });
  };
  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-3 border-b border-[#e5e7eb]">
        <div className="font-bold text-[#4b2e2a] text-[20px]">{ticket.subject}</div>
        <div className="text-sm text-[#6b7280] mt-1">{ticket.contactName} ・ {ticket.contactEmail}</div>
        <div className="mt-2 flex gap-2 text-sm">
          <span className="inline-block px-2 py-[2px] rounded bg-[#fff8ec] text-[#4b2e2a]">{categoryMap[ticket.category] || ticket.category}</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 bg-white">
        {ticket.messages?.length ? (
          ticket.messages.map((m) => (
            <MessageBubble key={m.id} msg={m} />
          ))
        ) : (
          <div className="text-sm text-[#6b7280]">尚無訊息</div>
        )}
      </div>
      <form onSubmit={handleSubmit(submit)} className="border-t border-[#e5e7eb] p-3 bg-[#fafafa]">
        <div className="flex gap-2">
          <textarea
            className="flex-1 border border-[#c8cbd4] rounded-md p-2 outline-none focus:border-[#4b2e2a] min-h-[44px]"
            placeholder="輸入訊息..."
            {...register('content', { required: true })}
          />
          <button type="submit" disabled={isSubmitting} className="bg-[#ab3b3a] text-white rounded-md px-4 py-2 disabled:opacity-60">
            {isSubmitting ? '送出中...' : '送出'}
          </button>
        </div>
      </form>
    </div>
  );
}

const SupportTicketPage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [tickets, setTickets] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [activeDetail, setActiveDetail] = useState(null);
  const [loadingList, setLoadingList] = useState(true);
  const [loadingDetail, setLoadingDetail] = useState(false);

  useEffect(() => {
    loadTickets();
  }, []);

  const loadTickets = async () => {
    setLoadingList(true);
    try {
      const res = await supportAPI.getUserTickets();
      const list = Array.isArray(res.data) ? res.data : [];
      setTickets(list);
      if (list.length) selectTicket(list[0].id);
    } catch (e) {
      toast.error(e.response?.data?.message || '載入提問失敗');
    } finally {
      setLoadingList(false);
    }
  };

  const selectTicket = async (id) => {
    setActiveId(id);
    setLoadingDetail(true);
    try {
      const res = await supportAPI.getTicketDetail(id);
      setActiveDetail(res.data);
    } catch (e) {
      toast.error(e.response?.data?.message || '載入提問內容失敗');
    } finally {
      setLoadingDetail(false);
    }
  };

  const sendMessage = async (ticketId, content) => {
    try {
      await supportAPI.addMessage(ticketId, content);
      const res = await supportAPI.getTicketDetail(ticketId);
      setActiveDetail(res.data);
      // 同步更新列表最後時間
      setTickets((prev) => prev.map(t => t.id === ticketId ? { ...t, lastMessageAt: new Date().toISOString() } : t));
    } catch (e) {
      toast.error(e.response?.data?.message || '送出訊息失敗');
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('已登出');
      navigate('/login');
    } catch (e) {
      // 靜默處理
    }
  };

  return (
    <div className="bg-[#ffffff] content-stretch flex flex-col gap-[41px] items-center justify-start relative size-full min-h-screen">
      <Header onLogout={handleLogout} />
      <div className="w-full max-w-[1200px] px-[50px]">
        <TitleBar />
        <div className="grid grid-cols-12 gap-6 mt-4">
          <aside className="col-span-4 bg-white border border-[#4b2e2a] rounded-md p-3 min-h-[520px]">
            <div className="flex items-center justify-between mb-3">
              <div className="font-bold text-[#4b2e2a] text-[18px]">客服訊息</div>
              <button onClick={() => navigate('/support/new')} className="bg-[#ab3b3a] text-white rounded-md px-3 py-2 text-sm">發送新提問</button>
            </div>
            {loadingList ? (
              <div className="text-[#6b7280]">載入中...</div>
            ) : tickets.length ? (
              <div className="flex flex-col gap-2">
                {tickets.map(t => (
                  <TicketItem key={t.id} ticket={t} active={t.id === activeId} onClick={() => selectTicket(t.id)} />
                ))}
              </div>
            ) : (
              <div className="text-[#6b7280]">尚無提問</div>
            )}
          </aside>
          <section className="col-span-8 bg-white border border-[#4b2e2a] rounded-md min-h-[520px]">
            {loadingDetail ? (
              <div className="flex items-center justify-center h-full text-[#6b7280]">載入中...</div>
            ) : (
              <TicketDetail ticket={activeDetail} onSend={sendMessage} />
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default SupportTicketPage;


