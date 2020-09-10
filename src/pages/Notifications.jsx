import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import TabBar from "../components/TabBar";
import TabPanel from "../components/TabPanel";

const Notifications = (props) => {
  const [value, setValue] = useState(0);

  const handleChage = (newValue) => {
    setValue(newValue);
  };
  return (
    <TabBar onChange={handleChage} menu="notification">
      <TabPanel value={value} index={0}>
        <List>
          <ListItem divider>
            <ListItemAvatar>
              <Avatar>SB</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <React.Fragment>
                  <b>요가좋아</b>
                  {"님이 댓글을 남겼습니다 : 너무 멋져요!"}
                </React.Fragment>
              }
              secondary="Jan 9, 2014"
            />
          </ListItem>

          <ListItem divider>
            <ListItemAvatar>
              <Avatar>SB</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <React.Fragment>
                  <b>이나천재</b>
                  {"님이 댓글을 남겼습니다 : 요가복 팔렸나요?"}
                </React.Fragment>
              }
              secondary="Jan 9, 2014"
            />
          </ListItem>

          <ListItem divider>
            <ListItemAvatar>
              <Avatar>SB</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <React.Fragment>
                  <b>최엉망진창</b>
                  {"님이 댓글을 남겼습니다 : 좋은 글 감사합니다!^^"}
                </React.Fragment>
              }
              secondary="Jan 9, 2014"
            />
          </ListItem>
        </List>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <List>
          <ListItem divider>
            <ListItemAvatar>
              <Avatar>SB</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <React.Fragment>
                  <b>요가좋아</b>
                  {"님이 회원님의 일기를 좋아합니다"}
                </React.Fragment>
              }
              secondary="Jan 9, 2014"
            />
          </ListItem>

          <ListItem divider>
            <ListItemAvatar>
              <Avatar>SB</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <React.Fragment>
                  <b>이나천재</b>
                  {"님이 회원님의 일기를 좋아합니다"}
                </React.Fragment>
              }
              secondary="Jan 9, 2014"
            />
          </ListItem>

          <ListItem divider>
            <ListItemAvatar>
              <Avatar>SB</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <React.Fragment>
                  <b>최엉망진창</b>
                  {"님이 회원님의 일기를 좋아합니다"}
                </React.Fragment>
              }
              secondary="Jan 9, 2014"
            />
          </ListItem>
        </List>
      </TabPanel>
    </TabBar>
  );
};

export default Notifications;
