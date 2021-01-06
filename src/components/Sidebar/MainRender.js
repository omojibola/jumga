import OwnedProductsPage from '../../Pages/OwnedProductsPage';
import DashboardCard from '../Dashboard/DashboardCard';

export const renderPage = () => {
  if (window.location.pathname === '/dashboard') {
    return <DashboardCard />;
  }
  if (window.location.pathname === '/my-products') {
    return <OwnedProductsPage />;
  }
};
