import { Grid, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import React, { Fragment, useState } from "react";
import ProductCard from "../Recommendations/ProductCard";
import BundleCard from "../Recommendations/BubdleCard";
import CategoryTabs from "../Recommendations/CategoryTabs";
import Sticky from "react-sticky-el";


const StyledProductsWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingTop: 75,
  paddingBottom: 75,
  minHeight: 400,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "& .user_profile_image": {
    width: 300,
    height: 350,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 20,
    border: `5px solid ${theme.palette.common.white}`,
    boxShadow: `0px 0px 65px -28px rgba(0,0,0,0.75)`,
  },
  "& .MuiTypography-h5": {
    fontWeight: 800,
    textTransform: "uppercase",
    color: theme.palette.grey[900],
  },
  "& .MuiTypography-h6": {
    fontWeight: 800,
    fontSize: 25,
  },
  "& .MuiTypography-h3": {
    fontWeight: 800,
  },
  "& .MuiTypography-subtitle1": {
    fontWeight: 400,
  },
  "& span": {
    color: theme.palette.primary.main,
    marginRight: 10,
  },
  "& .skin-analysis-result": {
    width: "100%",
    display: "flex",
    flexWrap: "warp",
    overflow: "auto",
  },
  "& .sticky_nav": {
    position: "sticky",
    top: `64px !important`,
    zIndex: 1,
  },
}));

interface ProductsViewProps {
  data: any;
  isAdminView?: boolean;
}

const ProductsView = ({ data, isAdminView = false }: ProductsViewProps) => {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const checkIsMaskedProducts = (index: number) => {
    if (isAdminView || data?.data?.user?.isPremiumCustomer) {
      return false;
    } else {
      if (index > 0) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <StyledProductsWrapper>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Box mb={8}>
              <Typography gutterBottom textAlign="center" variant="h5">
                Our Recommendations
              </Typography>
              <Typography textAlign="center" variant="h3">
                To<span> Get Your Glow</span>On
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box pt={5} component="div" className="scrollarea">
          {data?.data?.productRecommendation?.recommendedProductBundles
            ?.length > 0 && (
            <Fragment>
              <Grid container>
                <Grid item xs={12}>
                  <Box mb={3} mt={3}>
                    <Typography variant="h6">
                      Recommended Product Bundles
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box mb={5}>
              <Grid container spacing={2}>
                {data?.data?.productRecommendation?.recommendedProductBundles.map(
                  (bundle: any) => (
                    <Grid key={bundle?._id} item xs={6} md={4}>
                      <BundleCard {...bundle} />
                    </Grid>
                  )
                )}
              </Grid>
              </Box>
              
            </Fragment>
          )}

          <Sticky
            boundaryElement=".scrollarea"
            hideOnBoundaryHit={false}
            stickyClassName="sticky_nav"
          >
            <Paper>
              <CategoryTabs
                data={data?.data?.productRecommendation?.recommendedProducts?.highRecommendation}
                onChangeTab={(event, value) => {
                 setSelectedTab(value);
                }}
                activeTab={selectedTab}
              />
            </Paper>
          </Sticky>

          {[data?.data?.productRecommendation?.recommendedProducts?.highRecommendation[selectedTab]]?.map(
            (recommended: any) => (
              <Grid container key={recommended?.productCategory?._id}>
                <Grid item xs={12}>
                  <Box mb={3} mt={3}>
                    <Typography variant="h6">
                      {recommended?.productCategory?.title}
                    </Typography>
                  </Box>
                </Grid>

                {isMobile && (
                  <Grid item xs={12}>
                    <Box component="div" className="skin-analysis-result">
                      {recommended?.products?.slice(0, 3).map(
                        (product: any, index: number) => (
                          <ProductCard
                            key={index}
                            minWidth={300}
                            {...product}
                            enabledMask={
                              isAdminView
                              ? false
                              : data?.data?.user?.isPremiumCustomer
                                ? false
                                : index > 0
                            }
                          />
                        )
                      )}
                    </Box>
                  </Grid>
                )}
                {!isMobile && (
                  <Grid container spacing={2} item xs={12} alignItems="stretch">
                    {recommended?.products?.slice(0, 3).map(
                      (product: any, index: number) => (
                        <Grid key={product?._id} item xs={6} md={4}>
                          <ProductCard
                            {...product}
                            enabledMask={
                              isAdminView
                              ? false
                              : data?.data?.user?.isPremiumCustomer
                                ? false
                                : index > 0
                            }
                          />
                        </Grid>
                      )
                    )}
                  </Grid>
                )}
              </Grid>
            )
          )}
        </Box>
      </Container>
    </StyledProductsWrapper>
  );
};

export default ProductsView;
