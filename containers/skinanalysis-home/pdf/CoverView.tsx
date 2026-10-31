import { Page, View, Image, Text, StyleSheet } from "@react-pdf/renderer";
import React from "react";

interface CoverViewProps {
  fontFamily: string;
}

const CoverView = ({ fontFamily }: CoverViewProps) => {
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
      height: "100%",
    },
    image: {
      width: 200,
    },
  });

  return (
    <Page size="A4" style={styles.page}>
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Image
            style={styles.image}
            src="https://i.ibb.co/0Ggbwfq/Group-360.png"
          />
        </View>
        <View></View>
      </View>
      <View
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontFamily: fontFamily,
            fontWeight: 900,
            fontSize: 35,
          }}
        >
          GET YOUR GLOW ON
        </Text>
        <Text style={{ letterSpacing: 2 }}>Analysis & Recommendations</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Image
          src="https://www.reequil.com/cdn/shop/articles/Easy_Tips_For_Men_To_Get_Glowing_Skin_desktop_reequil.jpg?v=1626343245"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </View>
    </Page>
  );
};

export default CoverView;
