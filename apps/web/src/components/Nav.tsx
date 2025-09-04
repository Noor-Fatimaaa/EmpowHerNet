import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto max-w-5xl flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold">EmpowHerNet</Link>
        <div className="flex gap-4 text-sm">
          <Link href="/chat" className="text-gray-700 hover:text-black">Chat</Link>
          <Link href="/resources" className="text-gray-700 hover:text-black">Resources</Link>
          <Link href="/admin" className="text-gray-700 hover:text-black">Admin</Link>
        </div>
      </div>
    </nav>
  );
}

