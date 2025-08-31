import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userAPI } from '../../services/api';
import toast from 'react-hot-toast';

export default function BirthdateSettings() {
  const [birthdate, setBirthdate] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async () => {
    if (!birthdate) {
      toast.error('請選擇日期');
      return;
    }
    setLoading(true);
    try {
      await userAPI.updateBirthdate(birthdate);
      toast.success('生日已更新');
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
        <h1 className="text-[#4b2e2a] text-2xl font-bold mb-4 text-center">修改生日</h1>
        <input type="date" className="border rounded p-3 mb-5 block w-full" value={birthdate} onChange={(e)=>setBirthdate(e.target.value)} />
        <div className="flex justify-end">
          <button className="bg-[#ab3b3a] text-white rounded px-4 py-2" onClick={onSubmit} disabled={loading}>儲存</button>
        </div>
      </div>
    </div>
  );
}
