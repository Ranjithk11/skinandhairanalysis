import React from "react";
import { Page, View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import { APP_COLORS } from "@/theme/colors/colors";
import _ from "lodash";
const instaGlow = "/images/insta_glow.jpg";
const goldenMask = "/images/goldenmask.jpg";
const faceneck = "/images/face_neck.jpg";

interface SalonServiceViewProps {
  fontFamily: string;
  data: any[];
}
const SalonServiceView = ({ fontFamily, data }: SalonServiceViewProps) => {
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
                Salon Services
              </Text>
            </Text>
          </View>
        </View>
      </View>

      {data?.map((itm: any) => (
        <View key={itm?._id} style={{ ...styles.contentCard, backgroundColor: "#87d37c" }}>
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
                uri: itm?.images?.[0]?.url,
                method: "GET",
                headers: { "Cache-Control": "no-cache" },
                body: "",
              }}
            />
          </View>
          <View style={{ flex: 1, paddingLeft: 50 }}>
            <View>
              <Text style={styles.contentCardTitle}>{itm?.name}</Text>
            </View>
            <View>
              <Text style={styles.contentCardInfo}>
                {itm?.description}
              </Text>
            </View>
            <View>
              <Text style={styles.contentCardInfo}>
               Rs.{itm?.price}/-
              </Text>
            </View>
          </View>
        </View>
      ))}
    </Page>
  );
};

export default SalonServiceView;
