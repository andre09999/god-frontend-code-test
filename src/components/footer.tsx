import React from "react";
import Link from 'next/link';

const Footer: React.FC = ({ check }: any) => {
  return (
    <footer className={`${check ? 'dark' : 'light'} border${check ? 'd' : 'l'}`}>
      <h1 className="footerTitle">
        Criado e desenvolvido por &copy;{" "}
        <Link href="https://www.linkedin.com/in/dev-andre-front-end/" target="_blank" rel="noreferrer">
          Andre Luis
        </Link>
      </h1>
    </footer>
  );
};

export default Footer;
