import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#090a0f] text-white px-4 text-center">
      <div className="font-mono text-cyan-400 text-sm mb-2">// 404 ERROR</div>
      <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
        Page Not Found
      </h1>
      <p className="text-slate-400 text-sm sm:text-base max-w-md mb-8">
        The coordinate you are looking for does not exist in this sector.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 transition-all"
      >
        Return to Home Station
      </Link>
    </div>
  );
}
