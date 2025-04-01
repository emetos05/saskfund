"use client";
import Registration from "../components/registration";

export default function RegisterPage() {
  return (
    <section className="flex flex-col">
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold">Client Registration</h1>
        <p className="text-gray-600">Please fill in all required information</p>
      </div>
      <Registration />
    </section>
  );
} 