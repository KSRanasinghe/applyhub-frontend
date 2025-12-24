import { useState, useEffect } from 'react';
import API_URL from '../services/api';

function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`${API_URL}/jobs`);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error('Failed to fetch jobs', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/jobs/${id}`, {
        method: 'DELETE',
      });
      setJobs((prev) => prev.filter((job) => job._id !== id));
    } catch (error) {
      console.error('Failed to delete job', error);
    }
  };

  if (loading) return <p>Loading jobs...</p>;

  return (
    <div>
      <h2>Dashboard</h2>

      {jobs.length === 0 && <p>No job applications yet.</p>}

      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <strong>{job.company}</strong> — {job.position}
            <button onClick={() => handleDelete(job.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
