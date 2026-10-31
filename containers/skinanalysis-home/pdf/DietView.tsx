import React from "react";
import { Page, View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import { APP_COLORS } from "@/theme/colors/colors";
const breakFastIcon = "/icons/breakfast.png";
const lunchIcon = "/icons/food.png";
const dinner = "/icons/dinner.png";
interface DietViewProps {
  fontFamily: string;
}

const DietView = ({ fontFamily }: DietViewProps) => {
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
    pageContentWrapper: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
    },
    pageContentWrapperImage: {
      width: 150,
      height: "100%",
      overflow: "hidden",
      borderRadius: 10,
    },
    pageContentDietWrapper: {
      flex: 1,
      paddingLeft: 30,
      display: "flex",
      flexDirection: "column",
    },
    pageContentDietCard: {
      flex: 1,
      display: "flex",
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      padding: 30,
    },
    pageContentDietCardTitle: {
      fontSize: 18,
      fontWeight: 800,
      marginBottom: 5,
      fontFamily: fontFamily,
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
                Diet Chart
              </Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.pageContentWrapper}>
        <View style={styles.pageContentWrapperImage}>
          <Image
            style={{ width: "100%", objectFit: "cover", height: "100%" }}
            src="https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </View>
        <View style={styles.pageContentDietWrapper}>
          <View
            style={{
              ...styles.pageContentDietCard,
              marginBottom: 10,
              backgroundColor: "#E9F7EF",
            }}
          >
            <View style={{ marginRight: 20 }}>
              <Image style={{ width: 75 }} src={breakFastIcon} />
            </View>
            <View style={{ flex: 1 }}>
              <View>
                <Text style={styles.pageContentDietCardTitle}>BREAKFAST</Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  Option 1:
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Spinach and Mushroom. along with Omelette
                </Text>
              </View>
              <View style={{ marginTop: 5 }}>
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  Option 2:
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Whole-grain toast along with
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Orange slices
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Green tea
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              ...styles.pageContentDietCard,
              marginBottom: 10,
              backgroundColor: "#E9F7EF",
            }}
          >
            <View style={{ marginRight: 20 }}>
              <Image style={{ width: 75 }} src={lunchIcon} />
            </View>
            <View style={{ flex: 1 }}>
              <View>
                <Text style={styles.pageContentDietCardTitle}>LUNCH</Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Quinoa/ brown rice
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Fish
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Leafy greens and bell peppers
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              ...styles.pageContentDietCard,
              backgroundColor: "#E9F7EF",
              marginBottom: 10,
            }}
          >
            <View style={{ marginRight: 20 }}>
              <Image style={{ width: 75 }} src={dinner} />
            </View>
            <View style={{ flex: 1 }}>
              <View>
                <Text style={styles.pageContentDietCardTitle}>DINNER</Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Indian food of your choice.
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              padding: 30,
              backgroundColor: "#E9F7EF",
            }}
          >
            <View style={{ flex: 1 }}>
              <View>
                <Text style={styles.pageContentDietCardTitle}>
                  Additional Supplements
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Almonds and walnuts.
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Carrot sticks with cucumber.
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Drink 3-4 litres of water a day.{" "}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  );
};

export default DietView;
