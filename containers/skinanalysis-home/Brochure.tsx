"use client";
import {
  useGetUploadImageInfoMutation,
  useLazyFetchRecommnedSkinAttributesQuery,
  useLazyFetchUserQuestionsResponseQuery,
} from "@/redux/api/analysisApi";
import {
  Document,
  Page,
  Text,
  View,
  Font,
  StyleSheet,
  Image,
  PDFDownloadLink,
} from "@react-pdf/renderer";

import { Box, Container, styled, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import React, { Fragment, useEffect } from "react";
import { APP_COLORS } from "@/theme/colors/colors";
import LoadingComponent from "@/components/loaders/Loading";
import RoutineView from "./pdf/RoutineView";
import SalonServiceView from "./pdf/SalonServiceView";
import CosmeticsView from "./pdf/CosmeticsView";
import DietView from "./pdf/DietView";
import TeamView from "./pdf/TeamView";
import CoverView from "./pdf/CoverView";
import AboutYou from "./pdf/AboutYou";
import { Session } from "next-auth";
import { capitalizeWords } from "@/utils/func";

const defaultFont = "Roboto";
const extraBold = `/fonts/OpenSans-ExtraBold.ttf`;
const medium = `/fonts/OpenSans-Medium.ttf`;
const regular = `/fonts/OpenSans-Regular.ttf`;
const semiBold = `/fonts/OpenSans-SemiBold.ttf`;

Font.register({
  family: defaultFont,
  fonts: [
    {
      src: extraBold,
      fontWeight: 900,
      fontStyle: "normal",
    },
    {
      src: medium,
      fontWeight: 500,
      fontStyle: "normal",
    },
    {
      src: regular,
      fontWeight: 400,
      fontStyle: "normal",
    },
    {
      src: semiBold,
      fontWeight: 600,
      fontStyle: "normal",
    },
  ],
});

const StyledBrochureView = styled(Container)(({ theme }) => ({
  height: "100vh",
  position: "relative",
  overflowX: "hidden",
  overflowY: "auto",
  paddingTop: 65,

  "& .section_loading_indicator": {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& a": {
      backgroundColor: theme.palette.primary.main,
      textDecoration: "none",
      color: theme.palette.common.white,
      padding: 15,
      borderRadius: 100,
      minWidth: 200,
      textAlign: "center",
    },
  },
  "& .MuiTypography-h4": {
    fontWeight: 700,
    fontSize: 26,
  },
  "& .pdfBlureView": {
    width: 250,
    height: 350,
    //filter: `blur(8px)`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
    border: `1px solid ${theme.palette.grey[600]}`,
    marginBottom: 20,
  },
}));

