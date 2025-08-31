import { useEffect, useState } from 'react';
import { authAPI } from '../../services/api';
import toast from 'react-hot-toast';

export default function TwoFactorModal({ isOpen, onClose, onStatusChange }) {
  const [is2faEnabled, setIs2faEnabled] = useState(false);
  const [qrUrl, setQrUrl] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const fetchStatus = async () => {
      try {
        const res = await authAPI.getTotpStatus();
        setIs2faEnabled(Boolean(res.data?.is2faEnabled));
      } catch (e) {
        // ignore
      }
    };
    fetchStatus();
  }, [isOpen]);

  const enable = async () => {
    setLoading(true);
    try {
      const res = await authAPI.enableTotp();
      setQrUrl(res.data || '');
    } catch (e) {
      toast.error(e.response?.data?.message || '啟用失敗');
    } finally {
      setLoading(false);
    }
  };

  const verify = async () => {
    if (!code) return toast.error('請輸入 6 位數驗證碼');
    setLoading(true);
    try {
      await authAPI.verifyTotp(Number(code));
      setCode('');
      setQrUrl('');
      setIs2faEnabled(true);
      onStatusChange?.(true);
      toast.success('已啟用二階段認證');
    } catch (e) {
      toast.error(e.response?.data?.message || '驗證失敗');
    } finally {
      setLoading(false);
    }
  };

  const disable = async () => {
    setLoading(true);
    try {
      await authAPI.disableTotp();
      setQrUrl('');
      setCode('');
      setIs2faEnabled(false);
      onStatusChange?.(false);
      toast.success('已停用二階段認證');
    } catch (e) {
      toast.error(e.response?.data?.message || '停用失敗');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white relative rounded-[6px] w-full max-w-[540px] mx-4">
        <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start overflow-clip pb-[25px] pt-0 px-0 relative w-full">
          {/* Title */}
          <div className="bg-white box-border content-stretch flex gap-[15px] items-center justify-center overflow-clip px-[23px] py-[25px] relative shrink-0 w-full">
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none rotate-[180deg]">
                <div className="h-0 relative w-[100px]">
                  <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 4">
                      <line stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="7 7" strokeWidth="4" x2="100" y1="2" y2="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b2e2a] text-[24px] text-nowrap tracking-[-0.6px]">
              <p className="leading-[1.1] whitespace-pre">二階段認證</p>
            </div>
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none rotate-[180deg]">
                <div className="h-0 relative w-[100px]">
                  <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 4">
                      <line stroke="var(--stroke-0, #4B2E2A)" strokeDasharray="7 7" strokeWidth="4" x2="100" y1="2" y2="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full px-6">
            {!is2faEnabled && (
              <div className="flex flex-col gap-4">
                <div className="text-[#4b2e2a]">步驟一：啟用並取得 QR Code</div>
                <button className="bg-[#ab3b3a] text-white rounded px-4 py-2 w-full" onClick={enable} disabled={loading}>啟用</button>
                {qrUrl && (
                  <div className="flex flex-col gap-3 items-center">
                    <img src={qrUrl} alt="qr" className="rounded border border-[#4b2e2a]" />
                    <div className="text-[#4b2e2a]">步驟二：輸入認證器 6 位數</div>
                    <input className="border rounded p-2 w-full" placeholder="輸入 6 位數" value={code} onChange={(e)=>setCode(e.target.value)} />
                    <button className="bg-[#4b2e2a] text-white rounded px-4 py-2 w-full" onClick={verify} disabled={loading}>驗證並啟用</button>
                  </div>
                )}
              </div>
            )}

            {is2faEnabled && (
              <div className="flex flex-col gap-3">
                <div className="text-[#4b2e2a]">狀態：已啟用</div>
                <button className="bg-[#4b2e2a] text-white rounded px-4 py-2" onClick={disable} disabled={loading}>停用 二階段認證</button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 w-full px-6 pb-4">
            <button className="border border-[#4b2e2a] rounded px-4 py-2 text-[#4b2e2a]" onClick={onClose}>關閉</button>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#4b2e2a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
    </div>
  );
}