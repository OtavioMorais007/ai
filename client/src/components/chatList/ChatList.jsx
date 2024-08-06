import { Link } from "react-router-dom";
import "./chatList.css";
import { useQuery } from "@tanstack/react-query";

const ChatList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });
  return (
    <div className="chatList">
      <span className="title">DASHBIARD</span>
      <Link to="/dashboard">Criar um novo Chat</Link>
      <Link to="">Explorar Otavio AI</Link>
      <Link to="">Contato</Link>
      <hr />
      <span className="title">Chats Recentes</span>
      <div className="list">
        {isPending
          ? "Carregando..."
          : error
          ? "Algo deu errado"
          : data?.map((chat) => (
              <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                {chat.title}
              </Link>
            ))}
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Fazer upgrade para Otavio AI PRO</span>
          <span>Tenha acesso ilimitado a todos os recursos</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
