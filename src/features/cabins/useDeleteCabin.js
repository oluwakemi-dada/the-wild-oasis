import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteCabin as deleteCabinApi } from '../../services/apiCabins';

export const useDeleteCabin = () => {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),
    onSuccess: () => {
      toast.success('Cabin successfully deleted'),
        queryClient.invalidateQueries({
          queryKey: ['cabins'],
        });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
};
