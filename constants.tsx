import React from 'react';
import { Service, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'tech',
    name: 'Technology Help',
    icon: '🖥️',
    priceRange: '$10–$20',
    details: 'Troubleshooting, device setup, or basic tech support',
  },
  {
    id: 'cleaning',
    name: 'Cleaning',
    icon: '🧼',
    priceRange: '$15–$25',
    details: 'Light cleaning tasks around the home',
  },
  {
    id: 'party',
    name: 'Party Help',
    icon: '🎉',
    priceRange: '$15–$25',
    details: 'Assisting with party setup, hosting, or post-party cleanup',
  },
  {
    id: 'pets',
    name: 'Pet Sitting',
    icon: '🐾',
    priceRange: '$10–$20',
    details: 'Caring for pets, including feeding and well-being',
    notes: 'Discuss large/unfamiliar dogs for safety',
  },
  {
    id: 'errands',
    name: 'Errands',
    icon: '🏃',
    priceRange: '$10–$15',
    details: 'Shopping, deliveries, or small tasks',
  },
  {
    id: 'gardening',
    name: 'Gardening',
    icon: '🌿',
    priceRange: '$15–$25',
    details: 'Watering plants, weeding, basic gardening',
  },
  {
    id: 'senior',
    name: 'Senior Assistance',
    icon: '🧑‍⚕️',
    priceRange: '$20–$30',
    details: 'Companionship, help with non-medical tasks or errands',
  },
  {
    id: 'labor',
    name: 'General Labor',
    icon: '💪',
    priceRange: '$15–$30+',
    details: 'Moving furniture, small repairs, general manual work',
    notes: 'Price depends on complexity/equipment',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "What areas do you service?",
    answer: "We primarily service Albury and the surrounding local suburbs. If you're slightly further out, feel free to reach out and we can discuss if travel is possible!"
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We are strictly a cash-only service. We do not accept bank transfers, card payments, or digital apps like PayPal/PayID at this time. Payment is settled in cash upon completion."
  },
  {
    question: "What if the task takes longer than expected?",
    answer: "If a task is significantly more complex or time-consuming than initially discussed, we'll chat about a fair price adjustment before continuing. Transparency is key!"
  },
  {
    question: "Are your prices negotiable?",
    answer: "Yes! The prices listed are guides. We aim to be fair and can negotiate based on the specific difficulty, equipment needed, and your budget."
  }
];

export const HOURS = {
  schoolTerm: [
    { day: 'Monday', hours: '4:00 PM – 8:00 PM' },
    { day: 'Tuesday – Wednesday', hours: 'Closed' },
    { day: 'Thursday', hours: '4:00 PM – 8:00 PM' },
    { day: 'Friday', hours: '4:00 PM – 9:00 PM' },
    { day: 'Saturday – Sunday', hours: '8:00 AM – 10:00 PM' }
  ],
  holidays: [
    { day: 'Monday – Friday', hours: '10:00 AM – 6:00 PM' },
    { day: 'Saturday – Sunday', hours: '8:00 AM – 10:00 PM' }
  ],
  closures: [
    { event: 'Christmas Eve', icon: '🎄' },
    { event: 'Christmas Day', icon: '🎅' },
    { event: 'New Year’s Eve', icon: '🎆' },
    { event: 'New Year’s Day', icon: '🎉' },
    { event: 'Easter Sunday', icon: '🐣' },
    { event: 'Good Friday', icon: '✝️' }
  ]
};