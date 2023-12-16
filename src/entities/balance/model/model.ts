

export type BalanceModel = {
  // Адрес кошелька
  wallet: string
  // Валюта
  currency: string
  // Формат валюты TODO: Возможно стоит вынести в отдельный справочник валюта <-> формат
  format: string
  // Сумма валюты
  amount: number
}