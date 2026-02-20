import {
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

export default function Team() {
  const teamMembers = [
    {
      name: "Dr. Sarah Ahmed",
      role: "Pediatrician",
      email: "sarah.ahmed@example.com",
      phone: "+20 100 123 4567",
      avatar: "",
    },
    {
      name: "Nurse Mona Fathy",
      role: "Nurse",
      email: "mona.fathy@example.com",
      phone: "+20 101 234 5678",
      avatar: "",
    },
    {
      name: "Mr. Ali Hassan",
      role: "Administrator",
      email: "ali.hassan@example.com",
      phone: "+20 102 345 6789",
      avatar: "",
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        👩‍⚕️ Our Team
      </Typography>

      <Grid container spacing={3}>
        {teamMembers.map((member, index) => (
          <Grid size={{ xs: 12, md: 6 }}  key={index} component="div">
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <List>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar src={member.avatar}>
                        {member.name.charAt(0)}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography fontWeight="bold">{member.name}</Typography>
                      }
                      secondary={
                        <>
                          <Typography variant="body2" color="text.secondary">
                            {member.role}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {member.email}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {member.phone}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
