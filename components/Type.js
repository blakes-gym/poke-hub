import hexData from '../res/hexData'

export default function Type({ type }) {
  return (
    <div
      className="text-white border border-white p-1 m-1"
      style={{ background: hexData[type], lineHeight: 1, fontSize: 14 }}
    >
      {type}
    </div>
  )
}
