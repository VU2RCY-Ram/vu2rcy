export type Testimonial = {
  name: string
  callsign: string
  quote: string
}

// Real feedback from operators, sent over WhatsApp — replaces the earlier
// placeholder set now that real testimonials exist.
export const testimonials: Testimonial[] = [
  {
    name: "Dr Shankar Sathyapal",
    callsign: "VU2FI",
    quote: "Using APRS Weather Station VU2FI-13 from last 10 years.",
  },
  {
    name: "Ajoy Lion",
    callsign: "VU2JHM",
    quote:
      "I have been using APRS Weather Station VU2JHM-13 for the last 9 years & using the APRS Tracker VU2JHM-9 from the last 3 years.",
  },
  {
    name: "C R Narayana Murthy",
    callsign: "VU2CHR",
    quote: "Using APRS Weather Station VU2CHR-13 from last 4 years.",
  },
]
