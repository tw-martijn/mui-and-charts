import React from "react";
import {
  Container,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Typography,
  makeStyles
} from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Helmet } from "react-helmet";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const direction = "ltr";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    padding: theme.spacing(2)
  },
  gridItem: { height: "100%" },
  statCard: { display: "inline-block", width: "240px" },
  cardContainer: { display: "flex" }
}));

export const plotData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)"
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ],
      borderWidth: 1
    }
  ]
};

const App = () => {
  const classes = useStyles();
  const darkTheme = createTheme({
    direction,
    palette: {
      type: "dark"
    }
  });
  const data = [
    { title: "Numbers", value: 13000 },
    { title: "More numbers", value: 16500 },
    {
      title: "Important statistics",
      subheader:
        "Description of all the extra important stuff that we absolutely need in this very large box",
      value: 14250,
      columns: 2
    },
    { title: "Insight", value: 19000 }
  ];
  return (
    <>
      <Helmet htmlAttributes={{ dir: direction }} />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="flex-start"
            classes={{ container: classes.rootContainer }}
          >
            {data.map((elem) => (
              <Grid
                item
                xs={6 * (elem.columns ?? 1)}
                sm={4 * (elem.columns ?? 1)}
                md={3 * (elem.columns ?? 1)}
                lg={2 * (elem.columns ?? 1)}
                xl={1 * (elem.columns ?? 1)}
                key={data.indexOf(elem)}
              >
                <Card style={{ height: "100%" }}>
                  <CardHeader title={elem.title} subheader={elem.subheader} />
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="span"
                    >{`${elem.value}`}</Typography>
                    <Doughnut
                      data={plotData}
                      options={{ plugins: { legend: { display: false } } }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box className={classes.cardContainer}>
            <Card className={classes.statCard}>
              <CardHeader
                title="Word of the Day"
                titleTypographyProps={{
                  color: "textSecondary",
                  variant: "body2",
                  align: "center"
                }}
              />
            </Card>
            <Card className={classes.statCard}>
              <CardHeader
                title="Word of the Day"
                titleTypographyProps={{
                  color: "textSecondary",
                  variant: "body2",
                  align: "center"
                }}
              />
            </Card>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
