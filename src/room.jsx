import { useParams  } from "react-router-dom";

export default function room() {
  const { id } = useParams();
  return <h3>Room id: {id}</h3>;
}
