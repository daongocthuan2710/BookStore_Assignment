import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

export default function TextRating(props) {
    return (
            <Box
                sx={{
                    width: 200,
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Rating
                    name="text-feedback"
                    value={props.value}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                        <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                        />
                    }
                />
            </Box>
    );
}
