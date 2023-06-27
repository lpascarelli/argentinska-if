import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex text-white">
        <li className="mr-5">
          <Link href="/">News</Link>
        </li>
        <li className="mr-5">
          <Link href="/">The club</Link>
        </li>
        <li className="mr-5">
          <Link href="/">Teams</Link>
        </li>
        <li className="mr-5">
          <Link href="/">Shop</Link>
        </li>
      </ul>
    </nav>
  );
}