import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import logo from "../../assets/images/logo.png";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>Terms of Service | Travel Book</title>
      </Helmet>
      
      {/* Simple Navbar */}
      <div className='bg-white dark:bg-gray-800 flex items-center justify-between px-4 sm:px-6 py-2 drop-shadow sticky top-0 z-30'>
        <motion.a 
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={logo} alt="Travel Book Logo" className='h-12 sm:h-16' />
        </motion.a>
        
        <div className="flex items-center gap-4">
          <Link to="/privacy-policy" className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 font-medium">
            Privacy Policy
          </Link>
          <ThemeToggle />
        </div>
      </div>
      
      {/* Main Content */}
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
      
      {/* New Footer */}
      <footer className="mt-auto py-8 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Link to="/">
                <img src={logo} alt="Travel Book Logo" className="h-16 mb-4" />
              </Link>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Travel Book helps you document and share your adventures around the world.
                Create memories that last a lifetime.
              </p>
              <div className="flex space-x-4">
                <a href="https://sahilfolio.live/" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </a>
                <a href="https://x.com/Sa_hilll94" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/sahilll94" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.395 19h-2.978v-10.727h2.978v10.727zm-1.489-12.452c-1.017 0-1.844-.83-1.844-1.848 0-1.017.827-1.844 1.844-1.844 1.019 0 1.846.827 1.846 1.844 0 1.018-.827 1.848-1.846 1.848zm13.484 12.452h-2.978v-5.805c0-1.383-.025-3.164-1.93-3.164-1.935 0-2.234 1.511-2.234 3.071v5.898h-2.978v-10.727h2.857v1.466h.041c.398-.756 1.368-1.553 2.814-1.553 3.008 0 3.566 1.98 3.566 4.555v6.259z" />
                  </svg>
                </a>
                <a href="https://github.com/Sahilll94" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <h3 className="text-gray-800 dark:text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a href="/signUp" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400">
                    Create Account
                  </a>
                </li>
                <li>
                  <a href="/login" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400">
                    Login
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="md:col-span-1">
              <h3 className="text-gray-800 dark:text-white font-semibold mb-4">About Travel Book</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Discover our innovative platform designed to streamline your travel experiences. 
                From creating and sharing captivating travel stories to managing your favorite destinations, 
                our user-friendly tools help you document every journey seamlessly.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Travel Book. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Terms;