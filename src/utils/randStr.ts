export const randStr = () => {
  const Strings = [
    "Ce faci?",
    "Mancare",
    "Sticla",
    "Masina",
    "Casa",
    "Caine",
    "Pisica",
  ];
  const greet = Math.floor(Math.random() * Strings.length);
  return Strings[greet];
};
