import React, { FC, ReactElement } from "react";
import {NavLink} from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";


export const Footer = () =>{
    return (
        <Box
        sx={{
            width: "100%",
            height: "auto",
            backgroundColor: "#125be2",
            paddingTop: "1rem",
            paddingBottom: "1rem",
        }}
        >
        <Container maxWidth="lg">
            <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
                <Typography color="black" variant="h5">
                Footer
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography color="textSecondary" variant="subtitle1">
                {`${new Date().getFullYear()} | CopyWright`}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography color="textSecondary" variant="subtitle1">
                <NavLink href="/bachelor" color="inherit">
                    Bachelor
                </NavLink>
                {" | "}
                <NavLink href="/master" color="inherit">
                    Master
                </NavLink>
                {" | "}
                <NavLink href="/phd" color="inherit">
                    PhD
                </NavLink>
                </Typography>
            </Grid>
            </Grid>
        </Container>
        </Box>

    )
}
