import React from 'react'

import BoxIcon from '../../components/component-box/BoxIcon'
import dribbble from './img/dribbble-hand-drawn-logo-svgrepo-com.svg'
import file from './img/file-alt-svgrepo-com.svg'
import tachometer from './img/tachometer-svgrepo-com.svg'
import world from './img/world-1-svgrepo-com.svg'
import slideshow from './img/slideshow-3-svgrepo-com.svg'
import arch from './img/arch-svgrepo-com.svg'

export default function Services() {
    return (
        <div className='w-screen h-auto flex justify-center mt-8'>
            <div className='w-10/12 h-full  gap-2  flex flex-wrap justify-around	 '>
           
                    <BoxIcon
                        boximg={dribbble}
                        boxtitle="Lorem Ipsum"
                        boxinfo="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
                        className="sm:w-4/5	 h-80 md:w-2/4 md:h-80 lg:w-1/3	lg:h-80	 " 
                    />
                    <BoxIcon
                        boximg={file}
                        boxtitle="Sed Ut perspiciatis"
                        boxinfo="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
                        className=" sm:w-4/5  h-80 md:w-2/4 md:h-80 lg:w-1/3	lg:h-80	" 
                    />
                    <BoxIcon
                        boximg={tachometer}
                        boxtitle="Magni Dolores"
                        boxinfo="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia "
                        className="sm:w-4/5	 h-80 md:w-2/4 md:h-80 lg:w-1/3	lg:h-80	 " 
                    />
                    <BoxIcon
                        boximg={world}
                        boxtitle="Nemo Enim"
                        boxinfo="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
                        className=" sm:w-4/5	 h-80 md:w-2/4 md:h-80 lg:w-1/3	lg:h-80	" 
                    />
                    <BoxIcon
                        boximg={slideshow}
                        boxtitle="Dele cardo"
                        boxinfo="Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur"
                        className=" sm:w-4/5	 h-80 md:w-2/4 md:h-80 lg:w-1/3	lg:h-80	 " 
                    />
                    <BoxIcon
                        boximg={arch}
                        boxtitle="Divera don"
                        boxinfo="Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur"
                        className=" sm:w-4/5	 h-80 md:w-2/4 md:h-80 lg:w-1/3	lg:h-80	" 
                    />
          
            </div>
        </div>
    )
}
