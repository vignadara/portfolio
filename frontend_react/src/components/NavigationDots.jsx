import React from 'react'

const NavigationDots = ({ active }) => {
  return (
      <div className='app__navigation'>
          {['home', 'about', 'contact', 'skills','testimonials' , 'contact','work'].map((item, index) => (
            <a
                href= {`#${item}`}
                key={item + index}
                className="app__navigation-dot"
                style={active === item ? { backgroundColor: '#313Bac'} : { }}
            />
          ))}
      </div>
  )
}



export default NavigationDots