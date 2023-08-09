import { useLocalStorage } from 'usehooks-ts'

// Usage
export default function Component() {
  const [isDarkTheme, setDarkTheme] = useLocalStorage('darkTheme', ["no val"])

  const toggleTheme = (de: string) => {
    setDarkTheme(prevent => [...prevent, de])
    console.log(isDarkTheme)
  }

  return (
    <div>
    <button onClick={()=>toggleTheme("123")}>
      {`The current theme is ${isDarkTheme}`}
    </button>
    </div>
  )
}