import { BUSINESS_INFO, BookingLanguage } from '../data/business';

export interface BookingPayload {
  customerName: string;
  mobileNumber?: string;
  serviceName: string;
  pickupLocation: string;
  destination: string;
  travelDate: string;
  passengers: string;
  preferredLanguage: BookingLanguage;
  additionalRequirements?: string;
}

export function getWhatsAppNumberForLanguage(language: BookingLanguage): string {
  return language === 'Hindi'
    ? BUSINESS_INFO.contacts.hindi.whatsappNumber
    : BUSINESS_INFO.contacts.english.whatsappNumber;
}

export function buildBookingMessage(payload: BookingPayload): string {
  const lines = [
    `Hello ${BUSINESS_INFO.name}, I would like to request a booking.`,
    '',
    `Customer Name: ${payload.customerName.trim()}`,
    payload.mobileNumber ? `Mobile Number: ${payload.mobileNumber.trim()}` : null,
    `Selected Service / Package: ${payload.serviceName.trim()}`,
    `Pickup Location: ${payload.pickupLocation.trim()}`,
    `Destination: ${payload.destination.trim()}`,
    `Travel Date: ${payload.travelDate.trim()}`,
    `Number of Passengers: ${payload.passengers.trim()}`,
    `Preferred Language: ${payload.preferredLanguage}`,
    payload.additionalRequirements?.trim()
      ? `Additional Requirements: ${payload.additionalRequirements.trim()}`
      : null,
  ].filter(Boolean);

  return lines.join('\n');
}

export function buildWhatsAppUrl(payload: BookingPayload): string {
  const targetNumber = getWhatsAppNumberForLanguage(payload.preferredLanguage);
  const text = encodeURIComponent(buildBookingMessage(payload));
  return `https://wa.me/${targetNumber}?text=${text}`;
}

export function buildDirectWhatsAppUrl(
  channel: 'general' | 'hindi' | 'english',
  prefillText?: string,
): string {
  const targetNumber = BUSINESS_INFO.contacts[channel].whatsappNumber;
  const defaultMessage =
    channel === 'hindi'
      ? `Namaste ${BUSINESS_INFO.name}, mujhe trip booking ke liye jaankari chahiye.`
      : `Hello ${BUSINESS_INFO.name}, I would like to enquire about vehicle rental or a tour package.`;
  const text = encodeURIComponent(prefillText || defaultMessage);
  return `https://wa.me/${targetNumber}?text=${text}`;
}
