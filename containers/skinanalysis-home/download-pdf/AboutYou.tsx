"use client";
import { Page, View, Image, Text, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import { Session } from "next-auth";

interface AboutYouProps {
  fontFamily: string;
  dataImageInfo: any;
  data: any;
}

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  image: {
    width: 200,
  },
});

const AboutYou = ({ fontFamily, dataImageInfo, data }: AboutYouProps) => {
  return (
    <Page size="A4" style={{ ...styles.page, backgroundColor: "#81c784" }}>
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
        <View style={{ marginBottom: 30 }}>
          <Text
            style={{
              fontFamily: fontFamily,
              fontWeight: 900,
              fontSize: 26,
            }}
          >
            About You
          </Text>
        </View>
        <View
          style={{
            width: 150,
            height: 150,
            overflow: "hidden",
            borderRadius: "100%",
            marginBottom: 50,
          }}
        >
          <Image
            src={{
              uri: dataImageInfo?.data?.url,
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
        <View style={{ width: "100%" }}>
          <Text
            style={{
              fontFamily: fontFamily,
              fontSize: 14,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Full Name
          </Text>
          <Text
            style={{
              fontFamily: fontFamily,
              fontSize: 20,
              fontWeight: 600,
              textAlign: "center",
              marginTop: 6,
            }}
          >
            {data?.user?.name}
          </Text>
        </View>
        <View style={{ width: "100%", marginTop: 20 }}>
          <Text
            style={{
              fontFamily: fontFamily,
              fontSize: 14,
              fontWeight: 500,
              //color: "#9e9e9e",
              textAlign: "center",
            }}
          >
            Age Group
          </Text>
          <Text
            style={{
              fontFamily: fontFamily,
              fontSize: 20,
              fontWeight: 600,
              textAlign: "center",
              marginTop: 6,
            }}
          >
            {data?.user?.onBoardingQuestions?.[1]?.responses?.[0]?.value}
          </Text>
        </View>
        <View style={{ width: "100%", marginTop: 20 }}>
          <Text
            style={{
              fontFamily: fontFamily,
              fontSize: 14,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Phone Number
          </Text>
          <Text
            style={{
              fontFamily: fontFamily,
              fontSize: 20,
              fontWeight: 600,
              textAlign: "center",
              marginTop: 6,
            }}
          >
            {data?.user?.phoneNumber}
          </Text>
        </View>
        <View style={{ width: "100%", marginTop: 20 }}>
          <Text
            style={{
              fontFamily: fontFamily,
              fontSize: 14,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Gender
          </Text>
          <Text
            style={{
              fontFamily: fontFamily,
              fontSize: 20,
              fontWeight: 600,
              textAlign: "center",
              marginTop: 6,
            }}
          >
            {data?.user?.onBoardingQuestions?.[0]?.responses?.[0]?.value}
          </Text>
        </View>
        <View style={{ width: "100%", marginTop: 20 }}>
          <Text
            style={{
              fontFamily: fontFamily,
              fontSize: 14,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            NIL
          </Text>
          <Text
            style={{
              fontFamily: fontFamily,
              fontSize: 20,
              fontWeight: 600,
              textAlign: "center",
              marginTop: 6,
            }}
          >
            Medications & Allergies
          </Text>
        </View>
      </View>
    </Page>
  );
};

export default AboutYou;
