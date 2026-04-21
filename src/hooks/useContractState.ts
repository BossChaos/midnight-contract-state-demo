import { useQuery } from '@apollo/client';
import { GET_CONTRACT_STATE } from '../lib/indexer';

interface LedgerField {
  fieldName: string;
  fieldValue: string;
}

interface ContractState {
  address: string;
  ledger: LedgerField[];
}

interface QueryResult {
  contract: ContractState;
}

export function useContractState(contractAddress: string) {
  const { loading, error, data, refetch } = useQuery<QueryResult>(
    GET_CONTRACT_STATE,
    {
      variables: { contractAddress },
      pollInterval: 5000,
    }
  );

  const parsedState = data?.contract?.ledger.reduce(
    (acc, field) => {
      acc[field.fieldName] = field.fieldValue;
      return acc;
    },
    {} as Record<string, string>
  );

  return {
    loading,
    error,
    state: parsedState,
    refetch,
  };
}
