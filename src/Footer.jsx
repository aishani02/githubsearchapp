




function Footer() {
    
    const year = new Date().getFullYear()
    return (<>
       <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
       <div>
       <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="400.000000pt" height="30.000000pt" viewBox="0 0 90.000000 90.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,90.000000) scale(0.100000,-0.100000)"
fill="#ffff" stroke="none">
<path d="M435 806 c-15 -22 -15 -29 -1 -77 22 -72 21 -75 -24 -104 -51 -32
-57 -32 -65 8 -11 53 -32 77 -65 77 -47 0 -57 -33 -36 -111 10 -33 16 -62 14
-64 -2 -1 -22 -14 -46 -29 -49 -31 -59 -48 -44 -80 14 -32 45 -37 85 -16 l34
19 17 -60 c9 -32 16 -62 16 -67 0 -5 -18 -18 -39 -30 -22 -13 -43 -31 -46 -42
-17 -53 34 -87 86 -56 30 18 33 16 43 -29 18 -74 69 -100 101 -51 15 22 15 29
1 77 -22 72 -21 75 24 104 51 32 57 32 65 -8 11 -53 32 -77 65 -77 47 0 57 33
36 111 -10 33 -16 62 -14 64 2 1 22 14 45 28 45 29 60 56 44 85 -15 28 -46 32
-84 12 l-34 -19 -17 60 c-9 32 -16 62 -16 67 0 5 18 18 39 30 22 13 43 31 46
42 17 53 -34 87 -86 56 -30 -18 -33 -16 -43 29 -18 74 -69 100 -101 51z m61
-317 c8 -24 14 -52 14 -61 0 -20 -79 -74 -89 -61 -10 10 -31 85 -31 107 0 16
68 67 84 62 5 -1 15 -22 22 -47z"/>
</g>
</svg>




        <p>Copyright &copy; {year} All Rights Reserved</p>   
       </div>


       </footer>
       </>
    )
}

export default Footer
