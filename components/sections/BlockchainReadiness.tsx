import { Code2, Wallet, Radio, FileCode, Copy, Check } from "lucide-react";
import { useState, useEffect } from "react";

import { animate, motion, useMotionValue, useTransform, type MotionValue } from "framer-motion";

// Blockchain examples data
const BLOCKCHAIN_EXAMPLES = [
    {
        title: "Wallet Connect",
        icon: Wallet,
        description: "Seamlessly integrate wallet connections with minimal setup.",
        code: `import { WalletService } from '@bejibun/web3';

const wallet = new WalletService();

// Connect wallet
const address = await wallet.connect({
  provider: 'metamask'
});

// Sign message
const signature = await wallet.sign(
  'Welcome to Bejibun!'
);`,
    },
    {
        title: "RPC Calls",
        icon: Radio,
        description: "Make RPC calls to blockchain nodes with built-in error handling.",
        code: `import { RPC } from '@bejibun/web3';

const rpc = new RPC({
  network: 'mainnet',
  provider: process.env.RPC_URL
});

// Get block number
const blockNumber = await rpc.call(
  'eth_blockNumber'
);

// Get balance
const balance = await rpc.getBalance(
  address
);`,
    },
    {
        title: "Contract Calls",
        icon: FileCode,
        description: "Interact with smart contracts using type-safe interfaces.",
        code: `import { Contract } from '@bejibun/web3';

const token = new Contract({
  address: '0x...',
  abi: ERC20_ABI
});

// Read contract
const balance = await token.balanceOf(
  userAddress
);

// Write contract
await token.transfer(
  recipientAddress,
  amount
);`,
    },
];

// Background gradient blobs
function BackgroundGradients() {
    return (
        <>
            {/* Purple gradient blob - center left */}
            <div className="absolute bg-brand-purple/20 blur-[120px] filter left-[-100px] opacity-40 rounded-full size-[500px] top-1/2 -translate-y-1/2" />

            {/* Pink gradient blob - center right */}
            <div className="absolute bg-brand-pink/20 blur-[120px] filter right-[-100px] opacity-40 rounded-full size-[500px] top-1/2 -translate-y-1/2" />
        </>
    );
}

// Section header
function SectionHeader() {
    return (
        <motion.div
            className="text-center mb-[48px] md:mb-[64px] relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex items-center justify-center gap-[10px] mb-[16px] md:mb-[20px]">
                <Code2 className="size-[20px] md:size-[24px] text-brand-purple" strokeWidth={1.5} />
                <p className="text-[14px] md:text-[16px] text-brand-purple tracking-[-0.2px]">
                    Blockchain Ready
                </p>
            </div>

            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.04em] mb-[16px] md:mb-[20px]">
                <span className="text-foreground">Built for </span>
                <span className="text-brand-pink">Web3</span>
            </h2>

            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] tracking-[-0.2px] text-muted-foreground max-w-[700px] mx-auto">
                Everything you need to build blockchain-powered applications, from wallet integration to smart contract interactions.
            </p>
        </motion.div>
    );
}

// Tab button component
function TabButton({
                       title,
                       icon: Icon,
                       isActive,
                       onClick,
                       progress,
                       onHoverChange,
                   }: {
    title: string;
    icon: typeof Wallet;
    isActive: boolean;
    onClick: () => void;
    progress: MotionValue<number>;
    onHoverChange: (hovered: boolean) => void;
}) {
    const progressScale = useTransform(progress, [0, 100], [0, 1]);

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => onHoverChange(true)}
            onMouseLeave={() => onHoverChange(false)}
            aria-label={title}
            title={title}
            className={`
        flex items-center gap-[8px] md:gap-[12px] px-[16px] md:px-[24px] py-[12px] md:py-[16px] 
        rounded-[8px] border transition-all duration-300 w-full min-[744px]:flex-1 relative overflow-hidden
        cursor-pointer
        ${isActive
                ? "bg-gradient-to-br from-brand-purple/20 to-brand-pink/20 border-brand-purple/50 text-foreground"
                : "bg-card/50 border-border/30 text-muted-foreground hover:border-brand-purple/30 hover:bg-card"
            }
      `}
        >
            {/* Progress bar */}
            {isActive && (
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-purple/50"
                    style={{ transformOrigin: "left", scaleX: progressScale }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-pink" />
                </motion.div>
            )}
            <div className="flex justify-between w-full items-center gap-[8px] md:gap-[12px]">
                <div className="flex justify-between items-center gap-[8px] md:gap-[12px]">
                    <Icon className="size-[18px] md:size-[20px] relative z-10" strokeWidth={1.5} />
                    <span className="sm:inline text-[14px] md:text-[16px] tracking-[-0.2px] relative z-10">{title}</span>
                </div>
                <span className="text-[12px] md:text-[13px] px-[10px] py-[4px] rounded-full border border-white/10 bg-white/5 text-white/70">
          Coming Soon
        </span>
            </div>
        </button>
    );
}

