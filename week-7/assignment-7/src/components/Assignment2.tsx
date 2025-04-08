import { useState } from "react"

const colours = [
  {
    name: 'Red',
    value: '#771d1d',
  },
  {
    name: 'Green',
    value: '#2b771d',
  },
  {
    name: 'Blue',
    value: '#1d2477',
  },
  {
    name: 'Violet',
    value: '#4c1d77',
  },
  {
    name: 'Black',
    value: '#292929',
  },
  {
    name: 'Yellow',
    value: '#ffbf00',
  },
  {
    name: 'Default',
    value: "#ffffff",
  },
]
export default function Assignment2() {
  const [colour, setColour] = useState('#76771d')
  return <div className="h-screen flex items-center justify-center" style={{ backgroundColor: colour }}>
    <div className="bg-white flex justify-around rounded-lg">
      {colours.map(c => {
        return <button className="px-6 py-2 m-3 rounded-lg border" style={{ backgroundColor: c.value }} onClick={() => setColour(c.value)}>
          <div className="text-slate-500">
            {c.name}
          </div>
        </button>
      }
      )}
    </div>
  </div>
}
