import { toast } from 'react-toastify';
import api from './api';

const sendPasswordResetEmail = (email: string) => (dispatch: any) => api.post('/user/password/reset', { email }).then((res) => {
  toast.success(res.data.message);
});

const changePassword = (details: any) => (dispatch: any) => api.patch(`/user/password/reset?token=${details.token}`, details).then((res) => {
  toast.success(res.data.message);
});

export { sendPasswordResetEmail, changePassword };
