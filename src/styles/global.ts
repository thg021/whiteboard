import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        fontFamily: '"Inter", sans-serif',
    },

    body: {
        "-webkit-font-smoothing": "antialiased",
        backgroundColor: "$gray100",
        color: "$gray600",
        minHeight: "100vh",
    },

    "body, input, textarea, button": {
        fontFamily: "Inter",
        fontWeight: 400,
    },

    button: {
        cursor: "pointer",
    },
})