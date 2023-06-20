import { styled } from "../../styles";

export const WhiteboardContainer = styled('div', {
    flex: "1",
    maxWidth: '99%',
    height: '97vh',
    background: '#f1f1f1',
    border: "1px solid transparent ",
    overflow: "hidden"

})

export const Circle = styled('div', {
    position: 'absolute',
    width: '0.5rem',
    height: '0.5rem',
    borderRadius: '50%',
    border: '3px solid ',

    variants: {
        color: {
            blue: {
                borderColor: '$blue500',
            },
            purple: {
                borderColor: '$purple500',
            },
            red: {
                borderColor: '$$red500',
            }
        }
    },
    defaultVariants: {
        color: "purple"
    }
})
