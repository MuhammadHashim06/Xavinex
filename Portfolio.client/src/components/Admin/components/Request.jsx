// Request.jsx

import  { useState, useEffect } from 'react';
import './request.css'; // Import styles for the request list

function RequestList() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('http://localhost:5000/request/get'); // Replace with the actual API endpoint
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setRequests(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) {
    return <div className="request-list"><p>Loading...</p></div>;
  }

  if (error) {
    return <div className="request-list"><p>Error: {error}</p></div>;
  }

  return (
    <div className="requestcomp">
      <h2>Requests</h2>
      <div className="request-list">
      {requests.map((request, index) => (
        <div key={index} className="request-card">
          <p><strong>Name:</strong> {request.name}</p>
          <p><strong>Email:</strong> {request.email}</p>
          <p><strong>Phone:</strong> {request.phone}</p>
          <p><strong>Help Option:</strong> {request.helpOption}</p>
          <p><strong>Project Details:</strong> {request.projectDetails}</p>
          <p><strong>Created At:</strong> {new Date(request.createdAt).toLocaleString()}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default RequestList;
