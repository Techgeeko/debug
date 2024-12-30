'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  'Unlimited refund requests',
  'AI-powered chat widget',
  'Policy automation',
  'Analytics dashboard',
  'Email notifications',
  'Custom branding',
];

const totalOffers = 1000; // Total available offers
const takenOffers = 750; // Offers already taken

export default function Pricing() {
  const progressPercentage = (takenOffers / totalOffers) * 100;

  return (
    <section id="pricing" className="py-20 px-6 sm:px-8 bg-black text-white">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section: Text and Progress Bar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Don&apos;t Miss Out!
          </h2>
          <p className="text-lg sm:text-xl">
            Join <span className="font-bold">{takenOffers}</span> others who have already taken the lifetime offer! Only{' '}
            <span className="font-bold">{totalOffers - takenOffers}</span> spots left.
          </p>
          <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden shadow-md">
            <div
              className="bg-[#0056D2] h-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-400">{progressPercentage.toFixed(0)}% of spots claimed</p>
        </motion.div>

        {/* Right Section: Pricing Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card
            className="max-w-md mx-auto w-full border-0 rounded-lg bg-white text-black shadow-lg"
            style={{
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2), 0px 1px 3px rgba(0, 0, 0, 0.1)',
            }}
          >
            <CardHeader className="text-center pb-4 border-b border-gray-200">
              <CardTitle className="text-4xl font-bold">$149</CardTitle>
              <p className="text-xl text-gray-600">Lifetime Access</p>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center text-gray-800"
                  >
                    <CheckCircle className="w-5 h-5 text-[#0056D2] mr-2" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
              <Button className="w-full bg-[#0056D2] text-white hover:bg-[#0043A5] text-lg py-4 shadow-md">
                Get Started Now
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
