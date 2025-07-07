"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function TermsAndConditions() {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms & Conditions</h1>
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
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
                      <p className="text-gray-600 leading-relaxed">
                        [CONTENT TO BE PROVIDED - Introduction to the terms and conditions, scope of agreement, and
                        parties involved]
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Partnership Program Overview</h2>
                      <p className="text-gray-600 leading-relaxed">
                        [CONTENT TO BE PROVIDED - Details about the WOW FMCG partnership program, eligibility criteria,
                        and program structure]
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Registration and Starter Kit</h2>
                      <p className="text-gray-600 leading-relaxed">
                        [CONTENT TO BE PROVIDED - Terms related to registration process, starter kit details, payment
                        terms, and refund policy]
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Commission Structure and Payments</h2>
                      <p className="text-gray-600 leading-relaxed">
                        [CONTENT TO BE PROVIDED - Detailed commission structure, payment terms, calculation methods, and
                        payout schedules]
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Partner Responsibilities</h2>
                      <p className="text-gray-600 leading-relaxed">
                        [CONTENT TO BE PROVIDED - Partner obligations, code of conduct, marketing guidelines, and
                        compliance requirements]
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Product Information and Quality</h2>
                      <p className="text-gray-600 leading-relaxed">
                        [CONTENT TO BE PROVIDED - Product quality standards, warranty information, and return/exchange
                        policies]
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Intellectual Property</h2>
                      <p className="text-gray-600 leading-relaxed">
                        [CONTENT TO BE PROVIDED - Trademark usage, brand guidelines, and intellectual property rights]
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Termination</h2>
                      <p className="text-gray-600 leading-relaxed">
                        [CONTENT TO BE PROVIDED - Termination conditions, notice periods, and post-termination
                        obligations]
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Legal Compliance</h2>
                      <p className="text-gray-600 leading-relaxed">
                        [CONTENT TO BE PROVIDED - Compliance with Indian laws, regulatory requirements, and dispute
                        resolution]
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Contact Information</h2>
                      <p className="text-gray-600 leading-relaxed">
                        [CONTENT TO BE PROVIDED - Contact details for legal queries and support]
                      </p>
                    </section>
                  </div>

                  <div className="mt-12 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <p className="text-gray-700 font-semibold mb-2">Important Note:</p>
                    <p className="text-gray-600">
                      By participating in the WOW FMCG Partnership Program, you acknowledge that you have read,
                      understood, and agree to be bound by these Terms & Conditions.
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
