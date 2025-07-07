"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </div>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-xl opacity-90">WOW FMCG Partnership Program</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-6 text-center italic">Last updated: [DATE TO BE ADDED]</p>

                  <div className="space-y-8">
                    <section>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
                      <p className="text-gray-600 leading-relaxed">
                        [CONTENT TO BE PROVIDED - Types of personal information collected, including registration data,
                        contact information, and transaction details]
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
                      <p className="text-gray-600 leading-relaxed">
                        [CONTENT TO BE PROVIDED - Purposes for which personal information is used, including program
                        administration, communication, and payment processing]
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Information Sharing and Disclosure</h2>
                      <p className="text-gray-600 leading-relaxed">
                        [CONTENT TO BE PROVIDED - Circumstances under which information may be shared with third
                        parties, including service providers and legal requirements]
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Security</h2>
                      <p className="text-gray-600 leading-relaxed">
                        [CONTENT TO BE PROVIDED - Security measures implemented to protect personal information and data
                        breach procedures]
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Data Retention</h2>
                      <p className="text-gray-600 leading-relaxed">
                        [CONTENT TO BE PROVIDED - How long personal information is retained and criteria for determining
                        retention periods]
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Your Rights</h2>
                      <p className="text-gray-600 leading-relaxed">
                        [CONTENT TO BE PROVIDED - Individual rights regarding personal information, including access,
                        correction, and deletion rights]
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Cookies and Tracking Technologies</h2>
                      <p className="text-gray-600 leading-relaxed">
                        [CONTENT TO BE PROVIDED - Use of cookies, analytics tools, and other tracking technologies]
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Third-Party Links</h2>
                      <p className="text-gray-600 leading-relaxed">
                        [CONTENT TO BE PROVIDED - Policy regarding links to third-party websites and services]
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Children's Privacy</h2>
                      <p className="text-gray-600 leading-relaxed">
                        [CONTENT TO BE PROVIDED - Policy regarding collection of information from minors]
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Changes to This Policy</h2>
                      <p className="text-gray-600 leading-relaxed">
                        [CONTENT TO BE PROVIDED - How policy changes will be communicated and implemented]
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Contact Us</h2>
                      <p className="text-gray-600 leading-relaxed">
                        [CONTENT TO BE PROVIDED - Contact information for privacy-related queries and concerns]
                      </p>
                    </section>
                  </div>

                  <div className="mt-12 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700 font-semibold mb-2">Your Privacy Matters:</p>
                    <p className="text-gray-600">
                      We are committed to protecting your privacy and handling your personal information with care and
                      transparency. If you have any questions about this Privacy Policy, please contact us.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
