import React from "react";
import { Page, View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import { APP_COLORS } from "@/theme/colors/colors";
const belina = "/images/belna.png";
interface TeamViewProps {
  fontFamily: string;
}

const TeamView = ({ fontFamily }: TeamViewProps) => {
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
      textAlign: "center",
      marginBottom: 6,
    },
    pageSubTitle: {
      fontFamily: fontFamily,
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
    },
    pageContent: {
      fontFamily: fontFamily,
      fontWeight: 500,
      fontSize: 14,
      textAlign: "justify",
      paddingLeft: 30,
      paddingRight: 30,
    },
    teamImage: {
      flex: 1,
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
    teamContent: {
      flex: 1,
      width: "100%",
      padding: 20,
      paddingTop: 30,
    },
  });

  return (
    <Page size="A4" style={{ ...styles.page }}>
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
              Meet The{" "}
              <Text style={{ color: APP_COLORS.PRIMARY_COLOR }}>Team</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.teamImage}>
        <Image
          style={{ width: "100%", height: 400, objectFit: "cover" }}
          src={belina}
        />
      </View>
      <View style={styles.teamContent}>
        <View style={{ width: "100%" }}>
          <Text style={styles.pageTitle}>
            Dr . Bilna{" "}
            <Text style={{ color: APP_COLORS.PRIMARY_COLOR }}>Eldhose</Text>
          </Text>
        </View>
        <View style={{ width: "100%" }}>
          <Text style={styles.pageSubTitle}>Skin And Hair Cosmetologist</Text>
        </View>
        <View style={{ width: "100%", marginTop: 30 }}>
          <Text style={styles.pageContent}>
            Dr. Bilna Eldhose is our Skin and Hair Cosmetologist, combined with
            medical expertise and a passion for beauty. She helps you to achieve
            radiant healthy skin and luscious looks. Your journey to confidence
            starts here. She is a core team member of Leaf Water,The Polished &
            Style club.
          </Text>
        </View>
        <View style={{ width: "100%", marginTop: 10 }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: fontFamily,
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            SKIN | HAIR | DENTAL
          </Text>
        </View>
      </View>
    </Page>
  );
};

export default TeamView;
