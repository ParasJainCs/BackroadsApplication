import { toursData } from '../data'
import Title from './Title'
const Tours = () => {
  return (
    <>
      <section className='section' id='tours'>
        <Title first='featured' second='tours' />
        <div className='section-center featured-center'>
          {toursData.map((tour) => {
            const {
              tourImg,
              tourDate,
              tourText,
              tourTitle,
              tourIcon,
              tourPrice,
              tourDays,
              tourLocation,
            } = tour
            return (
              <article className='tour-card'>
                <div className='tour-img-container'>
                  <img src={tourImg} className='tour-img' alt='' />
                  <p className='tour-date'>{tourDate}</p>
                </div>
                <div className='tour-info'>
                  <div className='tour-title'>
                    <h4>{tourTitle}</h4>
                  </div>
                  <p>{tourText}</p>
                  <div className='tour-footer'>
                    <p>
                      <span>
                        <i className='fas fa-map'></i>
                      </span>{' '}
                      {tourLocation}
                    </p>
                    <p>{tourDays}</p>
                    <p>{tourPrice}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
export default Tours
