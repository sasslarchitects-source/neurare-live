export const metadata = {
  title: "Neurare Live",
  description: "Neurare website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
