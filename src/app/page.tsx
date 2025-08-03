import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
export default function Page() {
  return (
    <div>
      {/* Header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Alessandro!</h2>
        <p>Domingo, 03 de agosto.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="agende nos melhores seviços do FSW"
            src="/banner-01.svg"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}
