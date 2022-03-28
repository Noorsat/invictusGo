import React, {useState} from 'react';
import Header from './Header';
import Process from './Process';

const Subscription = () => {
const [process, setProcess] = useState(1); 

    const [gym, setGym] = useState({
        name: "",
<<<<<<< HEAD
        address: "",
        id:0
=======
        address: ""
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    })

    const [tariffs, setTariffs] = useState({
        name:"",
        advantages: [],
<<<<<<< HEAD
        prices: "",
        PerGymPaymentPlanId: 0
=======
        prices: ""
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    })

    const [userName, setUserName] = useState("");

    const [userPhone, setUserPhone] = useState("");

    const [userMail, setUserMail] = useState("");
    
    const [userDate, setUserDate] = useState("");

    const [userCheckbox, setUserCheckbox] = useState(false);

    const [burger,setBurger] = useState(false);

    return (
<<<<<<< HEAD
        <React.Fragment>
=======
        <>
            <Header burger={burger} setBurger={setBurger}/>
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
            <Process gym={gym} 
                    setGym={setGym} 
                    item={tariffs} 
                    setItem={setTariffs} 
                    process={process} 
                    setProcess={setProcess} 
                    userName={userName} 
                    setUserName={setUserName} 
                    userPhone={userPhone}
                    setUserPhone = {setUserPhone} 
                    userMail={userMail}
                    setUserMail={setUserMail}
                    userDate={userDate}
                    setUserDate={setUserDate}
                    userCheckbox={userCheckbox}
                    setUserCheckbox={setUserCheckbox}
            />
<<<<<<< HEAD
        </React.Fragment>
=======
        </>
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    )
}

export default Subscription;