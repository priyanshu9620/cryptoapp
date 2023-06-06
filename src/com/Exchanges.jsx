import React ,{useEffect,useState}from 'react'
import axios from 'axios';
import { server } from "../index";
import {Container,HStack} from "@chakra-ui/react";
import Exchangecard from './Exchangecard';
import ErrorComponent from './ErrorComponent';
import Loader from './Loader';

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        // console.log(data);  this is to see data in the console 
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, [])

  if (error)
    return <ErrorComponent message={"Error While Fetching Exchanges"} />;
  
  return (
    <Container maxW={"container.xl"}>
    {
    loading ? (
        <Loader />
        // <div>loading.....</div>//this can be used in place of loader fn to make it simple 
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <Exchangecard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )
      }
    </Container>
  )
}

export default Exchanges