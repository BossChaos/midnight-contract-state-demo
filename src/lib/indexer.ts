import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const INDEXER_GRAPHQL_URL = 'https://indexer.testnet.midnight.network/graphql';

export const client = new ApolloClient({
  uri: INDEXER_GRAPHQL_URL,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    },
  },
});

export const GET_CONTRACT_STATE = gql`
  query GetContractState($contractAddress: String!) {
    contract(address: $contractAddress) {
      address
      ledger {
        fieldName
        fieldValue
      }
    }
  }
`;

export const GET_CONTRACT_ACTIONS = gql`
  query GetContractActions($contractAddress: String!) {
    contractActions(contractAddress: $contractAddress, first: 50) {
      edges {
        node {
          hash
          timestamp
          actionName
          result
        }
      }
    }
  }
`;
