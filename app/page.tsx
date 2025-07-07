"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  TrendingUp,
  Gift,
  CheckCircle,
  IndianRupee,
  Award,
  Target,
  Zap,
  Heart,
  Home,
  GraduationCap,
  Briefcase,
  Coffee,
} from "lucide-react"

export default function WOWMasaaleLanding() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 30,
    seconds: 0,
  })

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-yellow-400 text-red-800 hover:bg-yellow-300 text-lg px-4 py-2">
              🔥 LIMITED TIME LAUNCH OFFER
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Network Into Your Net Worth
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Join India's fastest-growing FMCG partnership program. Start your entrepreneurial journey with premium
              products and unlimited earning potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-300 text-red-800 font-bold text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all"
                onClick={() => window.open("WHATSAPP_LINK_PLACEHOLDER", "_blank")}
              >
                <Zap className="mr-2 h-5 w-5" />
                Become a WOW Partner Today
              </Button>
            </div>
            <div className="flex justify-center items-center gap-4 text-sm opacity-80">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4" />
                100% Legal & Compliant
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4" />
                Work From Home
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4" />
                No Monthly Targets
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Timer */}
      <section className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="font-bold text-lg">⏰ Launch Offer Ends In:</span>
            <div className="flex gap-2">
              <div className="bg-white text-red-600 px-3 py-1 rounded font-bold">
                {timeLeft.hours.toString().padStart(2, "0")}h
              </div>
              <div className="bg-white text-red-600 px-3 py-1 rounded font-bold">
                {timeLeft.minutes.toString().padStart(2, "0")}m
              </div>
              <div className="bg-white text-red-600 px-3 py-1 rounded font-bold">
                {timeLeft.seconds.toString().padStart(2, "0")}s
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Join the WOW Partner Program?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your passion into a thriving income stream
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IndianRupee className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Earn Real Money</h3>
                <p className="text-gray-600">Get 15-25% commission on every sale + bonus from your team's sales</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Value-Packed Starter Kit</h3>
                <p className="text-gray-600">
                  Get the Starter Kit with Early Bird Offer at Rs.1199 only (Regular Price Rs.4999)
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">No Montly Targets</h3>
                <p className="text-gray-600">No forced purchases. Recommend and sell at your own pace.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Passive Income</h3>
                <p className="text-gray-600">
                  Build a team and earn from group efforts - maximize your earning potential
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Work From Home</h3>
                <p className="text-gray-600">Flexible timing, work from anywhere, perfect for busy schedules</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
                <p className="text-gray-600">Sell products you're proud of - authentic, pure, and loved by customers</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-full"
              onClick={() => window.open("WHATSAPP_LINK_PLACEHOLDER", "_blank")}
            >
              Start Earning with WOW FMCG
            </Button>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">This opportunity is perfect for...</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Homemakers</h3>
              <p className="text-gray-600 text-sm">Turn your kitchen expertise into income while managing your home</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Students</h3>
              <p className="text-gray-600 text-sm">Earn pocket money and gain business experience while studying</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Job Seekers</h3>
              <p className="text-gray-600 text-sm">Start earning immediately while searching for your dream job</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Side Hustlers</h3>
              <p className="text-gray-600 text-sm">Add an extra income stream without quitting your day job</p>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
              ✅ No Experience Needed • ✅ Quick ROI • ✅ Flexible Hours
            </h3>
            <div className="text-center">
              <Button
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white font-bold text-lg px-8 py-4 rounded-full"
                onClick={() => window.open("WHATSAPP_LINK_PLACEHOLDER", "_blank")}
              >
                Yes, This is Perfect for Me!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOMO Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't Miss Out: The Amway Success Story, Reimagined</h2>
            <div className="bg-white/10 rounded-lg p-8 mb-8">
              <p className="text-xl mb-6 leading-relaxed">
                Remember when Amway started in India? The early adopters who joined in the 1990s are now
                <span className="font-bold text-yellow-300"> millionaires</span>. They didn't wait. They didn't
                overthink. They saw the opportunity and grabbed it.
              </p>
              <p className="text-lg mb-6">
                Today, WOW FMCG is offering you the same golden opportunity. We're at the beginning of something BIG in
                the Indian FMCG market.
              </p>
              <div className="bg-yellow-400 text-red-800 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold mb-2">🚨 ALERT: Regret is Expensive</h3>
                <p className="text-lg">
                  In 6 months, when WOW partners are earning ₹1 lakh+ monthly, don't be the person saying "I wish I had
                  joined earlier." The best time was yesterday. The second best time is NOW.
                </p>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-300 text-red-800 font-bold text-xl px-10 py-5 rounded-full shadow-lg transform hover:scale-105 transition-all"
              onClick={() => window.open("WHATSAPP_LINK_PLACEHOLDER", "_blank")}
            >
              Don't Wait - Register Now!
            </Button>
          </div>
        </div>
      </section>

      {/* Top Reasons Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Top 7 Reasons to Join the WOW Movement Today
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  number: "1",
                  title: "First-Mover Advantage",
                  description:
                    "Be among the first 500 partners and enjoy maximum territory coverage and customer base.",
                },
                {
                  number: "2",
                  title: "Proven Business Model",
                  description: "Direct selling has created more millionaires than you can imagine. Now it's your turn.",
                },
                {
                  number: "3",
                  title: "Recession-Proof Product",
                  description:
                    "FMCG gooods such as spices, tea etc. are essential. People will always need them, making this a stable income source.",
                },
                {
                  number: "4",
                  title: "Digital-First Approach",
                  description:
                    "Use WhatsApp, social media, and digital platforms to sell. No door-to-door selling required.",
                },
                {
                  number: "5",
                  title: "Complete Training & Support",
                  description: "Get free training, marketing materials, and 24/7 support from our experts.",
                },
                {
                  number: "6",
                  title: "Multiple Income Streams",
                  description: "Earn from direct sales, performance bonus, and special incentives.",
                },
                {
                  number: "7",
                  title: "Zero Risk Investment",
                  description:
                    "Your ₹1199 gets you ₹4999 worth of products and store credits. You literally get more than your money's worth!",
                },
              ].map((reason, index) => (
                <Card key={index} className="border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {reason.number}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">{reason.title}</h3>
                        <p className="text-gray-600">{reason.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-full"
                onClick={() => window.open("WHATSAPP_LINK_PLACEHOLDER", "_blank")}
              >
                Claim Your Spot Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="py-16 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Register & Get Your ₹4999 Starter Kit Today
              </h2>
              <p className="text-xl text-gray-600">Get products and store credits worth ₹4999 for just ₹1199!</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Card className="border-2 border-orange-300 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                      🎁 Your WOW Starter Kit Includes:
                    </h3>
                    <div className="space-y-4">
                      {[
                        "WOW Masale worth Rs. 999",
                        "Stores Credit: Rs. 3800",
                        "Shipping Charges: Rs. 200",
                        "Your Unique Referral Code (URC)",
                        "Link to Starter/Training Video/s",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-red-100 rounded-lg border-2 border-red-300">
                      <h4 className="font-bold text-red-800 text-lg mb-2">🔥 Early Bird Offer:</h4>
                      <p className="text-red-700 mb-2">
                        Get the Starter Kit (without Store Credits) for just Rs. 1199!
                      </p>
                      <p className="text-red-600 text-sm font-semibold">Limited to the first 500 participants only.</p>
                    </div>
                    <div className="text-center mt-6">
                      <Button
                        size="lg"
                        className="bg-red-500 hover:bg-red-600 text-white font-bold text-lg px-8 py-4 rounded-full"
                        onClick={() => window.open("WHATSAPP_LINK_PLACEHOLDER", "_blank")}
                      >
                        Get Your Early Bird Offer Now!
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Is this a scam or pyramid scheme?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Absolutely not! WOW FMCG is a legitimate direct selling company registered under Indian laws. We sell
                  real, high-quality products and follow all government regulations. Unlike pyramid schemes, our focus
                  is on product sales, not just recruitment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Can I really make money with this?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes! Our partners earn 15-25% commission on direct sales plus bonuses from team sales. Many of our
                  partners earn ₹15,000-₹50,000+ monthly. Your earnings depend on your effort, sales skills, and team
                  building abilities.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">Do I need to sell door-to-door?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Not at all! You can sell through WhatsApp, social media, our mobile app, or online platforms. Many
                  successful partners never leave their homes and build their entire business digitally.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What's the commission structure?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  You earn 15-25% on direct sales. Additionally, you get 5-10% from your direct referrals' sales and
                  2-5% from their referrals' sales (up to 3 levels). The more you and your team sell, the higher your
                  commission rates become.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Are there any monthly targets or fees?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  No monthly targets or hidden fees! You only pay ₹1199 once to join and get products and store credits
                  worth ₹4999. After that, you can sell at your own pace without any pressure or mandatory purchases.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">How do I get paid?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Commissions are paid directly to your bank account every month. We also provide detailed statements
                  showing all your earnings, sales, and team performance through our partner app.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-orange-400 mb-2">[LOGO PLACEHOLDER]</h3>
            <p className="text-gray-300">Premium Indian Spices • Authentic Flavors • Trusted Quality</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-6">
            <span>100% Legal & Compliant</span>
            <span>•</span>
            <span>Registered Business</span>
            <span>•</span>
            <span>Secure Payments</span>
            <span>•</span>
            <span>24/7 Support</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 WOW FMCG. All rights reserved. |
            <a href="/terms-and-conditions" className="text-orange-400 hover:text-orange-300 ml-1 mr-1">
              Terms & Conditions
            </a>{" "}
            |
            <a href="/privacy-policy" className="text-orange-400 hover:text-orange-300 ml-1">
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
