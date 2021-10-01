import { useEffect, useState } from "react";
import api from "../services/api.js";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../../styles/App.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const Grid = styled.div`
  margin: 5px 20px;

`;



function Motor() {
  const [models, setModels] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    api.get("assets").then((response) => {
      console.log("motor", response.data);
      setModels(response.data);
    });
  }, []);

  return (
    <div className="container grid grid-template-columns">
      {models.map((models, key) => {
        return (
          <Grid>
            <Card sx={{ maxWidth: 500 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={models.image}
                  alt="engine image"
                />
                <CardContent>
                  <Button variant="contained" onClick={handleClickOpen}>
                    Engine Info
                  </Button>
                  <Dialog 
                  open={open} 
                  onClose={handleClose}>
                    <DialogTitle id="alert-dialog-title">
                      {"More Engine Info"}
                    </DialogTitle>
                    <DialogContent>
                    Engine Status - {models.status}
                    </DialogContent>
                    <DialogContent>
                    RPM - {models.specifications.rpm}
                    </DialogContent>
                    <DialogContent>
                    MaxTemp - {models.specifications.maxTemp}
                    </DialogContent>
                    <DialogContent>
                    totalCollectsUptime - {models.metrics.totalCollectsUptime }
                    </DialogContent>
                    <DialogContent>
                    totalUptime  - {models.metrics.totalUptime }
                    </DialogContent>
                    <DialogContent>
                    lastUptimeAt  - {models.metrics.lastUptimeAt }
                    </DialogContent>

                  </Dialog>

                  <Typography gutterBottom variant="h5" component="div">
                    {models.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    💖 {models.healthscore}%
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </div>
  );
}

export default Motor;
