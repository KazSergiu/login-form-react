import React from "react";
import { PolarArea } from "react-chartjs-2";
import Zoom from "react-reveal/Zoom";

const ChartExample = () => {
  const data = {
    labels: ["Facebook", "Twitter", "Instagram", "Telegram", "Viber", "VK"],
    datasets: [
      {
        label: "Social Media Users",
        data: [1200000, 1100000, 100000, 696644, 1313111, 351653],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
        height: 500,
      },
    ],
  };
  return (
    <div>
      <Zoom bottom>
        <PolarArea
          data={data}
          width={600}
          height={600}
          options={{ maintainAspectRatio: false }}
        />
      </Zoom>
    </div>
  );
};

export default ChartExample;
