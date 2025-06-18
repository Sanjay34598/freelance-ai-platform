export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-200">
      <form className="bg-white p-6 rounded shadow-md w-80 space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded" />
        <button className="w-full bg-blue-600 text-white py-2 rounded">Log In</button>
      </form>
    </main>
  );
}
