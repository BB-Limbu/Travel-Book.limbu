import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../hero/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>Terms of Service | Travel Book</title>
      </Helmet>
      
      {/* <Navbar /> */}
      
      <motion.div 
        className="container mx-auto px-4 py-12 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sm:p-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Terms of Service</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Last Updated: May 1, 2025</p>
          
          <div className="space-y-8 text-gray-600 dark:text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">1. Acceptance of Terms</h2>
              <p className="mb-3">
                Welcome to Travel Book. By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
              <p>
                These Terms constitute a legally binding agreement between you and Travel Book regarding your use of the website and any services offered through the website.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">2. User Accounts</h2>
              <p className="mb-3">To use certain features of our service, you may need to create an account. When you create an account, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your password secure and confidential</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
              <p className="mt-3">
                We reserve the right to suspend or terminate your account if any information provided is inaccurate, outdated, or incomplete, or if we believe that you have violated these Terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">3. User Content</h2>
              <p className="mb-3">
                Our service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post, including its legality, reliability, and appropriateness.
              </p>
              <p className="mb-3">By posting Content, you grant us the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use, reproduce, modify, adapt, publish, translate, and distribute your Content in any media</li>
                <li>Use the name and username that you submit in connection with such Content</li>
                <li>Remove any Content from our website at our sole discretion</li>
              </ul>
              <p className="mt-3">
                You represent and warrant that your Content does not violate any rights of any third party, including copyright, trademark, privacy, or other personal or proprietary rights.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">4. Prohibited Uses</h2>
              <p className="mb-3">You agree not to use our service to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others or violate their privacy</li>
                <li>Impersonate any person or entity or falsely state or misrepresent your affiliation</li>
                <li>Interfere with or disrupt the service or servers or networks connected to the service</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use of the service</li>
                <li>Upload or transmit viruses or any other malicious code</li>
                <li>Collect or track the personal information of others</li>
                <li>Spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                <li>Engage in any harassing, intimidating, predatory, or abusive behavior</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">5. Intellectual Property</h2>
              <p className="mb-3">
                The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Travel Book and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Travel Book.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">6. Limitation of Liability</h2>
              <p className="mb-3">
                In no event shall Travel Book, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your access to or use of or inability to access or use the Service</li>
                <li>Any conduct or content of any third party on the Service</li>
                <li>Any content obtained from the Service</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">7. Disclaimer</h2>
              <p className="mb-3">
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
              </p>
              <p>
                Travel Book, its subsidiaries, affiliates, and licensors do not warrant that the Service will function uninterrupted, secure, or available at any particular time or location; that any errors or defects will be corrected; or that the Service is free of viruses or other harmful components.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">8. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">9. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">10. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
                <br />
                <a href="mailto:contact@sahilfolio.live" className="text-cyan-500 hover:underline">contact@sahilfolio.live</a>
              </p>
            </section>
          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Link to="/" className="text-cyan-500 hover:underline flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </motion.div>
      
      {/* <Footer /> */}
    </div>
  );
};

export default Terms;