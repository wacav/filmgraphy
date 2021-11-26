import useSWR from 'swr';

type Menu = {
  name: {
    en: string;
    ko: string;
  };
  isLoggedShow: boolean;
  link: string;
  icon: string;
};

const useMenu = () => {
  const { data: menus } = useSWR<Menu[]>('/menu', { fallbackData: [] });

  return menus;
};

export default useMenu;
