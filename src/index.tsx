import * as React from 'react'
import { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './slider.css'
import PhoneNotch from './phone-notch.svg'

function PhoneSlider(props: any) {
  const [movementOffset, setMovementOffset] = useState(0)
  const [initialItems] = useState(fillArrayWithOriginalItems(props.items))
  const [currentItem, setCurrentItem] = useState(initialItems[4])
  const delay = props.delay ?? 3000

  const moveForward = useCallback(() => {
    setMovementOffset(movementOffset + 1)
  }, [movementOffset])

  const moveBackward = useCallback(() => {
    setMovementOffset(movementOffset - 1)
  }, [movementOffset])

  useEffect(() => {
    if (props.forwardButtonRef != null)
      props.forwardButtonRef.current.onclick = () => {
        moveForward()
      }

    if (props.backwardButtonRef != null)
      props.backwardButtonRef.current.onclick = () => {
        moveBackward()
      }
  }, [
    props.forwardButtonRef,
    props.backwardButtonRef,
    movementOffset,
    moveForward,
    moveBackward
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      moveForward()
    }, delay)
    return () => clearInterval(interval)
  }, [delay, moveForward, movementOffset])

  return (
    <div className={styles['phone-slider']} style={props.style}>
      <div>
        <div className={styles['clickable-area']}>
          <div onClick={moveForward} />
          <div onClick={moveBackward} />
        </div>

        <div className={styles['slides-container']}>
          <Slide
            onItemShowed={setCurrentItem}
            initialItem={initialItems[8]}
            startOffset={0}
            moveOffset={movementOffset}
            items={props.items}
          />
          <Slide
            onItemShowed={setCurrentItem}
            initialItem={initialItems[7]}
            startOffset={1}
            moveOffset={movementOffset}
            items={props.items}
          />
          <Slide
            onItemShowed={setCurrentItem}
            initialItem={initialItems[6]}
            startOffset={2}
            moveOffset={movementOffset}
            items={props.items}
          />
          <Slide
            onItemShowed={setCurrentItem}
            initialItem={initialItems[5]}
            startOffset={3}
            moveOffset={movementOffset}
            items={props.items}
          />
          <Slide
            onItemShowed={setCurrentItem}
            initialItem={initialItems[4]}
            startOffset={4}
            moveOffset={movementOffset}
            items={props.items}
          />
          <Slide
            onItemShowed={setCurrentItem}
            initialItem={initialItems[3]}
            startOffset={5}
            moveOffset={movementOffset}
            items={props.items}
          />
          <Slide
            onItemShowed={setCurrentItem}
            initialItem={initialItems[2]}
            startOffset={6}
            moveOffset={movementOffset}
            items={props.items}
          />
          <Slide
            onItemShowed={setCurrentItem}
            initialItem={initialItems[1]}
            startOffset={7}
            moveOffset={movementOffset}
            items={props.items}
          />
          <Slide
            onItemShowed={setCurrentItem}
            initialItem={initialItems[0]}
            startOffset={8}
            moveOffset={movementOffset}
            items={props.items}
          />
        </div>

        <div className={styles['details-container']}>
          <div
            data-nosnippet='true'
            style={{
              fontSize: '24px',
              fontWeight: '600'
            }}
          >
            {currentItem.title}
          </div>
          <div
            data-nosnippet='true'
            style={{
              fontSize: '16px'
            }}
          >
            {currentItem.description}
          </div>
        </div>
      </div>
    </div>
  )
}

PhoneSlider.propTypes = {
  style: PropTypes.any,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string
    })
  ).isRequired,
  delay: PropTypes.number,
  forwardButtonRef: PropTypes.any,
  backwardButtonRef: PropTypes.any,
  outerMove: PropTypes.number
}

export { PhoneSlider }

export type SlideInfo = {
  image: string
  title: string
  description: string
}

function fillArrayWithOriginalItems(originalArray: any[]): any[] {
  const filledArray: any[] = []

  for (let i = 0; i < 9; i++) {
    filledArray.push(originalArray[i % originalArray.length])
  }

  return filledArray
}

function Slide(props: {
  startOffset: number
  moveOffset: number
  items: SlideInfo[]
  initialItem: SlideInfo
  onItemShowed: (item: SlideInfo) => void
}) {
  const inputSlideNumber = props.startOffset + props.moveOffset
  let viewSlideNumber = inputSlideNumber % 9
  if (viewSlideNumber < 0) viewSlideNumber += 9

  const [item, setItem] = useState(props.initialItem)
  useEffect(() => {
    if (viewSlideNumber === 8) {
      setItem(getPreviousItem(props.items, props.moveOffset))
    }
    if (viewSlideNumber === 0) {
      setItem(getNextItem(props.items, 9, props.moveOffset))
    }
    if (viewSlideNumber === 4) {
      props.onItemShowed(item)
    }
  }, [item, props, viewSlideNumber])

  const containerClass = styles[`slide-container-${Math.abs(viewSlideNumber)}`]

  return (
    <div className={`${styles['slide-container']} ${containerClass}`}>
      <div className={styles.slide}>
        <div>
          <img alt='design' className={styles.notch} src={PhoneNotch} />
          <img
            alt={item.title}
            src={item.image}
            className={styles['slide-img']}
          />
        </div>
      </div>
    </div>
  )
}

function getNextItem(array: any[], slidesCount: number, mo: number) {
  let targetIndex = (slidesCount + mo) % array.length
  if (targetIndex < 0) {
    targetIndex = array.length + targetIndex
  }
  return array[targetIndex]
}

function getPreviousItem(array: any[], mo: number) {
  let targetIndex = mo % array.length
  if (targetIndex < 0) {
    targetIndex = array.length + targetIndex
  }
  return array[targetIndex]
}
