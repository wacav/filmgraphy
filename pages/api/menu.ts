import { NextApiHandler } from 'next';

const MenuApi: NextApiHandler = (req, res) => {
  const menus = [
    {
      name: {
        en: 'Buy Photo',
        ko: '사진구매',
      },
      isLoggedShow: false,
      link: '/film',
      icon: 'RiFilmLine',
    },
    {
      name: {
        en: 'Explore',
        ko: '탐색',
      },
      isLoggedShow: false,
      link: '/explore',
      icon: 'RiCompassLine',
    },
    {
      name: {
        en: 'withdraw money',
        ko: '출금',
      },
      isLoggedShow: true,
      link: '/withdraw',
      icon: 'RiCompassLine',
    },
  ];
  return res.json(menus);
};

export default MenuApi;
