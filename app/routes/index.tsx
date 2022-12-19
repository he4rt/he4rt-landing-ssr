import Footer from "~/components/footer";
import UserCard from "~/components/userCard";

import { users } from "~/mocks/users";

export default function Index() {
  return (
    <>
      <div className="container mx-auto py-40">
        <h3 className="font-sans font-bold text-4xl text-gray-700 text-center mb-2">
          Venha conhecer a equipe da{" "}
          <span className="text-purple-500">He4rt Devs.</span>
        </h3>
        <p className="font-sans text-xl	font-normal text-gray-750 text-center mb-12 max-w-4xl mx-auto">
          Nós temos os recursos para levar qualquer ideia para frente, nenhum
          sonho é louco demais para nós. Descubra como desenvolver projetos que
          revolucionam a maneira de aprender.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-y-8 gap-x-11">
          {users.map((user) => (
            <UserCard key={`user-key-${user.username}`} {...user} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
