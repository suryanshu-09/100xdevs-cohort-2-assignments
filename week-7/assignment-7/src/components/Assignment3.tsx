import { useEffect, useState } from 'react'

const Assignment3 = () => {
  const [a, seta] = useState('')
  const reactElement = {
    type: 'a',
    props: {
      href: 'https://aur.archlinux.org',
      target: '_blank',
      children: ['Click me'],
    },
  }

  function generateHTML(element: any) {
    const { type, props } = element
    const children = props.children || []
    const attributes = Object.keys(props)
      .filter((key) => key !== 'children')
      .map((key) => `${key}="${props[key]}"`)
      .join(' ')

    const childHTML = children
      .map((child: any) => {
        return typeof child === 'object' ? generateHTML(child) : child
      })
      .join('')

    seta(`<${type} ${attributes}>${childHTML}</${type}>`)
  }

  function customRender(element: any, container: any) {
    // console.log(container)
    const html = generateHTML(element)
    container.innerHTML = html
  }
  useEffect(() => {
    customRender(reactElement, document.getElementsByClassName('elemRender'))
  }, [])

  return (
    <div
      className='flex items-center justify-center w-screen py-20 elemRender h-screen bg-white'
      dangerouslySetInnerHTML={{ __html: a }}
    ></div>
  )
}

export default Assignment3
