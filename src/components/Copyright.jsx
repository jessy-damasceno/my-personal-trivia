import React from "react";
import { Link, Typography } from "@mui/material";

export default class Copyright extends React.Component {
  render() {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center" {...this.props}
      >
        {'Copyright © '}
        <Link
          color="primary"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/jessy-damasceno/"
        >
          Jessy Damasceno
        </Link>
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    )
  }
}
