
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

export const LETTER_CONTENT = `My Dearest,

As the year 2025 comes to a close, I find myself looking back at all the pages we've filled. Before April, the days were just markers on a calendar. But then you arrived, and suddenly, every moment carried a weight of gold.

Thank you for the kindness you've shown me, for the patience you hold, and for simply being who you are. You've turned a regular year into a masterpiece of memories. 

I didn't know that my life was missing a specific kind of light until you stepped into it. Now, as I look toward the future, I can't imagine a single path that doesn't have you walking beside me.

Thank you for making 2025 the most beautiful year of my life. 

With all my heart,
Your admirer.`;
