import Logo from '@/assets/imgs/logo.svg';
import { BASE_CONFIG } from '@/config';

const { copyright, name, github } = BASE_CONFIG;

const Footer = () => {
  const onClickGitHub = () => {
    window.open(github);
  };

  return (
    <footer className="w-full px-6">
      <div className="q-secondary mx-auto flex flex-row items-center justify-between gap-1 border-t py-6">
        <Logo />
        <p className="text-xs leading-5">
          {copyright} by {name}
        </p>
        <span className="flex items-center">
          <span
            className="q-color-primary-hover icon-[octicon--mark-github-24] cursor-pointer"
            style={{ width: '1.5rem', height: '1.5rem' }}
            onClick={onClickGitHub}
          />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
