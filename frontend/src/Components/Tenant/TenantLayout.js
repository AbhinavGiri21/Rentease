
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const TenantLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-64 p-4 transition-all duration-300">
        <Outlet />
      </main>
    </div>
  );
};

export default TenantLayout;
