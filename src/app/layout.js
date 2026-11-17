import { Inter, Crimson_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './ThemeProvider';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Jude Olowo — Health Tech Software Developer",
  description: "Pharmacist and software developer building useful healthcare products, APIs, and technical documentation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonPro.variable}`} suppressHydrationWarning>
      <body className="antialiased dark:bg-gray-900" suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
