import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import * as Realm from "realm-web";
import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Rotas } from './Rotas'


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
        <Rotas />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
)
