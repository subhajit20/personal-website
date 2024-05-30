import React from 'react'
import { IconType } from 'react-icons'

type Props = {
    number:number,
    icons:IconType[]
}

function TechnologySection(props: Props){
    const {icons} = props;
  return (
    <div className={`grid grid-cols-3  md:grid-cols-5 justify-evenly items-center gap-x-2 gap-y-5`}>
        {
            icons.length > 0 && icons.map((Icon:IconType,i)=>{
                return <Icon className='w-11 h-11' key={i} />
            })
        }
      </div>
  )
}

export function withDynamicName<T extends React.ComponentType<any>>(Component: T, name: string, extraProps?: Partial<React.ComponentProps<T>>): T {
    const WrappedComponent: React.FC<React.ComponentProps<T>> = (props) => {
        return <Component {...props} {...extraProps} />;
      };
      WrappedComponent.displayName = name;
      return WrappedComponent as T;
}

export default TechnologySection