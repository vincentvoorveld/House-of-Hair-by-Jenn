import { Navigation } from "@/components/Navigation";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { Scissors, Palette, Sparkles, MapPin, Instagram, Phone, Clock, Mail } from "lucide-react";
import profileImage from "@assets/image_1768508377983.png";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navigation />

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-secondary/40 rounded-full blur-[100px] opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[80px] opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center max-w-3xl mx-auto"
          >
            <motion.span variants={fadeInUp} className="text-sm md:text-base uppercase tracking-[0.2em] text-primary/80 font-semibold mb-4 block">
              Kapsalon aan huis in Amersfoort
            </motion.span>
            
            <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-6 leading-tight">
              House of Hair <br className="hidden sm:block" />
              <span className="italic text-primary/90">by Jenn</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
              Gespecialiseerd in knippen, kleuren & krullen. Persoonlijke aandacht in een ontspannen sfeer.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <a
                href="tel:+31636320606"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
              >
                <Scissors className="mr-2 w-5 h-5" />
                Maak een afspraak
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <Section id="about" dark className="relative">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-primary/10 rounded-[2rem] transform rotate-3 scale-105 z-0" />
            <img 
              src={profileImage} 
              alt="Jenn from House of Hair" 
              className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/5] z-10" 
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">Over de salon</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Bij <span className="font-serif italic text-primary font-medium">House of Hair by Jenn</span> staat persoonlijke aandacht centraal. In mijn kleinschalige salon aan huis neem ik ruim de tijd voor je, zodat we samen kunnen kijken wat het beste bij jou en je haar past.
              </p>
              <p>
                Ik werk uitsluitend op afspraak, waardoor er altijd een rustige sfeer hangt zonder wachttijden. Of je nu komt voor een simpele knipbeurt, een complete kleurmetamorfose of specifieke krulbehandeling.
              </p>
              <p className="font-medium text-foreground">
                Gespecialiseerd in dames, heren én kids.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-primary/10 flex flex-wrap gap-4">
               <div className="flex items-center gap-2 text-sm font-medium text-primary">
                 <div className="w-2 h-2 rounded-full bg-primary" />
                 Curly Girl Methode
               </div>
               <div className="flex items-center gap-2 text-sm font-medium text-primary">
                 <div className="w-2 h-2 rounded-full bg-primary" />
                 Professionele Kleuring
               </div>
               <div className="flex items-center gap-2 text-sm font-medium text-primary">
                 <div className="w-2 h-2 rounded-full bg-primary" />
                 Kapsalon aan huis
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SPECIALIZATIONS SECTION */}
      <Section id="specializations">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-2 block">Diensten</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Specialisaties</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Scissors,
              title: "Knippen",
              desc: "Vakkundig knippen voor dames, heren en kinderen. Van de puntjes bijwerken tot een compleet nieuwe coupe die bij jouw gezichtsvorm past."
            },
            {
              icon: Palette,
              title: "Kleuren",
              desc: "Hoogwaardige kleurbehandelingen, highlights, balayage of uitgroei bijwerken. Ik gebruik professionele producten die je haar gezond houden."
            },
            {
              icon: Sparkles,
              title: "Krullen (CG)",
              desc: "Gespecialiseerd in de Curly Girl Methode. Ik weet precies hoe ik jouw krullen moet knippen en verzorgen voor de mooiste definitie en veerkracht."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-secondary/20 p-8 rounded-3xl border border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* INFO & CONTACT SECTION */}
      <Section id="contact" dark>
        <div className="bg-background rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-xl border border-border/50">
          <div className="grid lg:grid-cols-2 gap-12">
            
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-4xl mb-6">Praktische Info</h2>
                <p className="text-muted-foreground mb-8">
                  Wil je een afspraak maken? Bel of app gerust. Ik werk uitsluitend op afspraak om iedereen de volledige aandacht te kunnen geven.
                </p>
              </div>

              <div className="space-y-6">
                <a href="tel:+31636320606" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-lg group-hover:text-primary transition-colors">Bel of WhatsApp</h4>
                    <p className="text-muted-foreground">06 36320606</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-lg">Locatie</h4>
                    <p className="text-muted-foreground">Beukstraat 7<br/>Amersfoort, Nederland</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-lg">Openingstijden</h4>
                    <p className="text-muted-foreground">Op afspraak (geen inloop)</p>
                  </div>
                </div>

                <a href="https://instagram.com/houseofhairbyjenn" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-lg group-hover:text-primary transition-colors">Volg op Instagram</h4>
                    <p className="text-muted-foreground">@houseofhairbyjenn</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden bg-secondary/20 border border-border">
              {/* Simple map representation or placeholder for embedding */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.8523321568265!2d5.385!3d52.165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDA5JzU0LjAiTiA1wrAyMycwNi4wIkU!5e0!3m2!1sen!2snl!4v1629890000000!5m2!1sen!2snl" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Map to House of Hair by Jenn"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 font-serif text-xl font-bold">
              <Scissors className="h-5 w-5 text-primary-foreground/70" />
              <span>House of Hair by Jenn</span>
            </div>
            
            <div className="text-sm text-background/60 text-center md:text-right">
              <p className="mb-2">Beukstraat 7, Amersfoort</p>
              <p>&copy; {new Date().getFullYear()} House of Hair by Jenn. Alle rechten voorbehouden.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
