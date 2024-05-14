export function getRandomColorHex() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export function generateRandomQuotes(Quotes: Quote[], category: string) {
  const shuffledQuotes = [...Quotes];
  let randomLength = Math.floor(Math.random() * 100) + 1;
  let randomQuotes: Quote[] = [];

  if (randomLength > 10) {
    randomLength = 10;
  }

  for (let i = shuffledQuotes.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements shuffledQuotes[i] and shuffledQuotes[j]
    [shuffledQuotes[i], shuffledQuotes[j]] = [
      shuffledQuotes[j],
      shuffledQuotes[i],
    ];
  }

  if (category === "Today") {
    randomQuotes = shuffledQuotes.slice(0, randomLength);
  } else {
    randomQuotes = shuffledQuotes
      .filter((quote) => quote.category === category.toLowerCase())
      .slice(0, randomLength);
  }

  return randomQuotes;
}

export function getRandomActivities(num: number, activities: string[]) {
  const shuffledActivities = [...activities];
  for (let i = shuffledActivities.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledActivities[i], shuffledActivities[j]] = [
      shuffledActivities[j],
      shuffledActivities[i],
    ];
  }
  return shuffledActivities.slice(0, num);
}
