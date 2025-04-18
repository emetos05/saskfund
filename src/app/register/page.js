"use client";
import Registration from "../components/registration";

export default function RegisterPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-sky-50 to-sky-100 py-6 sm:py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 md:p-8 transform transition-all duration-300 hover:shadow-2xl">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-sky-900 mb-2 sm:mb-4">
              Client Registration
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Please fill in all required information to create your account
            </p>
          </div>
          <Registration />
        </div>
      </div>
    </section>
  );
} 