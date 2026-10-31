import { Page, View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import React, { Fragment } from "react";
const tickMark = `/icons/accept.png`;

interface RoutineViewProps {
  fontFamily: any;
}

interface RoutineItem {
  title: string;
  titleColor?: string;
}

const data = ["Face wash and cleansing", "Toner", "Day Cream", "Sunscreen"];
const nightRoutine = ["Cleanser", "Toner", "Serum","Night Cream","Scrub (Twice Weekly)"];


const RoutineView = ({ fontFamily }: RoutineViewProps) => {
  const styles = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "column",
      padding: 20,
    },
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

  const RoutineItem = ({ titleColor, title }: RoutineItem) => {
    return (
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <View style={{ marginRight: 10 }}>
          <Image style={{ width: 20, height: 20 }} src={tickMark} />
        </View>
        <View>
          <Text
            style={{
              fontFamily: fontFamily,
              fontWeight: 500,
              color: titleColor,
            }}
          >
            {title}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <Fragment>
      <Page size="A4" style={styles.page}>
        <View style={styles.morningRoutneWrapper}>
          <View style={{ marginBottom: 20, width: "100%" }}>
            <Text
              style={{
                fontFamily: fontFamily,
                fontWeight: 900,
                fontSize: 26,
                textAlign: "center",
              }}
            >
              Morning Routine
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 200,
                height: 250,
                borderRadius: 30,
                overflow: "hidden",
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                src="https://asianbeautyessentials.com/cdn/shop/articles/AdobeStock_101203132_1024x.jpg?v=1648562308"
              />
            </View>
            <View style={{ flex: 1, paddingLeft: 40 }}>
              {data.map((item) => (
                <RoutineItem key={item} title={item}/>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.nightRoutneWrapper}>
          <View style={{ marginBottom: 30, width: "100%" }}>
            <Text
              style={{
                fontFamily: fontFamily,
                fontWeight: 900,
                fontSize: 26,
                textAlign: "center",
                color: "white",
              }}
            >
              Night Routine
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
              <View style={{ flex: 1, paddingLeft: 40 }}>
              {nightRoutine.map((item) => (
                <RoutineItem key={item} title={item} titleColor="white"/>
              ))}
            </View>
            <View
              style={{
                width: 200,
                height: 250,
                borderRadius: 30,
                overflow: "hidden",
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                src="https://asianbeautyessentials.com/cdn/shop/articles/AdobeStock_101203132_1024x.jpg?v=1648562308"
              />
            </View>
          
          </View>
        </View>
      </Page>
    </Fragment>
  );
};

export default RoutineView;
