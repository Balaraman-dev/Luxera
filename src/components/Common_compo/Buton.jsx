const Buton = ({btn, ...attributes}) => {
  return (
    <div>
       <button className='px-12 duration-300 py-2 outline-none text-xl bg-luxera hover:bg-white hover:text-luxera border-2  hover:border-2 hover:border-[#642A1A] text-white rounded-xl' {...attributes}>{btn}</button>
    </div>
  )
}

export default Buton