import { useFormik } from "formik";
import { useState } from "react";
// material
import { Container, Stack, Typography } from "@mui/material";
// components
import Page from "../components/Page";
import { ProductList } from "../sections/@dashboard/products";
//
import PRODUCTS from "../_mocks_/products";

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);

  const formik = useFormik({
    initialValues: {
      gender: "",
      category: "",
      colors: "",
      priceRange: "",
      rating: "",
    },
    onSubmit: () => {
      setOpenFilter(false);
    },
  });

  const { resetForm, handleSubmit } = formik;

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleResetFilter = () => {
    handleSubmit();
    resetForm();
  };

  return (
    <Page title="Dashboard: Products">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>

        <ProductList products={PRODUCTS} />
      </Container>
    </Page>
  );
}
