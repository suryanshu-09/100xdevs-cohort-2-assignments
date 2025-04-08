import { useMemo, useState } from "react"

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus arcu, egestas in varius ut, tempus quis nisl. Vivamus sodales sem id turpis scelerisque convallis. Nam sodales mauris sed enim posuere, sit amet euismod ex consequat. Vestibulum luctus nisi hendrerit velit viverra, sed auctor purus auctor. Proin quis purus justo. Aenean ac urna vehicula, facilisis lectus id, commodo urna. Nam eu turpis imperdiet ante blandit placerat. Curabitur elementum, lectus et posuere sodales, eros nulla suscipit libero, eu placerat odio mauris eget lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam ut aliquet ante, nec tristique tellus. Aenean tincidunt iaculis diam tempor euismod. Sed rhoncus justo eu tellus iaculis, a vehicula mauris porta. Duis pellentesque mi nec sollicitudin sollicitudin.

Curabitur a sagittis urna, vitae auctor risus. Integer ut consequat metus. Curabitur mattis venenatis nibh, vel sagittis nisl tempor sodales. Praesent vulputate sed dui sit amet venenatis. Sed venenatis in magna in vulputate. Proin elit ligula, facilisis vulputate commodo quis, scelerisque vitae sapien. Suspendisse potenti. Nam vitae ullamcorper ante, in vulputate lorem. Sed aliquam neque a justo facilisis sollicitudin.

Nunc imperdiet ipsum eget justo consectetur elementum. Mauris at mattis lectus. Nunc vestibulum, enim ac porttitor tempor, est mi rutrum ipsum, ut elementum nisl felis in nibh. Fusce accumsan lorem id scelerisque blandit. Vestibulum a condimentum lacus. Suspendisse orci massa, efficitur quis massa in, posuere facilisis magna. Pellentesque in mollis lacus, id commodo eros. Integer ex mauris, ornare vitae tincidunt non, tincidunt id risus. Cras congue tortor lorem, et accumsan neque maximus quis.`


export default function Assignment4() {
  const [wordCount, setWordCount] = useState(0)
  const [paragraph, setparagraph] = useState("")
  const wordArr = useMemo(() => {
    return loremIpsum.split(' ')
  }, [])
  const handleSubmit = () => {
    if (Number(wordCount) <= 0) return
    let temp = []
    for (let index = 0; index < Number(wordCount); index++) {
      temp.push(wordArr[Math.floor(Math.random() * wordArr.length)])
    }
    setparagraph(temp.join(' '))
  }
  return <div className="h-screen flex items-center justify-center bg-[#292929]">
    <div className="flex flex-col">
      <div className="text-7xl text-center text-white mb-12 font-light">Paragraph Generator</div>
      <div className="">
        <div className="flex justify-between gap-6">
          <div className="w-full">
            <input className="px-6 py-2 w-full rounded-lg bg-white" placeholder="Enter the number of words" type="number" onChange={(e) => {
              setWordCount(Number(e.target.value))
            }}></input>
          </div>
          <div className="">
            <button className="px-6 py-2 text-white border border-white rounded-lg" onClick={handleSubmit}>Generate</button>
          </div>
        </div>
      </div>
      <div className="text-white mt-4 max-w-2xl text-wrap text-justify transition-all duration-300">{paragraph}</div>
    </div>
  </div>
}
