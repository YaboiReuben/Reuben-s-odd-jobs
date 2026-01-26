export interface Service {
  id: string;
  name: string;
  icon: string;
  priceRange: string;
  details: string;
  notes?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BookingData {
  serviceType: string;
  firstName: string;
  lastName: string;
  email: string;
  details: string;
  preferredDateTime: string;
  paymentMethod: string;
}

export enum PaymentMethod {
  CASH = 'Cash Only'
}