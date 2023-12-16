import {alpha, Box, Button, Stack, TextField, Typography} from "@mui/material";
import {CurrencyIndicator} from "../../../shared/ui";
import {TransactionModel} from "../model/model.ts";
import {memo} from "react";

export type SendTransactionFormProps = {
  wallet?: string
  amount?: string
  currency?: string
  onChange: (wallet: Partial<TransactionModel>) => void
}

// Форма одного адреса для отправки
export const SendTransactionForm = memo((props: SendTransactionFormProps) => {
  const {wallet, amount, currency, onChange} = props

  return (
    <Stack alignItems="flex-end" gap={0.5} width="100%">
      <Stack gap="20px" width="100%">
        <TextField
          value={wallet}
          onChange={({target: {value}}) => onChange({amount, wallet: value})}
          placeholder="wallet address"
        />
        <TextField
          placeholder="amount"
          type="number"
          value={amount}
          onChange={({target: {value}}) => onChange({wallet, amount: value})}
          InputProps={{
            inputMode: 'numeric',
            endAdornment: (
              <Box width="60px">
                <CurrencyIndicator currency={currency || "USDT"} format={currency ? "" : "ERC-20"}/>
              </Box>
            )
          }}
        />
      </Stack>
      <Button
        disableRipple
        onClick={() => onChange({wallet: '', amount: ''})}
        sx={({palette}) => ({
          padding: '0',
          ':hover': {
            background: 'unset',
            ' p': {
              color: alpha(palette.text.primary, 0.5)
            }
          }
        })}
      >
        <Typography
          sx={({palette}) => ({
            fontWeight: 500,
            color: palette.text.secondary,
            cursor: 'pointer',
            transition: 'color 0.2s',
          })}
        >
          CLEAR
        </Typography>
      </Button>
    </Stack>
  )
})