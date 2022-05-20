import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { deepPurple } from "@mui/material/colors";

import "./chat.scss";

export const Chat = ({ avatar, name, lstMsg }) => {
  return (
    <div className="chat">
      <List
        sx={{
          width: "100%",
          height: 90,
          maxWidth: 360,
          minWidth: 360,
          bgcolor: "transparent",
          color: "black",
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={name} src={avatar} sx={{ bgcolor: deepPurple[500] }} />
          </ListItemAvatar>
          <ListItemText
            primary={lstMsg}
            secondary={
              <>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                ></Typography>
              </>
            }
          />
          <Divider variant="inset" />
        </ListItem>
      </List>
    </div>
  );
};
