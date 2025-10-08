import Image from "next/image";
import { motion } from "framer-motion";

/**
 *   - mexico-city-faded.jpg (faded skyline/landmark)
 *   - tuesday-polanco.jpg
 *   - zocalo-rooftop.jpg
 *   - azul-historico.jpg
 *   - xochimilco-arcatierrra.jpg
 *   - frida-casa-azul.jpg
 *   - coyoacan.jpg
 *   - chapultepec-castle.jpg
 *   - condesa-moro.jpg
 *   - camino-real-polanco.jpg
 *   - fiesta-americana.jpg
 *   - hacienda-acamilpa.jpg
 *   - wedding-day.jpg
 *   - shuttle.jpg
 */

// ====== EDITABLE DATA ======
const DATA = {
  couple: { bride: "Kristina", groom: "Alan" },
  city: "Mexico City",
  datesHeadline: "October 21–26",
  year: 2025,
  keyInvites: [
    {
      title: "Welcome Breakfast at El Bajío (Polanco)",
      date: "Tue 21 Oct",
      time: "9:30–11:30 AM",
      maps: "https://www.google.com/maps/search/?api=1&query=El+Baj%C3%ADo+Alejandro+Dumas+7+Polanco",
      site: "https://www.azul.rest/en", // keep as example; replace if you prefer
      note: "We'd love everyone to join this friendly kickoff for our international guests.",
    },
    {
      title: "Xochimilco Breakfast & Arca Tierra Tour",
      date: "Wed 22 Oct",
      time: "10:00 AM – 2:00 PM",
      site: "https://www.arcatierra.com/producto/chefs-farm-to-table/",
      note: "Farm-to-table on the chinampas — unforgettable!",
    },
    {
      title: "Civil Wedding Reception",
      date: "Thu 23 Oct",
      time: "Evening",
      maps: "https://www.google.com/maps/search/?api=1&query=Civil+Wedding+Reception+Venue+CDMX",
      site: "https://example.com/civil-wedding-details", // TODO: replace with your WhatsApp invite details
      note: "A la carte (guests cover their orders). Venue & menu per the WhatsApp invite.",
    },
  ],
  slides: [
    // 1) Title slide
    {
      type: "title",
      image: "/images/mexico-city-hero.jpg",
      heading: "Welcome to Mexico City",
      subheading: "A week of celebrations with Kristina & Alan",
    },

    // 2) Welcome slide
    {
      type: "welcome",
      image: "/images/mexico-city-faded.jpg",
      body: [
        "For many of you, this will be your first time in this amazing city — so we put together a suggested (totally optional) 6‑day itinerary.",
        "Kristina, Alan, and our family will follow it exactly as written, and everyone’s welcome to join all or just some parts.",
        "Three activities we’d especially love you to join:",
      ],
      bullets: [
        "Tue 21 — Breakfast at El Bajío Restaurant, 10:00 – 12:00 AM",
        "Wed 22 — Experience at Xochimilco, 10:00 AM – 2:00 PM",
        "Thu 23 — Civil Wedding dinner at Ilios Resutaurant, 6:00 PM",
      ],
    },

    // 3) Tuesday 21 Oct
    {
      type: "day",
      date: "Tuesday 21 October",
      image: "/images/tuesday-polanco.jpg",
      items: [
        {
          time: "10:00 AM",
          title: "El Bajío (Polanco) — meet & greet",
          desc: "Warm welcome for everyone who traveled in internationally.",
          links: [
            { label: "Maps", href: "https://www.google.com/maps/search/?api=1&query=El+Baj%C3%ADo+Alejandro+Dumas+7+Polanco" },
            { label: "About El Bajío", href: "https://www.restauranteelbajio.com.mx/" },
          ],
        },
        {
          time: "12:00 AM",
          title: "Stroll around Polanco",
          desc: "Walk Masaryk, Parque Lincoln, and Soumaya/Carso area for easy sightseeing & photos.",
        },
        {
          time: "1:00 – 2:30 PM",
          title: "Open top bus to Historic Center",
          desc: "Board near Auditorio Nacional and ride toward the Zócalo. We'll get the tickets at the station.",
          links: [
            { label: "Turibus (Historic center route)", href: "https://www.turibus.com.mx/en/cdmx/circuits/turibus-mexico-city-circuit-historic-center-route" },
            { label: "Where to board: Auditorio Nacional", href: "https://www.google.com/maps/search/?api=1&query=Auditorio+Nacional+CDMX" },
          ],
        },
        {
          time: "3:00 PM",
          title: "Historic Center exploring",
          desc: "Get off at Zócalo, explore the Cathedral, Templo Mayor, and grab rooftop drinks.",
          links: [
            { label: "Terraza Catedral", href: "https://mundojovenhostels.com/en/terraza-catedral-2/" },
          ],
        },
        {
          time: "5:30 PM",
          title: "Dinner — Azul Histórico",
          desc: "Iconic courtyard restaurant with refined traditional cuisine. Be ready for mezcalitas!",
          links: [
            { label: "Azul Histórico", href: "https://www.azul.rest/en/azul-hist%C3%B3rico" },
            { label: "Maps", href: "https://www.google.com/maps/search/?api=1&query=Azul+Hist%C3%B3rico+CDMX" },
          ],
        },
      ],
    },

    // 4) Wednesday 22 Oct
    {
      type: "day",
      date: "Wednesday 22 October",
      image: "/images/xochimilco-arcatierrra.jpg",
      items: [
        {
          time: "10:00 AM – 2:00 PM",
          title: "Brunch and traditional boat tour at Xochimilco",
          desc:
            "Expect a four‑course, farm‑to‑table experience on the historic chinampas (boats). This is the only remaining part of the ancient Aztec Lake.",
          details:
            "From Polanco, leave around 9:00 AM to allow ~45–60 min (traffic varies). Budget ~US$15–25 for UberX each way (300–450 MXN).",
          links: [
            { label: "Program info", href: "https://www.arcatierra.com/producto/chefs-farm-to-table/" },
            { label: "Meeting point: Arca Tierra Xochimilco", href: "https://www.google.com/maps/place/Arca+Tierra/@19.2799171,-99.1085495,17z/data=!3m1!4b1!4m6!3m5!1s0x85ce03bc2435b2ab:0xb32aefdcd3089ad7!8m2!3d19.2799121!4d-99.1036786!16s%2Fg%2F11stb60v74?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D" },
          ],
        },
        {
          time: "2:30 PM",
          title: "Museo Frida Kahlo (Casa Azul)",
          desc:
            "We'll head over to Coyoacán, a beautiful pictiresque area, and book the 3:00 PM slot so we can enter Frida Kahlo's inspiring home together. Fun fact: Coldplay titled ‘Viva la Vida’ after a Frida painting they saw at Casa Azul.",
          links: [
            { label: "Tickets/Visit", href: "https://www.museofridakahlo.org.mx/visit/?lang=en" },
          ],
        },
        {
          time: "4:00 PM",
          title: "Dinner in Coyoacán at La Calaca",
          desc: "Wander the plazas, markets and cafés — then we’ll dine on the square.",
          links: [
            { label: "La Calaca", href: "https://lacalacacoyoacan.com/" },
          ],
        },
      ],
    },

    // 5) Thursday 23 Oct
    {
      type: "day",
      date: "Thursday 23 October",
      image: "/images/chapultepec-castle.jpg",
      items: [
        {
          time: "10:00 AM – 12:00 PM",
          title: "Castillo de Chapultepec",
          desc:
            "Meet at the gates at 10:00 AM. This is the only royal castle in North America — rich history and epic views.",
          links: [
            { label: "Chapultepec Castle - Maps", href: "https://www.google.com/maps/place/Chapultepec+Castle/@19.4204447,-99.1845099,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1fecd47ed8f23:0xa6e0008524818b32!8m2!3d19.4204397!4d-99.181935!16zL20vMDd2MGxm?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D" },
          ],
        },
        {
          time: "12:00 PM",
          title: "Condesa — Parque México",
          desc: "Uber to Condesa for classic churros & chocolate at El Moro Condesa; stroll Parque México and nearby cafés/bars.",
          links: [
            { label: "El Moro (Parque México) — Maps", href: "https://www.google.com/maps/search/?api=1&query=Churrer%C3%ADa+El+Moro+Parque+M%C3%A9xico" },
          ],
        },
        {
          time: "4:00 PM",
          title: "Head back to hotels & get ready",
          desc: "Outfits & a quick rest before the reception.",
        },
        {
          time: "6:00 PM",
          title: "Civil Wedding Reception",
          desc: "We can't wait to see you at our civil wedding at Ilios Restaurant! As per our WhatsApp invite, this will be à la carte.",
          links: [
            { label: "Maps", href: "https://www.google.com/maps/place/Ilios+Greek/@19.4318681,-99.1965903,17z/data=!3m1!4b1!4m6!3m5!1s0x85d203d667cb37bd:0xab914cc5d06d5efa!8m2!3d19.4318631!4d-99.1940154!16s%2Fg%2F11r_c583b0?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D" },
            { label: "Ilios Restaurant", href: "https://iliosrestaurante.com.mx/best-greek-restaurant-in-polanco/" },
          ],
        },
      ],
    },

    // 6) Friday 24 Oct
    {
      type: "day",
      date: "Friday 24 October",
      image: "/images/camino-real-polanco.jpg",
      items: [
        { time: "Morning", title: "Check out and head to Camino Real hotel meeting point.", desc: "" },
        {
          time: "12:00 PM",
          title: "Meet at Camino Real Polanco — Shuttle departs 12:00 PM",
          desc: "There will be 2 shuttles leaving from here. One will go directly to Hacienda Acamilpa for those staying there. The other will go to Fiesta Americana and Fiesta Inn.",
          links: [
            { label: "Camino Real — Maps", href: "https://www.google.com/maps/search/?api=1&query=Camino+Real+Polanco" },
          ],
        },
        {
          time: "~2:30 PM",
          title: "Check‑in & lunch at hotels",
          desc: "Enjoy checking into your beautiful hotel and grab some lunch, chill before heading to the ice-breaker at our venue.",
        },
        {
          time: "5:00 PM",
          title: "Icebreaker at Hacienda Acamilpa",
          desc: "Shuttle picks up Fiesta Americana guests at 5:00 PM.",
          links: [
            { label: "Hacienda Acamilpa - Maps", href: "https://www.google.com/maps/place/Hacienda+Acamilpa/@18.7166051,-99.1632042,17z/data=!3m1!4b1!4m9!3m8!1s0x85ce78f3a55aee29:0xcc1f12d5c1e62b82!5m2!4m1!1i2!8m2!3d18.7166!4d-99.1606293!16s%2Fg%2F11b6btyr4m?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D" },
          ],
        },
        {
          time: "10:00 PM",
          title: "Shuttle returns to Fiesta Americana",
          desc: "Wind down and rest up for the big day!",
        },
      ],
    },

    // 7) Saturday 25 Oct (Wedding Day)
    {
      type: "day",
      date: "Saturday 25 October — Wedding Day",
      image: "/images/wedding-day.jpg",
      items: [
        { time: "1:00 PM", title: "Shuttle pick up", desc: "" },
        { time: "2:30 PM", title: "Guest arrival", desc: "" },
        { time: "3:00 PM", title: "Ceremony", desc: "" },
        { time: "4:00 PM", title: "Cocktail", desc: "" },
        { time: "5:30 PM", title: "Reception", desc: "" },
        { time: "8:00 PM", title: "Party starts!", desc: "" },
        { time: "02:00 AM", title: "Party ends", desc: "Shuttles will start departing every hour from 11pm" },

      ],
      links: [
        { label: "Hacienda Acamilpa — Maps", href: "https://www.google.com/maps/search/?api=1&query=Hacienda+Acamilpa+Morelos" },
      ],
    },

    // 8) Sunday 26 Oct
    {
      type: "day",
      date: "Sunday 26 October",
      image: "/images/shuttle.jpg",
      items: [
        {
          time: "11:30 AM",
          title: "Shuttle departs Hacienda Acamilpa",
          desc: "For those staying on‑site.",
        },
        {
          time: "12:00 PM",
          title: "Pickup at Fiesta Americana",
          desc: "Return to Camino Real Polanco (~2:30 PM arrival).",
          links: [
            { label: "Camino Real Polanco — Maps", href: "https://www.google.com/maps/search/?api=1&query=Camino+Real+Polanco" },
          ],
        },
        {
          time: "Transfers",
          title: "~30 min from Camino Real to airport",
          desc: "Plan your flights with some buffer for traffic.",
        },
      ],
    },

    // 9) Final thank‑you slide
    {
      type: "final",
      image: "/images/mexico-city-hero.jpg",
      heading: "Thank you for joining us!",
      subheading:
        "We can’t wait to make this week unforgettable!",
    },
  ],

  // Useful links section at the end of the page
  usefulLinks: [
    { label: "Turibus (routes & schedules)", href: "https://www.turibus.com.mx/" },
    { label: "Balcón del Zócalo", href: "https://balcondelzocalo.com/en/" },
    { label: "Terraza Catedral", href: "https://mundojovenhostels.com/en/terraza-catedral-2/" },
    { label: "Azul Histórico", href: "https://www.azul.rest/en/azul-hist%C3%B3rico" },
    { label: "Arca Tierra — Chef’s Farm to Table", href: "https://www.arcatierra.com/producto/chefs-farm-to-table/" },
    { label: "Museo Frida Kahlo — Visit/Book", href: "https://www.museofridakahlo.org.mx/visit/?lang=en" },
    { label: "Castillo de Chapultepec (about)", href: "https://en.wikipedia.org/wiki/Chapultepec_Castle" },
    { label: "Camino Real Polanco (site)", href: "https://www.caminoreal.com/en/caminoreal/camino-real-polanco-mexico" },
  ],
};

