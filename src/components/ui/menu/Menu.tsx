import { appContext } from '@/context/ContextProvider';
import React from 'react'

type Props = {
    menus:string[],
    setCurrentComponent?: React.Dispatch<React.SetStateAction<number>>
}

const Menu = (props: Props) => {
  const {menus} = props;
  const { state }: any = React.useContext(appContext);
  return (
    <nav className={`menu  rounded-md bg-black p-2`}>
      <section className={`menu-section`}>
        <ul className={`flex justify-evenly md:justify-between flex-wrap items-center`}>
          {
            menus.length > 0 ? menus.map((m,i)=>{
              return <li onClick={()=> props.setCurrentComponent!(i)} key={i} className={`text-[0.8rem] md:text-xl menu-item hover:bg-white hover:text-black hover:transition-all hover:duration-200 hover:ease-in-out `}>{m}</li>
            }) : ''
          }
        </ul>
      </section>
    </nav>
  )
}

export default Menu