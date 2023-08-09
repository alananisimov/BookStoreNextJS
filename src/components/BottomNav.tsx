import router from 'next/router'

export function BottomNav() {
    return (
        <div className="md:hidden">
<div className="btm-nav btm-nav-xs">
  <button className="active" onClick={()=>{router.push("/")}}>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="32" height="32" viewBox="0 0 24 24"><g fill="currentColor"><path d="M16.528 2H7.472c-1.203 0-1.804 0-2.288.299c-.483.298-.752.836-1.29 1.912L2.491 7.76c-.325.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.538-1.076-.806-1.614-1.29-1.912C18.332 2 17.73 2 16.528 2Z"/><path fillRule="evenodd" d="M20 21.25h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h2V12.5c.744 0 1.433-.232 2-.627a3.484 3.484 0 0 0 2 .627c.744 0 1.433-.232 2-.627a3.484 3.484 0 0 0 2 .627c.744 0 1.433-.232 2-.627a3.484 3.484 0 0 0 2 .627c.744 0 1.433-.232 2-.627a3.484 3.484 0 0 0 2 .627v8.75Zm-10.5 0h5V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.55c-.348-.2-.815-.2-1.75-.2s-1.402 0-1.75.2a1.5 1.5 0 0 0-.549.55c-.201.348-.201.815-.201 1.75v2.75Z" clipRule="evenodd"/></g></svg>
  </button>
  <button onClick={()=>{router.push("/checkout")}}>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96L19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM12 2l4 4l-4 4l-1.41-1.41L12.17 7H8V5h4.17l-1.59-1.59L12 2z"/></svg>
  </button>
  <button>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11.95 18q.525 0 .888-.363t.362-.887q0-.525-.362-.888t-.888-.362q-.525 0-.887.363t-.363.887q0 .525.363.888t.887.362Zm-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3q.65-.65 1.025-1.238T15.55 8.9q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.313.75T8.55 8.55l1.65.65q.125-.45.563-.975T12.1 7.7q.8 0 1.2.438t.4.962q0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"/></svg>
  </button>
</div>

<div className="btm-nav btm-nav-sm">
  <button className="active" onClick={()=>{router.push("/")}}>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="32" height="32" viewBox="0 0 24 24"><g fill="currentColor"><path d="M16.528 2H7.472c-1.203 0-1.804 0-2.288.299c-.483.298-.752.836-1.29 1.912L2.491 7.76c-.325.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.538-1.076-.806-1.614-1.29-1.912C18.332 2 17.73 2 16.528 2Z"/><path fillRule="evenodd" d="M20 21.25h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h2V12.5c.744 0 1.433-.232 2-.627a3.484 3.484 0 0 0 2 .627c.744 0 1.433-.232 2-.627a3.484 3.484 0 0 0 2 .627c.744 0 1.433-.232 2-.627a3.484 3.484 0 0 0 2 .627c.744 0 1.433-.232 2-.627a3.484 3.484 0 0 0 2 .627v8.75Zm-10.5 0h5V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.55c-.348-.2-.815-.2-1.75-.2s-1.402 0-1.75.2a1.5 1.5 0 0 0-.549.55c-.201.348-.201.815-.201 1.75v2.75Z" clipRule="evenodd"/></g></svg>
  </button>
  <button onClick={()=>{router.push("/checkout")}}>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96L19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM12 2l4 4l-4 4l-1.41-1.41L12.17 7H8V5h4.17l-1.59-1.59L12 2z"/></svg>
  </button>
  <button>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11.95 18q.525 0 .888-.363t.362-.887q0-.525-.362-.888t-.888-.362q-.525 0-.887.363t-.363.887q0 .525.363.888t.887.362Zm-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3q.65-.65 1.025-1.238T15.55 8.9q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.313.75T8.55 8.55l1.65.65q.125-.45.563-.975T12.1 7.7q.8 0 1.2.438t.4.962q0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"/></svg>
  </button>
</div>
<div className="btm-nav btm-nav-md">
  <button className="active" onClick={()=>{router.push("/")}}>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="32" height="32" viewBox="0 0 24 24"><g fill="currentColor"><path d="M16.528 2H7.472c-1.203 0-1.804 0-2.288.299c-.483.298-.752.836-1.29 1.912L2.491 7.76c-.325.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.538-1.076-.806-1.614-1.29-1.912C18.332 2 17.73 2 16.528 2Z"/><path fillRule="evenodd" d="M20 21.25h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h2V12.5c.744 0 1.433-.232 2-.627a3.484 3.484 0 0 0 2 .627c.744 0 1.433-.232 2-.627a3.484 3.484 0 0 0 2 .627c.744 0 1.433-.232 2-.627a3.484 3.484 0 0 0 2 .627c.744 0 1.433-.232 2-.627a3.484 3.484 0 0 0 2 .627v8.75Zm-10.5 0h5V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.55c-.348-.2-.815-.2-1.75-.2s-1.402 0-1.75.2a1.5 1.5 0 0 0-.549.55c-.201.348-.201.815-.201 1.75v2.75Z" clipRule="evenodd"/></g></svg>
  </button>
  <button onClick={()=>{router.push("/checkout")}}>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96L19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM12 2l4 4l-4 4l-1.41-1.41L12.17 7H8V5h4.17l-1.59-1.59L12 2z"/></svg>
  </button>
  <button>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11.95 18q.525 0 .888-.363t.362-.887q0-.525-.362-.888t-.888-.362q-.525 0-.887.363t-.363.887q0 .525.363.888t.887.362Zm-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3q.65-.65 1.025-1.238T15.55 8.9q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.313.75T8.55 8.55l1.65.65q.125-.45.563-.975T12.1 7.7q.8 0 1.2.438t.4.962q0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"/></svg>
  </button>
</div>
</div>
    )
}