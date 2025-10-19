import { useEffect, useState } from "react";

export default function IssueList() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const res = await fetch("http://localhost:5000/issues");
        const data = await res.json();
        setIssues(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchIssues();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-6">
      <h2 className="text-xl mb-4">All Issues</h2>
      {issues.map(issue => (
        <div key={issue.id} className="p-4 bg-white rounded shadow mb-2">
          <b>{issue.description}</b> <br/>
          Status: {issue.status} <br/>
          Category: {issue.category} <br/>
          Submitted by: {issue.name} ({issue.department})
        </div>
      ))}
    </div>
  );
}
