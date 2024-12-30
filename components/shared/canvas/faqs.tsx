'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What is the refund policy?',
    answer: 'You can request a refund within 30 days of purchase if you are not satisfied with the product.',
  },
  {
    question: 'How does lifetime access work?',
    answer: 'Once you purchase the lifetime plan, you will have unlimited access to all current and future features.',
  },
  {
    question: 'Is customer support available?',
    answer: 'Yes, we provide 24/7 customer support to assist with any issues or questions you may have.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Absolutely! You can upgrade to a higher plan anytime by paying the difference in price.',
  },
];

export default function FAQs() {
  return (
    <section id="faqs" className="py-20 px-6 sm:px-12 lg:px-20 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Find answers to the most common questions below.
          </p>
        </motion.div>
        <Accordion
          type="single"
          collapsible
          className="space-y-4 bg-white border border-gray-200 rounded-lg shadow-md px-4 sm:px-6 lg:px-8 py-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border-b last:border-none"
            >
              <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-[#0056D2] transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-md mt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
