import { useEffect, useId, useState } from 'react'
import { motion } from 'framer-motion'
import './SegmentControl.css'
import React from 'react'

export default function SegmentControl({
  items = ['one', 'Two', 'Three'],
  initialIndex = 0,
  onChange,
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const id = useId()

  useEffect(() => {
    onChange(currentIndex, items[currentIndex])
  }, [currentIndex])

  return (
    <>
      <div className='control-container'>
        {items.map((item, index) => {
          return (
            <div
              className='control-item'
              onClick={() => setCurrentIndex(index)}
            >
              {currentIndex === index && (
                <motion.div
                  layoutId={id}
                  className='control-item-bg'
                ></motion.div>
              )}
              <div className='control-item-text'>{item}</div>
            </div>
          )
        })}
      </div>
      <div style={{ marginTop: '16px' }}></div>
      <div>Selected item: {items[currentIndex]}</div>
      <div>Selected index: {currentIndex} </div>
    </>
  )
}
