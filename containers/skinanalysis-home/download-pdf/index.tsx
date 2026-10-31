import React, { Fragment, useEffect } from "react";
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
import { APP_COLORS } from "@/theme/colors/colors";
import CoverView from "../pdf/CoverView";
import RoutineView from "../pdf/RoutineView";
import SalonServiceView from "../pdf/SalonServiceView";
import CosmeticsView from "../pdf/CosmeticsView";
import DietView from "../pdf/DietView";
import TeamView from "../pdf/TeamView";
import AboutYou from "./AboutYou";
import { useGetUploadImageInfoMutation } from "@/redux/api/analysisApi";
import _ from "lodash";

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
    fontSize: 18,
    fontWeight: 800,
    color: APP_COLORS.PRIMARY_COLOR,
  },
  productCardMatches: {
    fontFamily: defaultFont,
    fontSize: 12,
    fontWeight: 600,
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

interface DownloadPdfProps {
  recommendationData: any;
  dataImageInfo: any;
}

const DownloadPdf = ({
  recommendationData,
  dataImageInfo,
}: DownloadPdfProps) => {
  const [
    getUploadImageInfo,
    { data: dataAnalysedImageInfo, isLoading: isLoadingImageInfo },
  ] = useGetUploadImageInfoMutation();

  useEffect(() => {
    if (!_.isEmpty(recommendationData)) {
      getUploadImageInfo({
        userId: recommendationData?.user?._id,
        fileName:
          recommendationData?.productRecommendation?.analysedImages[0]
            ?.fileName,
      });
    }
  }, [recommendationData]);

  return (
    <PDFDownloadLink
      document={
        <Document>
          <CoverView fontFamily={defaultFont} />
          <AboutYou
            data={recommendationData}
            fontFamily={defaultFont}
            dataImageInfo={dataImageInfo}
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
                  To Get {" "}
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
                   src={{
                    uri: dataAnalysedImageInfo?.data?.url,
                    method: "GET",
                    headers: { "Cache-Control": "no-cache" },
                    body: "",
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </View>

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
                  Skin Analysis Summary
                </Text>
              </View>
              <View>
                {recommendationData?.productRecommendation?.detectedAttributes?.map(
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

            {recommendationData?.productRecommendation?.recommendedProducts?.highRecommendation.map(
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
                    <View key={item?._id} style={styles.productCardWrapper}>
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
                              {item.name}
                            </Text>
                            <Text style={styles.productCardInfo}>
                              {item.productUse}
                            </Text>
                          </View>
                          {/* <View style={{ paddingRight: 15 }}>
                            <Text style={styles.productCardPrice}>
                              INR {item.retailPrice} /-
                            </Text>
                          </View> */}
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
                            {item?.matches?.[0]?.name}
                          </Text>
                        </View>
                      </View>
                    </View>
                  ))}
                </Fragment>
              )
            )}
            {recommendationData?.productRecommendation?.recommendedProducts
              ?.lowRecommendation.length > 0 && (
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
                {recommendationData?.productRecommendation?.recommendedProducts?.lowRecommendation.map(
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
                        <View key={item?._id} style={styles.productCardWrapper}>
                          <View style={styles.productCardImage}>
                            <Image
                              src={{
                                uri: item?.images[0]?.url,
                                method: "GET",
                                headers: { "Cache-Control": "no-cache" },
                                body: "",
                              }}
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
                              <View style={{ paddingRight: 15 }}>
                                <Text style={styles.productCardPrice}>
                                  INR {item?.retailPrice} /-
                                </Text>
                              </View>
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
        <SalonServiceView data={recommendationData?.recommendedSalonServices || []} fontFamily={defaultFont} />
        <CosmeticsView fontFamily={defaultFont} data={recommendationData?.recommendedCosmeticServices || []} />
          <DietView fontFamily={defaultFont} />
          <TeamView fontFamily={defaultFont} />
        </Document>
      }
      fileName={`${recommendationData?.user?.name}.pdf`}
    >
      {({ loading }) => (loading ? "Loading document..." : "Download now")}
    </PDFDownloadLink>
  );
};

export default DownloadPdf;
