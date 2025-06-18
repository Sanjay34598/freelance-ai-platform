export default function PostJob() {
  return (
    <div className="max-w-xl mx-auto mt-20 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Post a Job</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Job Title" className="w-full px-4 py-2 border rounded" />
        <textarea placeholder="Description" className="w-full px-4 py-2 border rounded" />
        <input type="number" placeholder="Budget ₹" className="w-full px-4 py-2 border rounded" />
        <button className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
