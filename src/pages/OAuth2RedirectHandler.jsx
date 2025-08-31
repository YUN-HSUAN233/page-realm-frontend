import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const OAuth2RedirectHandler = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    const require2fa = searchParams.get('require2fa');
    const tempJwt = searchParams.get('tempJwt');
    const error = searchParams.get('error');

    if (token) {
      localStorage.setItem('JWT_TOKEN', token);
      window.location.replace('/user-main');
    } else if (require2fa === 'true' && tempJwt) {
      localStorage.setItem('TEMP_JWT_FOR_2FA', tempJwt);
      // 二階段認證登入流程
      window.location.replace('/settings/totp');
    } else if (error) {
      alert(`OAuth2 登入失敗: ${error}`);
      window.location.replace('/login');
    } else {
      window.location.replace('/login');
    }
  }, [searchParams]);

  return <div>載入中...</div>;
};

export default OAuth2RedirectHandler;
