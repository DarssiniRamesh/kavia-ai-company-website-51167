"use client";
import Image from "next/image";

/**
 * KAVIA AI Homepage - Pixel Perfect Implementation
 * Structure and content strictly follow assets/homepage_design_notes.md
 *
 * Sections:
 *  - Navbar
 *  - Hero with headline, subtitle, CTA, background illustration
 *  - About section (Who We Are)
 *  - Offerings/services section (Cards/Columns)
 *  - How It Works section
 *  - Team preview
 *  - Blog/news preview
 *  - Contact prompt
 *  - Footer with socials
 */

export default function Home() {
  return (
    <main className="bg-[#fff] font-sans leading-normal text-[#1a1a2e]">
      {/* NAVIGATION BAR */}
      <nav className="w-full fixed top-0 left-0 bg-white border-b border-gray-100 z-30 flex px-6 md:px-14 h-20 items-center justify-between shadow-sm">
        <div className="flex items-center">
          <Image src="/favicon.ico" alt="KAVIA AI" width={40} height={40} />
          <span className="ml-3 font-bold text-2xl tracking-wide">KAVIA AI</span>
        </div>
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <a href="#about" className="hover:text-[#e94560] transition-colors">About</a>
          </li>
          <li>
            <a href="#services" className="hover:text-[#e94560] transition-colors">Services</a>
          </li>
          <li>
            <a href="#how" className="hover:text-[#e94560] transition-colors">How it works</a>
          </li>
          <li>
            <a href="#team" className="hover:text-[#e94560] transition-colors">Team</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#e94560] transition-colors">Contact</a>
          </li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 md:pt-40 pb-14 relative bg-gradient-to-b from-[#faf8fc] to-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-14 px-5 md:px-0">
          <div className="md:w-1/2 flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-2 leading-tight text-[#1a1a2e]">
              AI-powered Business Automation.
            </h1>
            <p className="text-lg md:text-2xl text-[#16213e] mb-3">
              Unlock efficiency, innovation, and effortless growth with KAVIA AI.
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#e94560] text-white px-8 py-4 mt-4 rounded-lg font-semibold text-lg shadow hover:bg-[#c83b51] transition"
            >
              Start your AI Journey <span className="ml-2">&#8594;</span>
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center ">
            {/* Hero Image (replace src with actual asset/image) */}
            <Image
              src="/assets/hero-illustration.png"
              alt="KAVIA AI Hero"
              width={420}
              height={320}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
        {/* Decorative blob illustrating design background */}
        <div className="absolute top-16 right-6 md:right-28 opacity-30 -z-10">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <path
              fill="#e94560"
              d="M59.6,-55.6C75,-40.3,82.5,-20.2,77,0.6C71.5,21.5,53,42.9,37.6,57C22.2,71.1,11.1,77.8,-3.4,81.3C-17.9,84.7,-35.8,85,-51.7,76C-67.5,67,-81.4,48.8,-80.5,31.6C-79.7,14.4,-64.1,-1.8,-52.8,-18.7C-41.4,-35.5,-34.4,-53.1,-21.4,-67.2C-8.5,-81.3,10.3,-91.8,28,-86.1C45.6,-80.4,62.2,-58.3,59.6,-55.6Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-[#f4f7fa] py-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#1a1a2e]">Who We Are</h2>
          <p className="text-xl text-[#16213e] mb-2">
            KAVIA AI is a team of industry veterans, AI pioneers, and passionate technologists. <br />
            We’re dedicated to transforming organizations with cutting-edge automation, custom AI models, and actionable data insights.
          </p>
        </div>
      </section>

      {/* SERVICES / OFFERINGS SECTION */}
      <section id="services" className="bg-white py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a1a2e] mb-11">
            What We Offer
          </h2>
          <div className="flex flex-col md:flex-row gap-7 md:gap-9 justify-center">
            {/* Card 1 */}
            <div className="flex-1 bg-[#faf8fc] rounded-xl shadow-xl px-8 py-9 flex flex-col items-center text-center hover:scale-105 transition">
              <Image src="/assets/service-automation.png" alt="AI Automation" width={56} height={56} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Automation Solutions</h3>
              <p className="text-gray-700">
                Streamline operations, reduce repetitive work, and boost productivity with custom automations tailored to your needs.
              </p>
            </div>
            {/* Card 2 */}
            <div className="flex-1 bg-[#faf8fc] rounded-xl shadow-xl px-8 py-9 flex flex-col items-center text-center hover:scale-105 transition">
              <Image src="/assets/service-llm.png" alt="Custom LLMs" width={56} height={56} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Custom LLM Integrations</h3>
              <p className="text-gray-700">
                Integrate large language models (LLMs) for advanced chatbots, data analysis, and next-gen client experiences.
              </p>
            </div>
            {/* Card 3 */}
            <div className="flex-1 bg-[#faf8fc] rounded-xl shadow-xl px-8 py-9 flex flex-col items-center text-center hover:scale-105 transition">
              <Image src="/assets/service-insights.png" alt="Data Insights" width={56} height={56} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Actionable Data Insights</h3>
              <p className="text-gray-700">
                Drive decision-making with powerful dashboards, AI-powered reporting, and seamless data integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-gradient-to-b from-white to-[#f4f7fa] py-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#1a1a2e]">How It Works</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center mt-10">
            <div className="flex-1">
              <div className="w-16 h-16 mx-auto bg-[#e94560] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                1
              </div>
              <h4 className="text-xl font-bold mb-2">Discovery</h4>
              <p className="text-gray-700">
                We understand your challenges, goals, and workflows.
              </p>
            </div>
            <div className="flex-1">
              <div className="w-16 h-16 mx-auto bg-[#e94560] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                2
              </div>
              <h4 className="text-xl font-bold mb-2">Strategy & Design</h4>
              <p className="text-gray-700">
                We develop a custom blueprint for AI-powered transformation.
              </p>
            </div>
            <div className="flex-1">
              <div className="w-16 h-16 mx-auto bg-[#e94560] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                3
              </div>
              <h4 className="text-xl font-bold mb-2">Delivery & Support</h4>
              <p className="text-gray-700">
                We implement, integrate, and ensure you succeed at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section id="team" className="py-16 px-5 bg-[#faf8fc]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a1a2e] mb-8">Meet The Team</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* Team Member 1 */}
            <div className="flex-1 bg-white rounded-xl shadow-lg px-6 py-8 text-center flex flex-col items-center">
              <Image src="/assets/team-alex.png" alt="Alex CEO" width={78} height={78} className="rounded-full mb-4"/>
              <h4 className="text-lg font-bold mb-1">Alex Sharma</h4>
              <p className="text-[#e94560] font-medium mb-0.5">Founder & CEO</p>
              <p className="text-gray-700 text-sm mt-1">
                15+ years in AI-powered transformation across industries. Serial entrepreneur.
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="flex-1 bg-white rounded-xl shadow-lg px-6 py-8 text-center flex flex-col items-center">
              <Image src="/assets/team-mila.png" alt="Mila CTO" width={78} height={78} className="rounded-full mb-4"/>
              <h4 className="text-lg font-bold mb-1">Mila Tran</h4>
              <p className="text-[#e94560] font-medium mb-0.5">CTO</p>
              <p className="text-gray-700 text-sm mt-1">
                Deep expertise in LLMs, software architecture, and scalable automation systems.
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="flex-1 bg-white rounded-xl shadow-lg px-6 py-8 text-center flex flex-col items-center">
              <Image src="/assets/team-elliot.png" alt="Elliot AI Lead" width={78} height={78} className="rounded-full mb-4"/>
              <h4 className="text-lg font-bold mb-1">Elliot Brooks</h4>
              <p className="text-[#e94560] font-medium mb-0.5">AI Lead</p>
              <p className="text-gray-700 text-sm mt-1">
                Former Google AI. Passionate about responsible, strategic, and creative AI deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG / NEWS PREVIEW */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a1a2e] mb-9">From The Blog</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Blog Post 1 */}
            <div className="flex-1 bg-[#faf8fc] rounded-lg shadow-md p-6 flex flex-col">
              <Image src="/assets/blog-ai-trends.png" alt="AI Trends" width={80} height={60} className="mb-3 rounded-md" />
              <h5 className="text-lg font-bold mb-1">5 AI Trends To Watch in 2024</h5>
              <p className="text-gray-700 text-base mb-2">
                Explore how KAVIA AI is positioned at the forefront of technological breakthroughs and practical enterprise solutions.
              </p>
              <a
                href="#"
                className="mt-auto text-[#e94560] font-bold hover:underline transition"
              >Read more →</a>
            </div>
            {/* Blog Post 2 */}
            <div className="flex-1 bg-[#faf8fc] rounded-lg shadow-md p-6 flex flex-col">
              <Image src="/assets/blog-llm-guide.png" alt="LLM Guide" width={80} height={60} className="mb-3 rounded-md" />
              <h5 className="text-lg font-bold mb-1">A Business Leader’s Guide to LLMs</h5>
              <p className="text-gray-700 text-base mb-2">
                From concept to deployment, what decision-makers must know to harness large language models responsibly.
              </p>
              <a
                href="#"
                className="mt-auto text-[#e94560] font-bold hover:underline transition"
              >Read more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT PROMPT */}
      <section id="contact" className="bg-[#e94560] text-white py-20 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-lg md:text-xl mb-7">
            Get started with a consultation from the KAVIA AI team, and unlock your next leap in automation, productivity, and data-driven growth.
          </p>
          <a
            href="mailto:hello@kavia.ai"
            className="inline-block bg-white text-[#e94560] font-bold text-lg px-10 py-4 rounded-lg shadow hover:bg-gray-100 transition-all"
          >
            Contact Us Now
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#16213e] text-white py-7 px-5 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-6">
          <div className="flex items-center gap-2">
            <Image src="/favicon.ico" alt="Logo" width={28} height={28} />
            <span className="font-semibold text-lg">KAVIA AI</span>
          </div>
          <div className="flex gap-6 justify-center">
            <a href="https://twitter.com/kaviaai" target="_blank" rel="noopener" aria-label="Twitter" className="hover:text-[#e94560]">
              <svg width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M21.54 5.38c-.8.35-1.65.58-2.53.69a4.39 4.39 0 0 0 1.92-2.42 8.77 8.77 0 0 1-2.77 1.07A4.37 4.37 0 0 0 11 .78c-2.4 0-4.36 1.95-4.36 4.36 0 .34.04.67.1.99A12.4 12.4 0 0 1 2.22 2.39a4.34 4.34 0 0 0-.59 2.19c0 1.51.77 2.84 1.94 3.62-.72-.02-1.39-.22-1.99-.55v.05c0 2.1 1.5 3.85 3.5 4.25-.37.1-.76.16-1.16.16-.28 0-.56-.03-.82-.07.56 1.77 2.17 3.06 4.08 3.1a8.77 8.77 0 0 1-5.45 1.88c-.36 0-.72-.02-1.07-.07A12.4 12.4 0 0 0 7.6 21c7.89 0 12.22-6.53 12.22-12.22 0-.19-.01-.39-.02-.58.84-.6 1.58-1.33 2.16-2.16Z" />
              </svg>
            </a>
            <a href="https://linkedin.com/company/kaviaai" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-[#e94560]">
              <svg width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M5.15 8.35H2V21h3.15V8.35zm-1.57-5C2.2 3.34.9 4.7.9 6.47c0 1.77 1.3 3.13 2.68 3.13 1.38 0 2.68-1.36 2.68-3.13 0-1.77-1.3-3.13-2.68-3.13zM20 8.35h-3.13v1.73c0 .47-.34.95-.88.95-.53 0-.84-.48-.84-.95V8.36H12V21h3.15v-7.06c0-1.34.47-2.26 1.7-2.26 1.18 0 1.5.8 1.5 2.16V21H20V8.36z" />
              </svg>
            </a>
            <a href="mailto:hello@kavia.ai" aria-label="Email" className="hover:text-[#e94560]">
              <svg width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M19.5 4h-17A1.5 1.5 0 0 0 1 5.5V17.5A1.5 1.5 0 0 0 2.5 19h17a1.5 1.5 0 0 0 1.5-1.5V5.5A1.5 1.5 0 0 0 19.5 4ZM19 6.16V5.92l-6.87 5.43a1.5 1.5 0 0 1-1.86 0L3 5.92v.24a.5.5 0 0 0 .19.39l7.13 5.66a2.5 2.5 0 0 0 3.14 0L18.81 6.54A.5.5 0 0 0 19 6.16ZM19.5 18h-17a.5.5 0 0 1-.5-.5V7.81l7.5 5.97a2.65 2.65 0 0 0 3 0l7.5-5.97V17.5a.5.5 0 0 1-.5.5Z" />
              </svg>
            </a>
          </div>
          <div className="mt-2 md:mt-0 text-sm opacity-80">&copy; {new Date().getFullYear()} KAVIA AI. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
