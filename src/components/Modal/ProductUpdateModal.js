import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Alert } from 'reactstrap';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import * as Yup from 'yup';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '50%',
  },
}));

const ProductSchema = Yup.object().shape({
  productName: Yup.string().required('Product name is required'),
  description: Yup.string().required('Description is required'),
  price: Yup.string().required('Price is required'),
});

const ProductUpdateModal = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  // SKIP FIRST RENDER
  const useEffectSkip = (fn, dependencies) => {
    const didMountRef = useRef(false);

    useEffect(() => {
      if (didMountRef.current) {
        fn();
      } else {
        didMountRef.current = true;
      }
    }, [dependencies]);
  };

  const showSuccessNotification = () => {
    if (!loading && !error) {
      return <Alert color="success">Product Added Successfully</Alert>;
    }
  };
  useEffectSkip(showSuccessNotification, loading);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <FormHeaderText>Add Product</FormHeaderText>
            {error && <Alert color="danger">{error}</Alert>}
            {show && <Alert color="success">Product Added Successfully</Alert>}

            <FormContainer
              initialValues={{
                productName: '',
                price: '',
                title: '',
                description: '',
                productImage: '',
              }}
              validationSchema={ProductSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                await startAddProduct(values);
                resetForm();
                setSubmitting(false);
                if (!error && !loading) {
                  setShow(true);
                }
                setTimeout(() => {
                  setShow(false);
                }, 2000);
              }}
            >
              {({
                isSubmitting,
                isValid,
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
              }) => (
                <StyledForm onSubmit={handleSubmit}>
                  <Label>Product Name</Label>
                  <FormInput
                    type="text"
                    name="productName"
                    placeholder="Product Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.productName}
                  />
                  <ErrorWrapper>
                    <Error name="productName" />
                  </ErrorWrapper>

                  <Label>Price</Label>
                  <FormInput
                    type="number"
                    name="price"
                    placeholder="Price in USD"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                  />
                  <ErrorWrapper>
                    <Error name="price" />
                  </ErrorWrapper>
                  <Label>Description</Label>
                  <TextArea
                    cols={40}
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  />
                  <ErrorWrapper>
                    <Error name="description" />
                  </ErrorWrapper>
                  <Label>Product Image</Label>
                  <FormInput
                    type="file"
                    name="productImage"
                    id="file"
                    onChange={(event) => {
                      setFieldValue(
                        'productImage',
                        event.currentTarget.files[0]
                      );
                    }}
                    onBlur={handleBlur}
                  />
                  <SubmitButton type="submit" disabled={isSubmitting}>
                    {loading ? 'Submitting...' : 'Submit'}
                  </SubmitButton>
                </StyledForm>
              )}
            </FormContainer>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.products.addProduct.loading,
  error: state.products.addProduct.error,
});

const mapDispatchToProps = {
  startAddProduct: actions.addProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductUpdateModal);
