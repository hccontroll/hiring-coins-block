
import React, { Suspense } from 'react'
import axios from 'axios'
import { Coins } from 'phosphor-react'
import styles from './HiringCoins.module.css'

const HiringCoins = () => {
  const [user, setUser] = React.useState();
  const [coins, setCoins] = React.useState(0);
  const api = `https://hccontroll03.app.br/v1`;

  React.useEffect(() => {
    // console.log("Verificando se o usuário está autenticado");
    axios.get('/api/checkout/pub/orderform')
    .then((response: any) => {
      setUser(response.data.clientProfileData.email)
    })
    }, []);

  React.useEffect(() => {
    if(user){
      axios.get(`${api}/clients?email=${user}`)
      .then((response: any) => {
        setCoins(response.data.content[0].coinBalance);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }, [user])
  
  return (
    <React.Fragment>
      {
        user ? (
          <Suspense fallback="">
            <div className={styles.container} title={`Você tem ${coins} hiring coins`} >
              <Coins size={16} color="#fff" />
              <span className={styles.text}>{coins} hiring coins</span>
            </div>
          </Suspense>
        ) : (
          <div className={styles.container}></div>
        )
      }
    </React.Fragment>
  )
}

export default HiringCoins
