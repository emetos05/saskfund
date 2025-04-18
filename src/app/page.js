"use client";
import Link from "next/link";
import Image from "next/image";
import { FaShieldAlt, FaRocket, FaUserFriends, FaChartLine, FaHandshake, FaMobileAlt } from "react-icons/fa";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/80 to-sky-700/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className={`text-5xl md:text-6xl font-bold text-white mb-6 ${styles.animateFadeIn}`}>
            Welcome to SaskFund
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your trusted partner in financial solutions. We help you achieve your dreams with personalized loan options and expert guidance.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/register" className={`${styles.btn} ${styles.btnWhite}`}>
              Register Now
            </Link>
            <Link href="/search" className={`${styles.btn} ${styles.btnBlue}`}>
              Search Clients
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-sky-900 mb-12">
            Why Choose SaskFund?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-xl bg-sky-50 ${styles.hoverCard}`}>
              <div className="featureIcon">
                <FaShieldAlt className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Your financial data is protected with industry-leading security measures.</p>
            </div>
            <div className={`p-6 rounded-xl bg-sky-50 ${styles.hoverCard}`}>
              <div className="featureIcon">
                <FaRocket className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
              <p className="text-gray-600">Quick loan eligibility checks and instant client profile access.</p>
            </div>
            <div className={`p-6 rounded-xl bg-sky-50 ${styles.hoverCard}`}>
              <div className="featureIcon">
                <FaUserFriends className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
              <p className="text-gray-600">Tailored financial solutions for each client&apos;s unique needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-sky-900 mb-12">
            Our Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-xl bg-white ${styles.hoverCard}`}>
              <div className="featureIcon">
                <FaChartLine className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Rates</h3>
              <p className="text-gray-600">Enjoy some of the most competitive interest rates in the market.</p>
            </div>
            <div className={`p-6 rounded-xl bg-white ${styles.hoverCard}`}>
              <div className="featureIcon">
                <FaHandshake className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Terms</h3>
              <p className="text-gray-600">Choose repayment plans that work best for your financial situation.</p>
            </div>
            <div className={`p-6 rounded-xl bg-white ${styles.hoverCard}`}>
              <div className="featureIcon">
                <FaMobileAlt className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Access</h3>
              <p className="text-gray-600">Manage your account and track your progress anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-sky-100">
            Join thousands of satisfied clients who have achieved their financial goals with SaskFund.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/register" className={`${styles.btn} ${styles.btnWhite}`}>
              Create Account
            </Link>
            <Link href="/search" className={`${styles.btn} ${styles.btnBlue}`}>
              Search Clients
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
