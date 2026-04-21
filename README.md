# Midnight Contract State Demo

React/TypeScript example demonstrating how to query and display Midnight contract state from a frontend.

## Features

- ✅ Query contract state via GraphQL
- ✅ Real-time updates via WebSocket subscriptions
- ✅ Type-safe ledger field parsing
- ✅ Reusable React hooks
- ✅ Error handling and loading states

## Quick Start

```bash
# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your contract address

# Start development server
npm start
```

## Project Structure

```
src/
├── components/
│   ├── BalanceDisplay.tsx    # Token balance display
│   ├── TransactionHistory.tsx # Transaction list
│   └── StateViewer.tsx       # Raw contract state
├── hooks/
│   ├── useContractState.ts   # Contract state query hook
│   └── useSubscription.ts    # WebSocket subscription hook
├── lib/
│   ├── indexer.ts            # GraphQL client & queries
│   └── utils.ts              # Parsing utilities
└── App.tsx                   # Main application
```

## Usage Examples

### Query Contract State

```typescript
import { useContractState } from './hooks/useContractState';

function MyComponent() {
  const { loading, error, state } = useContractState('0x...');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <div>Balance: {state.balance}</div>;
}
```

### Subscribe to Updates

```typescript
import { useContractSubscription } from './hooks/useSubscription';

function MyComponent() {
  const { updates, isConnected } = useContractSubscription('0x...');
  
  return (
    <div>
      Connection: {isConnected ? '✅' : '❌'}
      Updates: {updates.length}
    </div>
  );
}
```

## Tutorial

See the complete tutorial: [reading-contract-state.md](../tutorials/reading-contract-state.md)

## License

MIT License

---

*Created for Midnight Network Eclipse Bounty Program*
