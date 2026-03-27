import { Monitor, Calendar, Phone, Clock, AlertTriangle, Lightbulb, ShieldAlert, FileText, MapPin, Wrench, Globe, CreditCard, Search, Users, HelpCircle } from 'lucide-react';

export const categories = [
  {
    id: 'tech',
    title: 'Technical Help',
    icon: Monitor,
    options: [
      'I need help with a device',
      'I need help with software or settings',
      'Other'
    ]
  },
  {
    id: 'scheduling',
    title: 'Scheduling & Appointments',
    icon: Calendar,
    options: [
      'I need help arranging a time',
      'I need to change a time',
      'Other'
    ]
  },
  {
    id: 'communication',
    title: 'Communication Issues',
    icon: Phone,
    options: [
      'I can’t reach someone',
      'I’m having trouble getting responses',
      'Other'
    ]
  },
  {
    id: 'timing',
    title: 'Timing & Availability',
    icon: Clock,
    options: [
      'I need to confirm availability',
      'I need to reschedule',
      'Other'
    ]
  },
  {
    id: 'complaints',
    title: 'Complaints & Issues',
    icon: AlertTriangle,
    options: [
      'I want to report a problem',
      'I want to make a complaint',
      'Other'
    ]
  },
  {
    id: 'feedback',
    title: 'Suggestions & Feedback',
    icon: Lightbulb,
    options: [
      'I have an idea for improvement',
      'I want to provide feedback',
      'Other'
    ]
  },
  {
    id: 'safety',
    title: 'Safety & Concerns',
    icon: ShieldAlert,
    options: [
      'I have a safety concern',
      'I need guidance on precautions',
      'Other'
    ]
  },
  {
    id: 'docs',
    title: 'Documentation & Forms',
    icon: FileText,
    options: [
      'I need help with paperwork',
      'I need clarification on a form',
      'Other'
    ]
  },
  {
    id: 'location',
    title: 'Location & Directions',
    icon: MapPin,
    options: [
      'I need directions',
      'I need location details',
      'Other'
    ]
  },
  {
    id: 'equipment',
    title: 'Equipment & Tools Questions',
    icon: Wrench,
    options: [
      'I need advice on using tools',
      'I need info on what is needed',
      'Other'
    ]
  },
  {
    id: 'website',
    title: 'Website/App Issues',
    icon: Globe,
    options: [
      'I’m having trouble with the website or app',
      'I need help navigating or using features',
      'Other'
    ]
  },
  {
    id: 'payments',
    title: 'Payments & Cash Questions',
    icon: CreditCard,
    options: [
      'I need clarification on payment',
      'Other'
    ]
  },
  {
    id: 'job',
    title: 'Job Clarification',
    icon: Search,
    options: [
      'I have a question about a task or job',
      'Other'
    ]
  },
  {
    id: 'support',
    title: 'Support for Others',
    icon: Users,
    options: [
      'I’m helping someone and need guidance',
      'I need advice for assisting someone',
      'Other'
    ]
  },
  {
    id: 'general',
    title: 'General Questions',
    icon: HelpCircle,
    options: [
      'I have a question not listed above',
      'Other'
    ]
  }
];
