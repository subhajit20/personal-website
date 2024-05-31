import { appContext } from '@/context/ContextProvider';
import React from 'react'

type Props = {
    name:string,
    designation: string
}

const NamePlate = (props: Props) => {
    const { state }: any = React.useContext(appContext);
  return (
    <div className="name pt-2">
        <h4 className={`text-center ${state.color} text-3xl font-bold`}>
          {props.name}<br />{" "}
          <p className="text-base text-gray-400">({props.designation})</p>
        </h4>
      </div>
  )
}

export default NamePlate