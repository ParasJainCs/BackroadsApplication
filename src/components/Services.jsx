import Title from './Title'
import { servicesData } from '../data'
const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title first='our' second='services' />
      <div className='section-center services-center'>
        {servicesData.map((service) => {
          const { serviceIcon, serviceText, serviceTitle, id } = service
          return (
            <article className='service' key={id}>
              <span className='service-icon'>
                <i className={serviceIcon}></i>
              </span>
              <div className='service-info'>
                <h4 className='service-title'>{serviceTitle}</h4>
                <p className='service-text'>{serviceText}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Services
