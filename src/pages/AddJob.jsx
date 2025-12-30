import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiFetch } from '../services/apiClient';
import Button from '../components/Button';
import './AddJob.css'

function AddJob() {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('applied');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!company.trim() || !position.trim()) {
      alert('Company and position are required');
      return;
    }

    try {
      setLoading(true);

      await apiFetch('/jobs', {
        method: 'POST',
        body: JSON.stringify({
          company,
          position,
          status
        }),
      });

      navigate('/dashboard');
    } catch (error) {
      setError('Failed to add job.');
      console.error('Failed to add job', error);
    }
  };

  return (
    <>
      <title>Add Job | ApplyHub | One place for every application</title>

      <div className='container-fluid add-job global'>
        <div className='container'>
          <div className="row">
            <div className='col-12 content-1'>
              <h1>Add Job</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to='/dashboard'>Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">Add Job</li>
                </ol>
              </nav>
            </div>
            <div className='col-12 col-lg-5 col-xxl-4 content-2'>
              <div className='card'>
                <div className='card-body'>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="company" className='form-label'>Company</label>
                      <input
                        type="text"
                        className="form-control shadow-none"
                        id="company"
                        placeholder="Company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="position" className='form-label'>Possition</label>
                      <input
                        type="text"
                        className="form-control shadow-none"
                        id="position"
                        placeholder="Position"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        required
                      />
                    </div>
                    <div className='mb-4'>
                      <label htmlFor="status" className='form-label'>Status</label>
                      <select
                        className='form-select shadow-none'
                        value={status}
                        onChange={(e) => setStatus(e.target.value) }
                        id='status'
                      >
                        <option value="applied">Applied</option>
                        <option value="interview">Interview</option>
                        <option value="offer">Offer</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </div>
                    {error && <h6 className='error-msg'>{error}</h6>}
                    <Button type="submit" className='job-btn' disabled={loading}>
                      {loading ? 'Please wait...' : 'Add Job'}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-7 col-xxl-8 content-3'>
              <img src="images/add-job.svg" className='img-fluid' alt="ApplyHub" />
              <p>One place for every application.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddJob;
