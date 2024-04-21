import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

export default function useAuth(admin: boolean = false) {
  const { firstName, secondName, isAdmin } = useAppSelector(state => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (!firstName) {
      navigate('/auth')
    } else if (admin && !isAdmin) {
      navigate('/')
    }
  }, [admin, firstName, isAdmin, navigate])

  return { firstName, secondName }
}