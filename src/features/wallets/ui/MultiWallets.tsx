import {Dispatch, SetStateAction} from "react";
import {SendTransactionForm, TransactionModel} from "../../../entities/transation";
import {Button, Stack} from "@mui/material";
import {TransparentIconButton} from "../../../shared/ui";
import {PlaylistAddOutlined} from "@mui/icons-material";


export type MultiWalletsProps = {
  sendWallets: Record<string, Partial<TransactionModel>>
  setSendWallets: Dispatch<SetStateAction<Record<string, Partial<TransactionModel>>>>
}

// фича - Блок управления множественной отправкой
export const MultiWallets = (props: MultiWalletsProps) => {
  const {sendWallets, setSendWallets} = props

  // Изменение стейта конкретного адреса для отправки
  const onChangeSendWalletHandler = (id: string, walletForm: Partial<TransactionModel>) => {
    setSendWallets(prevState => ({
      ...prevState,
      [id]: walletForm
    }))
  }

  // Создать новый пустой адрес для отправки
  const addNewSendWalletHandler = () => {
    const lastId = Math.max(...Object.keys(sendWallets).map(Number))
    setSendWallets(prevState => ({
      ...prevState,
      [lastId + 1]: {wallet: '', amount: ''}
    }))
  }

  // Удалить указанный адрес
  const removeSendWalletHandler = (id: string) => {
    setSendWallets((prevState) =>
      Object.fromEntries(
        Object.entries(prevState)
          .filter(sendWallet => sendWallet[0] !== id)
      ))
  }

  return (
    <>
      {Object.entries(sendWallets).map(([id, {wallet, amount, currency}]) => (
        <Stack alignItems="flex-end" gap={'4px'} key={`transaction-form-${id}`}>
          {id !== '0' && (
            <Button
              disableRipple
              color="error"
              size="small"
              onClick={() => removeSendWalletHandler(id)}
              sx={{
                width: 'fit-content',
                fontSize: '0.65rem',
                padding: 0
              }}
            >
              REMOVE
            </Button>
          )}
          <SendTransactionForm
            amount={amount}
            wallet={wallet}
            currency={currency}
            onChange={(form) => onChangeSendWalletHandler(id, form)}
          />
        </Stack>
      ))}

      <Stack alignItems="flex-end">
        <TransparentIconButton
          icon={<PlaylistAddOutlined/>}
          title="Add new wallet"
          onClick={addNewSendWalletHandler}
        />
      </Stack>
    </>
  )
}