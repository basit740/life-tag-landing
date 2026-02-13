import { motion } from "framer-motion";
import {
  Shield,
  ScanLine,
  Phone,
  Heart,
  AlertCircle,
  CheckCircle2,
  Smartphone,
  User,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import heroImage from "@/assets/generated_images/motorcycle_helmet_with_red_qr_code_safety_sticker.png";
import heroImage from "@/assets/generated_images/full-helmet.jpeg"
import appLogo from "../../public/appLogo-1.png";
export default function LifeTagLanding() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border/40">
        <div className="container mx-auto px-4 h-22 pt-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
           
            <img alt="TheLifeTag" src={appLogo} className="h-52 w-75"/>
            {/* <span className="font-display font-bold text-xl tracking-tight">
              The LifeTag
            </span> */}
          </div>
          <Button
            size="sm"
            className="font-semibold bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg shadow-primary/20"
          >
            Get LifeTag
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 overflow-hidden relative">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100">
              <AlertCircle className="w-4 h-4" />
              <span>Safety for every Pakistani rider</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-balance">
              <span className="text-primary block mb-2">
                "Agar main behosh ho jaun,
              </span>
              mera helmet bole."
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              The LifeTag is a QR code sticker for your helmet. Scan it to
              instantly contact emergency contacts and see critical medical
              info.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="rounded-full text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25 hover:translate-y-[-2px] transition-all"
              >
                Get The LifeTag
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-lg h-14 px-8 border-2 hover:bg-secondary/50"
              >
                See How It Works
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl transform translate-x-10 translate-y-10" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={heroImage}
                alt="Motorcycle helmet with LifeTag QR sticker"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />

              {/* Floating UI Element to show scanning concept */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur shadow-lg rounded-xl p-4 border border-border/50 max-w-xs mx-auto md:mx-0"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      Emergency Contact
                    </div>
                    <div className="font-bold text-foreground">
                      Bhai (Brother)
                    </div>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="ml-auto text-green-600 hover:text-green-700 hover:bg-green-50 rounded-full"
                  >
                    <Phone className="h-5 w-5 fill-current" />
                  </Button>
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Shield,
                title: "Stick The LifeTag",
                desc: "Place the durable, weather-proof QR sticker on your helmet.",
              },
              {
                icon: ScanLine,
                title: "Anyone Can Scan",
                desc: "In an accident, bystanders can scan it with any smartphone camera.",
              },
              {
                icon: Heart,
                title: "Instant Help",
                desc: "Your emergency contacts & blood group appear instantly. No app needed.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="h-14 w-14 bg-red-50 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why It Exists - Story */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div {...fadeIn}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Why The LifeTag Exists
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Every day, accidents happen where riders fall unconscious. Their
              phones are locked. People gather to help but don't know who to
              call.
              <br />
              <br />
              <strong className="text-foreground font-semibold">
                Seconds matter. Information saves lives.
              </strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Info Display */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        {/* Abstract background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                What bystanders see
              </h2>

              <ul className="space-y-6">
                {[
                  { icon: User, text: "Rider's Full Name" },
                  {
                    icon: Heart,
                    text: "Blood Group (Highlighted)",
                    highlight: true,
                  },
                  { icon: Phone, text: "Emergency Contacts (Tap to Call)" },
                  {
                    icon: FileText,
                    text: "Critical Medical Notes (Allergies)",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg">
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center ${item.highlight ? "bg-red-500 text-white" : "bg-slate-800 text-slate-300"}`}
                    >
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span
                      className={
                        item.highlight
                          ? "font-bold text-red-400"
                          : "text-slate-200"
                      }
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-slate-800">
                <div className="flex gap-4 items-start">
                  <Shield className="h-6 w-6 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      Privacy Focused
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Read-only info. No CNIC. No home address. No live
                      tracking. Just what's needed to save your life.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto max-w-xs"
            >
              {/* Phone Mockup */}
              <div className="bg-white rounded-[2.5rem] p-4 shadow-2xl border-8 border-slate-800 relative z-10">
                <div className="bg-slate-100 h-8 w-24 mx-auto rounded-full mb-6 absolute top-4 left-0 right-0 z-20"></div>
                <div className="bg-white rounded-2xl overflow-hidden min-h-[400px] flex flex-col pt-8 pb-4 px-4 relative">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <User className="h-10 w-10 text-slate-400" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-900">
                      Ali Khan
                    </h3>
                    <div className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold mt-2">
                      Blood Group: O+
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded-xl flex items-center justify-between border border-green-100">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Phone className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <div className="text-xs text-green-800 font-semibold">
                            FATHER
                          </div>
                          <div className="text-sm font-bold text-slate-800">
                            0300-1234567
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-xl flex items-center justify-between border border-green-100">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Phone className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <div className="text-xs text-green-800 font-semibold">
                            BROTHER
                          </div>
                          <div className="text-sm font-bold text-slate-800">
                            0321-7654321
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto bg-slate-50 p-3 rounded-xl text-xs text-slate-500 text-center">
                    <p>Allergic to Penicillin</p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-red-500/20 blur-2xl rounded-full z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why This Matters in Pakistan */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Why this matters in Pakistan
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                    <Smartphone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Weak Emergency Systems
                    </h3>
                    <p className="text-muted-foreground">
                      Ambulances can be late. Bystanders are usually the first
                      responders.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Helping People Help You
                    </h3>
                    <p className="text-muted-foreground">
                      People want to help but don't know who to call. LifeTag
                      gives them the power to act.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="bg-slate-100 rounded-3xl p-8 md:p-12 text-center">
              <p className="font-display text-2xl md:text-3xl font-bold text-slate-400 mb-4">
                25M+
              </p>
              <p className="text-muted-foreground">
                Motorcycles on the road in Pakistan
              </p>
              <div className="w-16 h-1 bg-red-500 mx-auto mt-8 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="bg-primary rounded-[2rem] p-8 md:p-16 text-center text-white shadow-2xl shadow-primary/30 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Safety is not optional.
              </h2>
              <p className="text-xl text-white/90">
                One-time setup. Lifetime peace of mind. Protect yourself and
                your loved ones today.
              </p>
              <Button
                size="lg"
                className="h-16 px-10 rounded-full text-xl bg-white text-primary hover:bg-white/90 font-bold shadow-lg"
              >
                Protect Yourself with The LifeTag
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="h-6 w-6 text-slate-400" />
            <span className="font-display font-bold text-xl text-slate-700">
              The LifeTag
            </span>
          </div>
          <p className="text-muted-foreground mb-8">
            A rider safety initiative for Pakistan.
          </p>
          <div className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} The LifeTag. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
