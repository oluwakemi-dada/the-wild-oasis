import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { signup as signupApi } from '../../services/apiAuth';

export const useSignup = () => {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address."
      );
    },
  });

  return { signup, isPending };
};
