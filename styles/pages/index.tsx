import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">SkillMatch Hub</h1>
      <p className="text-gray-600 mb-6">Freelance AI Matching Platform</p>
      <div className="space-x-4">
        <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded">Login</Link>
        <Link href="/post-job" className="bg-green-600 text-white px-4 py-2 rounded">Post Job</Link>
      </div>
    </main>
  );
}
