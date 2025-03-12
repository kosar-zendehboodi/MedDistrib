import { useNavigate } from "react-router-dom";

export default function useMoveback() {
    const navigate = useNavigate();
    return () => navigate(-1);
}