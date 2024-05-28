import React, { useState, useEffect } from 'react'
import Spline from '@splinetool/react-spline'

const SplineScene = () => {
  const [key, setKey] = useState(0)
  const [prevDevicePixelRatio, setPrevDevicePixelRatio] = useState(
    typeof window !== 'undefined' ? window.devicePixelRatio : 1
  )

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    let timeoutId

    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        const currentDevicePixelRatio = window.devicePixelRatio
        if (currentDevicePixelRatio !== prevDevicePixelRatio) {
          setPrevDevicePixelRatio(currentDevicePixelRatio)
          setKey(prevKey => prevKey + 1)
        }
      }, 200) // Adjust the timeout duration as needed
    }

    window.addEventListener('resize', handleResize)

    // Cleanup event listener on component unmount
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', handleResize)
    }
  }, [prevDevicePixelRatio])

  return (
    <Spline
      key={key}
      scene="https://prod.spline.design/TFq9AKbvFMWkAAYH/scene.splinecode"
    />
  )
}

export default SplineScene
