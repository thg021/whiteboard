import { styled } from "../../styles";

export const ButtonContainer = styled("button", {
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
    },

    variants: {
        color: {
            red: {
                svg: {
                    color: '$red500'
                }
            }
        }
    }

})