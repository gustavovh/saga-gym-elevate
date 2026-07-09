import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  Bike,
  Dumbbell,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Waves,
  Wind,
  Zap,
} from "lucide-react";
import logo from "@/assets/sagalogo.png.asset.json";
import heroImg from "@/assets/hero-training.jpg";
import pilatesImg from "@/assets/pilates-studio.jpg.asset.json";
import spinningImg from "@/assets/spinning-hd.jpg.asset.json";
import functionalImg from "@/assets/funcional-hd.jpg.asset.json";
import redcordImg from "@/assets/redcord-hd.jpg.asset.json";
import communityImg from "@/assets/community-hd.jpg.asset.json";

import pilatesDuoImg from "@/assets/pilates-duo-hd.jpg.asset.json";
import bodypumpImg from "@/assets/bodypump.jpg.asset.json";
import waterrowerImg from "@/assets/waterrower.jpg.asset.json";
import terapeuticoImg from "@/assets/terapeutico.jpg.asset.json";
import neuracBrandImg from "@/assets/neurac-brand.jpg.asset.json";
import kimventBrandImg from "@/assets/kimvent-brand.jpg.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SAGA GYM · Gimnasio Terapéutico y Fitness en Asunción" },
      {
        name: "description",
        content:
          "SAGA GYM: gimnasio terapéutico, Pilates, Spinning, Redcord, WaterRower y entrenamiento funcional en Asunción, Paraguay. Reservá tu clase hoy.",
      },
      { property: "og:title", content: "SAGA GYM · Entrená tu mejor versión" },
      {
        property: "og:description",
        content:
          "Disciplinas premium, entrenamiento personalizado y comunidad en Asunción. Planificá tu semana en SAGA GYM.",
      },
      { property: "og:image", content: logo.url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/595981704604?text=Hola%20SAGA%20GYM%2C%20quiero%20reservar%20una%20clase";
const PHONE_1 = "+595981704604";
const PHONE_2 = "+595982600388";
const EMAIL = "infosagagym@gmail.com";
const ADDRESS = "Augusto Roa Bastos casi Agustín Pío Barrios, Asunción, Paraguay";

const services = [
  {
    icon: Heart,
    title: "Gimnasio Terapéutico",
    desc: "Rehabilitación y acondicionamiento guiado por profesionales de la salud.",
    image: terapeuticoImg.url,
  },
  {
    icon: Sparkles,
    title: "Pilates",
    desc: "Clases individuales y grupales para fuerza, postura y control corporal.",
    image: pilatesImg.url,
  },
  {
    icon: Bike,
    title: "Spinning",
    desc: "Cardio de alta intensidad en un ambiente energético e inmersivo.",
    image: spinningImg.url,
  },
  {
    icon: Activity,
    title: "Redcord",
    desc: "Suspensión neuromuscular para movilidad, estabilidad y prevención.",
    image: redcordImg.url,
  },
  {
    icon: Waves,
    title: "WaterRower",
    desc: "Remo con resistencia de agua: full body, bajo impacto, alta demanda.",
    image: waterrowerImg.url,
  },
  {
    icon: Dumbbell,
    title: "Entrenamiento Funcional",
    desc: "Programas para hombres y mujeres orientados a resultados reales.",
    image: functionalImg.url,
  },
  {
    icon: Dumbbell,
    title: "LesMills BodyPump",
    desc: "Clases grupales con barra y música: quemá grasa y tonificá todo el cuerpo.",
    image: bodypumpImg.url,
  },
  {
    icon: Sparkles,
    title: "Pilates Duo",
    desc: "Entrenamiento en pareja con reformer: técnica personalizada, doble motivación.",
    image: pilatesDuoImg.url,
  },
] as const;


const schedule = [
  { day: "Lunes a Viernes", hours: "05:30 — 22:00" },
  { day: "Sábados", hours: "07:00 — 14:00" },
  { day: "Domingos", hours: "Cerrado" },
] as const;

const testimonials = [
  {
    name: "María Fernández",
    role: "Alumna de Pilates",
    quote:
      "Cambió mi postura y mi energía diaria. Los profes son excelentes y el ambiente es una motivación constante.",
  },
  {
    name: "Diego Rolón",
    role: "Entrenamiento Funcional",
    quote:
      "En seis meses recuperé fuerza y movilidad. La planificación semanal es puntual y adaptada a mis objetivos.",
  },
  {
    name: "Carolina Vera",
    role: "Spinning & Redcord",
    quote:
      "El mejor gimnasio de Asunción. Instalaciones impecables y una comunidad que te empuja a ser mejor.",
  },
] as const;

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Signature />
      <Benefits />
      <Schedule />
      <Testimonials />
      <Location />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

function Signature() {
  return (
    <section id="metodos" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Métodos exclusivos</p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase sm:text-6xl">
            Servicios que nos <span className="text-gradient-gold">distinguen</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Tecnología y metodología de vanguardia aplicadas a tu bienestar. Diseñado para acelerar
            tu recuperación y potenciar tu rendimiento.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <SignatureCard
            tag="NEURAC · Método Noruego"
            title="Neuromuscular Activation"
            desc="Entrená en suspensión con el método noruego que revoluciona la rehabilitación y el rendimiento deportivo. Corregí tu postura, eliminá el dolor y activá tu fuerza interior"
            image={neuracBrandImg.url}
            cta="Descubrí NEURAC"
          />
          <SignatureCard
            tag="KIMVENT · Terapéutico Avanzado"
            title="Gimnasio Terapéutico"
            desc="Recuperá tu energía y mejorá tu capacidad física con un sistema diseñado para tu bienestar. KIMVENT combina fuerza, ventilación y movimiento para que vuelvas más fuerte"
            image={kimventBrandImg.url}
            cta="Probá KIMVENT"
          />
        </div>
      </div>
    </section>
  );
}

function SignatureCard({
  tag,
  title,
  desc,
  image,
  cta,
}: {
  tag: string;
  title: string;
  desc: string;
  image: string;
  cta: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border bg-surface">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
      </div>
      <div className="relative -mt-20 p-8">
        <span className="inline-block rounded-full border border-primary/40 bg-background/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur">
          {tag}
        </span>
        <h3 className="mt-4 font-display text-3xl uppercase tracking-wide sm:text-4xl">{title}</h3>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">{desc}</p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition hover:brightness-110"
        >
          {cta}
          <MessageCircle className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

const benefits = [
  { icon: ShieldCheck, label: "Reducí el dolor" },
  { icon: TrendingUp, label: "Mejorá tu postura" },
  { icon: Zap, label: "Recuperá tu energía" },
  { icon: Shield, label: "Prevení lesiones" },
  { icon: Wind, label: "Optimizá tu rendimiento" },
] as const;

function Benefits() {
  return (
    <section className="border-y border-border bg-surface/40 py-20">
      <div className="container-x">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Beneficios</p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase sm:text-5xl">
            Lo que vas a sentir
          </h2>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((b) => (
            <li
              key={b.label}
              className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-background/60 p-6 text-center transition hover:border-primary/60"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-primary/15 text-primary transition group-hover:scale-110">
                <b.icon className="h-6 w-6" />
              </span>
              <span className="font-display text-sm uppercase tracking-widest">{b.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="container-x grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3">
        <a href="#top" className="flex shrink-0 items-center gap-2">
          <img 
            src={logo.url} 
            alt="SAGA GYM" 
            className="h-10 w-10 rounded-md object-contain" 
          />
          <span className="font-display text-lg tracking-widest">SAGA GYM</span>
        </a>
        <nav className="hidden justify-center gap-8 text-sm uppercase tracking-widest text-muted-foreground md:flex">
          <a href="#servicios" className="transition hover:text-foreground">Servicios</a>
          <a href="#horarios" className="transition hover:text-foreground">Horarios</a>
          <a href="#comunidad" className="transition hover:text-foreground">Comunidad</a>
          <a href="#contacto" className="transition hover:text-foreground">Contacto</a>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition hover:brightness-110"
        >
          Reservar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Atleta entrenando en SAGA GYM"
          width={1920}
          height={1200}
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
      </div>

      <div className="container-x flex min-h-[86vh] flex-col justify-center py-20">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            Planificá tu semana.
            <br />
            <span className="text-gradient-gold">Empezá tu entrenamiento</span>
            <br />
            en SAGA GYM.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground sm:text-xl">
            Disciplinas premium, entrenamiento terapéutico y una comunidad que te acompaña.
            Diseñado para hombres y mujeres que buscan resultados reales.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition hover:brightness-110"
            >
              Reservá tu clase
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-8 py-4 text-sm font-semibold uppercase tracking-widest backdrop-blur transition hover:bg-surface/80"
            >
              Ver disciplinas
            </a>
          </div>

          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat value="6+" label="Disciplinas" />
            <Stat value="12H" label="Diarias" />
            <Stat value="100%" label="Profesionales" />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-3xl text-gradient-gold sm:text-4xl">{value}</dt>
      <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</dd>
    </div>
  );
}

function Marquee() {
  const items = ["Pilates", "Spinning", "Redcord", "WaterRower", "Funcional", "Terapéutico"];
  return (
    <div className="border-y border-border bg-surface/40 py-6 overflow-hidden">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm uppercase tracking-[0.4em] text-muted-foreground">
        {items.map((i, idx) => (
          <span key={i} className="flex items-center gap-10">
            {i}
            {idx < items.length - 1 && <span className="h-1 w-1 rounded-full bg-primary" />}
          </span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="servicios" className="py-24 sm:py-32">
      <div className="container-x">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Disciplinas</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase sm:text-6xl">
              Entrená con propósito
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Cada disciplina está dirigida por profesionales certificados. Elegí tu enfoque o combiná
            varias en tu semana.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  image,
}: {
  icon: typeof Heart;
  title: string;
  desc: string;
  image?: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-primary/60 hover:shadow-[var(--shadow-card)]">
      {image ? (
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-surface to-surface-elevated">
          <Icon className="h-20 w-20 text-primary/70" strokeWidth={1.2} />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="font-display text-xl uppercase tracking-wide">{title}</h3>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </article>
  );
}

function Schedule() {
  return (
    <section id="horarios" className="border-y border-border bg-surface/40 py-24">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Horarios y Reservas</p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase sm:text-5xl">
            Elegí el momento que te queda mejor
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Reservá por WhatsApp o llamanos directamente. Nuestro equipo confirma tu clase y arma
            tu planificación semanal.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold uppercase tracking-widest text-background transition hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={`tel:${PHONE_1}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold uppercase tracking-widest transition hover:bg-surface-elevated"
            >
              <Phone className="h-4 w-4" /> Llamar
            </a>
          </div>
        </div>
        <ul className="divide-y divide-border rounded-2xl border border-border bg-background/60">
          {schedule.map((s) => (
            <li key={s.day} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6">
              <span className="min-w-0 truncate font-display text-lg uppercase tracking-wide">{s.day}</span>
              <span className="shrink-0 font-display text-lg text-gradient-gold">{s.hours}</span>
            </li>
          ))}
          <li className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 bg-primary/10 px-6 py-6">
            <span className="min-w-0 text-sm uppercase tracking-widest text-primary">Reserva rápida</span>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 text-sm font-semibold uppercase tracking-widest text-foreground underline underline-offset-4"
            >
              Escribinos
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="comunidad" className="py-24 sm:py-32">
      <div className="container-x">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Comunidad</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase sm:text-6xl">
              Historias que entrenan
            </h2>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <img
              src={communityImg.url}
              alt="Comunidad SAGA GYM"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-8">
              <p className="font-display text-2xl uppercase tracking-wide sm:text-3xl">
                Más que un gimnasio. Una tribu.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-2xl border border-border bg-surface p-6 transition hover:border-primary/40"
              >
                <p className="text-base leading-relaxed text-foreground/90">"{t.quote}"</p>
                <footer className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/20 font-display text-primary">
                    {t.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <div className="truncate font-semibold">{t.name}</div>
                    <div className="truncate text-xs uppercase tracking-widest text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="contacto" className="border-t border-border bg-surface/40 py-24">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Ubicación y Contacto</p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase sm:text-5xl">
            Nos encontrás en el corazón de Asunción
          </h2>

          <ul className="mt-10 space-y-6">
            <ContactRow icon={MapPin} label="Dirección" value={ADDRESS} />
            <ContactRow
              icon={Phone}
              label="Teléfonos"
              value={
                <div className="flex flex-col gap-1">
                  <a href={`tel:${PHONE_1}`} className="hover:text-primary">+595 981 704 604</a>
                  <a href={`tel:${PHONE_2}`} className="hover:text-primary">+595 982 600 388</a>
                </div>
              }
            />
            <ContactRow
              icon={Mail}
              label="Email"
              value={
                <a href={`mailto:${EMAIL}`} className="hover:text-primary">
                  {EMAIL}
                </a>
              }
            />
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" /> Agendar por WhatsApp
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
          <iframe
            title="Mapa SAGA GYM"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              "Augusto Roa Bastos y Agustin Pio Barrios, Asuncion, Paraguay"
            )}&output=embed`}
            className="h-full min-h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
        <div className="mt-1 text-base text-foreground">{value}</div>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="container-x grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img 
              src={logo.url} 
              alt="SAGA GYM" 
              className="h-12 w-12 rounded-md object-contain" 
            />
            <span className="font-display text-xl tracking-widest">SAGA GYM</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Gimnasio terapéutico y fitness premium en Asunción. Diseñado para acompañarte en cada
            etapa de tu entrenamiento.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Explorá</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#servicios" className="hover:text-foreground">Servicios</a></li>
            <li><a href="#horarios" className="hover:text-foreground">Horarios</a></li>
            <li><a href="#comunidad" className="hover:text-foreground">Comunidad</a></li>
            <li><a href="#contacto" className="hover:text-foreground">Contacto</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Seguinos</div>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.facebook.com/SAGAGYMPY/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:border-primary hover:text-primary"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="container-x mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs uppercase tracking-widest text-muted-foreground sm:flex-row sm:items-center">
        <span>© {new Date().getFullYear()} SAGA GYM. Todos los derechos reservados.</span>
        <span>Asunción, Paraguay</span>
      </div>
    </footer>
  );
}

function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Reservar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-background shadow-[0_10px_40px_-10px_oklch(0.68_0.18_150/0.9)] transition hover:scale-110"
      style={{ animation: "pulse-ring 1.8s ease-out infinite" }}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
