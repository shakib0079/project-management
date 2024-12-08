/* eslint-disable react/prop-types */


export default function Button({children,onBtnChange, color="slate"}) {
  return (
    <button className={`text-white text-sm py-1 px-4 bg-slate-800 hover:bg-slate-500 font-normal font-['Roboto'] capitalize rounded-sm flex items-center justify-center`} onClick={onBtnChange}>{children}</button>
  )
}
