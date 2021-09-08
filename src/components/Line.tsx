import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  lineBottom: {
    borderBottom: "8px solid black",
  },
}));
export function Line() {
  const classes = useStyles();
  return <div className={classes.lineBottom}></div>;
}