// Code example card
function CodeExampleCard({
                             code,
                         }: {
    code: string;
}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const copyLabel = copied ? "Copied!" : "Copy";

    return (
        <div className="bg-black/60 rounded-[8px] md:rounded-[10px] border border-white/10 overflow-hidden">
            {/* Code header */}
            <div className="border-b border-white/10 px-[20px] md:px-[24px] py-[14px] md:py-[16px]">
                <div className="flex items-center justify-between gap-[12px]">
                    <div className="flex gap-[6px] md:gap-[8px] items-center">
                        <div className="bg-destructive rounded-full size-[10px] md:size-[12px]" />
                        <div className="bg-chart-3 rounded-full size-[10px] md:size-[12px]" />
                        <div className="bg-chart-2 rounded-full size-[10px] md:size-[12px]" />
                    </div>
                    <button
                        onClick={handleCopy}
                        className="inline-flex items-center justify-center gap-2 h-8 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm cursor-pointer"
                        aria-label={copyLabel}
                        title={copyLabel}
                    >
                        {copied ? (
                            <>
                                <Check className="w-4 h-4 text-green-400" />
                                <span className="hidden sm:inline text-green-400">Copied!</span>
                            </>
                        ) : (
                            <>
                                <Copy className="w-4 h-4" />
                                <span className="hidden sm:inline">Copy</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Code content */}
            <div className="p-[20px] md:p-[28px] lg:p-[32px] overflow-x-auto">
        <pre className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.7] font-mono">
          <code className="text-muted-foreground whitespace-pre">
            {code}
          </code>
        </pre>
            </div>
        </div>
    );
}

// Main BlockchainReadiness component
export function BlockchainReadiness() {
    const [activeTab, setActiveTab] = useState(0);
    const [hovered, setHovered] = useState(false);
    const progress = useMotionValue(100);

    const setTab = (index: number) => {
        setActiveTab(index);
        progress.set(100);
    };

    // Auto-rotate tabs every 5 seconds
    useEffect(() => {
        if (hovered) return;
        const interval = setInterval(() => {
            setActiveTab((prev) => {
                const next = (prev + 1) % BLOCKCHAIN_EXAMPLES.length;
                progress.set(100);
                return next;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [hovered, progress]);

    // Smooth progress animation (5s per tab)
    useEffect(() => {
        progress.stop();
        progress.set(100);
        if (hovered) return;

        const controls = animate(progress, 0, {
            duration: 5,
            ease: "linear",
        });

        return () => {
            controls.stop();
        };
    }, [activeTab, hovered, progress]);

    const activeExample = BLOCKCHAIN_EXAMPLES[activeTab];

    return (
        <section id="blockchain" className="bg-black relative w-full py-[60px] md:py-[80px] lg:py-[100px] overflow-hidden">
            <BackgroundGradients />

            <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
                <SectionHeader />

                {/* Tab Navigation */}
                <div className="flex flex-col min-[824px]:flex-row gap-[12px] md:gap-[16px] mb-[32px] md:mb-[40px]">
                    {BLOCKCHAIN_EXAMPLES.map((example, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="w-full min-[824px]:flex-1"
                        >
                            <TabButton
                                title={example.title}
                                icon={example.icon}
                                isActive={activeTab === index}
                                onClick={() => setTab(index)}
                                progress={progress}
                                onHoverChange={(h) => {
                                    setHovered(h);
                                    if (!h) progress.set(100);
                                }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Active Tab Content */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <CodeExampleCard
                            code={activeExample.code}
                        />
                    </motion.div>

                    {/* Progress indicators */}
                    <div className="flex gap-[8px] justify-center mt-[24px] md:mt-[32px]">
                        {BLOCKCHAIN_EXAMPLES.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setTab(index)}
                                className={`h-[3px] rounded-full transition-all duration-300 cursor-pointer ${activeTab === index
                                    ? "w-[32px] md:w-[40px] bg-brand-purple"
                                    : "w-[16px] md:w-[20px] bg-border/50 hover:bg-border"
                                }`}
                                aria-label={`Go to ${BLOCKCHAIN_EXAMPLES[index].title}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}