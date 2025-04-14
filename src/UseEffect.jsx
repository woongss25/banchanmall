import React, { useEffect } from 'react'

const UseEffect = () => {
    //useEffect는 페이지가 처음 로딩될 때 자동실행  
    //[] -> 처음 한번만 실행
    useEffect(()=>{
        console.log("페이지가 처음 열렸을 때 useEffect 실행")
    },[])

    // 버튼을 클릭시 실행되는 함수
    const btnClick=()=> {
        console.log("버튼을 클릭하면 실행")
    }
  return (
    <div>
        <h2>useEffect와 button 클릭의 차이 비교</h2>
        <button onClick={btnClick}>버튼클릭</button>
    </div>
  )
}

export default UseEffect