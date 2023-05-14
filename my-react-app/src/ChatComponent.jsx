import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [profile, setProfile] = useState("User1");

  const profiles = ["User1", "User2", "User3"]; // список профілів

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSelect = (event) => {
    setProfile(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMessage = {
      id: messages.length,
      text: message,
      profile,
      date: new Date(),
    };

    setMessages([...messages, newMessage]);
    setMessage("");
  };

  return (
    <Card>
      <CardContent>
        {messages.map((message) => (
          <ListItem key={message.id}>
            <ListItemAvatar>
              <Avatar src={`/${message.profile}.png`} />
            </ListItemAvatar>
            <ListItemText
              primary={message.text}
              secondary={message.date.toLocaleString()}
            />
          </ListItem>
        ))}
        <form onSubmit={handleSubmit}>
          <Grid container direction="column" justifyContent="flex-end">
            <Box mb={2}>
              <Grid item xs={12}>
                <Select value={profile} onChange={handleSelect}>
                  {profiles.map((profile) => (
                    <MenuItem key={profile} value={profile}>
                      {profile}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Box>
            <Box mb={2}>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="outlined"
                  value={message}
                  onChange={handleChange}
                />
              </Grid>
            </Box>
            <Box mb={2}>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Надіслати
                </Button>
              </Grid>
            </Box>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default Chat;
