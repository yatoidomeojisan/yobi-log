import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const Collapse = ({ title, children }) => {
    
    const uuid = uuidv4();
    const [flag, setFlag] = useState(false);

    const chageFlag = (e) => {
        setFlag(!flag)
    }

    return(
        <div id={uuid} class="blog-collapse">
            <button class="hs-collapse-toggle py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-slate-950 transition-all hover:text-indigo-900 group" id={`hs-basic-collapse-${uuid}`} data-hs-collapse={`#hs-basic-collapse-heading-${uuid}`} onClick={chageFlag}>
                <span>{title}</span>
                {flag ? 
                    <svg class={`rotate-180 w-8 h-3 text-slate-950 group-hover:text-indigo-900 flex-none`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                :
                    <svg class={`w-8 h-3 text-slate-950 group-hover:text-indigo-900 flex-none`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                }
            </button>
            <div id={`hs-basic-collapse-heading-${uuid}`} class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby={`hs-basic-collapse-${uuid}`}>
                <div class="">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Collapse