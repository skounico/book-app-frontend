'use client'
import { Box, Typography } from "@mui/material";
import BookCards from "./components/bookCards";

export default function BookShelf () {

    return (
        <Box>
            <Typography variant="h3" component="h2">
                Book Shelf
            </Typography>
            <BookCards/>
        </Box>
    )
}