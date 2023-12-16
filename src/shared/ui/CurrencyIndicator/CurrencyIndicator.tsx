import {Stack, Typography} from "@mui/material";
import {priceSlicer} from "../../utils";

export type CurrencyIndicatorProps = {
  amount?: number | string
  currency?: string
  format?: string
}

// Индикатор валюты
export const CurrencyIndicator = ({currency, format, amount}: CurrencyIndicatorProps) =>  (
    <Stack alignItems="flex-end">
      <Typography
        sx={({palette}) => ({
          fontWeight: 500,
          fontSize: '0.90rem',
          color: palette.success.main,
          lineHeight: '0.95rem'
        })}
      >
        {priceSlicer(amount || '', false)} {currency}
      </Typography>
      <Typography
        sx={({palette}) => ({
          fontWeight: 400,
          fontSize: '0.60rem',
          color: palette.success.main,
          lineHeight: '0.5rem'
        })}
      >
        {format ? `(${format})` : ''}
      </Typography>
    </Stack>
  )