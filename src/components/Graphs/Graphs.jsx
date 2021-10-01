import { Container } from "@material-ui/core";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components";

const Box = styled.div`
    width: 500px;

`;



const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },
  title: {
    text: "Products",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b>: {point.percentage:.1f} %",
      },
    },
  },
  series: [
    {
      name: "Temp",
      colorByPoint: true,
      data: [
        {
          name: "motor",
          y: 40,
          sliced: true,
          selected: true,
        },
        {
          name: "fan",
          y: 60,
        },
      ],
    },
  ],
};

function Graphs() {
  return (
    <Container maxWidth='sm' sx={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'200px'}} >

    <Box>
      <HighchartsReact highcharts={Highcharts} options={options} />  
    </Box>
    </Container>
  );
}

export default Graphs;
