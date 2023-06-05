import { useRouter } from 'next/router';

export const useGetId = () => {
  const router = useRouter();
  return typeof router.query.id === 'string' ? router.query.id : '';
};
