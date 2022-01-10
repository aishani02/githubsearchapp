import {useContext} from "react"
import AlertContext from "./AlertContext"

function Alert() {
    const {alert}=useContext(AlertContext)
    return (
      alert!==null && (
          <p className="flex items-center  mb-4 space-x-2">
          {alert.type === "error" && (
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="20pt" height="20pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#ff0000" stroke="none">
<path d="M2371 5110 c-492 -41 -957 -215 -1337 -500 -563 -424 -915 -1027
-1010 -1730 -23 -168 -23 -472 0 -640 78 -576 325 -1080 730 -1486 898 -898
2315 -1002 3332 -242 490 365 837 899 968 1488 80 364 80 757 0 1120 -232
1041 -1105 1837 -2164 1974 -150 20 -388 27 -519 16z m-537 -1552 c35 -10 95
-65 384 -352 l342 -340 343 340 c355 354 368 364 448 364 111 0 219 -108 219
-219 0 -80 -10 -93 -364 -448 l-340 -343 340 -343 c354 -355 364 -368 364
-448 0 -111 -108 -219 -219 -219 -80 0 -93 10 -448 364 l-343 340 -342 -340
c-356 -354 -369 -364 -449 -364 -111 0 -219 108 -219 219 0 80 10 93 364 449
l340 342 -340 343 c-354 355 -364 368 -364 448 0 108 107 217 214 219 16 0 47
-5 70 -12z"/>
</g>
</svg>)}
<p className="flex-1 text-base font-semibold loading-7
text-white">
<strong>{alert.msg}</strong>
</p>
</p>
      ) 
    )
}

export default Alert
