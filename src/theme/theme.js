import { grey } from '@mui/material/colors';

// A custom theme for this app

const getDesignTokens = (mode) => ({

    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                    main: '#317da5',
                },
                secondary: {
                    main: '#A140E7',
                },
              
                background: {
                    default: "#fff",
                },

                text: {
                    primary: grey[900],
                    secondary: grey[800],

                },

            }
            : {

                primary: {
                    main: '#fff',
                },
                secondary: {
                    main: '#fff',
                },
                background: {
                    default: "#121212",


                },
                text: {
                    primary: '#fff',
                    secondary: grey[500],

                },
          
            }),
    },
    typography: {
        fontFamily: 'Poppins, Arial, sans-serif',
    },

    components: {

        MuiCard: {
            styleOverrides: {

            },
            variants: [

                {
                    props: { variant: 'menuCard' },
                    style: {
                    },
                },

            ]
        },


    },
  

});



export default getDesignTokens;


