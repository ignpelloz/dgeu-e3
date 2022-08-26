import University from '../components/University';

import injectSheet from 'react-jss';

const classes = {
    one: {
        gridColumn: 1,
        gridRow: 1,
        textAlign: "justify",
        textJustify: "inter-word"
    },
    two: {
        gridColumn: 2,
        gridRow: 2,
        textAlign: "justify",
        textJustify: "inter-word"
    },
    three: {
        gridColumn: 3,
        gridRow: 1,
        textAlign: "justify",
        textJustify: "inter-word"
    },
    four: {
        gridColumn: 4,
        gridRow: 2,
        textAlign: "justify",
        textJustify: "inter-word"
    },
    five: {
        gridColumn: 5,
        gridRow: 1,
        textAlign: "justify",
        textJustify: "inter-word"
    },
    six: {
        gridColumn: 1,
        gridRow: 2,
        textAlign: "justify",
        textJustify: "inter-word"
    },
    seven: {
        gridColumn: 2,
        gridRow: 1,
        textAlign: "justify",
        textJustify: "inter-word"
    },
    eight: {
        gridColumn: 3,
        gridRow: 2,
        textAlign: "justify",
        textJustify: "inter-word"
    },
    nine: {
        gridColumn: 4,
        gridRow: 1,
        textAlign: "justify",
        textJustify: "inter-word",
    },
    ten: {
        gridColumn: 5,
        gridRow: 2,
        textAlign: "justify",
        textJustify: "inter-word"
    }
}

export default injectSheet(classes)(University);