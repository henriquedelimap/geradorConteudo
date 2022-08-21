import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import * as Realm from "realm-web";
import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const graphqlUri = 'mongodb+srv://ootechnology:henrylima123@cluster0.ejf86i9.mongodb.net'

let theme = createTheme()

theme = responsiveFontSizes(theme)

const client = new ApolloClient({
  uri: 'https://lapsooserver.herokuapp.com/',
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
)
