import React from "react";
import { Page, View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import { APP_COLORS } from "@/theme/colors/colors";
const sunlightFacial = "/images/sinlight.png";
const facialPeel = "/images/facial-peels-for-men.jpg";
const noMakeupGlow = "/images/no-makeup-glow.jpg";

interface CosmeticsViewProps {
  fontFamily: string;
  data: any[];
}
const CosmeticsView = ({ fontFamily, data }: CosmeticsViewProps) => {
  const styles = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "column",
      padding: 20,
    },
    pageTitle: {
      fontFamily: fontFamily,
      fontWeight: 900,
      fontSize: 26,
    },
    contentCard: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: 30,
      borderRadius: 20,
      marginBottom: 10,
    },
    contentCardImage: {
      width: "100%",
      height: "150px",
    },
    contentCardTitle: {
      fontFamily: fontFamily,
      fontSize: 20,
      fontWeight: 800,
      marginBottom: 10,
    },
    contentCardInfo: {
      fontFamily: fontFamily,
      fontSize: 14,
      fontWeight: 500,
      width: "70%",
    },
  });

  return (
    <Page style={styles.page}>
      <View style={{ width: "100%" }}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <View style={{ marginBottom: 30, marginTop: 30 }}>
            <Text style={styles.pageTitle}>
              Recommended{" "}
              <Text style={{ color: APP_COLORS.PRIMARY_COLOR }}>
                Cosmetics Services
              </Text>
            </Text>
          </View>
        </View>
      </View>
      {data?.map((item) => (
        <View style={{ ...styles.contentCard, backgroundColor: "#D4E6F1" }}>
          <View
            style={{
              width: 175,
              height: 175,
              overflow: "hidden",
              borderRadius: "100%",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={{
                uri: item?.images[0]?.url,
                method: "GET",
                headers: { "Cache-Control": "no-cache" },
                body: "",
              }}
            />
          </View>
          <View style={{ flex: 1, paddingLeft: 50 }}>
            <View>
              <Text style={styles.contentCardTitle}> {item.name}</Text>
            </View>
            <View>
              <Text style={styles.contentCardInfo}>
                {item?.description}
              </Text>
            </View>
            <View>
              <Text style={styles.contentCardInfo}>
                Rs.{item?.price}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </Page>
  );
};

export default CosmeticsView;
