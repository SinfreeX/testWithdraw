import {ReactElement} from "react";
import {Button, ButtonProps, Stack, Typography} from "@mui/material";

export type TransparentIconButtonProps = ButtonProps & {
  icon: ReactElement,
  title: string,
}

// простейшая кнопка с иконкой без эффектов
export const TransparentIconButton = ({icon, title, ...rest}: TransparentIconButtonProps) => (
  <Button
    disableRipple
    sx={({palette}) => ({
      width: 'fit-content',
      padding: 0,
      textTransform: 'unset',
      ' p': {
        color: palette.primary.main,
      },
      ':hover': {
        background: 'unset'
      }
    })}
    {...rest}
  >
    <Stack
      direction="row"
      alignItems="center"
      gap={1}
    >
      {icon}
      <Typography>
        {title}
      </Typography>
    </Stack>
  </Button>
)