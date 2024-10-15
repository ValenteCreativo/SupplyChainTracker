const DashboardNav: React.FC = () => {
    return (
      <nav>
        <ul>
          <li className="mb-2">
            <a href="#" className="text-white hover:text-purple-400">
              Donation History
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white hover:text-purple-400">
              Supply Chain Overview
            </a>
          </li>
          {/* Add more links */}
        </ul>
      </nav>
    );
  };
  
  export default DashboardNav;
  