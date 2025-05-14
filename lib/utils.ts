export function formatDate(dateString: string, showTime = false) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    ...(showTime && { hour: '2-digit', minute: '2-digit' }),
  };
  return date.toLocaleDateString('pt-BR', options);
}
