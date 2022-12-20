import type { LinksFunction } from "@remix-run/node"
import Footer from "~/components/footer"
import FindAtHe4rt from "~/components/findAtHe4rt"
import DiscordPrint from "../../public/images/discord-print.png"

export const links: LinksFunction = () => {
  return [
    {
      rel: "prefetch",
      as: "image",
      href: "/imgs/discord-print.png",
      type: "image/png",
    },
  ]
}

export default function Index() {
  return (
    <>
      <div className="bg-purple-900 w-full flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white">
          He4rt Learning SSR with Remix...
        </h1>
      </div>
      <div className="container mx-auto py-40 px-10">
        <div className="mb-10">
          <h2 className="text-gray-700 font-bold text-2xl">
            O que eu encontrarei na{" "}
            <span className="text-purple-500">He4rt?</span>
          </h2>
          <p className="text-[#737272] mt-3 font-sans max-w-5xl">
            Nós temos os recursos para levar qualquer ideia para frente, nenhum
            sonho é louco demais para nós. Descubra como desenvolver projetos
            que revolucionam a maneira de aprender.
          </p>
        </div>
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div className="flex flex-col gap-10">
            <FindAtHe4rt
              title="Desenvolvendo Habilidades"
              description="Ajude, contribua e retire suas dúvidas em qualquer área da tecnologia com nossa comunidade!"
            />
            <FindAtHe4rt
              title="Networking"
              description="Tenha oportunidade de conhecer milhares de pessoas com o mesmo interesse que você."
            />
            <FindAtHe4rt
              title="Eventos"
              description="Participe dos eventos exclusivos da comunidade e receba diversos prêmios por isso!"
            />
            <FindAtHe4rt
              title="Projetos"
              description="Aprimore e contribua com nossos projetos, evolua constantemente e mostre suas habilidades."
            />
          </div>
          <div className="bg-gradient-to-r from-[#782BF1] to-[#A62BF1] mt-10 md:mt-0 py-10 rounded-xl md:rounded-l-xl px-10 md:relative -right-36">
            <img className="w-[584px]" src={DiscordPrint} alt="discord-print" />
            <div className="text-[#f3f3f3] px-3">
              <h3 className="font-spline text-semibold">
                Venha participar do nosso Discord
              </h3>
              <p className="font-sans mt-3 max-w-[584px]">
                Nós temos os recursos para levar qualquer ideia para frente,
                nenhum sonho é louco demais para nós.
              </p>
              <button className="bg-white text-base py-2 px-4 rounded-xl text-[#782BF1] font-semibold font-sans mt-5">
                Entrar no Discord
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