// ====== COMPONENT ======
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const titleVariants = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9 } },
};

const SectionShell: React.FC<React.PropsWithChildren<{ id?: string; bg?: string }>> = ({ id, children }) => (
  <section id={id} className={`relative w-full py-10 md:py-20`}>
    <div className="container mx-auto px-5 md:px-10 max-w-6xl">{children}</div>
  </section>
);

const SlideTitle: React.FC<{ image: string; heading: string; subheading?: string }> = ({ image, heading, subheading }) => (
  <div className="relative w-full h-[60vh] md:h-[72vh] rounded-2xl overflow-hidden shadow">
    <Image src={image} alt={heading} fill className="object-cover" priority />
    <div className="absolute inset-0 bg-black/40" />
    <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={titleVariants}>
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow">{heading}</h1>
        {subheading && <p className="mt-4 text-lg md:text-2xl opacity-95">{subheading}</p>}
      </motion.div>
    </div>
  </div>
);

type WelcomeBlockProps = {
  image: string;
  title: string;
  body: string[];
  bullets: string[];
};

export const WelcomeBlock: React.FC<WelcomeBlockProps> = ({
  image,
  title,
  body,
  bullets,
}) => (
  <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
    {/* Left image column */}
    <div className="relative w-full h-[300px] md:w-[25%] md:h-auto min-h-[300px]">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>

    {/* Right content column */}
    <div className="p-5 lg:px-10 lg:py-8 md:w-[75%] text-center md:text-left">
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
        {title}
      </h2>

      {body.map((t, i) => (
        <p key={i} className="text-gray-700 max-w-3xl mx-auto md:mx-0 mb-3">
          {t}
        </p>
      ))}

      <ul className="list-disc mt-3 ml-6 text-gray-800 text-left">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  </div>
);

