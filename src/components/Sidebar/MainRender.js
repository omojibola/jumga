import OwnedProductsPage from '../../Pages/OwnedProductsPage';
import DashboardCard from '../Dashboard/DashboardCard';
import OwnedProducts from '../Product/OwnedProducts';

export const renderPage = () => {
  if (window.location.pathname === '/dashboard') {
    return <DashboardCard />;
  } else if (window.location.pathname === '/my-products') {
    return <OwnedProducts />;
  }
};
