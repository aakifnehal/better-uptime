"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Shield, 
  Globe, 
  Coins, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Monitor,
  Zap,
  Network,
  Eye,
  Clock,
  DollarSign
} from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Decentralized Validation",
      description: "Multiple validators ensure accurate uptime monitoring with no single point of failure"
    },
    {
      icon: <Coins className="h-6 w-6" />,
      title: "Earn While Validating",
      description: "Get rewarded with tokens for participating in the network and validating uptime"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Network",
      description: "Validators worldwide provide comprehensive coverage and real-time monitoring"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Detailed insights and performance metrics to optimize your website's reliability"
    }
  ];

  const stats = [
    { label: "Active Validators", value: "12,847", icon: <Users className="h-5 w-5" /> },
    { label: "Websites Monitored", value: "45,231", icon: <Monitor className="h-5 w-5" /> },
    { label: "Uptime Checks/Day", value: "2.1M", icon: <Eye className="h-5 w-5" /> },
    { label: "Avg Response Time", value: "127ms", icon: <Zap className="h-5 w-5" /> }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for small websites and personal projects",
      features: [
        "Up to 5 websites",
        "5-minute check intervals",
        "Email notifications",
        "Basic analytics",
        "Community support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "Up to 25 websites",
        "1-minute check intervals",
        "SMS & email notifications",
        "Advanced analytics",
        "API access",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations with critical infrastructure",
      features: [
        "Unlimited websites",
        "30-second check intervals",
        "Multi-channel notifications",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}


      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
            🚀 Decentralized Monitoring Revolution
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
            Monitor Uptime,
            <br />
            <span className="text-blue-600">Earn Rewards</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join the world's first decentralized uptime monitoring network. 
            Validate website availability and earn tokens while ensuring the internet stays reliable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex w-full sm:w-auto">
              <Input 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-r-none w-full sm:w-80"
              />
              <Button className="rounded-l-none bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Start Earning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              No setup fees
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Instant rewards
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              24/7 monitoring
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why Choose UptimeDAO?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of uptime monitoring with our decentralized, 
              reward-based validation network.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg w-fit text-white mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to start monitoring and earning
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-6 shadow-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Join the Network</h3>
              <p className="text-gray-600">
                Sign up and become a validator in our decentralized monitoring network
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-6 shadow-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Validate Uptime</h3>
              <p className="text-gray-600">
                Monitor websites and validate their uptime status across the network
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-6 shadow-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Earn Rewards</h3>
              <p className="text-gray-600">
                Get paid in tokens for your validation work and network participation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your monitoring needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-2 border-blue-500 shadow-xl scale-105' : 'border shadow-lg'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                      : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of validators already earning rewards while keeping the internet reliable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <DollarSign className="mr-2 h-5 w-5" />
              Start Validating
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Clock className="mr-2 h-5 w-5" />
              Monitor Your Site
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">UptimeDAO</span>
              </div>
              <p className="text-gray-400 mb-4">
                The decentralized future of uptime monitoring
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Validators</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">How to Validate</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rewards</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Network Stats</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 UptimeDAO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}