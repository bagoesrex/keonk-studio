import './App.css'
import { Card, CardHeader, CardTitle } from "./components/ui/card"

export default function App() {

  return (
    <>
      <h1 className="text-4xl italic text-orange-500 font-bold">Keonk Tailwind :D</h1>
      <Card >
        <CardHeader>
          <CardTitle>Hello</CardTitle>
        </CardHeader>
      </Card>
    </>
  )
}