const DayCard: React.FC<{ date: string; image: string; items: Array<any> }> = ({ date, image, items }) => (
  <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="bg-white rounded-2xl shadow overflow-hidden">
    <div className="relative h-56 w-full">
      <Image src={image} alt={date} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
      <h3 className="absolute bottom-4 left-4 text-white text-2xl md:text-3xl font-bold drop-shadow">{date}</h3>
    </div>
    <div className="p-6 grid gap-5">
      {items.map((it, idx) => (
        <div key={idx} className="border-l-4 border-black/10 pl-4">
          <p className="text-sm uppercase tracking-wide text-gray-500">{it.time}</p>
          <h4 className="text-xl font-semibold">{it.title}</h4>
          {it.desc && <p className="text-gray-700">{it.desc}</p>}
          {it.details && <p className="text-gray-700 italic">{it.details}</p>}
          {Array.isArray(it.links) && it.links.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-2">
              {it.links.map((l: any, i: number) => (
                <a key={i} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 underline">
                  <span>↗</span>
                  <span>{l.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </motion.div>
);

const FinalBlock: React.FC<{ image: string; heading: string; subheading?: string }> = ({ image, heading, subheading }) => (
  <div className="relative w-full h-[50vh] md:h-[60vh] rounded-2xl overflow-hidden shadow">
    <Image src={image} alt={heading} fill className="object-cover" />
    <div className="absolute inset-0 bg-black/40" />
    <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold drop-shadow">{heading}</h2>
        {subheading && <p className="mt-4 text-lg md:text-2xl opacity-95">{subheading}</p>}
      </div>
    </div>
  </div>
);

const EventsMX: React.FC = () => {
  const { slides } = DATA;

  return (
    <motion.main
      id="schedule"
      className="relative min-h-screen p-5 md:p-10 bg-gray-100 flex flex-col gap-10 font-[Inter,ui-sans-serif]"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}
    >
      {/* Header */}
      <header className="container mx-auto max-w-6xl px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
          <h2 className={`absolute top-0 pr-5 right-0 lg:right-10 text-[27px] sm:text-[40px] lg:text-[100px] text-gray-500 font-windsong`}
          >Activities</h2>
        </div>
      </header>

      {/* Slides */}
      <SectionShell>
        <div className="grid gap-10">
          {slides.map((s: any, i) => {
            if (s.type === "title") return <SlideTitle key={i} image={s.image} heading={s.heading} subheading={s.subheading} />;
            if (s.type === "welcome") return <WelcomeBlock key={i} image={s.image} title={s.title} body={s.body} bullets={s.bullets} />;
            if (s.type === "day") return <DayCard key={i} date={s.date} image={s.image} items={s.items} />;
            if (s.type === "final") return <FinalBlock key={i} image={s.image} heading={s.heading} subheading={s.subheading} />;
            return null;
          })}
        </div>
      </SectionShell>
    </motion.main>
  );
};

export default EventsMX;