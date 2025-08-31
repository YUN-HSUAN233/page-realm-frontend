import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userAPI } from '../../services/api';
import toast from 'react-hot-toast';

export default function UsernameSettings() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async () => {
    if (!username.trim()) {
      toast.error('請輸入暱稱');
      return;
    }
    setLoading(true);
    try {
      await userAPI.updateUsername(username.trim());
      toast.success('暱稱已更新');
      navigate('/user-main');
    } catch (e) {
      toast.error(e.response?.data?.message || '更新失敗');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffdfb] p-4">
      <div className="bg-white rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.08)] w-full max-w-[520px] p-6">
        <h1 className="text-[#4b2e2a] text-2xl font-bold mb-4 text-center">修改暱稱</h1>
        <input className="border rounded p-3 mb-5 block w-full" placeholder="輸入暱稱" value={username} onChange={(e)=>setUsername(e.target.value)} />
        <div className="flex justify-end">
          <button className="bg-[#ab3b3a] text-white rounded px-4 py-2" onClick={onSubmit} disabled={loading}>儲存</button>
        </div>
      </div>
    </div>
  );
}
