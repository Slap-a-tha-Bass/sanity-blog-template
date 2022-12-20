import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link className="text-xl" href={`/`}>
          <Image
            src="/Ceren-portrait.png"
            width={100}
            height={100}
            alt="logo"
          />
        </Link>
        <h1>The Blog</h1>
      </div>
      <div>
        <Link className="text-md" href={`/`}>
          Twitter
        </Link>
      </div>
    </header>
  );
}
