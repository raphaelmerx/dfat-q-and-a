import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TagLine } from "@/components/Tagline";

import Head from "next/head";
import Image, { StaticImageData } from "next/image";

import compass from "../public/compass.png";
import gears from "../public/gears.png";
import brain from "../public/brain.png";
import pencil from "../public/pencil.png";
import lock from "../public/lock.png";
import hammer from "../public/hammer.png";


const AboutHeader = ({ text }: { text: string }) => {
  return (
    <h1 className="text-xl font-semibold mb-6">{text}</h1>
  );
}

const AboutIcon = ({ src, alt }: { src: StaticImageData, alt: string }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={38}
      height={38}
      className="ml-[-5px] mt-10"
    />
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>About Saveh.ai</title>
        <meta name="description" content="About Saveh.ai - AI-powered insights tool for Australian aid" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex-1">
          <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="mb-12">
              <TagLine />
            </div>

            <AboutIcon src={compass} alt="Compass" />
            <AboutHeader text="About Saveh.ai" />

            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Saveh.ai is an AI-powered insights tool built to support smarter, more effective
                development decisions — starting with Australian aid.
              </p>
              <p className="text-lg">
                Grounded in a powerful blend of artificial intelligence and real-world evidence,
                Saveh.ai helps policymakers, designers, and implementers uncover lessons,
                make sense of complexity, and apply insight with confidence.
              </p>
            </div>

            <AboutIcon src={hammer} alt="Hammer" />
            <AboutHeader text="Built for Development Effectiveness" />

            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Saveh.ai has been trained on thousands of public DFAT documents, including:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Program design documents</li>
                <li>Mid-Term Reviews (MTRs)</li>
                <li>Independent evaluations</li>
                <li>Learning briefs and reports</li>
              </ul>
              <p className="text-lg">
                It brings this hard-earned knowledge to your fingertips — surfacing patterns, lessons, and insights that are often buried in lengthy PDFs.
              </p>
            </div>

            <AboutIcon src={gears} alt="Gears" />
            <AboutHeader text="How it Works" />
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Saveh.ai uses a powerful AI method called Retrieval-Augmented Generation (RAG). This approach gives you the best of both worlds: AI speed and clarity, combined with real, verifiable sources.
              </p>
              <p className="text-lg mb-4">Here&apos;s how it works:</p>
              <ol className="list-decimal pl-5 mb-4">
                <li>Ask a question. e.g., &quot;What lessons have emerged about teacher training in the Pacific?&quot;</li>
                <li>The AI searches real reports. It scans thousands of DFAT documents to retrieve the most relevant excerpts.</li>
                <li>It generates a response — grounded in evidence. The answer is written using only the information it retrieved — not from the open internet.</li>
                <li>It shows its sources. Every insight is linked to its original report, so you can verify and dig deeper.</li>
              </ol>
            </div>

            <AboutIcon src={brain} alt="Brain" />
            <AboutHeader text="Why This Matters" />
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Most AI tools sound smart — but they often make things up. That&apos;s called a &quot;hallucination,&quot; and it&apos;s risky when you&apos;re working with public policy or program design.
              </p>
              <p className="text-lg mb-4">
                Saveh.ai reduces this risk by:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Only using trusted, DFAT-sourced documents</li>
                <li>Being transparent about where answers come from</li>
                <li>Helping users verify information easily</li>
                <li>Staying focused on contextually relevant, real-world insight</li>
              </ul>
            </div>

            <AboutIcon src={lock} alt="Lock" />
            <AboutHeader text="Responsibly Sourced. Openly Shared" />
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Saveh.ai is built using publicly available documents published by the Australian Government&apos;s Department of Foreign Affairs and Trade (DFAT). These materials include program design documents, mid-term reviews, evaluations, and learning reports. They are made available under DFAT&apos;s Creative Commons Attribution 4.0 International Licence (CC BY 4.0 AU), which allows for use and adaptation of content with appropriate credit.
              </p>
              <p className="text-lg">
                All DFAT-sourced content is attributed as: Department of Foreign Affairs and Trade website – www.dfat.gov.au
                Saveh.ai respects all licensing conditions and is committed to transparent, responsible use of publicly available data to support better decision-making in development.
              </p>
            </div>

            <AboutIcon src={pencil} alt="Pencil" />
            <AboutHeader text="Designed for the Work You Do" />
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Whether you&apos;re preparing a strategy, reviewing a portfolio, writing a tender, or simply looking for lessons learned — Saveh.ai helps you luksave: to recognise, reflect, and respond with clarity.
              </p>
              <p className="text-lg">
                Saveh.ai is more than a search tool. It&apos;s your evidence-based copilot for better decisions in international development.
              </p>
            </div>
          </div>
          </div>
          <Footer />
        </div>
      </>
      );
}
