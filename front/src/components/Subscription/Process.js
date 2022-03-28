<<<<<<< HEAD
import React, {useState} from 'react';
=======
import React from 'react';
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
import Check from './Check';
import Payment from './Payment';
import Registration from './Registration';

const Process = ({gym, setGym, item, setItem, process, setProcess, userName, setUserName, userPhone, setUserPhone, userMail, setUserMail, userDate, setUserDate,userCheckbox, setUserCheckbox}) => {
<<<<<<< HEAD
    const [output, setOutput] = useState(false);
    const [output2, setOutput2] = useState(false);
    const [checkbox, setCheckbox] = useState(false);

    const [dropDown, setDrop] = useState(false);
    const [selected, setSelected] = useState(false);

    const [dropDown2, setDrop2] = useState(false);
    const [selected2, setSelected2] = useState(false);
    const [memberInfo, setMemberInfo] = useState({
        "memberId": 0,
        "contractId": 0
    });

    const processShow = (process) => {
        switch(process){
        case 1: return <Registration gym={gym} setGym={setGym} item={item} setItem={setItem} setProcess={setProcess} setUserName={setUserName} setUserPhone={setUserPhone} setUserMail={setUserMail} userName={userName} userPhone={userPhone} userMail={userMail} userDate={userDate} setUserDate={setUserDate} userCheckbox={userCheckbox} setUserCheckbox={setUserCheckbox} output={output} setOutput={setOutput} output2={output2} setOutput2={setOutput2} checkbox={checkbox} setCheckbox={setCheckbox} dropDown={dropDown} setDrop={setDrop} selected={selected} setSelected={setSelected} dropDown2={dropDown2} setDrop2={setDrop2} selected2={selected2} setSelected2={setSelected2}/> 
            break;
            case 2: return <Check gym={gym} item={item} setProcess={setProcess} userPhone={userPhone} userName={userName} userDate={userDate} userMail={userMail} setMemberInfo={setMemberInfo} />
            break;
            case 3: return <Payment gym={gym} item={item} setProcess={setProcess} userName={userName} userPhone={userPhone} userMail={userMail} userDate={userDate} memberInfo={memberInfo}/>
=======
    const processShow = (process) => {
        switch(process){
            case 1: return <Registration gym={gym} setGym={setGym} item={item} setItem={setItem} setProcess={setProcess} setUserName={setUserName} setUserPhone={setUserPhone} setUserMail={setUserMail} userName={userName} userPhone={userPhone} userMail={userMail} userDate={userDate} setUserDate={setUserDate} userCheckbox={userCheckbox} setUserCheckbox={setUserCheckbox}/> 
            break;
            case 2: return <Check gym={gym} item={item} setProcess={setProcess} userPhone={userPhone}/>
            break;
            case 3: return <Payment gym={gym} item={item} setProcess={setProcess} userName={userName} userPhone={userPhone} userMail={userMail}/>
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
        }
    }

    return (
        <div>
            {processShow(process)}
        </div>
    )
}

export default Process;