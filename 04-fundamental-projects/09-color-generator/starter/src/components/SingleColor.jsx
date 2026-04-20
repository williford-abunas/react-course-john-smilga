import React from 'react'
import { toast } from 'react-toastify'

const SingleColor = ({index, color}) => {
  const {hex, weight} = color

  const savetoClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success(`Copied #${hex} to clipboard`)
      } catch (error) {
        toast.error('Failed to copy to clipboard')
      }
    }
  }

  return (
    <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor: `#${hex}`}}
    onClick={savetoClipboard}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  )
}

export default SingleColor