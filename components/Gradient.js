import hexData from '../res/hexData'

export default function Gradient({
  children,
  className,
  style,
  pokemon,
  opacity
}) {
  const { type1, type2 } = pokemon
  const c1 = opacity ? hexData[type1] + opacity : hexData[type1]
  const c2 = type2
    ? opacity
      ? hexData[type2] + opacity
      : hexData[type2]
    : null
  return (
    <div
      className={className}
      style={{
        ...style,
        background: type2
          ? `linear-gradient(40deg, ${c1} 0%, ${c1} 30%, ${c2} 70%, ${c2} 100%)`
          : c1
      }}
    >
      {children}
    </div>
  )
}
