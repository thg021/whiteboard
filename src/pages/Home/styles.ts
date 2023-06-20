import { styled } from "../../styles";

export const Container = styled('div', {
    maxWidth: '100%',
    height: '100vh',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
})

export const ButtonGrouping = styled('div', {
    position: 'fixed',
    top: 0,
    background: "$gray200",
    left: '50%',
    transform: 'translate(-50%, 0%)',
    display: "flex",
    gap: '0.5rem',
    justifyContent: "center",
    alignItems: 'center',
    padding: "0.5rem 2.5rem",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    "-webkit-box-shadow": "-1px 2px 5px 0px rgba(0, 0, 0, 0.25)",
    "-moz-box-shadow": "-1px 2px 5px 0px rgba(0, 0, 0, 0.25)",
    boxShadow: "-1px 2px 5px 0px rgba(0, 0, 0, 0.25)",
    zIndex: "999",
})