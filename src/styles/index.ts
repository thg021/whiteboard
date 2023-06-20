import { createStitches } from "@stitches/react";

export const {
    config,
    styled,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    css,
} = createStitches({
    theme: {
        colors: {
            gray100: "#f2f2f2",
            gray200: "#d9d9d9",
            gray300: "#808080",
            gray400: "#333333",
            gray500: "#262626",
            gray600: "#1a1a1a",
            gray700: "#0d0d0d",
            purple500: "#8284fa",
            purple600: "#5e60ce",
            blue500: "#4ea8de",
            blue600: "#1e6f9f",
            circle: "#e25858",
        },
    },
    utils: {
        x: (value: string) => ({ left: value }),
        y: (value: string) => ({ top: value }),
    },
});
