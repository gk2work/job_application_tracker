import React, { useEffect, useState } from "react";
import "./Analytics.css";

const Analytics = () => {
  const [statusCounts, setStatusCounts] = useState({
    totalApplications: 0,
    inProgress: 0,
    accepted: 0,
    rejected: 0,
  });

  useEffect(() => {
    const applicationData = JSON.parse(localStorage.getItem("applicationData"));

    if (applicationData) {
      // Calculate the status counts
      const totalApplications = applicationData.length;
      const inProgress = applicationData.filter(
        (item) => item.status === "In Progress"
      ).length;
      const accepted = applicationData.filter(
        (item) => item.status === "Accepted"
      ).length;
      const rejected = applicationData.filter(
        (item) => item.status === "Rejected"
      ).length;

      setStatusCounts({
        totalApplications,
        inProgress,
        accepted,
        rejected,
      });
    }
  }, []);

  const cardData = [
    {
      title: "Total Applications",
      icon: "📄",
      count: statusCounts.totalApplications,
      bgColor: "#dbeafe",
    },
    {
      title: "In-progress",
      icon: "⏳",
      count: statusCounts.inProgress,
      bgColor: "#fdf8c2",
    },
    {
      title: "Accepted",
      icon: "✅",
      count: statusCounts.accepted,
      bgColor: "#dcfce6",
    },
    {
      title: "Rejected",
      icon: "❌",
      count: statusCounts.rejected,
      bgColor: "#fee2e2",
    },
  ];

  return (
    <div className="container mt-2">
      <h4 className="my-2 px-2">Analytics Overview</h4>
      <div className="row g-3">
        {cardData.map((card, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3">
            <div className="analytics-card p-3 shadow-sm d-flex align-items-center">
              <div className="left-column">
                <h5 className="card-title mb-2">{card.title}</h5>
                <h2 className="card-number">{card.count}</h2>
              </div>
              <div
                className="right-column d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: card.bgColor,
                  borderRadius: "10px",
                }}
              >
                <span className="card-icon">{card.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
