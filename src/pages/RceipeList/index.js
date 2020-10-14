import React ,{useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import ReceipeAction from '../../redux/receipes/action';
import './style.scss';
import ReceipeCard from '../../components/receipe-card';
import {PAYMENT_PAGE} from '../../constants/RoutesEnum';

function App() {

  const [receipeData, setReceipeData] = useState();
  const receipeCached = useSelector((state) => state.receipes);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    console.log('dsfsdfssdf',receipeCached);
    if(!receipeCached.cached) {
      dispatch(ReceipeAction.getReceipe())
      .then(res => setReceipeData(res))
      .catch(err => setReceipeData([]))
    } else {
      setReceipeData(receipeCached.receipes);
    }
  },[])

  function createCards(data) {
    return data.map((item, index) => {
      return <ReceipeCard onClick={navigateToPayment} key={index} receipeData={item}/>
    })
  }

  function navigateToPayment(e,price) {
    console.log(price);
    e.preventDefault();
    history.push({
      pathname: PAYMENT_PAGE,
      state: {price}
    })
  }

  return (
    <div>
      <div className="App">
      { receipeData && receipeData.length > 0 ? 
        createCards(receipeData) : null
      }
    </div>
    </div>
  );
}

export default App;
