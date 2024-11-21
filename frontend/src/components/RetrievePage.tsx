import React, { useEffect, useState } from "react";

interface KeyValue {
  [key: string]: string;
}

const RetrievePage: React.FC = () => {
  const [data, setData] = useState<KeyValue | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/key-value");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result: KeyValue = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg border border-gray-300">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Key-Value Data
        </h1>
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : data ? (
          <ul className="space-y-4">
            {Object.entries(data).map(([key, value]) => (
              <li
                key={key}
                className="flex justify-between bg-gray-50 p-4 rounded-md shadow-sm border"
              >
               
                <span className="text-gray-600">{value}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">No data available.</p>
        )}
      </div>
    </div>
  );
};

export default RetrievePage;
