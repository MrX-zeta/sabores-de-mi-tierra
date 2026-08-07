import { site } from "@sabores/config";

export default function JsonLd() {
  const datos = {
    "@context": "https://schema.org",
    "@type": "GroceryStore",
    name: site.businessName,
    description: site.seo.description,
    url: site.seo.url,
    telephone: `+${site.whatsapp.number}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.location.street,
      addressLocality: site.location.city,
      addressRegion: site.location.state,
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.location.geo.lat,
      longitude: site.location.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
    paymentAccepted: "Cash",
    priceRange: "$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(datos) }}
    />
  );
}