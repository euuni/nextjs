import Image from "next/image"
import React from "react"

export default function profile() {
  return (
    <div className="mx-auto max-w-screen-md bg-white-100">
      <div className="flex flex-row justify-between">
        <div className="basis-1/2">
          <p>
            <b>Name: 최경은 |•'-'•)و✧</b>
          </p>
          <p>
            <b>Tel: 010-3959-4910</b>
          </p>
          <p>
            <b>Live: 경기도 고양시 화정동</b>
          </p>
          <p>
            <b> Birth : 2001.06.29 </b>
          </p>
          <p>
            <b>Blood type: AB</b>
          </p>
          <p>
            <b>Constellation : 게자리</b>
          </p>
          <p>
            <b></b>
          </p>
          <p>
            <b>Age : (만)21세</b>
          </p>
          <a href="https://www.instagram.com/e_uuuni/">
            <b>Insta: </b> e_uuuni
          </a>
          <p>
            <b> Mbti : ESFP </b>
          </p>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
            <b>E-mail: </b> choidy0106@gmail.com
          </a>
          <p>
            <a href="https://m.blog.naver.com/euuni_">
              <b>Blog: </b>euuni_
            </a>
          </p>
          <p>
            <a href="https://www.notion.so/3ffb6b6cf09142e89b22850a5af23337">
              <b>Notion</b>
            </a>
          </p>
        </div>
        <div className="basis-1/2">
          <Image
            src="/img/cke.jpg"
            width={300}
            height={300}
            layout="responsive"
          ></Image>
        </div>
      </div>
    </div>
  )
}
