export function generateRandomQuotes(Quotes: Quote[], category: string) {
  let randomLength = Math.floor(Math.random() * 100) + 1;
  let randomQuotes: Quote[] = [];

  if (randomLength > 10) {
    randomLength = 10;
  }
  if (category === "Today") {
    randomQuotes = Quotes.slice(0, randomLength);
  } else {
    randomQuotes = Quotes.filter(
      (quote) => quote.category === category.toLowerCase()
    ).slice(0, randomLength);
  }

  return randomQuotes;
}
