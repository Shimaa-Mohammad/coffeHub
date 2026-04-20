import getDrinks from "@/app/services/drinksService"
import CoffeeGameClient from "@/components/CoffeeGameClient"

export default async function CoffeGame() {
  const data = await getDrinks()

  return <CoffeeGameClient drinks={data??[]} />
}