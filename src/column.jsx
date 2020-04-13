import React from "react";
import { ColumnChart } from "@opd/g2plot-react";

const config = {
  title: {
    visible: true,
    text: "MONTHLY ATTENDENCE"
  },
  forceFit: true,
  data: [
    {
      uuid: "uuid 1",
      present: 3
    },
    {
      uuid: "uuid 2",
      present: 18
    },
    {
      uuid: "Type 3",
      present: 8
    },
    {
      uuid: "Type 4",
      present: 20
    },
    {
      uuid: "uuid 5",
      present: 15
    },
    {
      uuid: "uuid 6",
      present: 28
    },
    {
      uuid: "Type 7",
      present: 31
    }
  ],
  padding: "auto",
  xField: "uuid",
  yField: "present",
  meta: {
    uuid: {
      alias: "uuid"
    },
    present: {
      alias: "present"
    }
  }
};

export default () => (
  <section>
    <h2 style={{ color: "blue", textAlign: "center", fontFamily: "comic sans ms", fontStyle: "Italic", }}>ATTENDENCE </h2>
    <ColumnChart {...config} />
    <h1 style={{ color: "blue", textAlign: "center", fontFamily: "comic sans ms", fontStyle: "Italic", }}>Total days = 31</h1>
  </section>
);
