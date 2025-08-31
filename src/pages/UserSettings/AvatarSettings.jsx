import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userAPI } from '../../services/api';
import toast from 'react-hot-toast';

export default function AvatarSettings() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const navigate = useNavigate();

  // 建立/釋放本地預覽 URL
  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const onSubmit = async () => {
    if (!file) {
      toast.error('請選擇圖片');
      return;
    }
    setLoading(true);
    try {
      const res = await userAPI.uploadAvatar(file);
      const url = res?.data?.url || res?.data; // 後端新版回傳 { url }, 舊版相容字串
      if (url) {
        setPreviewUrl(url); // 立即切換為 S3 公開 URL 預覽
      }
      toast.success('頭像已更新');
      navigate('/user-main');
    } catch (e) {
      toast.error(e.response?.data?.message || '上傳失敗');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">更新頭像</h1>
      {previewUrl && (
        <img
          src={previewUrl}
          alt="avatar-preview"
          className="w-40 h-40 object-cover rounded mb-4 border"
          style={{ aspectRatio: '1 / 1' }}
        />
      )}
      <input
        type="file"
        accept="image/*"
        onChange={(e)=>setFile(e.target.files?.[0] || null)}
        className="mb-4"
      />
      <button
        className="bg-[#ab3b3a] text-white rounded px-4 py-2 disabled:opacity-60"
        onClick={onSubmit}
        disabled={loading}
      >
        {loading ? '上傳中…' : '上傳'}
      </button>
    </div>
  );
}
