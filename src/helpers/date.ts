/* eslint-disable import/no-duplicates */
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

type HandleFormatDateType = {
  date: Date;
  _format: string;
};

export const handleFormatDate = ({
  date,
  _format,
}: HandleFormatDateType): string => {
  const formattedDate = format(date, _format, {
    locale: ptBR,
  });

  return formattedDate;
};
