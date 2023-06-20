import { styled } from "../../styles";

export const Container = styled('div', {
    maxWidth: '100%',
    height: '100vh',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
})

export const ButtonContainer = styled('div', {
    position: 'fixed',
    top: 0,
    background: "$gray200",
    left: '50%',
    transform: 'translate(-50%, 0%)',
    display: "flex",
    gap: '0.5rem',
    padding: "0.5rem 2.5rem 1rem",
    borderBottomLeftRadius: "50%",
    borderBottomRightRadius: "50%",
    "-webkit-box-shadow": "-1px 2px 5px 0px rgba(0, 0, 0, 0.25)",
    "-moz-box-shadow": "-1px 2px 5px 0px rgba(0, 0, 0, 0.25)",
    boxShadow: "-1px 2px 5px 0px rgba(0, 0, 0, 0.25)",
    zIndex: "999",

    button: {
        marginTop: 'auto',
        backgroundColor: '$green500',
        border: 0,
        borderRadius: 8,
        padding: '0.5rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',

        svg: {
            color: '$gray600',
        },

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed',
        },

        '&:not(:disabled):hover': {
            backgroundColor: '$purple600',

            svg: {
                color: '$gray100'
            }
        }

    }
})