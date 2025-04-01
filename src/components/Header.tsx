import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full max-w-2xl flex justify-start mb-4">
      {/* <span className="text-lg font-bold border p-2">W&S Logo</span> */
        <Image src="/img/logo_w&s.svg" alt="Placeholder" width={100} height={100} className="rounded " />
      }
    </header>
  );
};

export default Header;