const BrochureView = () => {
  const { data: session } = useSession();
  const [
    fetchUserQuestionsResponse,
    { isLoading: isLoadingFUQR, isError: isErrorFUQR, data: dataFUQR },
  ] = useLazyFetchUserQuestionsResponseQuery();
  const [fetchRecommnedSkinAttributes, { isLoading, isError, data }] =
    useLazyFetchRecommnedSkinAttributesQuery();
  const [
    getUploadImageInfo,
    { data: dataImageInfo, isLoading: isLoadingImageInfo },
  ] = useGetUploadImageInfoMutation();

  // Trigger When session changes
  useEffect(() => {
    if (session?.user) {
      fetchRecommnedSkinAttributes({
        userId: session?.user?.id as string,
      });
      getUploadImageInfo({
        userId: session?.user?.id as string,
        fileName: session?.user?.selfyImage as string,
      });
      fetchUserQuestionsResponse({
        userId: session?.user?.id as string,
      });
    }
  }, [session]);

  const styles = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "column",
      padding: 20,
    },
    pageNumber: {
      fontSize: 20,
      fontWeight: 700,
      color: "#e0e0e0",
    },
    pageHeader: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    placeHolder: {},
    section: {
      margin: 10,
      padding: 10,
    },
    viewer: {
      width: "100%", //the pdf viewer will take up all of the width and height
      height: "100vh",
    },
    image: {
      width: 200,
    },
    productCardWrapper: {
      width: "100%",
      display: "flex",
      position: "relative",
      flexDirection: "row",
      alignItems: "stretch",
      justifyContent: "center",
      borderBottom: `1px solid #ecf0f1`,
    },
    productCardImage: {
      width: 150,
      minHeight: 132,
      height: 132,
    },
    productCardContent: {
      padding: 15,
    },
    productCardTitle: {
      fontFamily: defaultFont,
      fontSize: 16,
      fontWeight: 600,
      marginBottom: 3,
    },
    productCardCategoryTitle: {
      fontSize: 16,
      fontFamily: defaultFont,
      fontWeight: 800,
    },
    productCardInfo: {
      fontFamily: defaultFont,
      fontSize: 12,
      fontWeight: 400,
      color: "#7f8c8d",
      marginBottom: 5,
    },
    productCardSubtitle: {
      fontFamily: defaultFont,
      fontSize: 14,
      fontWeight: 600,
    },
    productCardPrice: {
      fontFamily: defaultFont,
      fontSize: 16,
      fontWeight: 600,
      color: APP_COLORS.PRIMARY_COLOR,
    },
    productCardMatches: {
      fontFamily: defaultFont,
      fontSize: 12,
      fontWeight: 400,
    },
    subscriptionsWrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
    },
    subscriptionsBox: {},
    morningRoutneWrapper: {
      flex: 1,
      width: "100%",
      // backgroundColor: "#ffeaa7",
      padding: 20,
      display: "flex",
      flexDirection: "column",
    },
    nightRoutneWrapper: {
      flex: 1,
      width: "100%",
      backgroundColor: "#212121",
      padding: 20,
    },
  });

  return (
    <StyledBrochureView disableGutters maxWidth="xl">
      {(isLoadingFUQR || isLoadingImageInfo || (isLoading && !data)) && (
        <Box component="div" className="section_loading_indicator">
          <LoadingComponent />
        </Box>
      )}

      {!isLoading && data && !isLoadingImageInfo && !isLoadingFUQR && (
        <Box component="div" className="section_loading_indicator">
          <Box
            component="div"
            className="pdfBlureView"
            sx={{ backgroundImage: "url(/images/pdfview.png)" }}
          ></Box>
          <PDFDownloadLink
            document={
              <Document>
                <CoverView fontFamily={defaultFont} />
                <AboutYou
                  dataImageInfo={dataImageInfo}
                  fontFamily={defaultFont}
                  dataFUQR={dataFUQR}
                  session={session as Session}
                />
                <Page size="A4" style={{ ...styles.page }}>
                  <View
                    style={{
                      paddingTop: 50,
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <View style={{ marginBottom: 30, width: "100%" }}>
                      <Text
                        style={{
                          fontFamily: defaultFont,
                          fontWeight: 900,
                          fontSize: 26,
                          textAlign: "center",
                        }}
                      >
                        What's Preventing You
                      </Text>
                      <Text
                        style={{
                          fontFamily: defaultFont,
                          fontWeight: 900,
                          fontSize: 26,
                          textAlign: "center",
                        }}
                      >
                        To Get
                        <Text style={{ color: APP_COLORS.PRIMARY_COLOR }}>
                          Your Glow
                        </Text>{" "}
                        On
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 200,
                        height: 200,
                        overflow: "hidden",
                        borderRadius: "10px",
                        marginBottom: 20,
                      }}
                    >
                      <Image
                        src={dataImageInfo?.data?.url}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </View>
                    {session?.user?.skinType && (
                      <View style={{ width: "100%" }}>
                        <Text
                          style={{
                            fontFamily: defaultFont,
                            fontSize: 14,
                            fontWeight: 500,
                            textAlign: "center",
                          }}
                        >
                          Your Skin Type
                        </Text>
                        <Text
                          style={{
                            fontFamily: defaultFont,
                            fontSize: 20,
                            fontWeight: 600,
                            textAlign: "center",
                            marginTop: 6,
                          }}
                        >
                          {session?.user?.skinType}
                        </Text>
                      </View>
                    )}

                    <View style={{ width: "100%", marginBottom: 20 }}>
                      <Text
                        style={{
                          fontFamily: defaultFont,
                          fontSize: 20,
                          fontWeight: 600,
                          textAlign: "center",
                          marginTop: 20,

                          padding: 8,
                          color: APP_COLORS.WHITE,
                          backgroundColor: APP_COLORS.PRIMARY_COLOR,
                        }}
                      >
                        Skin Analysis Atributes
                      </Text>
                    </View>

                    <View>
                      {data?.data?.[0]?.detectedAttributes?.map(
                        (attribute: string, index: number) => (
                          <Text
                            key={index}
                            style={{
                              fontFamily: defaultFont,
                              fontSize: 16,
                              fontWeight: 500,
                              textAlign: "left",
                              marginTop: 5,
                            }}
                          >
                            {index + 1}. {attribute}
                          </Text>
                        )
                      )}
                    </View>
                  </View>
                  {data?.data?.[0]?.skinSummary && (
                    <View>
                      <View style={{ width: "100%", marginBottom: 10 }}>
                        <Text
                          style={{
                            fontFamily: defaultFont,
                            fontSize: 20,
                            fontWeight: 600,
                            textAlign: "center",

                            padding: 8,
                            color: APP_COLORS.WHITE,
                            backgroundColor: APP_COLORS.PRIMARY_COLOR,
                          }}
                        >
                          Skin Analysis Summary
                        </Text>
                      </View>
                      <View style={{ width: "100%" }}>
                        <Text
                          style={{
                            fontFamily: defaultFont,
                            fontSize: 16,
                            fontWeight: 400,
                            textAlign: "center",

                            padding: 8,
                          }}
                        >
                          {data?.data?.[0]?.skinSummary}
                        </Text>
                      </View>
                    </View>
                  )}
                </Page>
                <Page size="A4" style={{ ...styles.page }}>
                  <View
                    style={{
                      paddingTop: 30,
                      paddingBottom: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <View style={{ marginBottom: 20, width: "100%" }}>
                      <Text
                        style={{
                          fontFamily: defaultFont,
                          fontWeight: 900,
                          fontSize: 26,
                          textAlign: "center",
                        }}
                      >
                        Our{" "}
                        <Text style={{ color: APP_COLORS.PRIMARY_COLOR }}>
                          Recommendations
                        </Text>
                      </Text>
                      <Text
                        style={{
                          fontFamily: defaultFont,
                          fontWeight: 900,
                          fontSize: 26,
                          textAlign: "center",
                        }}
                      >
                        To Get Your Glow On
                      </Text>
                    </View>
                  </View>
                  <View style={{ width: "100%", marginBottom: 5 }}>
                    <Text
                      style={{
                        fontFamily: defaultFont,
                        fontSize: 16,
                        fontWeight: 400,
                        textAlign: "center",
                        marginTop: 0,
                        padding: 8,
                        color: APP_COLORS.WHITE,
                        backgroundColor: APP_COLORS.PRIMARY_COLOR,
                      }}
                    >
                      Highly Recommended Products
                    </Text>
                  </View>

                  {data?.data?.[0]?.recommendedProducts?.highRecommendation.map(
                    (product: any, index: number) => (
                      <Fragment key={index}>
                        <View
                          style={{
                            width: "100%",
                            marginTop: 15,
                            marginBottom: 15,
                          }}
                        >
                          <Text style={styles.productCardCategoryTitle}>
                            {product.productCategory.title}
                          </Text>
                        </View>
                        {product?.products.map((item: any) => (
                          <View
                            key={item?._id}
                            style={styles.productCardWrapper}
                          >
                            <View style={styles.productCardImage}>
                              <Image
                                src={{
                                  uri: item?.images[0]?.url,
                                  method: "GET",
                                  headers: { "Cache-Control": "no-cache" },
                                  body: "",
                                }}
                                //src={{uri:"https://skin-care--products.s3.eu-north-1.amazonaws.com/O3%2B+Vit+C+serum.jpg"}}
                                style={{
                                  width: "100%",
                                  objectFit: "cover",
                                  height: "100%",
                                }}
                              />
                            </View>
                            <View style={styles.productCardContent}>
                              <View
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "flex-start",
                                  justifyContent: "space-between",
                                }}
                              >
                                <View style={{ width: "100%" }}>
                                  <Text style={styles.productCardTitle}>
                                    {capitalizeWords(item?.name)}
                                  </Text>
                                  <Text style={styles.productCardInfo}>
                                    {item.productUse}
                                  </Text>
                                </View>
                                
                              </View>

                              {item.productBenefits && (
                                <Fragment>
                                  <Text style={styles.productCardSubtitle}>
                                    Benfits
                                  </Text>
                                  <Text style={styles.productCardInfo}>
                                    {item.productBenefits}
                                  </Text>
                                </Fragment>
                              )}
                              <View style={{ paddingRight: 15 }}>
                                  <Text style={styles.productCardPrice}>
                                    INR {item.retailPrice} /-
                                  </Text>
                                </View>

                              <View>
                                <Text style={styles.productCardMatches}>
                                  {item?.matches?.[0]?.name?.replace("_", " ")}
                                </Text>
                              </View>
                            </View>
                          </View>
                        ))}
                      </Fragment>
                    )
                  )}
                  {data?.data?.[0]?.recommendedProducts?.lowRecommendation
                    .length > 0 && (
                    <Fragment>
                      <View style={{ width: "100%", marginBottom: 5 }}>
                        <Text
                          style={{
                            fontFamily: defaultFont,
                            fontSize: 16,
                            fontWeight: 400,
                            textAlign: "center",
                            marginTop: 0,
                            padding: 8,
                            color: APP_COLORS.WHITE,
                            backgroundColor: APP_COLORS.DISABLED_COLOR,
                          }}
                        >
                          Low Recommended Products
                        </Text>
                      </View>
                      {data?.recommendedProducts?.lowRecommendation.map(
                        (product: any, index: number) => (
                          <Fragment key={index}>
                            <View
                              style={{
                                width: "100%",
                                marginTop: 15,
                                marginBottom: 15,
                              }}
                            >
                              <Text style={styles.productCardCategoryTitle}>
                                {product?.productCategory?.title}
                              </Text>
                            </View>
                            {product?.products?.map((item: any) => (
                              <View
                                key={item?._id}
                                style={styles.productCardWrapper}
                              >
                                <View style={styles.productCardImage}>
                                  <Image
                                    src="https://www.reequil.com/cdn/shop/articles/Easy_Tips_For_Men_To_Get_Glowing_Skin_desktop_reequil.jpg?v=1626343245"
                                    style={{
                                      width: "100%",
                                      objectFit: "cover",
                                      height: "100%",
                                    }}
                                  />
                                </View>
                                <View style={styles.productCardContent}>
                                  <View
                                    style={{
                                      width: "100%",
                                      display: "flex",
                                      flexDirection: "row",
                                      alignItems: "flex-start",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <View style={{ width: "100%" }}>
                                      <Text style={styles.productCardTitle}>
                                        {item?.name}
                                      </Text>
                                      <Text style={styles.productCardInfo}>
                                        {item?.productUse}
                                      </Text>
                                    </View>
                                    {/* <View style={{ paddingRight: 15 }}>
                                      <Text style={styles.productCardPrice}>
                                        INR {item?.retailPrice} /-
                                      </Text>
                                    </View> */}
                                  </View>

                                  {item?.productBenefits && (
                                    <Fragment>
                                      <Text style={styles.productCardSubtitle}>
                                        Benfits
                                      </Text>
                                      <Text style={styles.productCardInfo}>
                                        {item.productBenefits}
                                      </Text>
                                    </Fragment>
                                  )}
                                   <View style={{ paddingBottom: 15 }}>
                                    <Text style={styles.productCardPrice}>
                                      INR {item?.retailPrice} /-
                                    </Text>
                                  </View>

                                  <View>
                                    <Text style={styles.productCardMatches}>
                                      {item?.matches?.[0]?.name}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            ))}
                          </Fragment>
                        )
                      )}
                    </Fragment>
                  )}
                </Page>
                <RoutineView fontFamily={defaultFont} />
                <SalonServiceView
                  data={data?.data?.[0]?.recommendedSalonServices || []}
                  fontFamily={defaultFont}
                />
                <CosmeticsView
                  fontFamily={defaultFont}
                  data={data?.data?.[0]?.recommendedCosmeticServices || []}
                />
                <DietView fontFamily={defaultFont} />
                <TeamView fontFamily={defaultFont} />
              </Document>
            }
            fileName={`${session?.user?.firstName}.pdf`}
          >
            {({ loading }) =>
              loading ? "Loading document..." : "Download now"
            }
          </PDFDownloadLink>
        </Box>
      )}

      {!isLoadingFUQR && !isLoadingImageInfo && !isLoading && !data && (
        <Box component="div" className="section_loading_indicator">
          <img src="/icons/no-content.png" />
          <Typography fontWeight={700} textAlign="center" variant="h6">
            No Recommendations Found!
          </Typography>
          <Typography textAlign="center">
            Sorry, we couldn't find ay results
          </Typography>
        </Box>
      )}
    </StyledBrochureView>
  );
};

export default BrochureView;
