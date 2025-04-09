"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, BarChart3, Rocket } from "lucide-react"; // Lucide icons

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white flex flex-col items-center justify-between p-6 sm:p-12">
      {/* Hero Section */}
      <section className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Discover Your <span className="text-blue-600">Future</span> with EduPath
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Get personalized insights into careers and courses based on your interests.
            Empowering students to make smarter decisions for tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => router.push("/login")}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
            >
              Log In
            </button>
            <button
              onClick={() => router.push("/signup")}
              className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-100 transition"
            >
              Sign Up
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            Explore trends in salaries, job vacancies, and course pathways with real-time insights.
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/hero-image.svg"
            alt="EduPath Hero Illustration"
            width={600}
            height={400}
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </section>

      {/* Why EduPath Section */}
      <section className="mt-16 max-w-6xl w-full">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why EduPath?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Designed with students in mind, our platform provides critical insights to help you choose the right educational and career path.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit Card 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition text-left">
              <GraduationCap className="text-blue-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Empower Your Decision-Making</h3>
              <p className="text-gray-600">
                Discover detailed data on course pathways and career outcomes so you can plan your future confidently.
              </p>
            </div>
            {/* Benefit Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition text-left">
              <BarChart3 className="text-blue-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Data-Driven Insights</h3>
              <p className="text-gray-600">
                Explore visualizations on median salaries, job vacancies, and employment trends tailored for students.
              </p>
            </div>
            {/* Benefit Card 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition text-left">
              <Rocket className="text-blue-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Ready for Future Upgrades</h3>
              <p className="text-gray-600">
                Our roadmap includes personalized recommendations and advanced filters, ensuring EduPath grows with your needs.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-400 text-center">
        © {new Date().getFullYear()} EduPath. All rights reserved.
      </footer>
    </main>
  );
}
