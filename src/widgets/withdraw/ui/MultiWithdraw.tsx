import {useMemo, useState} from "react";
import {Box, Button, Stack, Typography} from "@mui/material";

import {useDropzone} from 'react-dropzone';

import {Card, CurrencyIndicator} from "../../../shared/ui";
import {BalanceBlock} from "../../../entities/balance";
import {TransactionModel} from "../../../entities/transation";
import {MultiWallets} from "../../../features/wallets";
import {xlsxParserWallets} from "../../../shared/utils/xlsxParserWallets.ts";

// Виджет отправки токенов на несколько адресов
export const MultiWithdraw = () => {
  const [sendWallets, setSendWallets] = useState<Record<string, Partial<TransactionModel>>>({['0']: {wallet: '', amount: ''}})

  const {getRootProps} = useDropzone({
    onDrop: ([file]) => xlsxParserWallets({file, handler: addNewWallets}),
    noClick: true
  });

  // Метод для массового добавления кошельков
  const addNewWallets = (sendWallets: Partial<TransactionModel>[]) => {
    setSendWallets(prevState => {
      const lastId = Math.max(...Object.keys(prevState).map(Number))
      return {
        ...prevState,
        ...sendWallets.reduce((acc, sendWallet, currentIndex) => ({
          ...acc,
          [lastId + currentIndex + 1]: sendWallet
        }), {}) as Record<string, Partial<TransactionModel>>
      }
    })
  }

  // Тотал всех оправляемых сумм
  const totalAmount = useMemo(() => {
    return  Object.values(sendWallets).reduce((acc, {amount}) => acc + (Number(amount) || 0), 0)
  }, [sendWallets])


  return (
    <Box {...getRootProps({className: 'dropzone'})}>
      <Card maxHeight="800px" >
        <Stack>
          <Typography
            fontWeight={700}
            fontSize='18px'
          >
            FROM
          </Typography>
          <Stack gap="20px" width="100%">
            <BalanceBlock/>
            <MultiWallets
              sendWallets={sendWallets}
              setSendWallets={setSendWallets}
            />

            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography
                fontWeight={500}
                fontSize="1rem"
              >
                Receive amount
              </Typography>
              <CurrencyIndicator amount={totalAmount || '0.00'} currency={"USDT"} format={"ERC-20"}/>
            </Stack>
            <Stack direction="row" justifyContent="center" mt={1}>
              <Button
                variant={"contained"}
                disabled={!totalAmount}
                sx={{
                  width: 'fit-content',
                  padding: '8px 16px',
                  textTransform: 'unset',
                }}
              >
                Withdraw
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Box>
  )
}