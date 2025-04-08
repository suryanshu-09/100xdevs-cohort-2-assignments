import { useState, useRef, ChangeEvent } from "react"
type OTPValues = {
  num1: string
  num2: string
  num3: string
  num4: string
}
export default function Assignment6() {
  const [press, setPress] = useState(0)
  const [number, setNumber] = useState("")
  const submitPhone = () => {
    if (number.length != 10) {
      alert("Enter a valid Phone Number")
      setNumber("")
    }
    else
      setPress(p => p = 1)
  }
  const [val, setVal] = useState<OTPValues>({
    num1: '',
    num2: '',
    num3: '',
    num4: '',
  })
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ]
  const data = [
    { name: 'num1', value: val.num1 },
    { name: 'num2', value: val.num2 },
    { name: 'num3', value: val.num3 },
    { name: 'num4', value: val.num4 },
  ]
  const changeHandle = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const value = e.target.value.split('')
    setVal((prevVal) => ({
      ...prevVal,
      [e.target.name]: value[value.length - 1] || '',
    }))
    if (index < inputRefs.length - 1 && inputRefs[index + 1].current) {
      inputRefs[index + 1].current!.focus()
    }
  }
  return <div className="h-screen flex items-center justify-center bg-[#292929]">
    <div className="rounded-lg border border-white text-white p-4 bg-gray-800">
      <div className="mt-2 mx-4 flex justify-center text-lg font-bold">
        {number && press ? "OTP sent to " + number : "Login via OTP"}
      </div>
      {press === 0 ? <div>
        <div className="border border-white mt-6 rounded-lg">
          <input placeholder="Enter phone number" type="number" className="w-full pl-2" onChange={(e) => setNumber(e.target.value)}></input>
        </div>
        <div className="flex justify-center mt-6 m-3">
          <button className="rounded-lg border border-white py-2 px-4" onClick={submitPhone}>Send OTP</button>
        </div>
      </div>
        : press === 1 ? <div>
          <div className='flex items-center justify-center gap-2 my-4'>
            {data.map((elem, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                className='border border-white text-white rounded-lg p-2 text-center max-w-12'
                type='tel'
                name={elem.name}
                id={`otp-${elem.name}`}
                value={elem.value}
                min='0'
                max='9'
                onChange={(e) => changeHandle(e, index)}
              />
            ))}
          </div>
          <div className="flex justify-center mt-6 mt-3">
            <button className="rounded-lg border border-white py-2 px-4 bg-gray-900" onClick={() => setPress(p => p = 2)}>Login</button>
          </div>
        </div>
          : <div className="flex justify-center font-bold italics mt-4" onClick={() => setPress(p => p = 0)}>
            Submitted
          </div>
      }
    </div>
  </div>
}
