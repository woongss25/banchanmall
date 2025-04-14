import React, { useState, useEffect } from 'react'
import '../App.css'
import { useParams } from 'react-router-dom';
import styles from './Product.module.css'

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  //전체상품 불러오기
  useEffect(() => {
    //useEffect는 페이지가 처음 로드될 때 한번만 실행
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("상품없음")
        return res.json()
      }
      )
      .then((data) => {
        //console.log("받은 데이터",data);
        setProduct(data); // 가져온 상품 배열을 화면에 보여줄 수 있도록 상태를 업데이트해서 저장
      })
      .catch(err => console.error("에러발생", err))
  }, [id])

  if (!product) return <p>상품을 불러오는 중입니다...</p>;



  return (
    <div className='container'>
      <h2>상품상세페이지</h2>
      <div className={styles.productdetail}>

        <img src={product.img} alt={product.title} />
        <div className={styles.detailInfo}>
          <p className={styles.title}>{product.content}</p>
          <p className={styles.content}>{product.price}</p>
          <p className={styles.price}>{product.choice}</p>
          {
            product.choice && (
              <span className={styles.choice}>추천</span>
            )
          }
        </div>

      </div>
    </div>
  )
}

export default ProductDetailPage