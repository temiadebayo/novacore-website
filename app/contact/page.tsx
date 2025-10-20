'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: ['hello@novacoreafrica.com', 'support@novacoreafrica.com'],
    description: 'Send us an email and we\'ll respond within 24 hours'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Abuja, Nigeria'],
    description: 'Come see us at our Abuja office'
  }
]

const formFields = [
  {
    name: 'name',
    label: 'Full Name',
    type: 'text',
    required: true,
    placeholder: 'Enter your full name'
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    required: true,
    placeholder: 'Enter your email address'
  },
  {
    name: 'company',
    label: 'Company/Organization',
    type: 'text',
    required: false,
    placeholder: 'Enter your company name'
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'tel',
    required: false,
    placeholder: 'Enter your phone number'
  },
  {
    name: 'subject',
    label: 'Subject',
    type: 'text',
    required: true,
    placeholder: 'What is this about?'
  }
]

const faqs = [
  {
    question: "How quickly can we get started with NovaCore?",
    answer: "Most organizations can be up and running within 2-4 weeks, depending on your specific requirements and data complexity. Our onboarding process includes system setup, data migration, user training, and initial configuration. We work closely with your team to ensure a smooth transition and provide dedicated support throughout the implementation phase."
  },
  {
    question: "What types of organizations does NovaCore serve?",
    answer: "NovaCore is designed for regulators, energy operators, financial institutions, and stakeholders across Africa's energy and finance sectors. Whether you're a national regulatory body like NUPRC or NMDPRA, an upstream/downstream operator, or a compliance officer, our platform adapts to your specific needs and workflows."
  },
  {
    question: "Is NovaCore compatible with our existing systems?",
    answer: "Yes, NovaCore is designed to integrate seamlessly with most existing systems through RESTful APIs and standard data formats (Excel, CSV, PDF). We support integration with ERP systems, existing databases, and legacy compliance tools. Our technical team will work with you to ensure smooth data flow between NovaCore and your current infrastructure without disrupting operations."
  },
  {
    question: "What kind of training and support do you provide?",
    answer: "We provide comprehensive training sessions tailored to different user roles - administrators, operators, compliance officers, and executives. Training includes live sessions, video tutorials, and documentation. Post-launch, we offer 24/7 technical support, regular system updates, dedicated account management for enterprise clients, and ongoing training for new features and team members."
  },
  {
    question: "How does NovaCore ensure data security and compliance?",
    answer: "NovaCore employs enterprise-grade security measures including end-to-end encryption, role-based access control, audit trails, and secure cloud infrastructure. We comply with international data protection standards and African regulatory requirements. All data is stored in secure, geo-redundant servers with regular backups and disaster recovery protocols in place."
  },
  {
    question: "Can NovaCore handle multiple regulatory frameworks?",
    answer: "Absolutely. NovaCore is built to accommodate multiple regulatory frameworks simultaneously, including NUPRC, NMDPRA, and other African energy regulators. The platform allows you to configure different compliance requirements, reporting templates, and validation rules for each regulatory body you work with."
  },
  {
    question: "What data formats does NovaCore accept?",
    answer: "NovaCore accepts a wide range of data formats including Excel spreadsheets (.xlsx, .xls), CSV files, PDF documents, and direct API integrations. Our intelligent data mapping automatically detects fields and validates entries against regulatory standards, making the upload process seamless regardless of your current data format."
  },
  {
    question: "How does pricing work for NovaCore?",
    answer: "We offer flexible pricing models based on your organization's size, user count, and specific needs. This includes subscription-based plans for operators, enterprise packages for large organizations, and custom solutions for regulatory bodies. Contact us for a detailed quote tailored to your requirements. We also offer demo periods to help you evaluate the platform."
  },
  {
    question: "What happens to our data if we decide to stop using NovaCore?",
    answer: "You retain full ownership of your data at all times. If you decide to discontinue using NovaCore, we provide complete data export in standard formats of your choice. We also offer a transition period with support to ensure smooth migration to any alternative system you choose. No data lock-in, ever."
  },
  {
    question: "Does NovaCore support offline functionality?",
    answer: "While NovaCore is primarily a cloud-based platform for real-time collaboration, we offer offline data collection capabilities for field operations. Data collected offline can be synchronized automatically when connectivity is restored, ensuring continuous operations even in remote locations."
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-brand-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-display font-semibold tracking-tight text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl font-medium text-white/90 max-w-3xl mx-auto tracking-tight">
              Ready to transform your compliance processes? We&apos;re here to help you get started with NovaCore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-8 tracking-tight">
                Let&apos;s Start a Conversation
              </h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Whether you&apos;re a regulator looking to modernize oversight or an operator seeking streamlined compliance, 
                we&apos;re here to help you succeed. Reach out to us through any of the channels below.
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="p-3 rounded-2xl bg-primary-500 flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 tracking-tight">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700 font-medium mb-1">
                            {detail}
                          </p>
                        ))}
                        <p className="text-gray-500 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Form Fields */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    {formFields.map((field) => (
                      <div key={field.name} className={field.name === 'subject' ? 'sm:col-span-2' : ''}>
                        <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2">
                          {field.label}
                          {field.required && <span className="text-primary-500 ml-1">*</span>}
                        </label>
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleInputChange}
                          placeholder={field.placeholder}
                          required={field.required}
                          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                      <span className="text-primary-500 ml-1">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your compliance needs, questions, or how we can help..."
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-2xl"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <p className="text-green-700 font-medium">
                        Thank you! Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-red-700 font-medium">
                        Sorry, there was an error sending your message. Please try again or contact us directly.
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about NovaCore
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.05 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-primary-300 transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 tracking-tight pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-primary-500" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  )
}
