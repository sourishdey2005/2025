
import React from 'react';
import { Heart, Star, Moon, Sparkles, Flower2, Music, Sun } from 'lucide-react';
import { Memory, Reason } from './types';

export const MEMORIES: Memory[] = [
  { id: 1, text: "The first time we shared a real conversation, when hours felt like minutes.", icon: "Flower2" },
  { id: 2, text: "That quiet evening when the sunset seemed to reflect the warmth of your smile.", icon: "Sparkles" },
  { id: 3, text: "The way you laugh at the smallest things, making the world feel a little lighter.", icon: "Heart" },
  { id: 4, text: "The countless moments where we didn't even have to speak to understand each other.", icon: "Star" },
];

export const REASONS: Reason[] = [
  { id: 1, text: "Because you see the beauty in things others often overlook.", icon: "Star" },
  { id: 2, text: "Because your kindness has been the greatest highlight of my year.", icon: "Heart" },
  { id: 3, text: "Because every dream I have now seems to feature you in it.", icon: "Moon" },
  { id: 4, text: "Because you make me want to be the best version of myself.", icon: "Heart" },
];

export interface LetterData {
  id: number;
  title: string;
  icon: string;
  content: string;
  color: string;
}

export const LETTERS: LetterData[] = [
  {
    id: 1,
    title: "",
    icon: "💗",
    content: "I’m really grateful that I met you back in April 2025. I didn’t know then how much of an impact you’d have on my life, but looking back, it’s clear. From that moment on, this year started feeling different—lighter, warmer, and more meaningful. Thank you for coming into my life and making it more beautiful just by being yourself. The memories, the conversations, and even the quiet moments became special because of you. This year will always be memorable to me, and a big part of that is you.",
    color: "#fdfcf0"
  },
  {
    id: 2,
    title: "",
    icon: "🌙",
    content: "Ever since April 2025, when our paths crossed, this year has held a different kind of meaning for me. Thank you for coming into my life and adding so much warmth and happiness to it. You made ordinary days feel special and simple moments feel worth remembering. I’m truly grateful for the way you made this year more beautiful, more memorable, and quietly unforgettable.",
    color: "#f5f3ff"
  },
  {
    id: 3,
    title: "",
    icon: "✨",
    content: "Meeting you in April 2025 turned out to be one of the most unexpected and beautiful parts of this year. I didn’t realize then how much your presence would matter to me. Thank you for coming into my life and making it brighter in ways I can’t fully put into words. This year feels special because of the memories you’re part of, and I’ll always be thankful for that.",
    color: "#fff1f2"
  },
  {
    id: 4,
    title: "",
    icon: "💫",
    content: "Since April 2025, this year has felt more meaningful, and I know why. Thank you for coming into my life and making it more beautiful and memorable. You brought smiles, comfort, and moments that I’ll always cherish. Even the smallest interactions became something I looked forward to. I’m grateful for you and for the way you made this year feel so special.",
    color: "#f0fdf4"
  },
  {
    id: 5,
    title: "",
    icon: "🌸",
    content: "I still think about how meeting you in April 2025 changed the way this year unfolded for me. Thank you for coming into my life and making it brighter, happier, and more memorable. Your presence added something special to my days, and that’s something I’ll always be thankful for.",
    color: "#fff7ed"
  }
];

export const LETTER_CONTENT = `My Dearest,

As the year 2025 comes to a close, I find myself looking back at all the pages we've filled. Before April, the days were just markers on a calendar. But then you arrived, and suddenly, every moment carried a weight of gold.

Thank you for the kindness you've shown me, for the patience you hold, and for simply being who you are. You've turned a regular year into a masterpiece of memories. 

I didn't know that my life was missing a specific kind of light until you stepped into it. Now, as I look toward the future, I can't imagine a single path that doesn't have you walking beside me.

Thank you for making 2025 the most beautiful year of my life. 

With all my heart,
Your admirer.`;
