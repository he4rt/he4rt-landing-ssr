import { BsSun, BsFillMoonFill } from 'react-icons/bs';

import { useTheme, Theme } from '~/providers/theme-provider';

export default function ToggleTheme() {
  const [theme, setTheme] = useTheme();
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
    );
  };

  if (theme === Theme.DARK) {
    return (
      <BsSun
        className='text-white cursor-pointer'
        size={24}
        onClick={toggleTheme}
      />
    );
  }

  return (
    <BsFillMoonFill
      className='text-white cursor-pointer'
      size={24}
      onClick={toggleTheme}
    />
  );
}
