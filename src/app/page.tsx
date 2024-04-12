import Iowa from "../components/Iowa/Iowa"
import EvilEmpire from "../components/EvilEmpire/EvilEmpire"
import SeasOfCheese from "../components/SeasOfCheese/SeasOfCheese"
import Form from "../components/SubscribeForm/SubscribeForm"

export default function Home() {
  return (
    <main className="main" >
      <Iowa />
      <SeasOfCheese />
      <EvilEmpire />
      <Form />
    </main>
  );
}
