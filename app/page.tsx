"use client";

import {Navigation} from "@/components/ui/Navigations";
import {Hero} from "@/components/sections/Hero";
import {KeyFeatures} from "@/components/sections/KeyFeatures";
import {Stats} from "@/components/sections/Stats";
import {BlockchainReadiness} from "@/components/sections/BlockchainReadiness";
import {Quickstart} from "@/components/sections/Quickstart";
import {Roadmap} from "@/components/sections/Roadmap";
import {CTA} from "@/components/sections/CTA";
import {Footer} from "@/components/sections/Footer";

export default function App() {
    return (
        <div className="min-h-screen bg-[#0A0A0F] text-white dark overflow-x-clip overscroll-x-none">
            <Navigation/>
            <Hero/>
            <KeyFeatures/>
            <Stats/>
            <BlockchainReadiness/>
            <Quickstart/>
            <Roadmap/>
            <CTA/>
            <Footer/>
        </div>
    );
}