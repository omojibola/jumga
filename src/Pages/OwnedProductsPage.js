import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import OwnedProducts from '../components/Product/OwnedProducts';
import Loader from '../components/Loader/Loader';
import Sidebar from '../components/Sidebar/Sidebar';
import { connect } from 'react-redux';
import * as actions from '../store/actions/productActions';
import OwnedProductList from '../components/Product/OwnedProductList';
import { Grid } from '../components/Product/ProductElements';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    border: 'none',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const OwnedProductsPage = ({ startFetchProduct, products, loading }) => {
  const [productItems, setProductItems] = useState([]);

  //fetch all products

  const fetchProductDetails = async () => {
    await startFetchProduct();
  };
  useEffect(() => {
    fetchProductDetails();
  }, []);

  //set products into state
  useEffect(() => {
    if (products.length > 0) {
      setProductItems(products);
    }
  }, [products]);

  // render product items

  const renderProductItems = () => {
    if (loading) {
      return (
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Loader />
        </div>
      );
    }

    if (productItems.length < 1) {
      return (
        <h3 style={{ color: 'var(--color-main)', textAlign: 'center' }}>
          No products yet
        </h3>
      );
    }

    return (
      <Fragment>
        <div style={gridStyle}>
          {productItems &&
            productItems.map((item) => (
              <OwnedProductList key={item.id} item={item} />
            ))}
        </div>
      </Fragment>
    );
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <OwnedProducts />
        {renderProductItems()}
      </main>
    </div>
  );
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};
const mapStateToProps = ({ products }) => ({
  products: products.fetchProduct.data,
  loading: products.fetchProduct.loading,
});

const mapDispatchToProps = {
  startFetchProduct: actions.fetchProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(OwnedProductsPage);
