import "./FatherAsync.less";
import React, { useState ,useEffect} from 'react';
const FatherAsync = () => {
  const [testdata, setTestData] = useState('后会无期');
  useEffect(()=>{
    //   2.但是可以通过useEffect ，拿到最新setState后的值
      console.log('useEffect state',testdata);
      
  },[testdata])
  const handleChangeState = ()=>{
      Promise.resolve().then(()=>{
        setTestData('乘风破浪');
        // 1.setstate之后不能在其后面拿到最新的值
        console.log('state',testdata);
      }).then(()=>{
        console.log('state2',testdata);
        
        setTestData('四海')
      })
  }
  return (
    <div className="father_async">
      <p>useState 异步取值</p>
      <button onClick={handleChangeState}>change</button>
      <p>{testdata}</p>
    </div>
  );
};
export default FatherAsync;
