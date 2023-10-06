import localFont from "next/font/local";
import { Crimson_Text, Inconsolata, Inter } from "next/font/google";

export const cal = localFont({
  src: "./AngelList-VF.ttf",
  variable: "--font-title",
});

export const crimsonBold = Crimson_Text({
  weight: "700",
  variable: "--font-title",
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-default",
  subsets: ["latin"],
});

export const inconsolataBold = Inconsolata({
  weight: "700",
  variable: "--font-title",
  subsets: ["latin"],
});

export const crimson = Crimson_Text({
  weight: "400",
  variable: "--font-default",
  subsets: ["latin"],
});

export const inconsolata = Inconsolata({
  variable: "--font-default",
  subsets: ["latin"],
});

export const titleFontMapper = {
  Default: cal.variable,
  Serif: cal.variable,
  Mono: cal.variable,
};

export const defaultFontMapper = {
  Default: cal.variable,
  Serif: cal.variable,
  Mono: cal.variable,
};
