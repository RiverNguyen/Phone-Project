import ProductDemo from '@/components/product-demo'
import Banner from './_components/banner'
import Hero from '@/components/hero'
import Categories from '@/components/categories'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import ContactInfo from '@/components/contact-info'

const HomePage = async () => {
  return (
    <div className='min-h-screen'>
      <Hero />
      <Banner />
      <Categories />
      <ProductDemo />
      <Features />
      <Testimonials />
      <Newsletter />
      <ContactInfo />
    </div>
  )
}

export default HomePage
