
// Модель транзакции
export type TransactionModel = {
  // Адрес кошелька
  wallet: string
  // Сумма для отправки
  amount: string
  // Валюта
  currency: string
}