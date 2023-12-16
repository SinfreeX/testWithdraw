
// парамсы запроса к апи
export type GetBalanceRequestParams = {
  wallet?: string
  currency?: string
}

// Заглушка для запроса к Api
export const getBalance = (params?: GetBalanceRequestParams) => ({
  currency: params?.currency || 'USDT',
  format: 'ERC-20',
  amount: 141241.5121,
  wallet: params?.wallet || '0x98c7320928aA5358e29F21364CbAa3ab97a3a9AC'
})