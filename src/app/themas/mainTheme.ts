import {alpha, createTheme} from "@mui/material";

export const mainTheme = createTheme({
  typography: {
    fontFamily: [
      'IBM Plex Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    background: {
      default: '#F5F5F5',
      paper: '#FFF'
    },
    text: {
      primary: '#4A5056',
      secondary: alpha('#4A5056', 0.25)
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: ({theme}) => ({
          color: theme.palette.text.primary
        })
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: ({theme}) => ({
          ' input': {
            height: '12px',
            padding: '12px 0',
            margin: '0 10px',
            boxSizing: 'border-box',
            fontSize: '0.85rem',
            borderBottom: `2px solid ${alpha(theme.palette.text.primary, 0.1)}`,
            '::placeholder': {
              color: alpha(theme.palette.text.primary, 0.5),
              fontSize: '0.875rem',
              fontWeight: 500
            }
          },
          ' .Mui-focused': {
            ' fieldset': {
              borderColor: `${alpha(theme.palette.text.primary, 0.2)} !important`
            }
          },
          ' fieldset': {
            borderColor: alpha(theme.palette.text.primary, 0.2),
            borderRadius: '6px',
            height: '34px'
          },
          ' .MuiInputBase-root:hover': {
            ' fieldset': {
              borderColor: alpha(theme.palette.text.primary, 0.25),
            }
          },
          '& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
          '& input[type=number]': {
            '-moz-appearance': 'textfield',
          },
        })
      }
    }
  }
})