import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CursorFollower = () => {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current

    if (!cursor || !cursorDot) return

    // Use gsap.quickTo for better performance with lerp effect
    // These functions will smoothly animate to the target position
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.6, ease: 'power3' })
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.6, ease: 'power3' })
    
    const xToDot = gsap.quickTo(cursorDot, 'x', { duration: 0.15, ease: 'power3' })
    const yToDot = gsap.quickTo(cursorDot, 'y', { duration: 0.15, ease: 'power3' })

    const handleMouseMove = (e) => {
      // Get the mouse position
      const mouseX = e.clientX
      const mouseY = e.clientY

      // Animate the outer cursor with smooth lerp effect
      xTo(mouseX)
      yTo(mouseY)

      // Animate the inner dot with faster response
      xToDot(mouseX)
      yToDot(mouseY)
    }

    // Add mouse move listener
    window.addEventListener('mousemove', handleMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      {/* Outer cursor circle with smooth lerp animation */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-white pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
      
      {/* Inner cursor dot with faster response */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
    </>
  )
}

export default CursorFollower
