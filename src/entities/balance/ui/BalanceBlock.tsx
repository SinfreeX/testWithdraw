import {useState} from "react";
import {alpha, CircularProgress, FormControlLabel, Radio, Stack, Typography} from "@mui/material";

import {getBalance} from "../api/getBalance.ts";
import {CurrencyIndicator} from "../../../shared/ui";

export type BalanceBlockProps = {
  wallet?: string
  currency?: string
}

// Блок с отображением баланса текущего пользователя
export const BalanceBlock = (props: BalanceBlockProps) => {
  const {currency, wallet} = props
  const [balance] = useState(getBalance({currency, wallet}))

  // TODO: Моковый прелоадер
  if (!balance) return <CircularProgress />

  return (
    <Stack
      sx={({palette}) => ({
        border: `1px solid ${alpha(palette.text.primary, 0.1)}`,
        padding: '10px 6px',
        borderRadius: '6px',
        gap: '6px'
      })}
    >
      <Stack direction="row" alignItems="flex-start" justifyContent="space-between">
        <FormControlLabel
          value={balance.currency}
          label={`BALANCE ${balance.currency} (${balance.format})`}
          control={
            <Radio
              disableRipple
              size="small"
              sx={{
                padding: '0 6px 0 10px',
                ':hover': {
                  background: 'unset'
                }
              }}
            />
          }
          sx={{
            ' .MuiTypography-root': {
              fontWeight: 500,
              fontSize: '0.75rem',
              textDecoration: 'underline'
            }
          }}
        />
        <CurrencyIndicator
          currency={balance.currency}
          format={balance.format}
          amount={balance.amount}
        />
      </Stack>
      <Typography
        fontWeight={500}
        fontSize="0.85rem"
      >
        {balance.wallet}
      </Typography>
    </Stack>
  )
}