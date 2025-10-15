import React, {useEffect, useState} from "react";
import { api } from "../api";


const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setLoading(true);
                const res = await api.get("jobs/");
                setJobs(res.data);
            } catch (err) {
                setError("Failed to load jobs. Please try again later.");
            } finally {
                setLoading(false)
            }
        };
        fetchJobs();
    }, []);

    return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Available Jobs
        </h1>

        {loading && (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
          </div>
        )}

        {error && (
          <div className="text-red-500 text-center p-4 bg-red-100 rounded-lg">
            {error}
          </div>
        )}

        {!loading && !error && jobs.length === 0 && (
          <div className="text-gray-500 text-center p-4">
            No jobs available at the moment.
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {job.title}
              </h2>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Company:</span> {job.company}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-medium">Location:</span> {job.location}
              </p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobList;
