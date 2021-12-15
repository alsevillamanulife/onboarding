import React from 'react'
import ReactDOM, {render} from 'react-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate
//@ts-ignore
from 'react-alert-template-basic'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import '@manulife/mux/core/typography/assets/fonts/fonts.css'
import { MuxProvider 
//@ts-ignore
} from '@manulife/mux';
import { 
  ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink, from 
} from '@apollo/client'

const httpLink = new HttpLink({ uri: 'https://trip-gateway-dev.apps.cac.preview.pcf.manulife.com/graphql'});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({headers = {
    'x-user-type':'apiUser',
    'x-user-ref':'385ea77c-230c-4a78-9c6a-6a943988c5f5'
  } }) => ({
     headers: {
       ...headers,
       authorization: localStorage.getItem('token') || null,
     }
  }));

  return forward(operation);
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link : from([authMiddleware, httpLink]),
})

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

ReactDOM.render(

      <MuxProvider>
        <ApolloProvider client={client}>
          <AlertProvider template={AlertTemplate} {...options}>
            <App />
          </AlertProvider>
        </ApolloProvider>
    </MuxProvider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
