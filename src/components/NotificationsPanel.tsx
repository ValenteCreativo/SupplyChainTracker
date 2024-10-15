import React from 'react';

const notifications = [
  { message: 'New donation of $500 from Alice Johnson', date: 'Oct 12, 2024' },
  { message: 'Emergency fund activated for earthquake relief', date: 'Oct 11, 2024' },
  { message: 'Monthly report for NGO Hope for Tomorrow ready', date: 'Oct 10, 2024' },
];

const NotificationsPanel: React.FC = () => {
  return (
    <div className="bg-[#F5F1E3] rounded-lg p-6 shadow-lg text-[#333]">
      <h2 className="text-xl font-semibold text-[#6D4C41] mb-4">Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-2 border-b border-gray-200"
          >
            <p className="text-sm text-gray-600">{notification.message}</p>
            <span className="text-sm text-gray-400">{notification.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPanel;
