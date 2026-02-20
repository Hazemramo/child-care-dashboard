import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import EventIcon from "@mui/icons-material/Event";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Dashboard() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Dashboard
      </Typography>
      <Typography variant="h5" fontWeight="bold" mb={3} mt={3}>
        👶 Child Care
      </Typography>

      {/* ==== CARDS ==== */}
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ borderRadius: 3, boxShadow: 3, padding: 7 }}>
            <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar sx={{ bgcolor: "#4caf50" }}>
                <MonitorWeightIcon fontSize="large" />
              </Avatar>
              <Box>
                <Typography variant="h6">Weight</Typography>
                <Typography variant="h5" fontWeight="bold">
                  12.5 kg
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ borderRadius: 3, boxShadow: 3, padding: 7 }}>
            <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar sx={{ bgcolor: "#2196f3", }}>
                <VaccinesIcon />
              </Avatar>
              <Box>
                <Typography variant="h6">Vaccines</Typography>
                <Typography variant="h5" fontWeight="bold">
                  3 Upcoming
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ borderRadius: 3, boxShadow: 3, padding: 7 }}>
            <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar sx={{ bgcolor: "#ff9800" }}>
                <EventIcon />
              </Avatar>
              <Box>
                <Typography variant="h6">Appointments</Typography>
                <Typography variant="h5" fontWeight="bold">
                  2 This Month
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* ==== SECTION 2 ==== */}
      <Grid container spacing={3} mt={5}>
        {/* Vaccination Schedule */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" mb={2}>
                🗓 Vaccination Schedule
              </Typography>

              <List>
                <ListItem>
                  <ListItemText
                    primary="MMR Vaccine"
                    secondary="Due: 15 March 2026"
                  />
                  <Chip label="Upcoming" color="primary" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Polio Vaccine"
                    secondary="Due: 20 April 2026"
                  />
                  <Chip label="Upcoming" color="success" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Notifications */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" mb={2}>
                🔔 Notifications
              </Typography>

              <List>
                <ListItem>
                  <NotificationsIcon sx={{ mr: 1, color: "#f44336" }} />
                  <ListItemText primary="Next vaccine in 5 days" />
                </ListItem>
                <Divider />
                <ListItem>
                  <NotificationsIcon sx={{ mr: 1, color: "#ff9800" }} />
                  <ListItemText primary="Weight check reminder" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
