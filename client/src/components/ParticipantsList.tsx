import { Box, Card, CardHeader } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import theme from "../theme";
import ParticipantAvatar from "./ParticipantAvatar";
import { MeetingParticipant } from "../../../server/express/types/MeetingParticipant";

const useStyles = makeStyles<typeof theme>((theme) => ({
  participant: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.up("md")]: {
      width: "33%",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: Math.round(theme.breakpoints.width("lg") / 3),
    },
    flex: "0 0 auto",
    padding: 4,
    boxSizing: "border-box",
  },
  dialogContent: {
    flex: "0 0 auto",
    overflowY: "auto",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
}));

const ParticipantsList = ({ participants }: { participants: MeetingParticipant[] }) => {
  const classes = useStyles();

  function renderParticipant(participant: MeetingParticipant) {
    return (
      <Box key={participant.id} className={classes.participant}>
        <Card>
          <CardHeader
            avatar={<ParticipantAvatar participant={participant} />}
            title={participant.username}
            subheader={participant.email}
          />
        </Card>
      </Box>
    );
  }

  return <Box className={classes.dialogContent}>{participants.map(renderParticipant)}</Box>;
};

export default ParticipantsList;