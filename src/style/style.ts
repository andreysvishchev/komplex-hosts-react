import {createTheme} from "@mui/material";

export const button = {
    backgroundColor: '#00B6F4',
}

export const input = {
    borderColor: '#00B6F4'
}
export const theme = createTheme({
    typography: {
        button: {
            textTransform: "none",
            padding: '8px 24px',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            fontFamily: 'inherit'
        },

    }
});
