import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "./chat.scss";





export const Chat = ({delChat, name, lstMsg, id }) => {
  return (
   <div className="chat">
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "transparent" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={name} src="../images/avatar/{avatar}" />
          </ListItemAvatar>
          <ListItemText
            primary={lstMsg}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                ></Typography>
              </React.Fragment>
            }
          />
          <Divider variant="inset" />
        </ListItem>
      </List>
        
   </div>
  );
};
