// src/App.jsx
import { useEffect, useState } from "react";
import { fetchDataFromBackend } from "./services/api"; // Import the API function

export default function App() {
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend using the service
    fetchDataFromBackend()
      .then((data) => setBackendData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <main className="container mx-auto px-4 py-12">
        {/* Display backend data */}
        {backendData && (
          <div className="mt-12 text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent mb-6">
              {backendData.message}
            </h2>
            <div className="max-w-2xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-slate-700/50">
              <p className="text-xl text-slate-300 mb-4">
                Status:{" "}
                <span className="text-indigo-400 font-semibold">
                  {backendData.status}
                </span>
              </p>
              <p className="text-lg text-slate-300 mb-4">
                Version:{" "}
                <span className="text-purple-400 font-semibold">
                  {backendData.data.version}
                </span>
              </p>
              <p className="text-lg text-slate-300">
                Description:{" "}
                <span className="text-slate-400 italic">
                  {backendData.data.description}
                </span>
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
