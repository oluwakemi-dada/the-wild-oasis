import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createEditCabin } from '../../services/apiCabins';

export const useCreateCabin = () => {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: (newCabin) => createEditCabin(newCabin),
    onSuccess: () => {
      toast.success('New cabin successfully created');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createCabin, isCreating };
};
