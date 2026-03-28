function TailwindTest() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Tailwind CSS Working ✅
        </h1>
        <p className="text-gray-600">
          If you see this styled card, Tailwind CSS is installed correctly.
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
          Test Button
        </button>
      </div>
    </div>
  );
}

export default TailwindTest;