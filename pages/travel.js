import React from "react"
import Image from "next/image"

export default function Travel() {
  return (
    <div className="mx-auto max-w-screen-md bg-white-100">
      <hmx-auto max-w-screen-md bg-white-100>
        <h1>
          <b>제가 다녀온 여행지들을 소개합니당</b>
        </h1>
      </hmx-auto>
      <h2>키키 벌써 추억이 새록새록 하군요!-!</h2>
      <div className="basis-1/4">
        <Image
          src="/img/japan.jpg"
          width={300}
          height={300}
          layout="responsive"
        ></Image>
        <p>
          <b>가족들이랑 간 일본 여행 초밥이 진짜 JMT구리구리</b>
        </p>
      </div>
      <div className="basis-1/4">
        <Image
          src="/img/2018.jpg"
          width={300}
          height={300}
          layout="responsive"
        ></Image>
        <p>
          <b>여수 여행 밤바다를 보러 갔쥐</b>
        </p>
      </div>
      <div className="basis-1/4">
        <Image
          src="/img/20182.jpg"
          width={300}
          height={300}
          layout="responsive"
        ></Image>
        <p>
          <b>강릉에는 맛있는 것들이 많아여~~</b>
        </p>
      </div>
      <div className="basis-1/4">
        <Image
          src="/img/2020.jpg"
          width={300}
          height={300}
          layout="responsive"
        ></Image>
        <p>
          <b>20살 되고 친구들이랑 놀러간 가평 여해애앵 </b>
        </p>
      </div>
      <div className="basis-1/4">
        <Image
          src="/img/2022.jpg"
          width={300}
          height={300}
          layout="responsive"
        ></Image>
        <p>
          <b>종강하고 바로 가는 대만 여행 Dl게 설레고 떨립니다 홍홍</b>
        </p>
      </div>
    </div>
  )
}
