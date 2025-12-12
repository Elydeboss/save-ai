import Navigation from '../components/public/Navigation';
import Community from '../components/public/Community';
import CTA from '../components/public/CTA';
import Footer from '../components/public/Footer';
import { Shield, Target, Users, TrendingUp } from 'lucide-react';


const values = [
  {
    icon: Shield,
    title: 'Security First',
    description:
      'Your funds are protected with blockchain technology and backed by stablecoins for maximum security.',
  },
  {
    icon: Target,
    title: 'Goal-Oriented',
    description:
      'We help you set and achieve your financial goals with structured savings plans and expert guidance.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description:
      'Join thousands of Nigerians building better financial futures together through SavFi.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Focused',
    description:
      "We're committed to helping you grow your wealth with competitive interest rates and smart savings strategies.",
  },
];

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-linear-to-br from-blue via-blue-600 to-blue-800 py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold  text-white mb-6 animate-fade-in">
              About SaveFi
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in">
              Empowering Nigerians to save smarter, grow faster, and achieve
              their financial dreams through blockchain-powered savings
              solutions.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h2 className="text-3xl lg:text-4xl font-bold  text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-foreground/80 mb-6">
                  SaveFi was born from a simple belief: every Nigerian deserves
                  access to secure, transparent, and rewarding savings
                  solutions. We're leveraging blockchain technology to protect
                  your money from currency devaluation while offering
                  competitive returns.
                </p>
                <p className="text-lg text-foreground/80">
                  By converting your Naira to stablecoins (USDT/USDC), we ensure
                  your savings maintain their value while earning interest. No
                  complex crypto knowledge needed – just simple, secure savings
                  that work for you.
                </p>
              </div>
              <div className="bg-gradient-primary/10 rounded-3xl p-8 lg:p-12 border border-primary/20 animate-slide-up">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-5xl font-bold  text-primary mb-2">
                      50,000+
                    </h3>
                    <p className="text-muted-foreground">Active Savers</p>
                  </div>
                  <div>
                    <h3 className="text-5xl font-bold  text-primary mb-2">
                      ₦5B+
                    </h3>
                    <p className="text-muted-foreground">Total Savings</p>
                  </div>
                  <div>
                    <h3 className="text-5xl font-bold  text-primary mb-2">
                      8%
                    </h3>
                    <p className="text-muted-foreground">Max Interest Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-32 bg-[#f2f9ff]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold  text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at SaveFi
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold  text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-foreground/80">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>



        <Community />
        <CTA />
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
