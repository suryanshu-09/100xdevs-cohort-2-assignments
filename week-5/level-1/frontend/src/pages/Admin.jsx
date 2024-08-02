import '../css/Admin.css'
import { SignUpCard } from '../components/SignUpCard'
import { SignInCard } from '../components/SignInCard'

export function Admin({ signIn, signUp, businessCardsLoad }) {
  return (
    <>
      {signUp && <>< h1 id='heading'>Sign Up Portal</h1 > <SignUpCard /></>}
      {signIn && <>< h1 id='heading' > Sign In Portal</h1 > <SignInCard businessCardsLoad={businessCardsLoad} /></>}
    </>
  )
}
