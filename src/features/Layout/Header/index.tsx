import Logo from '@/assets/imgs/logo.svg';

const Header = () => {
  return (
    <nav className="q-bg-cpt px-6 py-3 shadow">
      <div className="flex items-center justify-between">
        <a className="text-xl font-bold">
          <Logo />
        </a>
        <div className="block flex-shrink-0"></div>
      </div>
    </nav>
  );
};

export default Header;
