import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import seedimg from "../seed_image_labeled.png";

const theme = createTheme();

export default function Home() {
  const [Prediction, setPrediction] = React.useState(null);
  const [Error, setError] = React.useState(false);

  const [Area, setArea] = React.useState("");
  const [Perimeter, setPerimeter] = React.useState("");
  const [Major_Axis_Length, setMajor_Axis_Length] = React.useState("");
  const [Minor_Axis_Length, setMinor_Axis_Length] = React.useState("");
  const [Convex_Area, setConvex_Area] = React.useState("");
  const [Equiv_Diameter, setEquiv_Diameter] = React.useState("");
  const [Eccentricity, setEccentricity] = React.useState("");
  const [Solidity, setSolidity] = React.useState("");
  const [Extent, setExtent] = React.useState("");
  const [Roundness, setRoundness] = React.useState("");
  const [Aspect_Ration, setAspect_Ration] = React.useState("");
  const [Compactness, setCompactness] = React.useState("");

  // const predictHandler = (e) => {
  //   e.preventDefault();

  //   const seedData = {
  //     Area,
  //     Perimeter,
  //     Major_Axis_Length,
  //     Minor_Axis_Length,
  //     Convex_Area,
  //     Equiv_Diameter,
  //     Eccentricity,
  //     Solidity,
  //     Extent,
  //     Roundness,
  //     Aspect_Ration,
  //     Compactness,
  //   };
  // };

  const dummyData = [
    [
      98745, 1290.09, 541.0447, 232.9598, 99459, 354.5787, 0.9026, 0.9928,
      0.5824, 0.7456, 2.3225, 0.6554,
    ],
    [
      83429, 1114.561, 438.5827, 242.8826, 84126, 325.9219, 0.8327, 0.9917,
      0.7019, 0.844, 1.8057, 0.7431,
    ],
    [
      59466, 912.152, 340.6951, 222.9567, 59949, 275.1626, 0.7561, 0.9919,
      0.7382, 0.8981, 1.5281, 0.8077,
    ],
    [
      49673, 950.267, 408.7322, 155.4211, 50306, 251.4868, 0.9249, 0.9874,
      0.6499, 0.6913, 2.6298, 0.6153,
    ],
    [
      58442, 994.502, 412.5136, 181.1641, 59098, 272.7832, 0.8984, 0.9889,
      0.7257, 0.7425, 2.277, 0.6613,
    ],
    [
      111105, 1344.029, 556.3199, 255.0445, 112192, 376.116, 0.8887, 0.9903,
      0.7389, 0.7729, 2.1813, 0.6761,
    ],
    [
      124268, 1448.55, 610.5165, 259.8887, 125239, 397.7725, 0.9049, 0.9922,
      0.5638, 0.7442, 2.3491, 0.6515,
    ],
    [
      68693, 1018.101, 404.3318, 217.3166, 69334, 295.7408, 0.8433, 0.9908,
      0.7393, 0.8328, 1.8606, 0.7314,
    ],
    [
      81463, 1099.853, 439.6717, 236.4002, 81993, 322.0589, 0.8432, 0.9935,
      0.7376, 0.8463, 1.8599, 0.7325,
    ],
  ];
  const autoLoadValueHandler = () => {
    const randNum = Math.floor(Math.random() * 9);

    setArea(dummyData[randNum][0]);
    setPerimeter(dummyData[randNum][1]);
    setMajor_Axis_Length(dummyData[randNum][2]);
    setMinor_Axis_Length(dummyData[randNum][3]);
    setConvex_Area(dummyData[randNum][4]);
    setEquiv_Diameter(dummyData[randNum][5]);
    setEccentricity(dummyData[randNum][6]);
    setSolidity(dummyData[randNum][7]);
    setExtent(dummyData[randNum][8]);
    setRoundness(dummyData[randNum][9]);
    setAspect_Ration(dummyData[randNum][10]);
    setCompactness(dummyData[randNum][11]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const arr = [];
    data.forEach((value, key) => {
      arr.push(value);
    });
    // console.log(arr);
    axios.post(`http://localhost:5000/predict`, { data: arr }).then((res) => {
      if (res.data !== 0 && res.data !== 1) {
        setPrediction(null);
        setError(true);
      } else {
        setError(false);
        setPrediction(res.data);
      }
      console.log(res.data);
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xl'>
        <CssBaseline />

        <Grid container spacing={2}>
          <Grid sm={6}>
            <Box
              sx={{
                marginTop: 8,
                // display: "flex",
                // flexDirection: "row",
                // alignItems: "center",
              }}
            >
              <Box
                sx={{
                  // marginTop: 8,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography component='h1' variant='h5'>
                  Input data to get seed class
                </Typography>
                <Button variant='contained' onClick={autoLoadValueHandler}>
                  Auto Load Values
                </Button>
              </Box>

              <Box
                component='form'
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name='Area'
                      required
                      fullWidth
                      id='Area'
                      label='Area'
                      autoFocus
                      value={Area}
                      onChange={(e) => setArea(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id='Perimeter'
                      label='Perimeter'
                      name='Perimeter'
                      value={Perimeter}
                      onChange={(e) => setPerimeter(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      fullWidth
                      id='Major_Axis_Length'
                      label='Major Axis Length'
                      name='Major_Axis_Length'
                      value={Major_Axis_Length}
                      onChange={(e) => setMajor_Axis_Length(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      fullWidth
                      id='Minor_Axis_Length'
                      label='Minor Axis Length'
                      name='Minor_Axis_Length'
                      value={Minor_Axis_Length}
                      onChange={(e) => setMinor_Axis_Length(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      fullWidth
                      id='Convex_Area'
                      label='Convex Area'
                      name='Convex_Area'
                      value={Convex_Area}
                      onChange={(e) => setConvex_Area(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id='Equiv_Diameter'
                      label='Equiv Diameter'
                      name='Equiv_Diameter'
                      value={Equiv_Diameter}
                      onChange={(e) => setEquiv_Diameter(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id='Eccentricity'
                      label='Eccentricity'
                      name='Eccentricity'
                      value={Eccentricity}
                      onChange={(e) => setEccentricity(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      fullWidth
                      id='Solidity'
                      label='Solidity'
                      name='Solidity'
                      value={Solidity}
                      onChange={(e) => setSolidity(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      fullWidth
                      id='Extent'
                      label='Extent'
                      name='Extent'
                      value={Extent}
                      onChange={(e) => setExtent(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      fullWidth
                      id='Roundness'
                      label='Roundness'
                      name='Roundness'
                      value={Roundness}
                      onChange={(e) => setRoundness(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id='Aspect_Ration'
                      label='Aspect Ration'
                      name='Aspect_Ration'
                      value={Aspect_Ration}
                      onChange={(e) => setAspect_Ration(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id='Compactness'
                      label='Compactness'
                      name='Compactness'
                      value={Compactness}
                      onChange={(e) => setCompactness(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Button
                  type='submit'
                  //   onClick={(e) => predictHandler(e)}
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                >
                  Predict
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid sm={6}>
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                alt='pumpkin seed labeled diagram'
                width='70%'
                src={seedimg}
              />
            </Box>
            <Box
              sx={{
                marginTop: 2,
                marginLeft: 15,
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            >
              {Prediction !== null ? (
                <>
                  <Typography variant='h6'>
                    <strong>Prediction Result:</strong>
                  </Typography>
                  <Typography variant='h6'>
                    This seed data falls into{" '"}
                    <strong>
                      {Prediction === 0 ? "Çerçevelik" : "Ürgüp Sivrisi"}
                      {"' "}
                    </strong>{" "}
                    class
                  </Typography>
                </>
              ) : null}
              {Error ? (
                <Typography variant='h6' color={"red"}>
                  <strong>There is an error in input values</strong>
                </Typography>
              ) : null}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
