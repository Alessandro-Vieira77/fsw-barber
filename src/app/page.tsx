import { Calendar } from "lucide-react"
import { Button } from "./_components/ui/button"
export default function Page() {
  return (
    <div>
      <h1 className="mb-5 bg-red-600 text-blue-500">Home page</h1>
      <Button>Click me</Button>
      <Calendar className="size-6 text-blue-500" />
    </div>
  )
}
