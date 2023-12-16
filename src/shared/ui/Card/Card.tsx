import {ReactElement} from "react";
import {Stack, StackProps} from "@mui/material";

export type CardProps = StackProps & {
  children: ReactElement
}

// Стандартная карточка
export const Card = ({children, ...rest}: CardProps) => (
  <Stack
    {...rest}
    sx={{
      width: '400px',
      minHeight: '400px',
      borderRadius: '6px',
      background: '#fff',
      boxShadow: '1px 1px 5px 2px #00000003',
      padding: '20px',
      overflow: 'auto',
      ...rest.sx
    }}
  >
    {children}
  </Stack>
)