import { toast } from 'react-toastify';

const ucFirst = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

const errorHandler = (message: string, errors?: null) => {
  if (errors) {
    const arrKey = Object.keys(errors);
    arrKey.map((key) => {
      const msg = `Please provide details for the ${key} field.`;
      return toast.error(msg);
    });
  } else {
    toast.error(message);
  }
};

export { ucFirst, errorHandler };
