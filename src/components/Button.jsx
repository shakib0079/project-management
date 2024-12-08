/* eslint-disable react/prop-types */




export default function Button({children,onBtnChange}) {


  return (
    <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" onClick={onBtnChange}>{children}</button>
  )
}
