import { format } from 'date-fns';
import { id } from 'date-fns/locale';

/**
 * Generates a WhatsApp deep link with pre-filled message
 * @param phoneNumber - Phone number in format 62XXXXXXXXXXX
 * @param message - Pre-filled message text
 * @returns WhatsApp web/app link
 */
export function generateWhatsAppLink(phoneNumber: string, message: string): string {
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Formats a Date object to Indonesian date string
 * @param date - Date object
 * @returns Formatted date string (e.g., "Senin, 15 Januari 2024")
 */
export function formatDate(date: Date): string {
  return format(date, 'EEEE, dd MMMM yyyy', { locale: id });
}

/**
 * Formats a Date object to short Indonesian date string
 * @param date - Date object
 * @returns Formatted date string (e.g., "15 Jan 2024")
 */
export function formatDateShort(date: Date): string {
  return format(date, 'dd MMM yyyy', { locale: id });
}

/**
 * Merges class names, filtering out falsy values
 * Useful for conditional Tailwind classes
 * @param classes - Class names to merge
 * @returns Merged class string
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Validates Indonesian phone number format
 * @param phone - Phone number string
 * @returns true if valid Indonesian phone number
 */
export function isValidIndonesianPhone(phone: string): boolean {
  const cleanPhone = phone.replace(/\D/g, '');
  // Indonesian phone: starts with 62 or 0, followed by 8-12 digits
  return /^(62|0)[0-9]{8,12}$/.test(cleanPhone);
}

/**
 * Formats phone number to WhatsApp format (62XXXXXXXXXXX)
 * @param phone - Phone number in any format
 * @returns Formatted phone number for WhatsApp
 */
export function formatPhoneForWhatsApp(phone: string): string {
  let cleanPhone = phone.replace(/\D/g, '');

  // If starts with 0, replace with 62
  if (cleanPhone.startsWith('0')) {
    cleanPhone = '62' + cleanPhone.slice(1);
  }

  // If doesn't start with 62, add it
  if (!cleanPhone.startsWith('62')) {
    cleanPhone = '62' + cleanPhone;
  }

  return cleanPhone;
}

/**
 * Scrolls smoothly to an element by ID
 * @param elementId - ID of target element (without #)
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
