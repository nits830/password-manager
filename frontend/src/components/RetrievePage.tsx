import React, { useEffect, useState } from "react";

interface KeyValue {
  [key: string]: string;
}

const RevealPassword: React.FC<{ value: string }> = ({ value }) => {
  const [password, setPassword] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPassword = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:5000/key-value/exampleKey1`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
      setPassword(result.password); // Assuming API response is { password: "your_password" }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-2">
      <button
        onClick={fetchPassword}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Reveal Password
      </button>
      {loading && <p className="text-gray-600 mt-2">Fetching password...</p>}
      {error && <p className="text-red-500 mt-2">Error: {error}</p>}
      {password && (
        <p className="mt-4 text-gray-800">
          Password: <span className="font-bold">{password}</span>
        </p>
      )}
    </div>
  );
};

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
                className="flex flex-col bg-gray-50 p-4 rounded-md shadow-sm border"
              >
                <p className="text-gray-800 font-medium">Key: {key}</p>
                <span className="text-gray-600">{value}</span>
                <RevealPassword value={key} />
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
