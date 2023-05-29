import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from './Chat.module.css';
import CustomCardContent from "./components/CustomCardContent";
import CustomGrid from "./components/CustomGrid";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [profile, setProfile] = useState("User1");

  const profiles = ["User1", "User2", "User3"];
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
    <Box className={styles.box}>
      <Card>
        <CustomCardContent>
          {messages.map((message) => (
            <ListItem key={message.id}>
              <ListItemAvatar>
                <Avatar src={`/${message.profile}.jpg`} />
              </ListItemAvatar>
              <ListItemText
                primary={message.text}
                secondary={message.date.toLocaleString()}
              />
            </ListItem>
          ))}
          <form onSubmit={handleSubmit}>
            <CustomGrid container direction="row" justifyContent="space-between" alignItems="center">
              <Grid item xs={3}>
                <Select value={profile} onChange={handleSelect} fullWidth>
                  {profiles.map((profile) => (
                    <MenuItem key={profile} value={profile}>
                      {profile}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  label="Message"
                  variant="outlined"
                  value={message}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={1}>
                <IconButton color="primary" type="submit">
                  <SendIcon />
                </IconButton>
              </Grid>
            </CustomGrid>
          </form>
        </CustomCardContent>
      </Card>
    </Box>
  );
};

export default Chat;
