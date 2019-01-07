export interface ChangePasswordInterface {
  changePassword: (details: any) => Promise<any>;
  history: any;
  match: {
    params: {
      token: string;
    };
  };
}

export interface LoginInterface {
  loginAction: (details: object) => null;
  history: object;
  token: string;
}

export interface AccountInterface {
  registerAction: (details: any) => Promise<any>;
  history: any;
  token: string;
}

export interface resetEmailInterface {
  sendEmail: (email: string) => Promise<any>;
  history: any;
}

export interface AccountCreationSuccessInterface {
  email: any;
  resendEmail: (email: any) => Promise<any>;
}

export interface SendEmailComponentInterface {
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
  state: {
    email: string;
    loading: boolean;
  };
}

export interface PasswordChangeComponentInterface {
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
  state: {
    data: {
      password: string;
      confirmPassword: string;
    };
    loading: boolean;
  };
}

export interface AuthHOCInterface {
  submit: any;
  history: any;
}

export interface CheckAuthHOCInterface {
  token: string;
}

export interface AuthenticationInterface {
  handleChange: () => void;
  handleSubmit: () => void;
  loading: boolean;
  state: {
    user: {
      email?: string;
      password?: any;
      username?: string;
      firstname?: string;
      lastname?: string;
      checked?: boolean;
      confirmPassword?: any;
    };
  };
}
