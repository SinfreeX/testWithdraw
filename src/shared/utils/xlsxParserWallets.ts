import {TransactionModel} from "../../entities/transation";
import {read, utils} from "xlsx";

export type xlsxParserWalletsArgs = {
  file: File,
  handler: (sendWallets: Partial<TransactionModel>[]) => void
}

// Базовый парсер xlsx кошельков
// TODO: Доработать - добавить обработчики ошибок, проверку на формат кошелька, пустые суммы и т.д в зависимости от задач
export const xlsxParserWallets = (args: xlsxParserWalletsArgs) => {
  const {file, handler} = args

  const reader = new FileReader();
  reader.onload = (evt) => {
    const bstr = evt?.target?.result;
    const wb = read(bstr, {type:'binary'});
    const wsname = wb.SheetNames[0];
    const ws = wb.Sheets[wsname];
    const data = utils.sheet_to_json(ws, {header:1}) as unknown[][];

    const resultArr = []
    for (let i = 2; i < data.length; i++) {
      if (!data[i]?.length) break;
      const wallet = data[i][0] as string || ''
      const amount = String(data[i][1]) || ''
      const currency = data[i][2] as string || undefined

      resultArr.push({
        wallet, amount, currency
      })
    }
    handler(resultArr)
  };
  reader.readAsBinaryString(file);
}