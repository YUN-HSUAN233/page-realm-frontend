import { useEffect, useState } from 'react';
import { authAPI } from '../../services/api';
import toast from 'react-hot-toast';

export default function TotpSettings() {
  const [status, setStatus] = useState({ is2faEnabled: false });
  const [qrUrl, setQrUrl] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [is2faLoginFlow, setIs2faLoginFlow] = useState(false);

  const loadStatus = async () => {
    try {
      const res = await authAPI.getTotpStatus();
      const enabled = res.data?.is2faEnabled ?? false;
      setStatus({ is2faEnabled: enabled });
    } catch (e) {
      // ignore (未登入或權限不足時不阻斷)
    }
  };

  useEffect(() => {
    const temp = localStorage.getItem('TEMP_JWT_FOR_2FA');
    if (temp) {
      setIs2faLoginFlow(true);
      return; // 不呼叫保護端點，直接顯示登入驗證 UI
    }
    loadStatus();
  }, []);

  const enable = async () => {
    setLoading(true);
    try {
      const res = await authAPI.enableTotp();
      setQrUrl(res.data);
      await loadStatus();
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
      await loadStatus();
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
      await loadStatus();
      toast.success('已停用二階段認證');
    } catch (e) {
      toast.error(e.response?.data?.message || '停用失敗');
    } finally {
      setLoading(false);
    }
  };

  const verifyLogin = async () => {
    if (!code) return toast.error('請輸入 6 位數驗證碼');
    setLoading(true);
    try {
      const temp = localStorage.getItem('TEMP_JWT_FOR_2FA');
      if (!temp) throw new Error('缺少臨時登入權杖');
      const res = await authAPI.verifyTotpLogin(Number(code), temp);
      localStorage.removeItem('TEMP_JWT_FOR_2FA');
      const jwt = res.data?.jwtToken || res.data?.token || '';
      if (jwt) localStorage.setItem('JWT_TOKEN', jwt);
      window.location.replace('/user-main');
    } catch (e) {
      toast.error(e.response?.data?.message || '2FA 登入驗證失敗');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffdfb] p-4">
      <div className="bg-white rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.08)] w-full max-w-[520px] p-6">
        <h1 className="text-[#4b2e2a] text-2xl font-bold mb-4 text-center">兩步驟驗證</h1>

        {is2faLoginFlow ? (
          <div className="flex flex-col gap-3">
            <div className="text-[#4b2e2a]">請輸入認證器 6 位數，以完成登入</div>
            <input
              className="border rounded p-3 w-full"
              placeholder="輸入 6 位數"
              value={code}
              onChange={(e)=>setCode(e.target.value)}
            />
            <button className="bg-[#4b2e2a] text-white rounded px-4 py-2" onClick={verifyLogin} disabled={loading}>
              {loading ? '驗證中...' : '驗證並登入'}
            </button>
          </div>
        ) : (
          <>
            {!status.is2faEnabled && (
              <div className="flex flex-col gap-3">
                <div className="text-[#4b2e2a]">步驟一：啟用並取得 QR Code</div>
                <button className="bg-[#ab3b3a] text-white rounded px-4 py-2" onClick={enable} disabled={loading}>啟用</button>
                {qrUrl && (
                  <div className="flex flex-col gap-3 items-center">
                    <img src={qrUrl} alt="qr" className="rounded border border-[#4b2e2a]" />
                    <div className="text-[#4b2e2a]">步驟二：輸入認證器 6 位數</div>
                    <input className="border rounded p-3 w-full" placeholder="輸入 6 位數" value={code} onChange={(e)=>setCode(e.target.value)} />
                    <button className="bg-[#4b2e2a] text-white rounded px-4 py-2" onClick={verify} disabled={loading}>驗證並啟用</button>
                  </div>
                )}
              </div>
            )}

            {status.is2faEnabled && (
              <div className="flex flex-col gap-3">
                <div className="text-[#4b2e2a]">狀態：已啟用</div>
                <button className="bg-[#4b2e2a] text-white rounded px-4 py-2" onClick={disable} disabled={loading}>停用 二階段認證</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
