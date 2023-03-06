"use client"
import { ThemeProvider, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        light: '#757ce8',
        main: '#000000',
        dark: '#000000',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#fff',
      },
    },
  });

export default function Template({ children }: {
    children: React.ReactNode
}) {
    return(
        <ThemeProvider theme={darkTheme}>
            <div>{children}</div>
        </ThemeProvider>
    );
}