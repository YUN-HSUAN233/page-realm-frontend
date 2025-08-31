import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userAPI } from '../../services/api';
import toast from 'react-hot-toast';

export default function GenderSettings() {
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async () => {
    if (!gender) {
      toast.error('請選擇性別');
      return;
    }
    setLoading(true);
    try {
      await userAPI.updateGender(gender);
      toast.success('性別已更新');
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
        <h1 className="text-[#4b2e2a] text-2xl font-bold mb-4 text-center">修改性別</h1>
        <select className="border rounded p-3 mb-5 block w-full" value={gender} onChange={(e)=>setGender(e.target.value)}>
          <option value="">請選擇</option>
          <option value="MALE">男</option>
          <option value="FEMALE">女</option>
        </select>
        <div className="flex justify-end">
          <button className="bg-[#ab3b3a] text-white rounded px-4 py-2" onClick={onSubmit} disabled={loading}>儲存</button>
        </div>
      </div>
    </div>
  );
}
