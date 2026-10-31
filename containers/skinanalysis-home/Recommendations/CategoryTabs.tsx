import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface CategoryTabsProps {
  data: any[];
  activeTab: number;
  onChangeTab: (
    event: React.SyntheticEvent<Element, Event>,
    value: any
  ) => void;
}

const CategoryTabs = ({ data, activeTab, onChangeTab }: CategoryTabsProps) => {
  return (
    <Tabs
      sx={(theme) => ({
        "& .MuiTabs-flexContainer": {
          minHeight: 60,
          borderRadius: 20,
        },
      })}
      value={activeTab}
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      onChange={onChangeTab}
    >
      {data?.map((item) => (
        <Tab
          key={item?.key}
          label={
            item?.productCategory?.title || item?.lipProductCategory?.title
          }
        />
      ))}
    </Tabs>
  );
};

export default CategoryTabs;
