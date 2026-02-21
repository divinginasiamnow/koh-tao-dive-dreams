// Simple Rezdy link helper. Configure VITE_REZDY_* env vars with full booking URLs.
const REZDY: Record<string, string> = {
  'Fun Dive': import.meta.env.VITE_REZDY_FUN_DIVE || '',
  'Discover Scuba': import.meta.env.VITE_REZDY_DISCOVER_SCUBA || '',
  'Sail Rock Special': import.meta.env.VITE_REZDY_SAIL_ROCK_SPECIAL || '',
  // Courses (match displayed titles)
  'Open Water Diver': import.meta.env.VITE_REZDY_OPEN_WATER || '',
  'Advanced Open Water': import.meta.env.VITE_REZDY_ADVANCED || '',
  'Emergency First Responder': import.meta.env.VITE_REZDY_EFR || '',
  'Rescue Diver': import.meta.env.VITE_REZDY_RESCUE || '',
  'Divemaster': import.meta.env.VITE_REZDY_DIVEMASTER || '',
  'IDC - Instructor Development Course': import.meta.env.VITE_REZDY_INSTRUCTOR || '',
};

export function getRezdyUrl(title: string) {
  return REZDY[title] || '';
}

export default { getRezdyUrl };
